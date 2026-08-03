import React, { FC } from "react";
import BasketCampaign from "./BasketCampaign";
import BasketInfo from "./BasketInfo";

const Sidebar: FC<any> = ({ setActivePage, activePage }) => {
  return (
    <div className="flex flex-col gap-3 xl:gap-[1rem]">
      <BasketInfo setActivePage={setActivePage} />
      {activePage === "basket" && (
        <>
          <BasketCampaign
            content={{
              header: "Tradlia\n Spring Campaign",
              description: "Campaign Concept Design to be Applied",
            }}
            style={{
              container: "bg-[#E5F3F3] border border-[#00B1B265]",
              header: "text-[#4CBEC5]",
            }}
          />
          <BasketCampaign
            content={{
              header: "Tradlia\n Discount Opportunities",
              description: "Discount Concept Design to be Adapted",
            }}
            style={{
              container: "bg-[#FBF0EA] border border-[#F5D1C165]",
              header: "text-[#F59C00]",
            }}
          />

          <div className="bg-[#4CBEC5] rounded-full flex h-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Coupon Code"
              className="px-4 py-2.5 text-sm bg-white ring-[1px] ring-[#4CBEC5] border-transparent rounded-full outline-none text-center text-[#7E8096] w-3/4 placeholder:text-[#7E8096]"
            />
            <button type="button" className="w-1/4 text-sm font-medium text-white">Add</button>
          </div>
          <div className="bg-[#4CBEC5] rounded-full flex w-full h-full">
            <div className="relative flex w-3/4">
              <select
                name=""
                id=""
                className="px-4 py-2.5 text-sm bg-white ring-[1px] ring-[#4CBEC5] border-transparent rounded-full outline-none text-center text-[#7E8096] w-full appearance-none"
              >
                <option value="Select Discount Coupon">Select Discount Coupon</option>
              </select>
              <div className="absolute right-5 top-3.5 text-[#4CBEC5]">
                <div className="w-3 h-3">
                  <SvgShowMore />
                </div>
              </div>
            </div>

            <button type="button" className="w-1/4 text-sm font-medium text-white">Add</button>
          </div>
        </>
      )}
    </div>
  );
};

const SvgShowMore: FC<any> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 22.311 12.801">
    <path
      id="Path_510"
      data-name="Path 510"
      d="M2674.523,1709.048a1.643,1.643,0,0,0-2.326,0l-8.347,8.346-8.347-8.346a1.645,1.645,0,0,0-2.326,2.326l9.51,9.511a1.645,1.645,0,0,0,2.326,0l9.51-9.511A1.643,1.643,0,0,0,2674.523,1709.048Z"
      transform="translate(-2652.695 -1708.566)"
      fill="currentColor"
    />
  </svg>
);

export default Sidebar;
