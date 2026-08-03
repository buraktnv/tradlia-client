import { FC } from "react";
import { SvgSearch } from "../../helpers/svgs/favoriteSvg";
import DateDropdown from "../profile/feedback/DateDropdown";
import FilterDropdown from "../profile/feedback/FilterDropdown";

const filterList = [
  { id: 0, title: "Unpublish Selected Listings", active: true },
  { id: 1, title: "Delete Selected Listings", active: false },
  { id: 2, title: "Unpublish All Listings", active: false },
  { id: 3, title: "Delete All Listings", active: false },
  { id: 4, title: "Export Selected Products to Excel", active: false },
  { id: 5, title: "Export All Listings to Excel", active: false },
];

const FilterTabMenu: FC<any> = () => {
  return (
    <div className="xl:h-[3rem] flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between xl:pl-8 xl:mx-0 xl:border xl:border-[#00B1B265] xl:bg-[#F4F5F7] xl:rounded-full mb-3 xl:mb-[1.5rem]">
      <div className="flex justify-around xl:justify-start xl:gap-12 border rounded-full py-2 xl:py-0 border-[#00B1B265] xl:border-0">
        <div className="flex xl:mx-8">
          <FilterDropdown filterList={filterList} />
        </div>
        <div className="flex xl:mx-8">
          <DateDropdown />
        </div>
      </div>
      <div className="flex relative ring-1 rounded-full ring-[#4CBEC565] ">
        <input
          type="search"
          id="search"
          placeholder="Search"
          className="outline-none bg-white placeholder-[#7E8096] xl:placeholder-[#4CBEC5] px-5 text-left text-[#7E8096] xl:text-[#4CBEC5] placeholder:font-light w-full xl:px-20 py-3 rounded-full xl:text-center"
        />
        <div className="absolute w-5 h-5 right-5 xl:right-10 top-3.5 text-[#4cbec5]">
          <SvgSearch />
        </div>
      </div>
    </div>
  );
};

export default FilterTabMenu;
