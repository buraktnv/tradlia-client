import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
      icon: "/images/filter-best-sellers.svg",
      iconClass: "bg-gradient-to-r from-[#FF516B] to-[#FF0045]",
      textClass: "text-[#E8336E]",
      bgItem: "hidden",
    },
    {
      id: 2,
      text1: "Best Category",
      icon: "/images/filter-best-category.svg",
      iconClass: "bg-gradient-to-r from-[#FFBE00] to-[#FF7B03]",
      textClass: "text-[#F59C00]",
      bgItem: "hidden",
    },
    {
      id: 3,
      text1: "SafetyMart",
      icon: "/images/filter-safetymart.svg",
      iconClass: "bg-gradient-to-r from-[#66C1BF] to-[#00A29D]",
      textClass: "text-[#4CBEC5]",
      bgItem: "hidden",
    },
    {
      id: 4,
      text1: "SupplyHub",
      icon: "/images/filter-supplyhub.svg",
      iconClass: "bg-gradient-to-r from-[#4CBEC5] to-[#5327A8]",
      textClass: "text-[#4CBEC5]",
      bgItem: "",
    },
    {
      id: 5,
      text1: "TradeDirect",
      icon: "/images/filter-tradedirect.svg",
      iconClass: "bg-gradient-to-r from-[#FF516B] to-[#FF0045]",
      textClass: "text-[#FF516B]",
      bgItem: "",
    },
    {
      id: 6,
      text1: "WholesaleX",
      icon: "/images/filter-wholesalex.svg",
      iconClass: "bg-gradient-to-r from-[#FFBE00] to-[#FF7B03]",
      textClass: "text-[#F59C00]",
      bgItem: "",
    },
    {
      id: 7,
      text1: "GreenLine",
      icon: "/images/filter-greenline.svg",
      iconClass: "bg-gradient-to-r from-[#86BC25] to-[#6BAF1A]",
      textClass: "text-[#86BC25]",
      bgItem: "",
    },
    {
      id: 8,
      text1: "PackPro",
      icon: "/images/filter-packpro.svg",
      iconClass: "bg-gradient-to-r from-[#FF516B] to-[#FF0045]",
      textClass: "text-[#FF516B]",
      bgItem: "",
    },
    {
      id: 9,
      text1: "ToolWorks",
      icon: "/images/filter-toolworks.svg",
      iconClass: "bg-gradient-to-r from-[#4CBEC5] to-[#5327A8]",
      textClass: "text-[#4CBEC5]",
      bgItem: "",
    },
    {
      id: 10,
      text1: "PartsHub",
      icon: "/images/filter-partshub.svg",
      iconClass: "bg-gradient-to-r from-[#FFBE00] to-[#FF7B03]",
      textClass: "text-[#F59C00]",
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
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/category")}
      className="flex flex-col items-center justify-start w-full h-full cursor-pointer basis-1/5 min-w-[20%] xl:min-w-fit group"
    >
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
    </button>
  );
};

export default FilterSelection;