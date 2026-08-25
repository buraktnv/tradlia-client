import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SvgMinus, SvgPlus, SvgShowMore } from "../../helpers/svgs/category";
import BrandFilter from "../shared/category/BrandFilter";
import PriceFilter from "../shared/category/PriceFilter";
import StateFilter from "../shared/category/StateFilter";
import { categories } from "../../helpers/categories";
import { categoryUrl } from "../../helpers/urls";

const switchItems = categories.map((cat) => ({
  id: cat.id,
  title: `${cat.name} ${cat.subtitle ?? ""}`.trim(),
  subCategories: cat.subCategories,
  isOpen: false,
  activeCategory: false,
  activeSubCategory: undefined as string | undefined,
}));

const SidebarSwitchMenu: FC<any> = ({ activeCategory, activeSubCategory }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const menuItems = switchItems.map((item) => ({
    ...item,
    isOpen: item.id === activeCategory,
    activeCategory: item.id === activeCategory,
    activeSubCategory,
  }));
  return (
    <div className="relative w-full py-4 px-4 bg-canvas border border-line rounded-card xl:pb-[1.75rem] hidden xl:block">
      <h2 className="font-display text-xs uppercase tracking-wider text-ink-muted mb-1">Categories</h2>
      <div>
        {(isExpanded ? menuItems : menuItems.slice(0, 3)).map((el: any) => (
          <SwitchMenu content={el} key={el.id} />
        ))}
      </div>
      {menuItems.length > 3 && (
        <div className="absolute left-0 flex justify-center w-full -bottom-3">
          <button
            type="button"
            aria-expanded={isExpanded}
            className="flex items-center justify-between px-3 py-1 w-max bg-line text-ink-soft rounded-pill transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-100 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
            onClick={() => setIsExpanded((pre: boolean) => !pre)}
          >
            {isExpanded ? "Show Less" : "Show More"}
            <div className={`w-3 h-3 ml-2 transform duration-200 ${isExpanded && "rotate-180"}`}>
              <SvgShowMore />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

const Sidebar: FC<any> = ({ setSidebar, activeCategory, activeSubCategory, productCount }) => {
  const activeTitle =
    categories.find((cat) => cat.id === activeCategory)?.name ?? "All Products";
  return (
    <div className="flex flex-col w-full text-ink-soft bg-surface min-h-fit h-full p-3 gap-[1rem] xl:p-0 xl:bg-transparent xl:gap-[1.4rem]">
      <div className="justify-between w-full bg-brand-50 border border-brand-400 text-brand-700 rounded-card px-4 py-2 hidden xl:flex xl:min-h-[2.75rem] items-center">
        <h3 className="font-display font-semibold">{activeTitle}</h3>
        <h5 className="text-sm font-medium text-brand-600">{productCount ?? 0} Products</h5>
      </div>
      <button
        type="button"
        className="text-xs bg-surface border border-line flex w-max rounded-pill gap-2 px-3 items-center py-1 cursor-pointer select-none xl:hidden -mb-[0.3rem] xl:mb-0 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        onClick={() => setSidebar(false)}
      >
        Clear all filters <strong>x</strong>
      </button>
      <SidebarSwitchMenu activeCategory={activeCategory} activeSubCategory={activeSubCategory} />
      <div>
        <BrandFilter />
      </div>
      <div>
        <StateFilter />
      </div>
      <div>
        <PriceFilter />
      </div>
      <button
        type="button"
        className="w-full font-display text-white rounded-pill bg-brand-600 py-3 xl:h-10 xl:mt-4 uppercase tracking-wider text-sm font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
        onClick={() => setSidebar(false)}
      >
        Apply Filters
      </button>
    </div>
  );
};

const SwitchMenu: FC<any> = ({ content }) => {
  const [state, setState] = useState<any>(content.isOpen);
  const router = useRouter();

  useEffect(() => {
    setState(content.isOpen);
  }, [content.isOpen]);

  return (
    <div className="py-2">
      <div className="flex items-center justify-between pr-2">
        <button
          type="button"
          className={`text-left text-sm rounded-pill px-2 py-1 -ml-2 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
            content.activeCategory
              ? "border border-brand-400 bg-brand-50 text-brand-700 font-medium"
              : "text-ink hover:text-brand-700 hover:bg-brand-50"
          }`}
          onClick={() => router.push(categoryUrl(content.id))}
        >
          {content?.title}
        </button>
        <button
          type="button"
          aria-label={content.isOpen || state ? `Collapse ${content.title}` : `Expand ${content.title}`}
          aria-expanded={Boolean(content.isOpen || state)}
          className={`w-4 h-4 text-ink-muted cursor-pointer transform transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded ${
            content.isOpen || state ? "rotate-180" : ""
          }`}
          onClick={() => setState((pre: boolean) => !pre)}
        >
          {content.isOpen || state ? <SvgMinus /> : <SvgPlus />}
        </button>
      </div>

      <div className="flex flex-col gap-1 pl-5 pr-8 pt-1">
        {(content.isOpen || state) &&
          content?.subCategories?.map((sub: any) => {
            return (
              <button
                type="button"
                key={sub.id}
                className={`text-left text-xs rounded-pill px-2 py-1 -ml-1 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                  content.activeSubCategory === sub.id
                    ? "border border-brand-400 bg-brand-50 text-brand-700 font-medium"
                    : "text-ink-soft hover:text-brand-700 hover:bg-brand-50"
                }`}
                onClick={() => router.push(categoryUrl(content.id, sub.id))}
              >
                {sub.name}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
