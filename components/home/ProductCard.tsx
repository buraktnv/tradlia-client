import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { SvgBigger } from "../../helpers/svgs/homeSvg";
import SingleCard from "../profile/favourites/SingleCard";
import type { HomeProductItem, DealOfTheDayContent } from "../../types/product";

const items: HomeProductItem[] = [
  {
    id: 1,
    name: "Nitrile Exam Gloves",
    brand: "MedSupply - 100 Count",
    image: "/images/photos/transparent/prod-13.svg",
    price: 18.50,
    shipping: 0,
    isFavorite: false,
    advertCount: 250,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 2,
    name: "Digital Thermometer",
    brand: "MediCore - Clinical Grade",
    image: "/images/photos/transparent/prod-10.svg",
    price: 23.50,
    shipping: 0,
    isFavorite: true,
    advertCount: 180,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 3,
    name: "Surgical Masks 3-Ply",
    brand: "SafeGuard - 50 Pack",
    image: "/images/photos/transparent/prod-09.svg",
    price: 15.99,
    shipping: 1,
    isFavorite: false,
    advertCount: 320,
    backgroundColor: "bg-[#F4F5F9]",
  },
];

const ProductCard = () => {
  const [itemList, setItemList] = useState<HomeProductItem[]>(items);

  const unfavoriteCard = (item: HomeProductItem) => {
    setItemList((pre: HomeProductItem[]) => {
      pre[pre.indexOf(item)].isFavorite = false;
      return [...pre];
    });
  };
  const favoriteCard = (item: HomeProductItem) => {
    setItemList((pre: HomeProductItem[]) => {
      pre[pre.indexOf(item)].isFavorite = true;
      return [...pre];
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
          <SingleCard content={itemList[0]} favoriteCard={favoriteCard} />
        </div>
      </div>
      {/* Popular Product */}
      <div className="col-span-1">
        <div className="flex flex-col">
          <div className="mb-2 text-[#4CBEC5] text-base xl:text-2xl font-bold whitespace-nowrap">Popular Product</div>
          {/* CARD */}
          <SingleCard content={itemList[1]} favoriteCard={favoriteCard} />
        </div>
      </div>
      {/* Best Prices */}
      <div className="col-span-1">
        <div className="flex flex-col">
          <div className="mb-2 text-[#4CBEC5] text-base xl:text-2xl font-bold whitespace-nowrap">Best Prices</div>
          {/* CARD */}
          <SingleCard content={itemList[2]} favoriteCard={favoriteCard} />
        </div>
      </div>
      <DealOfTheDay
        content={{
          image: "/images/photos/transparent/prod-03.svg",
          price: 32.50,
          name: "Blood Pressure Monitor",
          brand: "Omron Platinum Series",
        }}
      />
    </div>
  );
};

/** Remaining time until the end of today, formatted as DD:HH:MM:SS parts. */
const getTimeLeft = () => {
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);
  const totalSeconds = Math.max(0, Math.floor((nextMidnight.getTime() - now.getTime()) / 1000));
  return {
    day: String(Math.floor(totalSeconds / 86400)).padStart(2, "0"),
    hour: String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0"),
    min: String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0"),
    second: String(totalSeconds % 60).padStart(2, "0"),
  };
};

const DealOfTheDay: FC<{ content: DealOfTheDayContent }> = ({ content }) => {
  const [timeLeft, setTimeLeft] = useState({ day: "00", hour: "00", min: "00", second: "00" });

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="col-span-1">
      <div className="flex flex-col justify-between">
        <div className="mb-2 text-[#4CBEC5] text-base xl:text-2xl font-bold whitespace-nowrap">Deal of the Day</div>
        <div className="flex relative group flex-col group justify-between h-[240px] xl:h-[360px] bg-gradient-to-br from-[#00A29D] via-[#0F8F9E] to-[#5327A8] border hover:border-[#4CBEC5]/60 drop-shadow-lg xl:drop-shadow-none hover:shadow-lg pt-2 pb-4 xl:py-4 px-4 rounded-3xl w-full transition-all ease-in-out duration-300 hover:pb-12 xl:hover:pb-16 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-8 w-44 h-44 rounded-full bg-[#4CBEC5]/25 blur-2xl pointer-events-none"></div>
          <div className="grid relative grid-cols-4 gap-2 px-auto xl:px-[10%] text-sm">
            <CountdownCell label="Day" value={timeLeft.day} />
            <CountdownCell label="Hour" value={timeLeft.hour} />
            <CountdownCell label="Min" value={timeLeft.min} />
            <CountdownCell label="Sec" value={timeLeft.second} />
          </div>
          <div className="w-full h-full p-3">
            <div className="relative w-full h-full">
              <Image className="object-contain drop-shadow-lg" src={content.image} fill sizes="100vw" alt="" />
            </div>
          </div>
          <div className="relative">
            <div className="flex items-center titles">
              <h5 className="text-[10px] leading-[10px] xl:text-base font-bold tracking-wide text-white">
                {content.name}
              </h5>
              <h3 className="text-white/80 text-[10px] leading-[10px] xl:text-base"> {content.brand}</h3>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-[14px] leading-[17px] xl:text-xl font-bold text-[#FFBE00]">
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

const CountdownCell: FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center xl:items-stretch">
    <div className="text-[#A5F3E8] text-[9px] leading-3 xl:text-xs text-center py-0.5 w-full">{label}</div>
    <div className="flex items-center justify-center bg-white/10 border border-white/20 rounded-lg py-1">
      <span className="text-white text-[18px] leading-[18px] xl:text-xl font-semibold tracking-widest">{value}</span>
    </div>
  </div>
);

export default ProductCard;
