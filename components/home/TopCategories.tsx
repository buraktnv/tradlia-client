import { Dispatch, FC, SetStateAction, useState } from "react";
import { SvgM } from "../../helpers/svgs/homeSvg";
import { ICategoryItem, jsonCategoryList } from "./jsonCategoryList";

interface SingleCategoryItemProps {
  content: ICategoryItem;
  selectedCategory: number | null;
  setSelectedCategory: Dispatch<SetStateAction<number | null>>;
}

// TODO There are items with the same id here ???
const SubCategoryList: any = [
  { id: 1, isActive: false, name: "Glass Ionomers" },
  { id: 2, isActive: false, name: "Scaling & Prophylaxis" },
  { id: 3, isActive: true, name: "Accessories" },
  { id: 4, isActive: false, name: "Disinfection & Sterilization" },
  { id: 5, isActive: false, name: "Glasses and Face Masks" },
  { id: 6, isActive: false, name: "Dental Unit & Accessories" },
  { id: 7, isActive: false, name: "Anesthesia" },
  { id: 8, isActive: false, name: "Air Water Syringes" },
  { id: 9, isActive: false, name: "Caps" },
  { id: 10, isActive: false, name: "Teeth" },
  { id: 11, isActive: false, name: "Whitening" },
  { id: 12, isActive: false, name: "Fillings" },
  { id: 13, isActive: false, name: "Surgical" },
  { id: 14, isActive: false, name: "Hand Instruments" },
  { id: 15, isActive: false, name: "Pediatric & Prophylaxis" },
  { id: 16, isActive: false, name: "Gloves" },
];

const TopCategories: FC<any> = ({ isOpen }) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 w-full transform h-3  bg-[#5327A8]  transition-all ease-in-out duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`hidden xl:flex flex-col w-full max-h-full bg-[#5327A8] ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-all ease-in-out duration-300`}
      >
        <div
          className={`flex container justify-between py-4 mx-auto space-x-8 ${
            isOpen ? "opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {jsonCategoryList.map((el: any) => (
            <SingleCategoryItem
              key={el.id}
              content={el}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              SubCategoryList={SubCategoryList}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SingleCategoryItem: FC<any> = ({ content, selectedCategory, setSelectedCategory, SubCategoryList }) => {
  const isActive = content.id === selectedCategory;

  return (
    <div className="group">
      <div className="relative">
        <div
          className="flex items-center group hover:cursor-pointer"
          onMouseEnter={() => {
            setSelectedCategory((pre: any) => (pre !== content.id ? content.id : null));
          }}
        >
          <span
            className={`relative h-14 w-14 p-2 rounded-2xl group-hover:bg-gradient-to-r transition duration-200 ease-in-out ${
              isActive && "bg-gradient-to-r from-[#66c1bf] to-[#00a29d]"
            }`}
          >
            <div className="absolute w-full h-full opacity-0 group-hover:opacity-100 transform duration-200 ease-in-out bg-gradient-to-r rounded-2xl group-hover:from-[#66c1bf] group-hover:to-[#00a29d] top-0 left-0"></div>
            {/* Bg Color Transition */}
            <content.icon isActive={isActive} />
            <span className="absolute invisible transition-shadow duration-300 ease-in-out group-hover:visible translate-y-4 bottom-0 left-2 rounded right-2 h-1 bg-gradient-to-r from-[#66c1bf] to-[#00a29d]"></span>
          </span>

          <div
            className={`text-sm ml-1 transition duration-200 ease-in-out font-semibold group-hover:text-[#66c1bf] ${
              isActive ? "text-[#66c1bf]" : "text-[#F4F5F9]"
            }`}
          >
            <p>{content.text1}</p>
            <p>{content.text2}</p>
          </div>
        </div>
        <div className="absolute top-0 z-30 w-full h-16 bg-transparent"></div>
        <div
          className={`absolute z-30 top-[72px] group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-10 invisible transition-all duration-300 ease-in-out flex ${content.align}`}
        >
          <div
            className={`bg-gradient-to-b from-[#66C1BF] to-[#00A29D] h-80  px-2 flex items-center justify-center ${content.rounded[0]} shadow-md`}
          >
            <div className="w-20 h-24 opacity-70">
              <content.icon isActive={true} />
            </div>
          </div>
          <div
            className={`grid grid-cols-2 text-xs bg-white w-[450px] px-6 shadow-md font-medium text-[#6F7081] py-8 ${content.rounded[1]}`}
          >
            {SubCategoryList.map((el: any) => (
              <button type="button"
                className="flex items-center gap-1 cursor-pointer whitespace-nowrap btnGroupHover hover:text-[#00A29D]"
                key={el.id}
              >
                {/*  <div className={`w-6 h-3 ${el.isActive ? "visible" : "invisible"} group-hover:`}> */}
                <div className={`w-6 h-3 svgIcon`}>
                  <SvgM />
                </div>
                {el.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
