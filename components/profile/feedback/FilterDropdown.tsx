import { FC, useEffect, useRef, useState } from "react";
import styles from "./FilterDropdown.module.scss";

const FilterDropdown: FC<any> = ({ filterList, onSelect }) => {
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const [selectedId, setSelectedId] = useState<number | undefined>(() => {
    const active = filterList?.find((f: any) => f.active);
    return active ? active.id : filterList?.[0]?.id;
  });
  const selected = filterList?.find((f: any) => f.id === selectedId);

  const selectItem = (item: any) => {
    setSelectedId(item.id);
    setOpen(false);
    onSelect?.(item);
  };

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <span ref={containerRef} className={`${styles.DropdownMenu} h-full`}>
      <div className={`dropdown dropdown-end ${open ? "dropdown-open" : ""}`}>
        <label
          tabIndex={0}
          onClick={() => setOpen((pre) => !pre)}
          className="flex items-center gap-1.5 rounded-pill px-2 py-2 overflow-hidden cursor-pointer text-sm transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <div className="h-4 w-4 fill-current text-ink-muted">
            <SmartSorting />
          </div>
          <span className="text-ink-soft mx-1 text-xs xl:text-sm tracking-tight">
            {selected?.title || "Smart Sorting"}
          </span>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content -top-2.5 -left-[17px] bg-surface border border-brand-200 shadow-pop rounded-card w-max text-sm px-3 py-2"
        >
          <div className="flex flex-col">
            <label tabIndex={0} className="flex items-center mb-4 px-2 py-[3px] overflow-hidden rounded-full">
              <div className="w-4 h-4">
                <SmartSorting />
              </div>
              <span className="text-ink-soft mx-1 text-sm">Smart Sorting</span>
            </label>
            {filterList &&
              filterList.map(({ id, title }: any) => (
                <ItemsList
                  key={id}
                  title={title}
                  active={id === selectedId}
                  onClick={() => selectItem({ id, title })}
                />
              ))}
          </div>
        </div>
      </div>
    </span>
  );
};

const ItemsList: FC<any> = ({ title, active, onClick }) => {
  return (
    <>
      <div className="flex items-center  w-full px-2 py-0.5">
        <button type="button" onClick={onClick} className={`  text-sm font-medium hover:text-brand-600 text-ink-soft ${active && "font-medium text-brand-600"}`}>
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

export default FilterDropdown;
