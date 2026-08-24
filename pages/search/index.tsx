import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SingleCard from "../../components/profile/favourites/SingleCard";
import { productCatalog, CatalogProduct } from "../../helpers/productCatalog";
import { getCategoryById } from "../../helpers/categories";
import useLocalStorage from "../../helpers/hooks/useLocalStorage";
import { HIRE_ME_COPY } from "../../helpers/config";
import type { SingleCardContent } from "../../types/product";

const RECENT_SEARCHES_KEY = "medifoniRecentSearches";

const toCardContent = (product: CatalogProduct): SingleCardContent => {
  const category = getCategoryById(product.categoryId);
  return {
    id: product.id,
    name: product.name,
    brand: `${category?.name ?? ""} ${category?.subtitle ?? ""}`.trim(),
    image: product.image,
    price: product.price,
    shipping: 0,
    advertCount: 25,
    isFavorite: false,
    backgroundColor: "",
  };
};

const Search: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;
  const query = typeof q === "string" ? q.trim() : "";

  const [recentSearches, setRecentSearches] = useLocalStorage<string[]>(RECENT_SEARCHES_KEY, []);

  useEffect(() => {
    if (!query) return;
    setRecentSearches((prev) =>
      [query, ...(prev || []).filter((term) => term.toLowerCase() !== query.toLowerCase())].slice(0, 8)
    );
  }, [query, setRecentSearches]);

  const results = query
    ? productCatalog.filter((product) => {
        const category = getCategoryById(product.categoryId);
        const haystack = `${product.name} ${category?.name ?? ""} ${category?.subtitle ?? ""}`.toLowerCase();
        return haystack.includes(query.toLowerCase());
      })
    : productCatalog;

  const noop = () => {};

  return (
    <div className="container px-3 py-6 mx-auto text-sm">
      <div className="mb-4">
        <h1 className="text-lg font-bold text-[#7E8096]">
          {query ? `Search results for "${query}"` : "All products"}
        </h1>
        <p className="text-xs font-light text-[#7E8096]">
          {results.length} product{results.length === 1 ? "" : "s"} found
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid w-full h-full grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3 xl:grid-cols-4">
          {results.map((product) => (
            <SingleCard
              key={product.id}
              content={toCardContent(product)}
              deleteCard={noop}
              favoriteCard={noop}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-sm text-[#7E8096]">{HIRE_ME_COPY.searchEmpty}</div>
      )}

      {recentSearches.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-2 text-sm font-semibold text-[#7E8096]">Recent searches</h3>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((term) => (
              <button
                type="button"
                key={term}
                onClick={() => router.push(`/search?q=${encodeURIComponent(term)}`)}
                className="px-3 py-1 text-xs rounded-full border border-[#4CBEC565] text-[#4CBEC5] hover:bg-[#4CBEC5] hover:text-white transition duration-150 ease-in-out"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
