import { FC } from "react";
import styles from "../profile/feedback/FilterDropdown.module.scss";

const FilterDropdown: FC<any> = ({ filterList }) => {
  return (
    <span className={styles.DropdownMenu}>
      <div className="dropdown group dropdown-hover dropdown-end">
        <label tabIndex={0} className="flex items-center px-2 py-1 overflow-hidden rounded-full cursor-pointer">
          <div className="xl:w-4 xl:h-4 w-[18px] h-[13px]">
            <SmartSorting />
          </div>
          <span className="text-[#7E8096] mx-1 text-[11px] leading-3 xl:text-sm">Smart Sorting</span>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content -top-3 -left-[17px] bg-white border border-[#66bebc] shadow-md rounded-3xl w-max text-sm px-4 py-2"
        >
          <div className="flex flex-col">
            <label tabIndex={0} className="flex items-center mb-4 px-2 py-[3px] overflow-hidden rounded-full">
              <div className="xl:w-4 w-3.5 h-3.5 xl:h-4">
                <SmartSorting />
              </div>
              <span className="text-[#7E8096] mx-1 text-sm">Smart Sorting</span>
            </label>
            {filterList &&
              filterList.map(({ id, title, active }: any) => <ItemsList key={id} title={title} active={active} />)}
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
        <button type="button" className={`  text-sm font-medium hover:text-[#4CBEC5] text-[#7E8096] ${active && "text-[#4CBEC5]"}`}>
          {title}
        </button>
      </div>
    </>
  );
};

const SmartSorting: FC<any> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 41.372 31.268">
      <path
        id="Path_143"
        data-name="Path 143"
        d="M4524.195,510.954h21.316a1.856,1.856,0,0,0,0-3.712h-21.316a1.856,1.856,0,0,0,0,3.712Zm0-9.428h21.316a1.856,1.856,0,0,0,0-3.712h-21.316a1.856,1.856,0,0,0,0,3.712Zm14.308,15.156h-14.308a1.856,1.856,0,0,0,0,3.712H4538.5a1.856,1.856,0,0,0,0-3.712Zm24.5.666h0a2.43,2.43,0,0,0-3.437,0l-3.435,3.434V500.244a2.43,2.43,0,0,0-4.861,0v20.538l-3.435-3.434a2.431,2.431,0,0,0-3.438,3.437l7.584,7.585a2.432,2.432,0,0,0,3.438,0l7.584-7.585A2.43,2.43,0,0,0,4563,517.348Z"
        transform="translate(-4522.339 -497.814)"
        fill="#7e8096"
      />
    </svg>
  );
};

export default FilterDropdown;
