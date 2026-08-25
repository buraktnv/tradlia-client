import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useMediaQuery from "../../helpers/hooks/useMediaQuery";
import SingleCard from "../profile/favourites/SingleCard";
import { jsonCategoryList } from "./jsonCategoryList";
import { categories } from "../../helpers/categories";

const items: any = [
  {
    id: 1,
    name: "StackSafe Double-Wall",
    brand: "Boxes 50 pcs",
    image: "/images/photos/transparent/prod-01.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 2,
    name: "GripTight Pallet",
    brand: "Wrap 20 µm Roll",
    image: "/images/photos/transparent/prod-02.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 3,
    name: "TorqueMax Wood",
    brand: "Screws 4×40 (500)",
    image: "/images/photos/transparent/prod-03.svg",
    price: 36.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 4,
    name: "BoltCore Hex Bolts",
    brand: "M8 (200 Count)",
    image: "/images/photos/transparent/prod-04.svg",
    price: 9.9,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 5,
    name: "LinkPro CAT6 Cable",
    brand: "305 m Solid Copper",
    image: "/images/photos/transparent/prod-05.svg",
    price: 12.75,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 6,
    name: "SenseIt Temp Sensor",
    brand: "Module ±0.5°C",
    image: "/images/photos/transparent/prod-06.svg",
    price: 6.4,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 7,
    name: "HardHat Pro EN397",
    brand: "Safety Helmet White",
    image: "/images/photos/transparent/prod-07.svg",
    price: 27.9,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 8,
    name: "SafeGrip Cut-Resistant",
    brand: "Gloves Level D Pair",
    image: "/images/photos/transparent/prod-08.svg",
    price: 19.49,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 9,
    name: "DrillMaster 18V",
    brand: "Combi Drill 2 Batteries",
    image: "/images/photos/transparent/prod-09.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 10,
    name: "WriteWell Gel Pens",
    brand: "Blue 0.7 mm 10 pcs",
    image: "/images/photos/transparent/prod-16.svg",
    price: 7.85,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
];

const AltCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [itemList, setItemList] = useState<any>(items);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const mobile = !useMediaQuery("(min-width: 768px)");

  // Mobile starts collapsed (4 items) until "Show More" is pressed.
  useEffect(() => {
    if (mobile) setShowAll(false);
  }, [mobile]);

  const deleteCard = (item: any) => {
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

  const visibleCount = showAll ? itemList.length : mobile ? 4 : 5;
  const visibleItems = itemList.slice(0, visibleCount);
  // jsonCategoryList mirrors the 8 categories from helpers/categories.ts by index.
  const categoryIdByIndex = (index: number) => categories[index]?.id ?? "packaging";
  const activePage = Math.floor(activeIndex / 3);

  return (
    <div className="relative flex flex-col w-full bg-surface overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden bg-gradient-to-b from-brand-100/50 via-brand-50/40 to-transparent" aria-hidden="true"></div>
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-brand-200/30 blur-3xl" aria-hidden="true"></div>
      <div className="absolute top-10 -right-24 w-80 h-80 rounded-full bg-brand-100/40 blur-3xl" aria-hidden="true"></div>
      <div className="container mx-auto">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={8}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            768: { slidesPerView: 4, spaceBetween: 12 },
            1024: { slidesPerView: 6, spaceBetween: 16 },
            1280: { slidesPerView: 7, spaceBetween: 24 },
          }}
          className="!pt-8 !pb-3"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {jsonCategoryList.map((el, index) => (
            <SwiperSlide key={el.id} className="!h-auto">
              <SingleCategoryItem
                content={el}
                href={`/category?cat=${categoryIdByIndex(index)}`}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative flex justify-center w-full gap-2 pb-8 xl:hidden">
          {[0, 1, 2].map((page) => (
            <button
              type="button"
              key={page}
              aria-label={`Go to category page ${page + 1}`}
              aria-current={activePage === page ? "true" : undefined}
              onClick={() => swiperRef.current?.slideToLoop(page * 3)}
              className={`h-2 cursor-pointer rounded-pill transition-all duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
                activePage === page ? "w-6 bg-brand-400" : "w-2 bg-line hover:bg-ink-muted"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div className="container hidden grid-cols-2 pt-8 mx-auto xl:grid xl:grid-cols-5 gap-x-8 gap-y-8">
        {visibleItems.map((content: any) => (
          <SingleCard key={content.id} content={content} deleteCard={deleteCard} favoriteCard={favoriteCard} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 pt-4 mx-auto xl:hidden xl:grid-cols-5 xl:gap-x-8 xl:gap-y-8">
        {visibleItems.map((content: any) => (
          <SingleCard key={content.id} content={content} deleteCard={deleteCard} favoriteCard={favoriteCard} />
        ))}
      </div>
      <div className="flex justify-center w-full pt-8 pb-10">
        <button
          type="button"
          onClick={() => setShowAll((pre) => !pre)}
          className="bg-brand-600 text-white px-8 py-2 rounded-pill xl:font-bold text-[12px] leading-[14px] xl:text-base h-10 inline-flex items-center justify-center transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

const SingleCategoryItem: FC<any> = ({ content, href, selectedCategory, setSelectedCategory }) => {
  const isActive = content.id === selectedCategory;
  return (
    <Link href={href} className="focus-visible:outline-none">
      <div
        className={`relative flex flex-col items-center w-full h-full group cursor-pointer rounded-card py-5 px-3 xl:px-8 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
          isActive ? "bg-brand-100" : "hover:bg-brand-50"
        }`}
        onClick={() => setSelectedCategory(content.id)}
      >
        <span className="relative flex flex-col items-center justify-center w-full">
          <div className={`w-12 h-12 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none ${isActive ? "text-brand-700" : "text-ink-soft group-hover:text-brand-600"}`}>
            <content.icon isActive={isActive} />
          </div>
          <div
            className={`text-[13px] leading-4 pt-2 text-center xl:text-sm mt-1 flex flex-col items-center justify-center font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none ${
              isActive ? "text-brand-700" : "text-ink-soft group-hover:text-brand-700"
            }`}
          >
            <p>{content.text1}</p>
            <p>{content.text2}</p>
          </div>
        </span>
      </div>
    </Link>
  );
};

export default AltCategories;
