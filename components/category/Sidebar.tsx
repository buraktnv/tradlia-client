import { FC, useState } from "react";
import { SvgMinus, SvgPlus, SvgShowMore } from "../../helpers/svgs/category";
import BrandFilter from "../shared/category/BrandFilter";
import PriceFilter from "../shared/category/PriceFilter";
import StateFilter from "../shared/category/StateFilter";

const switchItems: any = [
  {
    id: 1,
    title: "Skin Cleanser",
    subCategories: [
      "Antibacterial and Alcohol Wipes",
      "Disinfectant Devices and Tools",
      "Hand and Skin Disinfectant",
      "Cleansing Gel",
    ],
    isOpen: false,
    activeCategory: true,
    activeSubCategory: "Disinfectant Devices and Tools",
  },
  {
    id: 2,
    title: "Thermometer",
    subCategories: [
      "Antibacterial and Alcohol Wipes",
      "Disinfectant Devices and Tools",
      "Hand and Skin Disinfectant",
      "Cleansing Gel",
    ],
    isOpen: false,
    activeCategory: false,
    activeSubCategory: "Disinfectant Devices and Tools",
  },
  {
    id: 3,
    title: "Skin Cleanser",
    subCategories: [
      "Antibacterial and Alcohol Wipes",
      "Disinfectant Devices and Tools",
      "Hand and Skin Disinfectant",
      "Cleansing Gel",
    ],
    isOpen: false,
    activeCategory: false,
    activeSubCategory: "Disinfectant Devices and Tools",
  },
  {
    id: 4,
    title: "Skin Cleanser",
    subCategories: [
      "Antibacterial and Alcohol Wipes",
      "Disinfectant Devices and Tools",
      "Hand and Skin Disinfectant",
      "Cleansing Gel",
    ],
    isOpen: false,
    activeCategory: false,
    activeSubCategory: "Disinfectant Devices and Tools",
  },
];

const SidebarSwitchMenu: FC<any> = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className="bg-[#F7F7FA] rounded-2xl w-full py-4 px-4 relative xl:pb-[1.5rem] hidden xl:block">
      <div>
        {isActive
          ? switchItems.slice(0, 3).map((el: any) => <SwitchMenu content={el} key={el.id} />)
          : switchItems.map((el: any) => <SwitchMenu content={el} key={el.id} />)}
      </div>
      {!isActive ? (
        <div className="absolute left-0 flex justify-center w-full text-white rounded-full -bottom-3">
          <button type="button"
            className="flex items-center justify-between px-3 py-1 w-max bg-[#C2C7D3]  rounded-full"
            onClick={() => setIsActive(true)}
          >
            Show Less
            <div className="w-3 h-3 ml-2 fill-white">
              <SvgShowMore />
            </div>
          </button>
        </div>
      ) : (
        <div className="absolute left-0 flex justify-center w-full text-white rounded-full -bottom-3">
          <button type="button"
            className="flex items-center justify-between px-3 py-1 w-max bg-[#C2C7D3]  rounded-full"
            onClick={() => setIsActive(false)}
          >
            Show More
            <div className={`w-3 h-3 ml-2 fill-white transform ${isActive && "rotate-180"} duration-200`}>
              <SvgShowMore />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

const Sidebar: FC<any> = ({ setSidebar }) => {
  return (
    <div className="flex flex-col w-full text-[#7E8096] bg-[#F2F2F2] xl:bg-white min-h-[150vh] xl:min-h-fit h-full p-3 gap-[1rem] xl:p-0 xl:gap-[1.3rem]">
      <div className="justify-between w-full bg-[#4CBEC5] text-white rounded-full px-4 py-3 hidden xl:flex xl:h-[3rem] xl:mb-[0.2rem]">
        <h3 className="font-bold">Skin Cleanser</h3> <h5 className="font-medium">53 Products</h5>
      </div>
      <div className="text-xs bg-white border border-[#00B1B280] flex w-max rounded-full gap-2 px-3 items-center py-0.5 cursor-pointer select-none xl:hidden -mb-[0.3rem] xl:mb-0">
        Clear all filters <strong>x</strong>
      </div>
      <SidebarSwitchMenu />
      <div>
        <BrandFilter />
      </div>
      <div>
        <StateFilter />
      </div>
      <div>
        <PriceFilter />
      </div>
      <button type="button"
        className="w-full text-white rounded-full bg-[#4CBEC5] py-3 xl:h-10 xl:mt-4"
        onClick={() => setSidebar(false)}
      >
        APPLY FILTERS
      </button>
    </div>
  );
};

const SwitchMenu: FC<any> = ({ content }) => {
  const [state, setState] = useState<any>(false);

  return (
    <div className="py-3">
      <div className="flex items-center justify-between pr-2 font-medium">
        <h2 className={`${content.activeCategory && "text-[#4CBEC5]"}`}>{content?.title}</h2>
        <button type="button" onClick={() => setState((pre: boolean) => !pre)}>
          <div className="w-4 h-4">{content.isOpen || state ? <SvgMinus /> : <SvgPlus />}</div>
        </button>
      </div>

      <div className="flex flex-col gap-2 pl-5 pr-8">
        {(content.isOpen || state) &&
          content?.subCategories?.map((el: string, key: number) => {
            return (
              <div
                key={key}
                className={`${content.activeSubCategory == el ? "text-[#4CBEC5]" : "hover:text-[#4CBEC5]"}`}
              >
                {el}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
