import { FC, useState } from "react";
import { SvgClose, SvgShowMore } from "../../../helpers/svgs/category";
import CustomCheckBox from "./CustomCheckBox";
import scrollBar from "../ScrollBar.module.scss";

const StateCheckBoxes: any = [
  { id: 0, name: "Shelf Life Over 12 Months" },
  { id: 1, name: "Free Shipping Campaigns" },
  { id: 2, name: "No Minimum Order" },
  { id: 3, name: "Rated Above 9.0" },
];

const StateFilter: FC<any> = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div
      className={`xl:bg-[#F7F7FA] border bg-white xl:border-none border-[#4CBEC580] w-full py-4 px-4 relative ${
        isActive ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold text-[#4CBEC5] xl:text-base text-sm px-2">STATUS</div>
        <div className="flex items-center gap-2">
          {isActive && (
            <button type="button" className="flex items-center gap-2 text-[#7E8096] bg-white rounded-full px-2 py-1 text-xs">
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
          <div className="relative mt-4">
            <div className={`flex flex-col gap-0.5 pb-3 px-1.5 max-h-80 ${scrollBar.ScrollBar}`}>
              {StateCheckBoxes.map((el: any) => (
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
              <div className={`w-3 h-3 ml-2 fill-white`}>
                <SvgShowMore />
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default StateFilter;
