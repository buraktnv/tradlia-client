import React, { FC } from "react";

const TabItem: FC<any> = ({ tab, activeTab, setActiveTab, style, text, icon }) => {
  return (
    <div className="items-center col-span-1 cursor-pointer select-none group" onClick={() => setActiveTab(tab)}>
      <div
        className={`grid grid-cols-6 xl:grid-cols-4 px-2.5 h-10 xl:h-[2.4rem] items-center w-full gap-2 rounded-full xl:py-1.5 transition-all duration-150 ease-in-out ${
          style?.extraClass
        } ${
          activeTab === tab
            ? String(`${style.bgColor} text-white shadow-md`)
            : String(`${style.hoverBG} group-hover:text-white bg-white group-hover:shadow-md ${style.text}`)
        }`}
      >
        <div className={`col-span-1 flex w-full justify-center`}>
          <span className="w-[18px] h-[18px] xl:w-6 xl:h-6">{icon}</span>
        </div>
        <h3
          className={`col-span-5 xl:col-span-3 ml-1 font-medium text-[11px] leading-3 xl:text-[0.8rem] transition-all duration-150 ease-in-out ${
            activeTab === tab ? "text-white" : "group-hover:text-white xl:text-[#7E8096]"
          }`}
        >
          {text}
        </h3>
      </div>
    </div>
  );
};

export default TabItem;
