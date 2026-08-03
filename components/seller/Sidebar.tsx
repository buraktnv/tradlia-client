import React, { FC } from "react";
import BrandFilter from "../shared/category/BrandFilter";
import PriceFilter from "../shared/category/PriceFilter";
import StateFilter from "../shared/category/StateFilter";

const switchItems: any = [
  {
    id: 1,
    title: "Glass Ionomers",
  },
  {
    id: 2,
    title: "Fillings",
  },
  {
    id: 3,
    title: "Hand Instruments",
  },
  {
    id: 4,
    title: "Orthodontics",
  },
  {
    id: 5,
    title: "Prosthesis & Impression Materials",
  },
  {
    id: 6,
    title: "Dental Consumables",
  },
];

const Sidebar: FC<any> = () => {
  return (
    <div className="flex flex-col w-full text-[#7E8096]">
      <div className="bg-[#F7F7FA] rounded-2xl w-full  font-medium leading-5 py-4 pl-5 mb-5">
        <div className=" text-sm font-medium pb-3 text-[#4CBEC5] ">53 Products</div>
        {switchItems.map((el: any) => (
          <div key={el.id} className=" text-sm hover:text-[#4CBEC5] cursor-pointer leading-7">
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
