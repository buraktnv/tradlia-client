import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ProductCardBase from "./ProductCardBase";
import type { HomeProductItem } from "../../types/product";

const items: HomeProductItem[] = [
  {
    id: 1,
    name: "Hex Bolt Assortment M6",
    brand: "Partshub - 200 Count",
    image: "/images/photos/transparent/prod-13.svg",
    price: 18.50,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    backgroundColor: "",
    stockStatus: "in",
  },
  {
    id: 2,
    name: "TRMS Multimeter",
    brand: "MultiCheck - CAT III 600V",
    image: "/images/photos/transparent/prod-10.svg",
    price: 32.60,
    oldPrice: 41.0,
    shipping: 0,
    advertCount: 180,
    isFavorite: true,
    backgroundColor: "",
    stockStatus: "low",
  },
  {
    id: 3,
    name: "EN397 Safety Helmets",
    brand: "SafeGuard - White 10 pcs",
    image: "/images/photos/transparent/prod-09.svg",
    price: 27.90,
    shipping: 1,
    advertCount: 320,
    isFavorite: false,
    backgroundColor: "",
    stockStatus: "in",
  },
  {
    id: 4,
    name: "Digital Clamp Meter",
    brand: "TradeDirect - 600A AC/DC",
    image: "/images/photos/transparent/prod-03.svg",
    price: 89.99,
    shipping: 0,
    advertCount: 95,
    isFavorite: true,
    backgroundColor: "",
    stockStatus: "in",
  },
  {
    id: 5,
    name: "Cordless Impact Driver",
    brand: "ToolWorks - 18V Brushless",
    image: "/images/photos/transparent/prod-12.svg",
    price: 24.99,
    shipping: 0,
    advertCount: 150,
    isFavorite: true,
    backgroundColor: "",
    stockStatus: "in",
  },
  {
    id: 6,
    name: "Industrial First-Aid Kit",
    brand: "SafeMart - 50 Pieces",
    image: "/images/photos/transparent/prod-16.svg",
    price: 34.99,
    shipping: 1,
    advertCount: 200,
    isFavorite: false,
    backgroundColor: "",
    stockStatus: "low",
  },
  {
    id: 7,
    name: "Heavy-Duty Degreaser",
    brand: "GreenLine - 5L Concentrate",
    image: "/images/photos/transparent/prod-05.svg",
    price: 12.49,
    shipping: 0,
    advertCount: 400,
    isFavorite: false,
    backgroundColor: "",
    stockStatus: "in",
  },
  {
    id: 8,
    name: "A4 Copy Paper 80 gsm",
    brand: "ClearOffice - 2500 Sheets",
    image: "/images/photos/transparent/prod-07.svg",
    price: 19.99,
    shipping: 0,
    advertCount: 280,
    isFavorite: false,
    backgroundColor: "",
    stockStatus: "in",
  },
  {
    id: 9,
    name: "Cut-Resistant Gloves",
    brand: "SafeMart - Level D Pair",
    image: "/images/photos/transparent/prod-02.svg",
    price: 22.99,
    shipping: 0,
    advertCount: 120,
    isFavorite: false,
    backgroundColor: "",
    stockStatus: "in",
  },
  {
    id: 10,
    name: "Pallet Wrap 20 µm",
    brand: "GripTight - Transparent",
    image: "/images/photos/transparent/prod-04.svg",
    price: 28.99,
    shipping: 1,
    advertCount: 85,
    isFavorite: false,
    backgroundColor: "",
    stockStatus: "out",
  },
  {
    id: 11,
    name: "LED High Bay 150W",
    brand: "BrightWork - IP65 Industrial",
    image: "/images/photos/transparent/prod-15.svg",
    price: 149.99,
    oldPrice: 179.0,
    shipping: 0,
    advertCount: 45,
    isFavorite: true,
    backgroundColor: "",
    stockStatus: "in",
  },
  {
    id: 12,
    name: "Circular Saw Blade Set",
    brand: "DrillMaster - 10 Pieces",
    image: "/images/photos/transparent/prod-08.svg",
    price: 32.99,
    shipping: 0,
    advertCount: 160,
    isFavorite: false,
    backgroundColor: "",
    stockStatus: "in",
  },
];

const PopularProducts: FC<any> = () => {
  const [itemList, setItemList] = useState<HomeProductItem[]>(items);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const deleteCard = (item: HomeProductItem) => {
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

  const activePage = Math.floor(activeIndex / 2);

  return (
    <section className="bg-canvas border-y border-line">
      <div className={`flex flex-col w-full pt-8 pb-4 xl:py-12 px-4 xl:px-0 mx-auto container`}>
        <h2 className="font-display text-lg xl:text-2xl font-semibold text-ink">
          Best Selling Listings <span className="text-brand-600">in the Last 7 Days</span>
        </h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={16}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="!py-8 w-full"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {itemList &&
            itemList.slice(0, 8).map((content: HomeProductItem) => (
              <SwiperSlide key={content.id} className="!h-auto">
                <ProductCardBase content={content} deleteCard={deleteCard} favoriteCard={favoriteCard} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="relative flex justify-center w-full gap-2 py-2 pb-8 xl:hidden" role="group" aria-label="Best sellers pagination">
          {[0, 1, 2, 3].map((page) => (
            <button
              type="button"
              key={page}
              aria-label={`Go to slide group ${page + 1}`}
              aria-current={activePage === page}
              onClick={() => swiperRef.current?.slideToLoop(page * 2)}
              className={`rounded-pill w-10 py-1 border cursor-pointer transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                activePage === page ? "bg-brand-400 border-brand-400" : "bg-surface border-line hover:border-brand-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
