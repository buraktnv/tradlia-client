import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import ProductCardBase from "./ProductCardBase";
import type { HomeProductItem, DealOfTheDayContent } from "../../types/product";

const items: HomeProductItem[] = [
  {
    id: 1,
    name: "Hex Bolt Assortment M6",
    brand: "Partshub - 200 Count",
    image: "/images/photos/transparent/prod-13.svg",
    price: 18.5,
    shipping: 0,
    isFavorite: false,
    advertCount: 250,
    backgroundColor: "",
    stockStatus: "in",
  },
  {
    id: 2,
    name: "TRMS Multimeter",
    brand: "MultiCheck - CAT III 600V",
    image: "/images/photos/transparent/prod-10.svg",
    price: 32.6,
    oldPrice: 39.9,
    shipping: 0,
    isFavorite: true,
    advertCount: 180,
    backgroundColor: "",
    stockStatus: "low",
  },
  {
    id: 3,
    name: "EN397 Safety Helmets",
    brand: "SafeGuard - White 10 pcs",
    image: "/images/photos/transparent/prod-09.svg",
    price: 27.9,
    shipping: 1,
    isFavorite: false,
    advertCount: 320,
    backgroundColor: "",
    stockStatus: "in",
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
    <section className="container grid grid-cols-2 gap-4 px-4 py-8 pb-12 mx-auto xl:gap-8 xl:py-12 xl:px-0 xl:grid-cols-4">
      <div className="col-span-1 flex flex-col">
        <h2 className="mb-3 font-display text-base xl:text-xl font-semibold text-ink whitespace-nowrap">
          Your Picks
        </h2>
        <ProductCardBase content={itemList[0]} favoriteCard={favoriteCard} deleteCard={unfavoriteCard} />
      </div>
      <div className="col-span-1 flex flex-col">
        <h2 className="mb-3 font-display text-base xl:text-xl font-semibold text-ink whitespace-nowrap">
          Popular Products
        </h2>
        <ProductCardBase content={itemList[1]} favoriteCard={favoriteCard} deleteCard={unfavoriteCard} />
      </div>
      <div className="col-span-1 flex flex-col">
        <h2 className="mb-3 font-display text-base xl:text-xl font-semibold text-ink whitespace-nowrap">
          Best Prices
        </h2>
        <ProductCardBase content={itemList[2]} favoriteCard={favoriteCard} deleteCard={unfavoriteCard} />
      </div>
      <DealOfTheDay
        content={{
          image: "/images/photos/transparent/prod-03.svg",
          price: 32.5,
          name: "Cordless Combi Drill",
          brand: "DrillMaster - 18V 2 Batteries",
        }}
      />
    </section>
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
    <div className="col-span-1 flex flex-col">
      <div className="flex flex-col justify-between h-full">
        <h2 className="mb-3 font-display text-base xl:text-xl font-semibold text-ink whitespace-nowrap">Deal of the Day</h2>
        <div className="group relative flex flex-col justify-between h-[240px] xl:h-[360px] w-full overflow-hidden rounded-card border border-brand-800/40 bg-gradient-to-br from-brand-800 via-brand-700 to-ink pt-2 pb-4 xl:py-4 px-4 shadow-pop transition-shadow duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:shadow-modal">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-brand-400/20 blur-2xl pointer-events-none" aria-hidden="true"></div>
          <div className="absolute -bottom-12 -left-8 w-44 h-44 rounded-full bg-brand-300/15 blur-2xl pointer-events-none" aria-hidden="true"></div>
          <span className="absolute top-3 right-3 bg-amber-400 text-ink rounded-pill px-2 py-0.5 text-xs font-semibold font-display">
            Today only
          </span>
          <div className="relative grid grid-cols-4 gap-2 px-auto xl:px-[10%] text-sm">
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
            <div className="flex items-center gap-1.5 titles">
              <h5 className="text-[10px] leading-[14px] xl:text-base font-semibold tracking-wide text-surface font-display line-clamp-1">
                {content.name}
              </h5>
              <h3 className="hidden md:block text-brand-100/90 text-[10px] leading-[14px] xl:text-xs truncate">{content.brand}</h3>
            </div>
            <div className="flex items-baseline justify-between mt-0.5">
              <div className="font-display text-sm xl:text-xl font-semibold text-amber-400">
                {`${content.price.toFixed(2)}`.replace(".", ",")} $
              </div>
            </div>
          </div>
          <div className="absolute left-0 grid items-center invisible w-full px-4 mt-1 transition-all duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none opacity-0 bottom-3 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            <Link
              href="/product"
              className="select-none cursor-pointer inline-flex items-center gap-2 justify-center px-4 py-1.5 xl:py-2 border border-brand-300/50 rounded-pill text-[11px] leading-3 xl:text-sm text-brand-200 font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-600 hover:border-brand-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
            >
              Go to Listing
              <svg aria-hidden="true" width="16" height="12" viewBox="0 0 24 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9h19M15 3l7 6-7 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CountdownCell: FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col items-center xl:items-stretch">
    <div className="text-brand-100/80 text-[9px] leading-3 xl:text-xs text-center py-0.5 w-full uppercase tracking-wider">{label}</div>
    <div className="flex items-center justify-center bg-white/10 border border-white/20 rounded-card py-1">
      <span className="font-display text-surface text-[18px] leading-[18px] xl:text-xl font-semibold tracking-widest">{value}</span>
    </div>
  </div>
);

export default ProductCard;
