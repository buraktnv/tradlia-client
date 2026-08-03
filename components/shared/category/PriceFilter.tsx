import { FC, useState } from "react";
import CustomCheckBox from "./CustomCheckBox";
import scrollBar from "../ScrollBar.module.scss";
import { SvgClose, SvgPriceFilter, SvgShowMore } from "../../../helpers/svgs/category";

const SidebarPriceDate: any = [
  {
    id: 0,
    name: "$1-250",
  },
  {
    id: 1,
    name: "$250-500",
  },
  {
    id: 2,
    name: "$501-750",
  },
  {
    id: 3,
    name: "$751-1000",
  },
  {
    id: 4,
    name: "$1001-500",
  },
  {
    id: 5,
    name: "$1501-2000",
  },
  {
    id: 6,
    name: "$2001-2500",
  },
  {
    id: 7,
    name: "$25001-50000",
  },
];

const PriceFilter: FC<any> = ({ content }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div
      className={`xl:bg-[#F7F7FA] border bg-white xl:border-none border-[#4CBEC580] w-full py-4 px-4 relative ${
        isActive ? "rounded-3xl" : "rounded-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold text-[#4CBEC5] xl:text-base text-sm">PRICE RANGE</div>
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
          <div className="relative mt-4 pb-[1rem]">
            <div className="grid grid-cols-5 gap-2">
              <input
                type="text"
                name=""
                id=""
                value={0}
                className="col-span-2 py-1 text-center font-medium text-[#7E8096] text-sm rounded-full outline-none border border-[#00b2b27f] mx-1"
              />
              <input
                type="text"
                name=""
                id=""
                value={"50,000"}
                className="col-span-2 py-1 text-sm text-center font-medium text-[#7E8096] rounded-full outline-none border border-[#00b2b27f] mx-1"
              />
              <button type="button" className="bg-[#4CBEC5] rounded-full flex items-center justify-center">
                <div className="w-5 h-4">
                  <SvgPriceFilter />
                </div>
              </button>
            </div>
            <div className={`px-1.5 ${scrollBar.ScrollBar}`}>
              {SidebarPriceDate.map((el: any) => (
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

export default PriceFilter;
