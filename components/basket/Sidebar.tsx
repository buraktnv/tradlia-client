import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import BasketCampaign from "./BasketCampaign";
import BasketInfo from "./BasketInfo";

const discountOptions = ["TRADLIA10", "WELCOME5", "MEDI20"];

const Sidebar: FC<any> = ({ setActivePage, activePage, basketData }) => {
  const [coupon, setCoupon] = useState<string>("");
  const [discount, setDiscount] = useState<string>("Select Discount Coupon");
  const [appliedCoupons, setAppliedCoupons] = useState<string[]>([]);

  const applyCoupon = () => {
    const code = coupon.trim();
    if (!code) {
      toast.error("Please enter a coupon code.");
      return;
    }
    if (appliedCoupons.includes(code)) {
      toast.info("This coupon is already applied.");
      return;
    }
    setAppliedCoupons((pre) => [...pre, code]);
    setCoupon("");
    toast.success(`Coupon ${code} applied.`);
  };

  const applyDiscount = () => {
    if (discount === "Select Discount Coupon") {
      toast.error("Please choose a discount coupon first.");
      return;
    }
    if (appliedCoupons.includes(discount)) {
      toast.info("This coupon is already applied.");
      return;
    }
    setAppliedCoupons((pre) => [...pre, discount]);
    setDiscount("Select Discount Coupon");
    toast.success(`Coupon ${discount} applied.`);
  };

  return (
    <div className="flex flex-col gap-3 xl:gap-[1rem]">
      <BasketInfo setActivePage={setActivePage} basketData={basketData} />
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

          {appliedCoupons.length > 0 && (
            <div className="flex flex-wrap gap-2 rounded-2xl border border-[#00B1B265] bg-white px-4 py-3">
              {appliedCoupons.map((code) => (
                <span
                  key={code}
                  className="rounded-full bg-[#E5F3F3] px-3 py-1 text-xs font-bold text-[#4CBEC5]"
                >
                  {code}
                </span>
              ))}
            </div>
          )}

          <div className="bg-[#4CBEC5] rounded-full flex h-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") applyCoupon();
              }}
              className="px-4 py-2.5 text-sm bg-white ring-[1px] ring-[#4CBEC5] border-transparent rounded-full outline-none text-center text-[#7E8096] w-3/4 placeholder:text-[#7E8096]"
            />
            <button type="button" onClick={applyCoupon} className="w-1/4 text-sm font-medium text-white">
              Add
            </button>
          </div>
          <div className="bg-[#4CBEC5] rounded-full flex w-full h-full">
            <div className="relative flex w-3/4">
              <select
                name=""
                id=""
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="px-4 py-2.5 text-sm bg-white ring-[1px] ring-[#4CBEC5] border-transparent rounded-full outline-none text-center text-[#7E8096] w-full appearance-none"
              >
                <option value="Select Discount Coupon">Select Discount Coupon</option>
                {discountOptions.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
              <div className="absolute right-5 top-3.5 text-[#4CBEC5] pointer-events-none">
                <div className="w-3 h-3">
                  <SvgShowMore />
                </div>
              </div>
            </div>

            <button type="button" onClick={applyDiscount} className="w-1/4 text-sm font-medium text-white">
              Add
            </button>
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
