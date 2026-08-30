import { FC, useState } from "react";
import { SvgPrintShipping, SvgShowMore } from "../../../helpers/svgs/receiptSvg";

const ShippingInfo: FC<any> = ({ content }) => {
  const [active, setActive] = useState<boolean>(content.active || false);
  return (
    <div className="flex w-full flex-col text-[12px] leading-3 xl:text-sm">
      <button type="button"
        aria-expanded={active}
        onClick={() => setActive((pre) => !pre)}
        className={`flex items-center justify-between rounded-pill border px-4 font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 xl:px-5 ${
          active ? "border-line bg-canvas text-ink" : "border-line bg-surface text-ink-muted hover:bg-canvas"
        }`}
      >
        <p>Shipping Information</p>
        <span
          className={`h-3 w-3 transform cursor-pointer fill-current duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none ${active ? "rotate-0 text-brand-500" : "rotate-180 text-brand-500"}`}
        >
          <SvgShowMore />
        </span>
      </button>
      {active && (
        <div className="my-4 flex flex-col justify-between gap-6">
          <div className="flex gap-1 text-ink-soft">
            <b className="inline-block min-w-max font-medium text-brand-600">Tracking No:</b>
            <span className="tabular-nums">{content.trackingNumber}</span>
          </div>
          <div className="flex justify-between gap-3 xl:flex-col xl:justify-start xl:gap-6">
            <div className="h-8 w-32 text-ink-soft fill-current xl:h-10">{content.image}</div>
            <button type="button" className="inline-flex w-max items-center justify-center gap-2 rounded-pill border border-line bg-surface px-3 py-2 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:bg-brand-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1">
              <span className="h-4 w-7 fill-current text-brand-600 xl:h-6 xl:w-9">
                <SvgPrintShipping />
              </span>
              <span className="text-[11px] font-medium leading-3 text-ink-soft xl:text-sm">Track Shipment</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShippingInfo;
