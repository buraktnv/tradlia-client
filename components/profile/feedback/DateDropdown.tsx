import { FC } from "react";
import styles from "./FilterDropdown.module.scss";

const filterList = [
  { id: 0, title: "All", active: true },
  { id: 1, title: "Most Recent", active: false },
  { id: 2, title: "Today", active: false },
  { id: 3, title: "Last Week", active: false },
  { id: 4, title: "Last Month", active: false },
  { id: 5, title: "Last 3 Months", active: false },
  { id: 6, title: "Last 1 Year", active: false },
  { id: 7, title: "Last 3 Years", active: false },
];

const DateDropdown: FC<any> = () => {
  return (
    <span className={styles.DropdownMenu}>
      <div className="dropdown group dropdown-hover dropdown-end">
        <label tabIndex={0} className="flex items-center py-2 overflow-hidden cursor-pointer xl:px-2 xl:py-1">
          <div className="w-4 h-4">
            <DateSorting />
          </div>
          <span className="text-[#7E8096] mx-1 text-xs xl:text-sm tracking-tight">Sort by Date</span>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content -top-2.5 right-0 sm:-left-[17px] bg-white border border-[#66bebc] shadow-md rounded-3xl w-max text-sm px-4 py-2"
        >
          <div className="flex flex-col">
            <label tabIndex={0} className="flex mb-4 items-center px-2 py-[3px] overflow-hidden rounded-full">
              <div className="w-4 h-4">
                <DateSorting />
              </div>
              <span className="text-[#7E8096] mx-1 text-sm">Sort by Date</span>
            </label>
            {filterList &&
              filterList.map(({ id, title, active }) => <ItemsList key={id} title={title} active={active} />)}
          </div>
        </div>
      </div>
    </span>
  );
};

const ItemsList: FC<any> = ({ title, active }) => {
  return (
    <>
      <div className="flex items-center  w-full px-2 py-0.5">
        <button type="button" className={`text-sm font-medium hover:text-[#4CBEC5] text-[#7E8096] ${active && "text-[#4CBEC5]"}`}>
          {title}
        </button>
      </div>
    </>
  );
};

const DateSorting: FC<any> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 36.021 36.015">
      <path
        id="Path_474"
        data-name="Path 474"
        d="M8615.084,4034.253c.433.007.866,0,1.3,0,.469,0,.938.008,1.405,0a1.4,1.4,0,1,0-.008-2.809q-1.352-.012-2.7,0a1.406,1.406,0,1,0,.008,2.81Zm-8.375-8.3q1.4.023,2.809,0a1.4,1.4,0,0,0-.026-2.807c-.456-.009-.913,0-1.37,0s-.937-.008-1.4,0a1.4,1.4,0,0,0-.008,2.807Zm8.362,0c.444.008.89,0,1.335,0s.913.007,1.37,0a1.406,1.406,0,1,0-.019-2.811q-1.334-.009-2.669,0a1.406,1.406,0,1,0-.018,2.811Zm-16.651,8.3q1.386.022,2.774,0a1.4,1.4,0,1,0-.009-2.808c-.468-.008-.936,0-1.4,0-.445,0-.891-.006-1.335,0a1.4,1.4,0,1,0-.026,2.807Zm27.465-21.2a6.977,6.977,0,0,0-6.845-5.151c-.385,0-.771,0-1.212,0,0-.341-.022-.665,0-.985a1.567,1.567,0,0,0-1.132-1.783h-.562a1.6,1.6,0,0,0-1.127,1.827c.024.3,0,.6,0,.922h-13.794c0-.319-.02-.622,0-.922a1.6,1.6,0,0,0-1.126-1.827h-.562a1.565,1.565,0,0,0-1.131,1.787c.023.311,0,.627,0,1.022-.687,0-1.342-.035-1.992.006a6.96,6.96,0,0,0-6.234,5.917,8.632,8.632,0,0,0-.07,1.016q-.006,9.635,0,19.27a6.923,6.923,0,0,0,5.456,6.821,7.618,7.618,0,0,0,1.638.168q10.919.016,21.838.007a6.949,6.949,0,0,0,7.027-6.095.867.867,0,0,1,.058-.161v-20.753C8626.048,4013.775,8625.983,4013.409,8625.885,4013.051Zm-2.57,6.364q0,7.3,0,14.595a4.147,4.147,0,0,1-4.312,4.324q-10.885,0-21.77,0a4.148,4.148,0,0,1-4.31-4.327q0-7.281,0-14.56v-.412h30.393Zm-.04-3.233h-30.3c-.489-3.288,1.462-5.9,5.438-5.43v.646c0,.668,0,1.337,0,2.005a1.406,1.406,0,1,0,2.81-.006c.007-.762,0-1.524,0-2.286v-.379h13.794c0,.437,0,.855,0,1.274,0,.5-.015,1.009,0,1.512a1.4,1.4,0,0,0,2.8-.025c.014-.786,0-1.571,0-2.357v-.374C8621.358,4010.278,8623.762,4012.443,8623.274,4016.182Zm-24.854,9.769q1.387.021,2.774,0a1.4,1.4,0,1,0-.009-2.808c-.457-.008-.913,0-1.369,0s-.913-.006-1.37,0a1.4,1.4,0,1,0-.026,2.807Zm8.293,8.3q1.387.022,2.775,0a1.4,1.4,0,1,0,0-2.808c-.469-.008-.937,0-1.405,0s-.913-.008-1.369,0a1.4,1.4,0,0,0,0,2.806Z"
        transform="translate(-8590.106 -4005.132)"
        fill="#7e8096"
      />
    </svg>
  );
};

export default DateDropdown;
