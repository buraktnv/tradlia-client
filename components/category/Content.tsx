import { FC, useState } from "react";
import SingleCard from "../../components/profile/favourites/SingleCard";
import { SvgFilter, SvgSearch } from "../../helpers/svgs/category";
import CategoryDateDropdown from "./CategoryDateDropdown";
import CategoryFilterDropDown from "./CategoryFilterDropdown";

const filterList = [
  { id: 0, title: "All", active: true },
  { id: 1, title: "Answered", active: false },
  { id: 2, title: "Unanswered", active: false },
  { id: 3, title: "1 Star", active: false },
  { id: 4, title: "2 Stars", active: false },
  { id: 5, title: "3 Stars", active: false },
  { id: 6, title: "4 Stars", active: false },
  { id: 7, title: "5 Stars", active: false },
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
        <div className="flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between xl:pl-8 xl:mx-0 xl:border xl:border-[#00B1B265] xl:bg-[#F4F5F7] xl:rounded-full mb-2 xl:h-[3rem]">
          <div className="flex items-center justify-around xl:justify-start xl:gap-12 border rounded-full py-2 xl:py-0 border-[#00B1B265] xl:border-0">
            <div className="flex xl:mx-6">
              <CategoryFilterDropDown filterList={filterList} />
            </div>
            <div className="flex text-xs xl:mx-8">
              <CategoryDateDropdown />
            </div>
            <div
              className="flex gap-1 xl:hidden px-4 items-center h-full text-[11px] leading-3 xl:text-sm text-[#7E8096] cursor-pointer select-none"
              onClick={() => setSidebar(true)}
            >
              <SvgFilter />
              Filters
            </div>
          </div>
          <div className="flex relative ring-1 rounded-full ring-[#4CBEC565] ">
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="outline-none bg-white placeholder-[#7E8096] xl:placeholder-[#4CBEC5] px-5 text-left text-[#7E8096] xl:text-[#4CBEC5]  placeholder:font-light w-full  xl:px-20 py-2 rounded-full xl:text-center"
            />
            <div className="absolute w-4 h-4 right-4 xl:right-10 top-3 text-[#4cbec5]">
              <SvgSearch />
            </div>
          </div>
        </div>

        <div className="grid w-full h-full grid-cols-2 mt-3 xl:grid-cols-4 gap-x-3 gap-y-5 content">
          {itemList &&
            itemList.map((content: any) => (
              <SingleCard key={content.id} content={content} deleteCard={deleteCard} favoriteCard={favoriteCard} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Content;
