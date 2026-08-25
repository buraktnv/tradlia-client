import { FC } from "react";
import { SvgImg1, SvgImg2 } from "../../../helpers/svgs/adverts";
import DateDropdown from "../feedback/DateDropdown";
import FilterDropdown from "../feedback/FilterDropdown";
import TopluIslemDropdown from "../feedback/TopluIslemDropdown";

const filterList = [
  { id: 0, title: "Unpublish Selected Listings", active: true },
  { id: 1, title: "Delete Selected Listings", active: false },
  { id: 2, title: "Unpublish All Listings", active: false },
  { id: 3, title: "Delete All Listings", active: false },
  { id: 4, title: "Export Selected Products to Excel", active: false },
  { id: 5, title: "Export All Listings to Excel", active: false },
];

const FilterTabMenu: FC<any> = ({ setOpenModal2, setListType }) => {
  return (
    <div className="flex h-12 w-full items-center justify-between gap-2 rounded-card border border-line bg-surface px-3 shadow-card xl:h-[3.5rem] xl:gap-6">
      <TopluIslemDropdown setOpenModal2={setOpenModal2} />
      <FilterDropdown filterList={filterList} />
      <DateDropdown />
      <div className="items-center justify-center hidden gap-4 xl:flex">
        <button type="button" className="btn list1" onClick={() => setListType(0)}>
          <SvgImg2 />
        </button>
        <button type="button" className="btn list2" onClick={() => setListType(1)}>
          <SvgImg1 />
        </button>
      </div>
      <div className="xl:flex relative ring-1 ring-brand-200 rounded-full  ring-offset-0 hidden">
        <input
          type="search"
          id="search"
          placeholder="Search product"
          className="h-10 outline-0 bg-white  placeholder:text-brand-500  placeholder:font-light text-center  px-14 py-3 xl:py-3.5 rounded-full"
          required
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 30.921 30.807"
          className="absolute w-4 h-4 right-10 top-4"
        >
          <path
            id="Path_1095"
            data-name="Path 1095"
            d="M2736.929,620.224l-6.214-6.215a13.386,13.386,0,1,0-2.682,2.715l6.2,6.2a1.907,1.907,0,0,0,2.7,0h0A1.908,1.908,0,0,0,2736.929,620.224Zm-16.979-4.236a9.93,9.93,0,1,1,9.93-9.93A9.93,9.93,0,0,1,2719.95,615.988Z"
            transform="translate(-2706.567 -592.675)"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default FilterTabMenu;
