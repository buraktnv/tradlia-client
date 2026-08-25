import { FC, useState } from "react";
import { SvgClose, SvgSearch, SvgShowMore } from "../../../helpers/svgs/category";
import CustomCheckBox from "./CustomCheckBox";
import scrollBar from "../ScrollBar.module.scss";

const CheckBoxes: any = [
  { id: 1, name: "Summit" },
  { id: 2, name: "DermaCare" },
  { id: 3, name: "Naturis" },
  { id: 4, name: "Ausganica" },
  {
    id: 5,
    name: "Sabri Turner",
  },
  {
    id: 6,
    name: "Vea Veta",
  },
  { id: 7, name: "Tto" },
  { id: 8, name: "LifeCare" },
  { id: 9, name: "CleanTex" },
  { id: 10, name: "Tto" },
  { id: 11, name: "LifeCare" },
  { id: 12, name: "CleanTex" },
];

const BrandFilter: FC<any> = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div
      className={`bg-surface xl:bg-canvas w-full py-4 px-4 relative xl:border-none border border-line ${
        isActive ? "rounded-card" : "rounded-pill"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-display font-semibold tracking-wide text-brand-700 xl:text-base text-sm">BRANDS</div>
        <div className="flex items-center gap-2">
          {isActive && (
            <button
              type="button"
              aria-label="Clear brand filters"
              className="flex items-center border xl:border-none border-line gap-2 text-ink-soft bg-surface rounded-pill px-2 py-1 text-xs transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-400 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
            >
              Clear
              <div className="w-2 h-2">
                <SvgClose />
              </div>
            </button>
          )}
          <button
            type="button"
            aria-label={isActive ? "Collapse brand filters" : "Expand brand filters"}
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
          <div className="relative mt-4 pb-[1.5rem]">
            <input
              type="text"
              className="w-full pl-2 mb-2 px-8 py-1.5 rounded-pill placeholder:text-ink-muted border border-line text-ink text-center text-sm focus:outline-none focus:border-brand-400 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none"
              placeholder="Search Brand"
            />
            <button type="button" aria-label="Search brands" className="absolute w-4 h-4 top-2 right-4 text-ink-muted">
              <SvgSearch />
            </button>
            <div className={`px-1.5 max-h-80 overflow-y-scroll ${scrollBar.ScrollBar}`}>
              {CheckBoxes.map((el: any) => (
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

export default BrandFilter;
