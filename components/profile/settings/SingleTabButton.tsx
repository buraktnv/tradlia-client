import { FC } from "react";
import { SingleTabButtonProps } from "./properties";

const SingleTabButton: FC<SingleTabButtonProps> = ({ text, icon, activeTab, setActiveTab, tab, color }) => {
  const isActiveTab = activeTab === tab;
  return (
    <div className="col-span-1 flex items-center w-full p-1">
      <div
        className={`flex items-center justify-center cursor-pointer group rounded-2xl py-2 w-full text-white ${
          isActiveTab ? "bg-[" + color + "]" : "hover:bg-[" + color + "]"
        }`}
        onClick={() => setActiveTab(tab)}
      >
        <div
          className={`w-6 h-6 ${activeTab === tab ? "text-white" : "group-hover:text-white text-[" + color + "]"}`}
        >
          {icon}
        </div>
        <h3
          className={`ml-1  font-medium text-xs ${
            isActiveTab ? "text-white" : "text-[#7E8096] group-hover:text-white"
          }`}
        >
          {text}
        </h3>
      </div>
    </div>
  );
};

export default SingleTabButton;
