import { FC } from "react";
import Image from "next/image";

interface IFilterItem {
  id: number;
  text1: string;
  icon: string;
  iconClass: string;
  textClass: string;
  bgItem: string;
}

const FilterSelection: FC<any> = () => {
  const jsonFilterList = [
    {
      id: 1,
      text1: "Best Sellers",
      icon: "/images/giftIcon.svg",
      iconClass: "bg-gradient-to-r from-[#FF516B] to-[#FF0045]",
      textClass: "text-[#E8336E]",
      bgItem: "hidden",
    },
    {
      id: 2,
      text1: "BEST CATEGORY",
      icon: "/images/Group399.svg",
      iconClass: "bg-gradient-to-r from-[#FFBE00] to-[#FF7B03]",
      textClass: "text-[#F59C00]",
      bgItem: "hidden",
    },
    {
      id: 3,
      text1: "WOUND CARE PRODUCTS",
      icon: "/images/photos/product-10.svg",
      iconClass: "bg-gradient-to-r from-[#66C1BF] to-[#00A29D]",
      textClass: "text-[#4CBEC5]",
      bgItem: "hidden",
    },
    {
      id: 4,
      text1: "MEDISUPPLY",
      icon: "/images/Group415.svg",
      iconClass: "",
      textClass: "text-[#7E8096]",
      bgItem: "",
    },
    {
      id: 5,
      text1: "PHARMADIRECT",
      icon: "/images/Group447.svg",
      iconClass: "",
      textClass: "text-[#7E8096]",
      bgItem: "",
    },
    {
      id: 6,
      text1: "WHOLESALEX",
      icon: "/images/Group415.svg",
      iconClass: "",
      textClass: "text-[#7E8096]",
      bgItem: "",
    },
    {
      id: 7,
      text1: "NATUREMED",
      icon: "/images/Group447.svg",
      iconClass: "",
      textClass: "text-[#7E8096]",
      bgItem: "",
    },
    {
      id: 8,
      text1: "MEDINEED",
      icon: "/images/Group415.svg",
      iconClass: "",
      textClass: "text-[#7E8096]",
      bgItem: "",
    },
    {
      id: 9,
      text1: "HEALTHHUB",
      icon: "/images/Group454.svg",
      iconClass: "",
      textClass: "text-[#7E8096]",
      bgItem: "",
    },
    {
      id: 10,
      text1: "PHARMADEPOT",
      icon: "/images/Group430.svg",
      iconClass: "",
      textClass: "text-[#7E8096]",
      bgItem: "",
    },
  ];

  return (
    <div className="flex flex-col w-full px-3 py-4 bg-white xl:my-0 xl:px-0">
      <div className="container mx-auto">
        <div className="flex w-full py-3 overflow-x-auto xl:justify-center xl:py-6 xl:gap-0">
          {jsonFilterList.map((el) => (
            <SingleFilterItem key={el.id} content={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SingleFilterItem: FC<{ content: IFilterItem }> = ({ content }) => {
  return (
    <span className="flex flex-col items-center justify-start w-full h-full cursor-pointer basis-1/5 min-w-[20%] xl:min-w-fit group">
      <span
        className={`${content.iconClass} relative rounded-full flex items-center justify-center xl:p-4 p-2.5 xl:h-24 xl:w-24 h-16 w-16 border-[4px] border-[#F4F5F7]`}
      >
        <div className={`absolute w-full h-full top-0 ${content.bgItem}`}>
          <Image src="/images/main/homepage/bg.svg" width={92} height={92} alt="bg" className="object-contain" />
        </div>
        <div className="relative w-full h-full duration-300 ease-in-out transform group-hover:scale-110 translate">
          <Image src={content.icon} fill sizes="100vw" alt="" />
        </div>
      </span>
      <span
        className={`font-bold text-center leading-3 mt-1 xl:mt-2 text-[10px] xl:text-sm uppercase ${content.textClass}`}
      >
        {content.text1}
      </span>
    </span>
  );
};

export default FilterSelection;
