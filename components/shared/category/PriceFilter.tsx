import { FC, useState } from "react";
import CustomCheckBox from "./CustomCheckBox";
import scrollBar from "../ScrollBar.module.scss";
import { SvgClose, SvgPriceFilter, SvgShowMore } from "../../../helpers/svgs/category";

const SidebarPriceDate: any = [
  {
    id: 0,
    name: "$1-250",
  },
  {
    id: 1,
    name: "$250-500",
  },
  {
    id: 2,
    name: "$501-750",
  },
  {
    id: 3,
    name: "$751-1000",
  },
  {
    id: 4,
    name: "$1001-500",
  },
  {
    id: 5,
    name: "$1501-2000",
  },
  {
    id: 6,
    name: "$2001-2500",
  },
  {
    id: 7,
    name: "$25001-50000",
  },
];

const PriceFilter: FC<any> = ({ content }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div
      className={`xl:bg-canvas border bg-surface xl:border-none border-line w-full py-4 px-4 relative ${
        isActive ? "rounded-card" : "rounded-pill"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-display font-semibold tracking-wide text-brand-700 xl:text-base text-sm">PRICE RANGE</div>
        <div className="flex items-center gap-2">
          {isActive && (
            <button
              type="button"
              aria-label="Clear price filters"
              className="flex items-center gap-2 text-ink-soft bg-surface rounded-pill px-2 py-1 text-xs transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
            >
              Clear
              <div className="w-2 h-2">
                <SvgClose />
              </div>
            </button>
          )}
          <button
            type="button"
            aria-label={isActive ? "Collapse price filters" : "Expand price filters"}
            aria-expanded={isActive}
            className={`w-4 h-4 text-brand-600 cursor-pointer transform transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
              isActive ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => setIsActive((pre: any) => !pre)}
          >
            <SvgShowMore />
          </button>
        </div>
      </div>
      {isActive && (
        <>
          <div className="relative mt-4 pb-[1rem]">
            <div className="grid grid-cols-5 gap-2">
              <input
                type="text"
                name=""
                id=""
                value={0}
                aria-label="Minimum price"
                className="col-span-2 py-1 text-center font-medium text-ink-soft text-sm rounded-pill outline-none border border-line mx-1 focus:border-brand-400 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none"
              />
              <input
                type="text"
                name=""
                id=""
                value={"50,000"}
                aria-label="Maximum price"
                className="col-span-2 py-1 text-sm text-center font-medium text-ink-soft rounded-pill outline-none border border-line mx-1 focus:border-brand-400 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none"
              />
              <button
                type="button"
                aria-label="Apply price range"
                className="bg-brand-600 rounded-pill flex items-center justify-center text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
              >
                <div className="w-5 h-4">
                  <SvgPriceFilter />
                </div>
              </button>
            </div>
            <div className={`px-1.5 ${scrollBar.ScrollBar}`}>
              {SidebarPriceDate.map((el: any) => (
                <CustomCheckBox key={el.id} name={el.name} />
              ))}
            </div>
          </div>
          <div className="absolute left-0 flex justify-center w-full rounded-pill -bottom-3">
            <button
              type="button"
              className="flex items-center justify-between px-3 py-1 w-max bg-ink text-white rounded-pill transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
              onClick={() => setIsActive(false)}
            >
              Show Less
              <div className="w-3 h-3 ml-2 fill-white">
                <SvgShowMore />
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceFilter;
