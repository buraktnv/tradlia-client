import React, { FC } from "react";
import { SvgM } from "../../../helpers/svgs/walletSvg";

const discountList = [
  {
    id: 0,
    seller: "Tradlia",
    amounts: "200",
    discount: "20,00",
  },
  {
    id: 1,
    seller: "PlusStore",
    amounts: "300",
    discount: "30,00",
  },
  {
    id: 2,
    amounts: "500",
    seller: "MediSupply",
    discount: "50,00",
  },
  {
    id: 3,
    seller: "Tradlia",
    amounts: "200",
    discount: "20,00",
  },
  {
    id: 4,
    seller: "PlusStore",
    amounts: "300",
    discount: "30,00",
  },
  {
    id: 5,
    amounts: "500",
    seller: "MediSupply",
    discount: "50,00",
  },
  {
    id: 6,
    seller: "Tradlia",
    amounts: "200",
    discount: "20,00",
  },
  {
    id: 7,
    seller: "PlusStore",
    amounts: "300",
    discount: "30,00",
  },
  {
    id: 8,
    amounts: "500",
    seller: "MediSupply",
    discount: "50,00",
  },
];

const DiscountCoupons: FC<any> = () => {
  return (
    <div className="grid px-5 xl:px-0 bg-white xl:h-full rounded-2xl py-5 xl:bg-transparent sm:grid-cols-2 xl:grid-cols-3 drop-shadow-md xl:drop-shadow-none gap-[1.5rem] h-full">
      {discountList &&
        discountList.map((content) => (
          <div className="flex" key={content.id}>
            <Card content={content} />
          </div>
        ))}
    </div>
  );
};

const Card: FC<any> = ({ content }) => {
  return (
    <div className="text-[#7E8096] flex bg-[#FBF0EA] p-3 rounded-3xl relative w-full border border-[#F5D1C1]">
      <div className="absolute top-0 right-0 h-full text-[#FAE9E1] ">
        <SvgM />
      </div>
      <div className="relative z-10 flex flex-col justify-between w-full gap-2 px-2 border-r-2 border-dashed border-[#F5D1C1] xl:w-full xl:px-4">
        <p className="w-full xl:text-base text-[15px] whitespace-pre-line">
          <b> {content.amounts} $</b> and Above{"\n"} Valid on Purchases
        </p>

        <div className="flex gap-1">
          Seller: <h3 className="text-[#EA5B0C] font-bold">{content.seller}</h3>
        </div>
        <div className="absolute w-4 h-4 bg-white rounded-full rounded-t-none rounded-r-none -right-0.5 -top-3.5 border-l border-b border-[#F5D1C1]"></div>
        <div className="absolute w-4 h-4 bg-white rounded-full rounded-b-none rounded-r-none -right-0.5 -bottom-3.5 border-l border-t border-[#F5D1C1]"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-2 xl:px-1 xl:pl-4">
        <div className="absolute w-4 h-4 bg-white rounded-full rounded-t-none rounded-l-none -left-0.5 -top-3.5 border-r border-b border-[#F5D1C1]"></div>
        <div className="absolute w-4 h-4 bg-white rounded-full rounded-b-none rounded-l-none -left-0.5 -bottom-3.5 border-r border-t border-[#F5D1C1]"></div>
        <div className="flex gap-1">
          <div className="text-[40px] leading-[40px] font-bold tracking-tight">{content.discount.split`,`[0]}</div>
          <div className="flex flex-col items-center text-[16px] leading-[18px] justify-center font-medium">
            <b>,{content.discount.split`,`[1]}</b>
            <b>$</b>
          </div>
        </div>
        <div>
          <button type="button" className="bg-[#EA5B0C] xl:px-6 px-5 py-1 rounded-full text-white font-bold text-sm">Use</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCoupons;
