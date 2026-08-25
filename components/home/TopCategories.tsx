import { FC, useState } from "react";
import Link from "next/link";
import { SvgM } from "../../helpers/svgs/homeSvg";
import { jsonCategoryList } from "./jsonCategoryList";
import { categories } from "../../helpers/categories";
import { categoryUrl } from "../../helpers/urls";

const TopCategories: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Static in-flow strip (not an overlay): it occupies layout space below the
  // navbar, so pages never need top clearance and content is never covered.
  if (!isOpen) return null;

  return (
    <div className="hidden xl:block overflow-x-clip">
      <nav className="bg-surface border-b border-line shadow-pop">
        <div
          aria-label="Product categories"
          className="flex container justify-between py-4 mx-auto gap-3 overflow-x-auto hiddenScroll"
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
  );
};

const SingleCategoryItem: FC<any> = ({ content, selectedCategory, setSelectedCategory }) => {
  const isActive = content.id === selectedCategory;
  const category = categories.find((c) => c.icon === content.icon);
  const catId = category?.id;

  return (
    <div className="group shrink-0">
      <div className="relative">
        <Link
          href={catId ? categoryUrl(catId) : "/category"}
          onMouseEnter={() => {
            setSelectedCategory((pre: any) => (pre !== content.id ? content.id : null));
          }}
          onFocus={() => {
            setSelectedCategory((pre: any) => (pre !== content.id ? content.id : null));
          }}
          onClick={() => setSelectedCategory(content.id)}
          className="flex items-center gap-3 text-left rounded-card px-2 py-1.5 cursor-pointer transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
        >
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-card p-2.5 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none [&>div]:w-full [&>div]:h-full ${
              isActive
                ? "bg-brand-600 text-white"
                : "bg-canvas text-ink-soft group-hover:bg-brand-600 group-hover:text-white"
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
        </Link>
        <div
          className={`absolute z-30 top-full pt-3 ${content.align ?? ""} invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-[opacity,transform,visibility] duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none flex`}
        >
          <div className="flex overflow-hidden rounded-card shadow-pop bg-surface border border-line">
            <div className="hidden lg:flex w-24 shrink-0 bg-brand-600 px-2 items-center justify-center text-white relative">
              <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="w-16 h-20 block fill-current">
                  <SvgM />
                </span>
              </span>
              <span className="relative w-14 h-16 opacity-90 grid [&>div]:w-full [&>div]:h-full [&>div]:relative">
                <content.icon isActive={true} />
              </span>
            </div>
            <div className="grid grid-cols-2 text-xs bg-surface w-[450px] max-w-[80vw] px-6 py-6 font-medium gap-x-4">
              {category?.subCategories.map((sub) => (
                <Link
                  className="flex items-center gap-1.5 cursor-pointer whitespace-nowrap btnGroupHover rounded-pill px-2 py-1.5 my-0.5 text-left text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
                  key={sub.id}
                  href={catId ? categoryUrl(catId, sub.id) : "/category"}
                >
                  <div className={`w-6 h-3 svgIcon fill-current text-brand-500`}>
                    <SvgM />
                  </div>
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
