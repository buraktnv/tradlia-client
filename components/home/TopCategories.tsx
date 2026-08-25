import { FC, useState } from "react";
import { useRouter } from "next/router";
import { SvgM } from "../../helpers/svgs/homeSvg";
import { jsonCategoryList } from "./jsonCategoryList";
import { categories } from "../../helpers/categories";
import { categoryUrl } from "../../helpers/urls";

const TopCategories: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className="relative">
      <div
        aria-hidden={!isOpen}
        className={`hidden xl:block absolute top-0 left-0 w-full z-40 transition-all duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }`}
      >
        <nav className="bg-surface border-b border-line shadow-pop">
          <div
            aria-label="Product categories"
            className={`flex container justify-between py-4 mx-auto space-x-8 ${
              isOpen ? "opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            {jsonCategoryList.map((el: any) => (
              <SingleCategoryItem
                key={el.id}
                content={el}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

const SingleCategoryItem: FC<any> = ({ content, selectedCategory, setSelectedCategory }) => {
  const router = useRouter();
  const isActive = content.id === selectedCategory;
  const category = categories.find((c) => c.icon === content.icon);
  const catId = category?.id;

  return (
    <div className="group">
      <div className="relative">
        <button
          type="button"
          onMouseEnter={() => {
            setSelectedCategory((pre: any) => (pre !== content.id ? content.id : null));
          }}
          onClick={() => catId && router.push(categoryUrl(catId))}
          className="flex items-center gap-3 text-left rounded-card px-2 py-1.5 cursor-pointer transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
        >
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-card p-2.5 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none ${
              isActive
                ? "bg-brand-100 text-brand-700"
                : "bg-canvas text-ink-soft group-hover:bg-brand-100 group-hover:text-brand-700"
            }`}
          >
            <content.icon isActive={isActive} />
          </span>

          <span
            className={`text-sm ml-1 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none font-semibold leading-tight ${
              isActive ? "text-brand-700" : "text-ink group-hover:text-brand-700"
            }`}
          >
            <p>{content.text1}</p>
            <p>{content.text2}</p>
          </span>
        </button>
        <div
          className={`absolute z-30 top-full pt-3 ${content.align ?? ""} invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none flex`}
        >
          <div className="flex overflow-hidden rounded-card shadow-pop bg-surface border border-line">
            <div className="hidden lg:flex w-24 shrink-0 bg-brand-600 px-2 items-center justify-center text-white relative">
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="w-16 h-20 block">
                  <SvgM />
                </span>
              </span>
              <span className="relative w-14 h-16 opacity-90">
                <content.icon isActive={true} />
              </span>
            </div>
            <div className="grid grid-cols-2 text-xs bg-surface w-[450px] max-w-[80vw] px-6 py-6 font-medium gap-x-4">
              {category?.subCategories.map((sub) => (
                <button
                  type="button"
                  className="flex items-center gap-1.5 cursor-pointer whitespace-nowrap btnGroupHover rounded-pill px-2 py-1.5 my-0.5 text-left text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
                  key={sub.id}
                  onClick={() => catId && router.push(categoryUrl(catId, sub.id))}
                >
                  <div className={`w-6 h-3 svgIcon text-brand-500`}>
                    <SvgM />
                  </div>
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
