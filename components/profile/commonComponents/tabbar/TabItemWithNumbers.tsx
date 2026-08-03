import React, { FC } from "react";

const TabItem: FC<any> = ({ tab, activeTab, setActiveTab, style, text, icon, number }) => {
  return (
    <div className="h-full sm:h-[2.4rem] col-span-1 cursor-pointer select-none group" onClick={() => setActiveTab(tab)}>
      <div
        className={`flex gap-2 h-full bg-white px-3 xl:px-4 items-center w-full rounded-[1.3rem] py-3 transition-all duration-150 ease-in-out ${
          activeTab === tab
            ? `${style.bgColor} text-white shadow-md`
            : `${style.hoverBG} group-hover:text-white group-hover:shadow-md ${style.icon}`
        }`}
      >
        <div className={`col-span-1 flex`}>
          <div className="w-4 h-4 sm:w-6 sm:h-6">{icon}</div>
        </div>
        <div
          className={`col-span-5 tracking-tight whitespace-nowrap xl:col-span-3 text-[11px] leading-3 sm:text-sm xl:block flex gap-2 justify-between items-center font-medium xl:text-[0.9rem] transition-all duration-150 ease-in-out text-center ${
            activeTab === tab ? "text-white" : `group-hover:text-white xl:text-[#7E8096] ${style.text}`
          }`}
        >
          {text}
          <p
            className={`text-center text-sm whitespace-pre-line leading-none ${
              activeTab === tab ? `text-white` : `group-hover:text-white ${style.number}`
            }`}
          >
            {number}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabItem;
