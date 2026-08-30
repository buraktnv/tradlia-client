import React, { FC } from "react";
import BrandFilter from "../shared/category/BrandFilter";
import PriceFilter from "../shared/category/PriceFilter";
import StateFilter from "../shared/category/StateFilter";

const switchItems: any = [
  {
    id: 1,
    title: "Hand Tools",
  },
  {
    id: 2,
    title: "Power Tools",
  },
  {
    id: 3,
    title: "Measuring Instruments",
  },
  {
    id: 4,
    title: "Fasteners",
  },
  {
    id: 5,
    title: "Safety Equipment",
  },
  {
    id: 6,
    title: "Workshop Consumables",
  },
];

const Sidebar: FC<any> = () => {
  return (
    <div className="flex flex-col w-full text-ink-soft">
      <div className="bg-surface rounded-card shadow-card border border-line w-full py-4 pl-5 pr-3 mb-5">
        <div className="text-xs uppercase tracking-wide font-medium pb-3 text-ink-muted">53 Products</div>
        {switchItems.map((el: any) => (
          <div
            key={el.id}
            className="text-sm cursor-pointer leading-7 rounded-card px-2 -mx-2 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 hover:bg-brand-50"
          >
            {el.title}
          </div>
        ))}
      </div>
      <div className="mb-5">
        <BrandFilter />
      </div>
      <div>
        <StateFilter />
      </div>
      <div className="mt-5">
        <PriceFilter />
      </div>
    </div>
  );
};

export default Sidebar;
