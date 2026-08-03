import React, { FC, useState } from "react";
import { SvgShowMore } from "../../../helpers/svgs/receiptSvg";

const FirmReceiptInfo: FC<any> = ({ content }) => {
  const [active, setActive] = useState<boolean>(content.active || false);
  return (
    <div className="flex flex-col w-full text-[12px] leading-3 xl:text-sm">
      <div
        onClick={() => setActive((pre) => !pre)}
        className={`flex justify-between items-center px-4 xl:px-6 py-3 rounded-full font-medium border border-[#00B1B2] text-[#4CBEC5] ${
          !active && "xl:mb-[2rem]"
        }`}
      >
        Member Invoice Information
        <div
          className={`w-4 h-4 xl:mx-4 transform duration-300 ease-out cursor-pointer ${
            active ? "rotate-0" : "rotate-180"
          } `}
        >
          <SvgShowMore />
        </div>
      </div>
      {active && (
        <div className="flex flex-col gap-3 px-3 xl:px-6 xl:flex-row xl:justify-between">
          <div className="grid gap-2 mt-2 xl:my-4 xl:pr-16 xl:border-r border-[#00b2b2]">
            <div className="grid grid-cols-3 xl:block">
              <h3 className="font-bold text-[#4CBEC5]">Company Name</h3>
              <p className="text-[#7E8096] whitespace-nowrap col-span-2">{content.name}</p>
            </div>
            <div className="grid grid-cols-3 xl:block">
              <h3 className="font-bold text-[#4CBEC5]">Tax No</h3>
              <p className="text-[#7E8096] whitespace-nowrap col-span-2">{content.taxID}</p>
            </div>
            <div className="grid grid-cols-3 xl:block">
              <h3 className="font-bold text-[#4CBEC5]">Tax Office</h3>
              <p className="text-[#7E8096] whitespace-nowrap col-span-2">{content.taxOffice}</p>
            </div>
          </div>
          <div className="grid gap-2 xl:py-3 xl:pl-16">
            <div className="grid grid-cols-3 xl:block">
              <h3 className="font-bold text-[#4CBEC5]">ID No</h3>
              <p className="text-[#7E8096] whitespace-nowrap col-span-2">{content.TCNo}</p>
            </div>
            <div className="grid grid-cols-3 xl:block">
              <h3 className="font-bold text-[#4CBEC5]">Address</h3>
              <p className="text-[#7E8096] leading-tight">{content.address}</p>
            </div>
            <div className="grid grid-cols-3 xl:block">
              <h3 className="font-bold text-[#4CBEC5]">Email</h3>
              <p className="text-[#7E8096] whitespace-nowrap col-span-2">{content.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirmReceiptInfo;
