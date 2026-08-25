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
    seller: "SupplyHub",
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
    seller: "SupplyHub",
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
    seller: "SupplyHub",
    discount: "50,00",
  },
];

const DiscountCoupons: FC<any> = () => {
  return (
    <div className="grid h-full gap-[1.5rem] py-5 sm:grid-cols-2 xl:h-full xl:grid-cols-3 xl:bg-transparent xl:px-0 xl:drop-shadow-none">
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
    <div className="relative flex w-full rounded-card border border-amber-400/40 bg-amberTint p-3 shadow-card">
      <div className="absolute right-0 top-0 h-full fill-current text-amber-400/25 ">
        <SvgM />
      </div>
      <div className="relative z-10 flex flex-col justify-between w-full gap-2 px-2 border-r-2 border-dashed border-amber-400/50 xl:w-full xl:px-4">
        <p className="w-full whitespace-pre-line text-[15px] leading-snug text-ink-soft xl:text-base">
          <b> {content.amounts} $</b> and Above{"\n"} Valid on Purchases
        </p>

        <div className="flex gap-1">
          Seller: <h3 className="font-medium text-amberDark">{content.seller}</h3>
        </div>
        <div className="absolute w-4 h-4 bg-surface rounded-pill rounded-b-none rounded-r-none -right-0.5 -top-3.5 border-l border-b border-amber-400/50"></div>
        <div className="absolute w-4 h-4 bg-white rounded-full rounded-b-none rounded-r-none -right-0.5 -bottom-3.5 border-l border-t border-amber-400/50"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 px-2 xl:px-1 xl:pl-4">
        <div className="absolute w-4 h-4 bg-surface rounded-pill rounded-b-none rounded-l-none -left-0.5 -top-3.5 border-r border-b border-amber-400/50"></div>
        <div className="absolute w-4 h-4 bg-white rounded-full rounded-b-none rounded-l-none -left-0.5 -bottom-3.5 border-r border-t border-amber-400/50"></div>
        <div className="flex gap-1">
          <div className="font-display text-[40px] leading-[40px] font-bold tabular-nums tracking-tight text-ink">{content.discount.split`,`[0]}</div>
          <div className="flex flex-col items-center justify-center font-medium text-[16px] leading-[18px] tabular-nums text-ink">
            <b>,{content.discount.split`,`[1]}</b>
            <b>$</b>
          </div>
        </div>
        <div>
          <button type="button" className="rounded-pill bg-amber-500 px-5 py-1 font-semibold text-sm text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-amberDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:px-6">Use</button>
        </div>
      </div>
    </div>
  );
};

export default DiscountCoupons;
