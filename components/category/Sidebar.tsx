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
    <div className="bg-[#F7F7FA] rounded-2xl w-full py-4 px-4 relative xl:pb-[1.5rem] hidden xl:block">
      <div>
        {(isExpanded ? menuItems : menuItems.slice(0, 3)).map((el: any) => (
          <SwitchMenu content={el} key={el.id} />
        ))}
      </div>
      {menuItems.length > 3 && (
        <div className="absolute left-0 flex justify-center w-full text-white rounded-full -bottom-3">
          <button
            type="button"
            className="flex items-center justify-between px-3 py-1 w-max bg-[#C2C7D3]  rounded-full"
            onClick={() => setIsExpanded((pre: boolean) => !pre)}
          >
            {isExpanded ? "Show Less" : "Show More"}
            <div className={`w-3 h-3 ml-2 fill-white transform ${isExpanded && "rotate-180"} duration-200`}>
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
    <div className="flex flex-col w-full text-[#7E8096] bg-white min-h-fit h-full p-3 gap-[1rem] xl:p-0 xl:gap-[1.3rem]">
      <div className="justify-between w-full bg-[#4CBEC5] text-white rounded-full px-4 py-3 hidden xl:flex xl:h-[3rem] xl:mb-[0.2rem]">
        <h3 className="font-bold">{activeTitle}</h3>
        <h5 className="font-medium">{productCount ?? 0} Products</h5>
      </div>
      <div className="text-xs bg-white border border-[#00B1B280] flex w-max rounded-full gap-2 px-3 items-center py-0.5 cursor-pointer select-none xl:hidden -mb-[0.3rem] xl:mb-0">
        Clear all filters <strong>x</strong>
      </div>
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
        className="w-full text-white rounded-full bg-[#4CBEC5] py-3 xl:h-10 xl:mt-4"
        onClick={() => setSidebar(false)}
      >
        APPLY FILTERS
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
    <div className="py-3">
      <div className="flex items-center justify-between pr-2 font-medium">
        <button
          type="button"
          className={`text-left ${content.activeCategory && "text-[#4CBEC5]"}`}
          onClick={() => router.push(categoryUrl(content.id))}
        >
          {content?.title}
        </button>
        <button type="button" onClick={() => setState((pre: boolean) => !pre)}>
          <div className="w-4 h-4">{content.isOpen || state ? <SvgMinus /> : <SvgPlus />}</div>
        </button>
      </div>

      <div className="flex flex-col gap-2 pl-5 pr-8">
        {(content.isOpen || state) &&
          content?.subCategories?.map((sub: any) => {
            return (
              <button
                type="button"
                key={sub.id}
                className={`text-left ${
                  content.activeSubCategory === sub.id ? "text-[#4CBEC5]" : "hover:text-[#4CBEC5]"
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
