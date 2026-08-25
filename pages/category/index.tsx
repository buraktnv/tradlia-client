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
  oldPrice?: number;
  discountLabel?: string;
  stockStatus?: "in" | "low" | "out";
}

const items: CategoryItem[] = [
  {
    id: 1,
    name: "StackSafe Double-Wall",
    brand: "Boxes 50 pcs",
    image: "/images/photos/product-1.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
    categoryId: "packaging",
  },
  {
    id: 2,
    name: "GripTight Pallet Wrap",
    brand: "20 µm 500 m Roll",
    image: "/images/photos/product-2.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
    categoryId: "packaging",
  },
  {
    id: 3,
    name: "TorqueMax Wood Screws",
    brand: "4×40 (500 Count)",
    image: "/images/photos/product-3.svg",
    price: 36.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
    categoryId: "fasteners",
  },
  {
    id: 4,
    name: "BoltCore Hex Bolts",
    brand: "M8 (200 Count)",
    image: "/images/photos/product-4.svg",
    price: 9.9,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
    categoryId: "fasteners",
  },
  {
    id: 5,
    name: "LinkPro CAT6 Cable",
    brand: "305 m Solid Copper",
    image: "/images/photos/product-5.svg",
    price: 12.75,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    categoryId: "electronics",
  },
  {
    id: 6,
    name: "SenseIt Temp Sensor",
    brand: "Module ±0.5°C",
    image: "/images/photos/product-6.svg",
    price: 6.4,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
    categoryId: "electronics",
  },
  {
    id: 7,
    name: "HardHat Pro EN397",
    brand: "Safety Helmet White",
    image: "/images/photos/product-7.svg",
    price: 27.9,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    categoryId: "safety",
  },
  {
    id: 8,
    name: "SafeGrip Cut-Resistant",
    brand: "Gloves Level D Pair",
    image: "/images/photos/product-8.svg",
    price: 19.49,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
    categoryId: "safety",
  },
  {
    id: 13,
    name: "ClearView Safety Goggles",
    brand: "Anti-Fog ANSI Z87.1",
    image: "/images/photos/product-6.svg",
    price: 11.25,
    oldPrice: 14.5,
    shipping: 0,
    advertCount: 140,
    isFavorite: false,
    categoryId: "safety",
  },
  {
    id: 14,
    name: "EarDefend Pro Muffs",
    brand: "SNR 30 dB Adjustable",
    image: "/images/photos/product-10.svg",
    price: 24.9,
    shipping: 0,
    advertCount: 90,
    isFavorite: false,
    categoryId: "safety",
  },
  {
    id: 9,
    name: "DrillMaster 18V",
    brand: "Combi Drill 2 Batteries",
    image: "/images/photos/product-9.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    categoryId: "tools",
  },
  {
    id: 10,
    name: "AnglePro Grinder",
    brand: "115 mm 900 W",
    image: "/images/photos/product-2.svg",
    price: 54.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    categoryId: "tools",
  },
  {
    id: 11,
    name: "VoltLine Circuit Breaker",
    brand: "16A Type B DIN Rail",
    image: "/images/photos/product-12.svg",
    price: 21.9,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
    categoryId: "electrical",
  },
  {
    id: 12,
    name: "BrightWork LED High Bay",
    brand: "150W IP65",
    image: "/images/photos/product-13.svg",
    price: 14.25,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
    categoryId: "electrical",
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
                <h1 className="font-display text-lg xl:text-xl font-semibold text-ink">{breadcrumb}</h1>
                <p className="text-xs text-ink-muted">
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
                    <button
                      type="button"
                      aria-label="Previous page"
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                        activePage <= 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:bg-brand-50"
                      }`}
                      disabled={activePage <= 1}
                      onClick={() => activePage > 1 && setActiveCardPage(activePage - 1)}
                    >
                      <span className="w-4 h-7">
                        <SvgLessThan />
                      </span>
                    </button>
                    <div className="flex items-center gap-2 xl:gap-6" role="group" aria-label="Product pages">
                      {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                        <CardNavItem
                          key={page}
                          pageNumber={page}
                          activePage={activePage}
                          setActivePage={setActiveCardPage}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      aria-label="Next page"
                      className={`w-8 h-8 flex items-center justify-center rounded-full text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                        activePage >= pageCount ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:bg-brand-50"
                      }`}
                      disabled={activePage >= pageCount}
                      onClick={() => activePage < pageCount && setActiveCardPage(activePage + 1)}
                    >
                      <span className="w-4 h-7">
                        <SvgMoreThan />
                      </span>
                    </button>
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
  <button
    type="button"
    aria-label={`Go to page ${pageNumber}`}
    aria-current={activePage === pageNumber ? "page" : undefined}
    className={`cursor-pointer select-none w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium font-display transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
      activePage === pageNumber
        ? "bg-brand-600 text-white"
        : "text-ink-soft hover:bg-brand-50 hover:text-brand-700"
    }`}
    onClick={() => setActivePage(pageNumber)}
  >
    {pageNumber}
  </button>
);

export default Category;
