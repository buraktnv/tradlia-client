import { FC } from "react";
import { SvgSearch } from "../../helpers/svgs/product";
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
    <div className="xl:h-[3rem] flex xl:flex-row flex-col gap-3 justify-between mb-3 xl:mb-[1.5rem]">
      <div className="flex items-center justify-around xl:justify-start xl:gap-12 border border-line rounded-card py-1.5 px-2 xl:border-0 xl:p-0">
        <div className="flex xl:mx-6">
          <FilterDropdown filterList={filterList} />
        </div>
        <div className="flex xl:mx-6">
          <DateDropdown />
        </div>
      </div>
      <div className="flex relative w-full xl:w-80">
        <input
          type="search"
          id="search"
          placeholder="Search"
          aria-label="Search listings"
          className="w-full outline-none bg-surface border border-line rounded-pill placeholder:text-ink-muted text-ink px-5 pr-10 py-2 text-sm transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        />
        <span className="absolute w-4 h-4 right-4 top-2.5 text-ink-muted" aria-hidden="true">
          <SvgSearch />
        </span>
      </div>
    </div>
  );
};

export default FilterTabMenu;
