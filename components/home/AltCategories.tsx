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
    name: "VitaPlus Healing",
    brand: "Cream 40 ml",
    image: "/images/photos/transparent/prod-01.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 2,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/transparent/prod-02.svg",
    price: 36.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 3,
    name: "MediCore Digital",
    brand: "Contactless Thermometer",
    image: "/images/photos/transparent/prod-03.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 4,
    name: "SafeGuard 3-Ply Black",
    brand: "Surgical Mask with Ear Loops 50 pcs",
    image: "/images/photos/transparent/prod-04.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 5,
    name: "ClearMed Hydrogen Peroxide",
    brand: "100 ml",
    image: "/images/photos/transparent/prod-05.svg",
    price: 4.25,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 6,
    name: "Herbiva Orange & ",
    brand: "Echinacea 24 Lozenges",
    image: "/images/photos/transparent/prod-06.svg",
    price: 8.44,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 7,
    name: "Nordwell Relief",
    brand: "Honey-Lemon Flavor 24 Lozenges",
    image: "/images/photos/transparent/prod-07.svg",
    price: 24.69,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 8,
    name: "GreenLeaf Baby Powder",
    brand: "100 gr",
    image: "/images/photos/transparent/prod-08.svg",
    price: 9.9,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 9,
    name: "GreenLeaf InsectGuard",
    brand: "Insect Repellent 1 L",
    image: "/images/photos/transparent/prod-09.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 10,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/transparent/prod-16.svg",
    price: 45.0,
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
  const categoryIdByIndex = (index: number) => categories[index]?.id ?? "medical";
  const activePage = Math.floor(activeIndex / 3);

  return (
    <div className="relative flex flex-col w-full bg-white">
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden bg-gradient-to-b from-[#66C1BF]/[0.14] via-[#00A29D]/[0.08] to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#66C1BF]/20 blur-3xl"></div>
      <div className="absolute top-10 -right-24 w-80 h-80 rounded-full bg-[#5327A8]/10 blur-3xl"></div>
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
              onClick={() => swiperRef.current?.slideToLoop(page * 3)}
              className={`rounded-full px-4 py-1 border border-[#4CBEC5] ${
                activePage === page && "bg-[#4CBEC5]"
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
          className="bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white px-8 py-2 font-thin rounded-full xl:font-bold text-[12px] leading-[14px] xl:text-base h-10"
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
    <Link href={href}>
      <div
        className="relative flex flex-col items-center w-full h-full group hover:cursor-pointer"
        onClick={() => setSelectedCategory(content.id)}
      >
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 rounded-2xl z-0 transition-all duration-200 group-hover:visible group-hover:bg-gradient-to-r group-hover:from-[#66c1bf] group-hover:to-[#00a29d] ${
            isActive && "bg-gradient-to-r from-[#66C1BF] to-[#00A29D] visible opacity-100"
          } `}
        ></div>

        <span className={`relative py-5 px-3 xl:px-8 flex flex-col items-center justify-center rounded-2xl w-full`}>
          <div className="w-12 h-12">
            <content.icon isActive={isActive} />
          </div>
          <div
            className={`text-[13px] leading-4 pt-2 text-center xl:text-sm mt-1 flex flex-col items-center justify-center transition-all duration-200 ease-in-out font-bold group-hover:text-white ${
              isActive ? "text-white" : "text-[#7E8096]"
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
