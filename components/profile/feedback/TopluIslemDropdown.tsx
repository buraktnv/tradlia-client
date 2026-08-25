import { FC } from "react";
import styles from "./FilterDropdown.module.scss";

const filterList = [
  { id: 0, title: "Unpublish Selected Listings", active: true },
  { id: 1, title: "Delete Selected Listings", active: false },
  { id: 2, title: "Unpublish All Listings", active: false },
  { id: 3, title: "Delete All Listings", active: false },
  { id: 4, title: "Export Selected Products to Excel", active: false },
  { id: 5, title: "Export All Listings to Excel", active: false },
];

const TopluIslemDropdown: FC<any> = ({ setOpenModal2 }) => {
  return (
    <span className={styles.DropdownMenu}>
      <div className="relative text-sm dropdown group dropdown-hover dropdown-end">
        <label
          tabIndex={0}
          className="inline-flex items-center justify-center gap-2 rounded-pill bg-brand-400 pl-3 pr-8 w-full py-3 outline-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:bg-brand-500 group-hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 lg:w-max lg:px-6"
        >
          <span className="text-xs font-medium text-white xl:text-sm">Bulk Action</span>
          <div className="absolute duration-100 top-1 right-2 lg:right-7 group-hover:rotate-180">
            <div className="w-3 h-3 lg:w-4 lg:h-4">
              <SmartSorting />
            </div>
          </div>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content left-0 top-[2rem] lg:top-[2rem] bg-white border border-brand-200 shadow-pop rounded-card lg:w-full w-max"
        >
          <div className="flex flex-col p-4 gap-[0.25rem]">
            {filterList &&
              filterList.map(({ id, title }) => <ItemsList key={id} title={title} setOpenModal2={setOpenModal2} />)}
          </div>
        </div>
      </div>
    </span>
  );
};

const ItemsList: FC<any> = ({ title, setOpenModal2 }) => {
  return (
    <>
      <div className="flex w-full  px-2 py-0.5">
        <button type="button"
          onClick={() => {
            setOpenModal2(true);
          }}
          className={`text-sm font-normal hover:text-brand-600 text-ink-soft `}
        >
          {title}
        </button>
      </div>
    </>
  );
};

const SmartSorting: FC<any> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 26.883 15.423" fill="white">
      <path
        id="Path_1096"
        data-name="Path 1096"
        d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
        transform="translate(-1630.656 -746.402)"
      />
    </svg>
  );
};

export default TopluIslemDropdown;
