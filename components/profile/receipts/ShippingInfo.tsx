import { FC, useState } from "react";
import { SvgPrintShipping, SvgShowMore } from "../../../helpers/svgs/receiptSvg";

const ShippingInfo: FC<any> = ({ content }) => {
  const [active, setActive] = useState<boolean>(content.active || false);
  return (
    <div className="flex w-full flex-col text-[12px] leading-3 xl:text-sm">
      <div
        onClick={() => setActive((pre) => !pre)}
        className={`flex justify-between items-center px-4 xl:px-6 py-3 rounded-full font-medium border border-[#00B1B2] text-[#4CBEC5] ${
          !active && "xl:mb-[2rem]"
        }`}
      >
        <p>Shipping Information</p>
        <div
          className={`w-4 h-4 xl:mx-4 transform cursor-pointer duration-300 ease-out ${
            active ? "rotate-0" : "rotate-180"
          }`}
        >
          <SvgShowMore />
        </div>
      </div>
      {active && (
        <div className="flex flex-col justify-between gap-8 px-3 my-4 xl:px-6">
          <div className="flex gap-1 text-[#7E8096]">
            <b className="inline-block font-bold text-[#4CBEC5] min-w-max">Tracking No:</b>
            {content.trackingNumber}
          </div>
          <div className="flex justify-between gap-3 xl:justify-start xl:flex-col xl:gap-8">
            <div className="h-8 xl:h-10 w-32">{content.image}</div>
            <button type="button" className="flex gap-2 items-center justify-center px-3 py-2 border-[#5327A8] border rounded-full w-max">
              <div className="xl:w-7 w-5 h-4 xl:h-7 text-[#5327A8]">
                <SvgPrintShipping />
              </div>
              <h3 className="font-bold text-[#7E8096] text-[11px] leading-3 xl:text-sm">Track Shipment</h3>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShippingInfo;
