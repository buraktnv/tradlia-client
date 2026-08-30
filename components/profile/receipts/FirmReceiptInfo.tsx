import { FC, useState } from "react";
import { SvgShowMore } from "../../../helpers/svgs/receiptSvg";

const FirmReceiptInfo: FC<any> = ({ content }) => {
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
        Member Invoice Information
        <span
          className={`h-3 w-3 transform cursor-pointer fill-current duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none ${active ? "rotate-0 text-brand-500" : "rotate-180 text-brand-500"}`}
        >
          <SvgShowMore />
        </span>
      </button>
      {active && (
        <div className="mt-3 flex flex-col gap-4 xl:flex-row xl:justify-between xl:gap-0">
          <div className="grid gap-2 xl:border-r xl:border-line xl:pr-12">
            <div className="grid grid-cols-3 gap-2 xl:block">
              <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-sm xl:normal-case xl:tracking-normal">Company Name</h3>
              <p className="col-span-2 whitespace-nowrap text-ink-soft">{content.name}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 xl:block">
              <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-sm xl:normal-case xl:tracking-normal">Tax No</h3>
              <p className="col-span-2 whitespace-nowrap text-ink-soft tabular-nums">{content.taxID}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 xl:block">
              <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-sm xl:normal-case xl:tracking-normal">Tax Office</h3>
              <p className="col-span-2 whitespace-nowrap text-ink-soft">{content.taxOffice}</p>
            </div>
          </div>
          <div className="grid gap-2 xl:pl-12">
            <div className="grid grid-cols-3 gap-2 xl:block">
              <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-sm xl:normal-case xl:tracking-normal">ID No</h3>
              <p className="col-span-2 whitespace-nowrap text-ink-soft tabular-nums">{content.TCNo}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 xl:block">
              <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-sm xl:normal-case xl:tracking-normal">Address</h3>
              <p className="leading-tight text-ink-soft">{content.address}</p>
            </div>
            <div className="grid grid-cols-3 gap-2 xl:block">
              <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-sm xl:normal-case xl:tracking-normal">Email</h3>
              <p className="col-span-2 whitespace-nowrap text-ink-soft">{content.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirmReceiptInfo;
