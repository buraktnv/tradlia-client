import { FC, useState } from "react";
import { SvgClose, SvgShowMore } from "../../../helpers/svgs/category";
import CustomCheckBox from "./CustomCheckBox";
import scrollBar from "../ScrollBar.module.scss";

const StateCheckBoxes: any = [
  { id: 0, name: "Shelf Life Over 12 Months" },
  { id: 1, name: "Free Shipping Campaigns" },
  { id: 2, name: "No Minimum Order" },
  { id: 3, name: "Rated Above 9.0" },
];

const StateFilter: FC<any> = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div
      className={`xl:bg-canvas border bg-surface xl:border-none border-line w-full py-4 px-4 relative ${
        isActive ? "rounded-card" : "rounded-pill"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-display font-semibold tracking-wide text-brand-700 xl:text-base text-sm px-2">STATUS</div>
        <div className="flex items-center gap-2">
          {isActive && (
            <button
              type="button"
              aria-label="Clear status filters"
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
            aria-label={isActive ? "Collapse status filters" : "Expand status filters"}
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
          <div className="relative mt-4">
            <div className={`flex flex-col gap-0.5 pb-3 px-1.5 max-h-80 ${scrollBar.ScrollBar}`}>
              {StateCheckBoxes.map((el: any) => (
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
              <div className={`w-3 h-3 ml-2 fill-white`}>
                <SvgShowMore />
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StateFilter;
