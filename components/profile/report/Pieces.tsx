import { FC } from "react";
import { SvgShowMore } from "../../../helpers/svgs/reportSvg";

export const InputDate: FC<any> = ({ content, textColor }) => {
  return (
    <div className="relative flex w-full h-full">
      <input
        type="date"
        name=""
        id=""
        defaultValue={content.date.split`.`.reverse().join`-`}
        className="peer w-full font-medium text-[#A0A2AF] text-sm py-1.5 rounded-full px-1 md:px-4 outline-none "
      />
      <div className="absolute transition duration-300 ease-in-out transform rotate-180 peer-focus:rotate-0 right-2 top-3">
        <div className={`w-3 h-3 ${textColor}`}>
          <SvgShowMore />
        </div>
      </div>
    </div>
  );
};

export const InputSelect: FC<any> = ({ children, textColor }) => (
  <div className="relative w-full group">
    <select className="xl:drop-shadow-input-shadow peer appearance-none w-full h-full bg-white py-2 px-1 md:px-4 outline-none font-medium text-[#A0A2AF] rounded-full xl:border border-[#C6C6C69C] text-sm">
      {children}
    </select>
    <div className="transform transition rotate-180 peer-focus:rotate-0 ease-in-out duration-300 absolute right-4 top-3.5">
      <div className={`w-3 h-3 ${textColor}`}>
        <SvgShowMore />
      </div>
    </div>
  </div>
);
