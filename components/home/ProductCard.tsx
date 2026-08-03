import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { SvgBigger } from "../../helpers/svgs/homeSvg";
import SingleCard from "../profile/favourites/SingleCard";

const items: any = [
  {
    id: 1,
    name: "Classic Lemon Cologne",
    brand: "Nordwell",
    image: "/images/photos/product-10.svg",
    price: 23.5,
    shipping: 0,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 2,
    name: "Contactless Thermometer",
    brand: "MediCore Digital",
    image: "/images/photos/product-3.svg",
    price: 53.5,
    shipping: 0,
    isFavorite: true,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 3,
    name: "Probiotix",
    brand: "20 Vials - Probiotic",
    image: "/images/photos/product-11.svg",
    price: 35.5,
    shipping: 1,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
];

const ProductCard = () => {
  const [itemList, setItemList] = useState<any>(items);

  const unfavoriteCard = (item: any) => {
    setItemList((pre: any[]) => {
      pre[pre.indexOf(item)].isFavorite = false;
      return pre;
    });
  };
  const favoriteCard = (item: any) => {
    setItemList((pre: any[]) => {
      pre[pre.indexOf(item)].isFavorite = true;
      return pre;
    });
  };
  return (
    <div className="container grid grid-cols-2 gap-4 px-4 py-8 pb-12 mx-auto bg-white xl:gap-8 xl:py-12 xl:px-0 xl:grid-cols-4">
      {/* Your Picks */}
      <div className="col-span-1">
        <div className="flex flex-col">
          <div className="mb-2 text-[#4CBEC5] text-base xl:text-2xl font-bold whitespace-nowrap">
            Your Picks
          </div>
          {/* CARD */}
          <SingleCard content={itemList[0]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
        </div>
      </div>
      {/* Popular Product */}
      <div className="col-span-1">
        <div className="flex flex-col">
          <div className="mb-2 text-[#4BBEC5] text-base xl:text-2xl font-bold whitespace-nowrap">Popular Product</div>
          {/* CARD */}
          <SingleCard content={itemList[1]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
        </div>
      </div>
      {/* Best Prices */}
      <div className="col-span-1">
        <div className="flex flex-col">
          <div className="mb-2 text-[#4BBEC5] text-base xl:text-2xl font-bold whitespace-nowrap">Best Prices</div>
          {/* CARD */}
          <SingleCard content={itemList[2]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
        </div>
      </div>
      <DealOfTheDay
        content={{
          time: {
            day: "00",
            hour: "03",
            min: "12",
            second: "53",
          },
          image: "/images/main/homepage/product-21.svg",
          price: 32.5,
          name: "Optima",
          brand: "GlucoMeter 50 Strips",
        }}
      />
    </div>
  );
};
const DealOfTheDay: FC<any> = ({ content }) => {
  return (
    <div className="col-span-1">
      <div className="flex flex-col justify-between">
        <div className="mb-2 text-[#4BBEC5] text-base xl:text-2xl font-bold whitespace-nowrap">Deal of the Day</div>
        <div className="flex relative group flex-col group justify-between h-[240px] xl:h-[360px] bg-[#4e29a2] border hover:border-[#4bbfc59c] drop-shadow-lg xl:drop-shadow-none hover:shadow-lg pt-2 pb-4 xl:py-4 px-4 rounded-3xl w-full transition-all ease-in-out duration-300 hover:pb-12 xl:hover:pb-16">
          <div className="grid relative grid-cols-4 gap-2 px-auto xl:px-[10%] text-sm">
            <div className="flex flex-col items-center xl:items-stretch">
              <div className="text-[#4CBEC5] text-[9px] leading-3 xl:text-xs text-center py-0.5 w-full">Day</div>
              <div className="relative flex">
                <div className="absolute w-full h-[1px] top-[9px] xl:top-[13px] bg-white"></div>
                <div className="bg-white text-[#4e29a2] w-full rounded-[3px] pr-[2px] text-[20px] leading-[18px] xl:text-xl text-right font-semibold px-[2px]">
                  {content.time.day[0]}
                </div>
                <div className="bg-white text-[#4e29a2] w-full text-left pl-[2px] rounded-[3px] text-[20px] leading-[18px] xl:text-xl font-semibold px-[2px]">
                  {content.time.day[1]}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full xl:items-stretch">
              <div className="text-[#4CBEC5] text-[9px] leading-3 xl:text-xs text-center py-0.5 w-full">Hour</div>
              <div className="relative flex">
                <div className="absolute w-full h-[1px] top-[9px] xl:top-[13px] bg-white left-0"></div>
                <div className="bg-white text-[#4e29a2] w-full rounded-[3px] pr-[2px] text-[20px] leading-[18px] xl:text-xl text-right font-semibold px-[2px]">
                  {content.time.hour[0]}
                </div>
                <div className="bg-white text-[#4e29a2] w-full text-left pl-[2px] rounded-[3px] text-[20px] leading-[18px] xl:text-xl font-semibold px-[2px]">
                  {content.time.hour[1]}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center xl:items-stretch">
              <div className="text-[#4CBEC5] text-[9px] leading-3 xl:text-xs text-center py-0.5 w-full">Min</div>
              <div className="relative flex">
                <div className="absolute w-full h-[1px] top-[9px] xl:top-[13px] bg-white"></div>
                <div className="bg-white text-[#4e29a2] w-full rounded-[3px] pr-[2px] text-[20px] leading-[18px] xl:text-xl text-right font-semibold px-[2px]">
                  {content.time.min[0]}
                </div>
                <div className="bg-white text-[#4e29a2] w-full text-left pl-[2px] rounded-[3px] text-[20px] leading-[18px] xl:text-xl font-semibold px-[2px]">
                  {content.time.min[1]}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center xl:items-stretch">
              <div className="text-[#4CBEC5] text-[9px] leading-3 xl:text-xs text-center py-0.5 w-full">Sec</div>
              <div className="relative flex">
                <div className="absolute w-full h-[1px] top-[9px] xl:top-[13px] bg-white"></div>
                <div className="bg-white text-[#4e29a2] w-full rounded-[3px] pr-[2px] text-[20px] leading-[18px] xl:text-xl text-right font-semibold px-[2px]">
                  {content.time.second[0]}
                </div>
                <div className="bg-white text-[#4e29a2] w-full text-left pl-[2px] rounded-[3px] text-[20px] leading-[18px] xl:text-xl font-semibold px-[2px]">
                  {content.time.second[1]}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-3">
            <div className="relative w-full h-full">
              <Image className="object-contain" src={content.image} fill sizes="100vw" alt="" />
            </div>
          </div>
          <div className="bg-[#4e29a2]">
            <div className="flex items-center titles">
              <h5 className="text-[10px] leading-[10px] xl:text-base font-bold tracking-wide text-white">
                {content.name}
              </h5>
              <h3 className="text-white text-[10px] leading-[10px] xl:text-base"> {content.brand}</h3>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-[14px] leading-[17px] xl:text-xl font-bold text-[#4CBEC5]">
                {`${content.price.toFixed(2)}`.replace(".", ",")} $
              </div>
            </div>
          </div>
          <div className="absolute left-0 grid items-center invisible w-full px-4 mt-1 transition-all duration-300 ease-in-out opacity-0 bottom-3 group-hover:visible group-hover:opacity-100">
            <Link
              href={"/product"}
              className="select-none cursor-pointer flex items-center gap-2 justify-center px-4 py-1.5 xl:py-2 border bg-transparent border-[#f59b009c] rounded-full text-[11px] leading-3 xl:text-sm text-[#F59C00] font-medium">
              Go to Listing
                              <div className="xl:w-8 w-4 h-3 xl:h-4 text-[#F59C00]">
                <SvgBigger />
              </div>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
