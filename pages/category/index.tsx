import { NextPage } from "next";
import Sidebar from "../../components/category/Sidebar";
import Content from "../../components/category/Content";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SvgLessThan, SvgMoreThan } from "../../helpers/svgs/category";
import { getCategoryById } from "../../helpers/categories";

interface CategoryItem {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  shipping: 0 | 1;
  advertCount: number;
  isFavorite: boolean;
  categoryId: string;
}

const items: CategoryItem[] = [
  {
    id: 1,
    name: "VitaPlus Healing",
    brand: "Cream 40 ml",
    image: "/images/photos/product-1.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
    categoryId: "medical",
  },
  {
    id: 2,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/product-2.svg",
    price: 36.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
    categoryId: "family",
  },
  {
    id: 3,
    name: "MediCore Digital",
    brand: "Contactless Thermometer",
    image: "/images/photos/product-3.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
    categoryId: "health",
  },
  {
    id: 4,
    name: "SafeGuard 3-Ply Black",
    brand: "Surgical Mask with Ear Loops 50 pcs",
    image: "/images/photos/product-4.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
    categoryId: "medical",
  },
  {
    id: 5,
    name: "ClearMed Hydrogen Peroxide",
    brand: "100 ml",
    image: "/images/photos/product-5.svg",
    price: 4.25,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    categoryId: "medical",
  },
  {
    id: 6,
    name: "Herbiva Orange & ",
    brand: "Echinacea 24 Lozenges",
    image: "/images/photos/product-6.svg",
    price: 8.44,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
    categoryId: "supplements",
  },
  {
    id: 7,
    name: "Nordwell Relief",
    brand: "Honey-Lemon Flavor 24 Lozenges",
    image: "/images/photos/product-7.svg",
    price: 24.69,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    categoryId: "supplements",
  },
  {
    id: 8,
    name: "GreenLeaf Baby Powder",
    brand: "100 gr",
    image: "/images/photos/product-8.svg",
    price: 9.9,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
    categoryId: "family",
  },
  {
    id: 9,
    name: "GreenLeaf InsectGuard",
    brand: "Insect Repellent 1 L",
    image: "/images/photos/product-9.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    categoryId: "veterinary",
  },
  {
    id: 10,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/product-2.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    categoryId: "family",
  },
  {
    id: 11,
    name: "Nordwell PestGuard",
    brand: "Ant Granules",
    image: "/images/photos/product-12.svg",
    price: 19.49,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
    categoryId: "veterinary",
  },
  {
    id: 12,
    name: "PureLife Manual",
    brand: "Breast Pump",
    image: "/images/photos/product-13.svg",
    price: 185.0,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
    categoryId: "family",
  },
];

const PAGE_SIZE = 8;

const Category: NextPage = () => {
  const router = useRouter();
  const { cat, sub, q } = router.query;
  const [activeCardPage, setActiveCardPage] = useState<number>(1);
  const [sidebar, setSidebar] = useState<boolean>(false);

  const category = getCategoryById(typeof cat === "string" ? cat : undefined);
  const activeSub =
    (typeof sub === "string" && category?.subCategories.find((s) => s.id === sub)) || null;

  // Filter by category when possible; fall back to all items when a category has no products.
  let visibleItems = items;
  if (category) {
    const byCategory = items.filter((item: CategoryItem) => item.categoryId === category.id);
    visibleItems = byCategory.length > 0 ? byCategory : items;
  }
  if (typeof q === "string" && q.trim()) {
    const needle = q.trim().toLowerCase();
    visibleItems = visibleItems.filter((item: CategoryItem) =>
      `${item.name} ${item.brand}`.toLowerCase().includes(needle)
    );
  }

  const pageCount = Math.max(1, Math.ceil(visibleItems.length / PAGE_SIZE));
  const activePage = Math.min(activeCardPage, pageCount);
  const pagedItems = visibleItems.slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE);

  useEffect(() => {
    setActiveCardPage(1);
  }, [cat, sub, q]);

  const breadcrumb = category
    ? `${category.name} ${category.subtitle ?? ""}`.trim() + (activeSub ? ` > ${activeSub.name}` : "")
    : "All Products";

  return (
    <>
      <div className="container relative px-3 py-6 mx-auto text-sm">
        <div className="grid grid-cols-5 gap-6">
          <div
            className={`${
              sidebar ? "block col-span-5 absolute h-full w-full top-0 left-0 z-[99999]" : "hidden xl:block"
            }`}
          >
            <Sidebar
              setSidebar={setSidebar}
              activeCategory={category?.id}
              activeSubCategory={activeSub?.id}
              productCount={visibleItems.length}
            />
          </div>
          {!sidebar && (
            <div className="col-span-5 xl:col-span-4">
              <div className="xl:pl-8 mb-4">
                <h1 className="text-lg font-bold text-[#7E8096]">{breadcrumb}</h1>
                <p className="text-xs font-light text-[#7E8096]">
                  {visibleItems.length} product{visibleItems.length === 1 ? "" : "s"}
                </p>
              </div>
              <Content
                key={`${activePage}-${cat ?? ""}-${sub ?? ""}-${q ?? ""}`}
                items={pagedItems}
                setSidebar={setSidebar}
              />
              {pageCount > 1 && (
                <div className="flex items-center justify-center w-full">
                  <div className="flex items-center gap-3 mt-12">
                    <h3>
                      <div
                        className={`w-4 h-7 text-[#4CBEC5] ${
                          activePage <= 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                        }`}
                        onClick={() => activePage > 1 && setActiveCardPage(activePage - 1)}
                      >
                        <SvgLessThan />
                      </div>
                    </h3>
                    <div className="flex items-center gap-2 xl:gap-8">
                      {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                        <CardNavItem
                          key={page}
                          pageNumber={page}
                          activePage={activePage}
                          setActivePage={setActiveCardPage}
                        />
                      ))}
                    </div>
                    <h3>
                      <div
                        className={`w-4 h-7 text-[#4CBEC5] ${
                          activePage >= pageCount ? "opacity-30 cursor-not-allowed" : "cursor-pointer"
                        }`}
                        onClick={() => activePage < pageCount && setActiveCardPage(activePage + 1)}
                      >
                        <SvgMoreThan />
                      </div>
                    </h3>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

interface CardNavItemProps {
  pageNumber: number;
  activePage: number;
  setActivePage: (page: number) => void;
}

const CardNavItem: FC<CardNavItemProps> = ({ pageNumber, activePage, setActivePage }) => (
  <h3
    className={`cursor-pointer select-none w-8 h-8 rounded-full flex items-center justify-center text-lg text-[#7E8096] font-medium transition duration-150 ease-in-out ${
      activePage === pageNumber ? "bg-[#4CBEC5] text-white" : "hover:bg-[#4CBEC5] hover:text-white"
    }`}
    onClick={() => setActivePage(pageNumber)}
  >
    {pageNumber}
  </h3>
);

export default Category;
