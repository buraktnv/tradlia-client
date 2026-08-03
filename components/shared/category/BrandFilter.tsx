import { FC, useState } from "react";
import { SvgClose, SvgSearch, SvgShowMore } from "../../../helpers/svgs/category";
import CustomCheckBox from "./CustomCheckBox";
import scrollBar from "../ScrollBar.module.scss";

const CheckBoxes: any = [
  { id: 1, name: "Summit" },
  { id: 2, name: "DermaCare" },
  { id: 3, name: "Naturis" },
  { id: 4, name: "Ausganica" },
  {
    id: 5,
    name: "Sabri Turner",
  },
  {
    id: 6,
    name: "Vea Veta",
  },
  { id: 7, name: "Tto" },
  { id: 8, name: "LifeCare" },
  { id: 9, name: "CleanTex" },
  { id: 10, name: "Tto" },
  { id: 11, name: "LifeCare" },
  { id: 12, name: "CleanTex" },
];

const BrandFilter: FC<any> = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <div
      className={`bg-white xl:bg-[#F7F7FA] w-full py-4 px-4 relative xl:border-none border border-[#4CBEC580] ${
        isActive ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold text-[#4CBEC5] xl:text-base text-sm">BRANDS</div>
        <div className="flex items-center gap-2">
          {isActive && (
            <button type="button" className="flex items-center border xl:border-none border-[#4CBEC5]  gap-2 text-[#7E8096] bg-white rounded-full px-2 py-1 text-xs">
              Clear
              <div className="w-2 h-2">
                <SvgClose />
              </div>
            </button>
          )}
          <div
            className={`w-4 h-4 text-[#4CBEC5] cursor-pointer transform transition ease-in-out duration-300 ${
              isActive ? "rotate-0" : "rotate-180"
            }`}
            onClick={() => setIsActive((pre: any) => !pre)}
          >
            <SvgShowMore />
          </div>
        </div>
      </div>
      {isActive && (
        <>
          <div className="relative mt-4 pb-[1.5rem]">
            <input
              type="text"
              className="w-full pl-2 mb-2 px-8 py-1.5 rounded-full placeholder:text-[#4CBEC5] border border-[#4CBEC5] text-center text-sm focus:outline-none"
              placeholder="Search Brand"
            />
            <button type="button" className="absolute w-4 h-4 top-2 right-4">
              <SvgSearch />
            </button>
            <div className={`px-1.5 max-h-80 overflow-y-scroll ${scrollBar.ScrollBar}`}>
              {CheckBoxes.map((el: any) => (
                <CustomCheckBox key={el.id} name={el.name} />
              ))}
            </div>
          </div>
          <div className="absolute left-0 flex justify-center w-full text-white rounded-full -bottom-3">
            <button type="button"
              className="flex items-center justify-between px-3 py-1 w-max bg-[#C2C7D3]  rounded-full"
              onClick={() => setIsActive(false)}
            >
              Show Less
              <div className="w-3 h-3 ml-2 fill-white">
                <SvgShowMore />
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BrandFilter;
