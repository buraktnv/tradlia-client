import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ProductCardBase from "../../components/home/ProductCardBase";
import { productCatalog, CatalogProduct } from "../../helpers/productCatalog";
import { getCategoryById } from "../../helpers/categories";
import useLocalStorage from "../../helpers/hooks/useLocalStorage";
import { HIRE_ME_COPY } from "../../helpers/config";
import type { SingleCardContent } from "../../types/product";

const RECENT_SEARCHES_KEY = "tradliaRecentSearches";

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
    <div className="container px-3 py-6 xl:pt-32 mx-auto">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="font-display text-lg xl:text-xl font-semibold text-ink">
          {query ? (
            <>
              Search results for <span className="text-brand-600">&ldquo;{query}&rdquo;</span>
            </>
          ) : (
            "All products"
          )}
        </h1>
        <p className="text-xs text-ink-muted">
          {results.length} product{results.length === 1 ? "" : "s"} found
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid w-full h-full grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 xl:grid-cols-4" role="list">
          {results.map((product) => (
            <ProductCardBase
              key={product.id}
              content={toCardContent(product)}
              deleteCard={noop}
              favoriteCard={noop}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 px-6 text-center rounded-card border border-dashed border-line bg-surface">
          <p className="font-display text-base font-semibold text-ink">No matching products</p>
          <p className="mt-1 text-sm text-ink-muted">{HIRE_ME_COPY.searchEmpty}</p>
          <button
            type="button"
            onClick={() => router.push("/category")}
            className="mt-4 inline-flex items-center bg-brand-600 text-white rounded-pill px-4 py-1.5 text-sm font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
          >
            Browse all products
          </button>
        </div>
      )}

      {recentSearches.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-3 font-display text-xs uppercase tracking-wider text-ink-muted">Recent searches</h3>
          <div className="flex flex-wrap gap-2">
            {recentSearches.map((term) => (
              <button
                type="button"
                key={term}
                onClick={() => router.push(`/search?q=${encodeURIComponent(term)}`)}
                className="bg-canvas border border-line rounded-pill px-3 py-1.5 text-sm text-ink-soft hover:border-brand-300 hover:text-brand-700 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
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
