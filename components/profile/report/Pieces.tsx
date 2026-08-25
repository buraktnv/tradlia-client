import { FC } from "react";
import { SvgShowMore } from "../../../helpers/svgs/reportSvg";

export const InputDate: FC<any> = ({ textColor, value, onChange }) => {
  return (
    <div className="relative flex h-full w-full">
      <input
        type="date"
        name=""
        id=""
        aria-label="Date range"
        value={value}
        onChange={onChange}
        className="peer w-full rounded-pill px-1 py-1.5 font-medium text-ink-muted text-sm outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-400/30 md:px-4"
      />
      <div className="absolute right-2 top-3 rotate-180 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0">
        <div className={`h-3 w-3 fill-current text-brand-500 ${textColor ?? ""}`}>
          <SvgShowMore />
        </div>
      </div>
    </div>
  );
};

export const InputSelect: FC<any> = ({ children, textColor, value, onChange }) => (
  <div className="group relative w-full">
    <select
      aria-label="Date range preset"
      value={value}
      onChange={onChange}
      className="peer h-full w-full appearance-none rounded-pill border border-line bg-surface px-1 py-2 font-medium text-ink-muted text-sm outline-none transition-colors duration-200 focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 md:px-4 xl:border-line"
    >
      {children}
    </select>
    <div className="absolute right-4 top-3.5 rotate-180 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0">
      <div className={`h-3 w-3 fill-current text-brand-500 ${textColor ?? ""}`}>
        <SvgShowMore />
      </div>
    </div>
  </div>
);
