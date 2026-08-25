import { FC, useState } from "react";
import ProductCardBase from "../home/ProductCardBase";
import { SvgFilter, SvgSearch } from "../../helpers/svgs/category";
import CategoryDateDropdown from "./CategoryDateDropdown";
import CategoryFilterDropDown from "./CategoryFilterDropdown";

const filterList = [
  { id: 0, title: "Smart Sorting", active: true },
  { id: 1, title: "Newest First", active: false },
  { id: 2, title: "Price: Low to High", active: false },
  { id: 3, title: "Price: High to Low", active: false },
  { id: 4, title: "Top Rated", active: false },
];

const Content: FC<any> = ({ items, setSidebar }) => {
  const [itemList, setItemList] = useState<any>(items);

  const deleteCard = (item: any) => {
    setItemList((pre: any[]) => {
      pre[pre.indexOf(item)].isFavorite = false;
      return pre;
    });
  };
  const favoriteCard = (item: any) => {
    setItemList((pre: any[]) => {
      pre[pre.indexOf(item)].isFavorite = true;
      return pre;
    });
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between xl:pl-8 xl:mx-0 xl:border xl:border-line xl:bg-canvas xl:rounded-card mb-3 xl:h-[3rem]">
          <div className="flex items-center justify-around xl:justify-start gap-3 xl:gap-12 border rounded-card py-1.5 px-2 xl:py-0 xl:px-0 border-line xl:border-0 xl:rounded-none">
            <div className="flex xl:mx-6">
              <CategoryFilterDropDown filterList={filterList} />
            </div>
            <div className="flex text-xs xl:mx-8">
              <CategoryDateDropdown />
            </div>
            <button
              type="button"
              className="xl:hidden flex gap-1.5 items-center rounded-pill border border-line bg-surface px-3 py-1.5 text-[11px] leading-3 text-ink-soft cursor-pointer select-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              onClick={() => setSidebar(true)}
            >
              <span className="w-4 h-4">
                <SvgFilter />
              </span>
              Filters
            </button>
          </div>
          <div className="flex relative">
            <input
              type="search"
              id="search"
              placeholder="Search in category"
              aria-label="Search in category"
              className="w-full outline-none bg-surface border border-line rounded-pill placeholder:text-ink-muted text-ink px-5 pr-10 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300"
            />
            <div className="absolute w-4 h-4 right-4 top-2.5 text-ink-muted" aria-hidden="true">
              <SvgSearch />
            </div>
          </div>
        </div>

        <div className="grid w-full h-full grid-cols-2 mt-3 xl:grid-cols-4 gap-x-4 gap-y-6 content" role="list">
          {itemList &&
            itemList.map((content: any) => (
              <ProductCardBase
                key={content.id}
                content={content}
                deleteCard={deleteCard}
                favoriteCard={favoriteCard}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Content;
