import { FC } from "react";
import styles from "./FilterDropdown.module.scss";

const filterList = [
  { id: 0, title: "Recently Sold", active: true },
  { id: 1, title: "Featured", active: false },
  { id: 2, title: "Best Price", active: false },
  { id: 3, title: "Best Sellers", active: false },
  { id: 4, title: "Product Name", active: false },
  { id: 5, title: "Expiry", active: false },
  { id: 6, title: "Stock", active: false },
  { id: 7, title: "Price", active: false },
];

const OnlineAdvertFilterDropdown: FC<any> = () => {
  return (
    <span className={styles.DropdownMenu}>
      <div className="dropdown group dropdown-hover dropdown-end">
        <label tabIndex={0} className="flex items-center gap-1.5 p-1 mx-1 overflow-hidden rounded-pill cursor-pointer transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400">
          <div className="h-4 w-4 fill-current text-ink-muted">
            <SmartSorting />
          </div>
          <span className="text-ink-soft mx-1 text-sm">Smart Sorting</span>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content left-0 bottom-auto bg-surface border border-brand-200 shadow-pop rounded-card w-40"
        >
          <div className="flex flex-col p-4">
            {filterList &&
              filterList.map(({ id, title}) => <ItemsList key={id} title={title}  />)}
          </div>
        </div>
      </div>
    </span>
  );
};

const ItemsList: FC<any> = ({ title}) => {
  return (
    <>
      <div className="flex w-full px-2 py-0.5">
        <button type="button" className={`text-sm font-normal hover:text-brand-600 text-ink-soft leading-3 `}>
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
        fill="currentColor"
      />
    </svg>
  );
};

export default OnlineAdvertFilterDropdown;
