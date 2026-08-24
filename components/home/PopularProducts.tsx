import { FC, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SingleCard from "../profile/favourites/SingleCard";
import type { HomeProductItem } from "../../types/product";

const items: HomeProductItem[] = [
  {
    id: 1,
    name: "Nitrile Exam Gloves",
    brand: "MedSupply - 100 Count",
    image: "/images/photos/transparent/prod-13.svg",
    price: 18.50,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 2,
    name: "Digital Thermometer",
    brand: "MediCore - Clinical Grade",
    image: "/images/photos/transparent/prod-10.svg",
    price: 23.50,
    shipping: 0,
    advertCount: 180,
    isFavorite: true,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 3,
    name: "Surgical Masks 3-Ply",
    brand: "SafeGuard - 50 Pack",
    image: "/images/photos/transparent/prod-09.svg",
    price: 15.99,
    shipping: 1,
    advertCount: 320,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 4,
    name: "Blood Pressure Monitor",
    brand: "Omron Platinum Series",
    image: "/images/photos/transparent/prod-03.svg",
    price: 89.99,
    shipping: 0,
    advertCount: 95,
    isFavorite: true,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 5,
    name: "Pulse Oximeter",
    brand: "ChoiceMMed - Fingertip",
    image: "/images/photos/transparent/prod-12.svg",
    price: 24.99,
    shipping: 0,
    advertCount: 150,
    isFavorite: true,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 6,
    name: "First Aid Kit",
    brand: "LifeLine - 100 Pieces",
    image: "/images/photos/transparent/prod-16.svg",
    price: 34.99,
    shipping: 1,
    advertCount: 200,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 7,
    name: "Hand Sanitizer Gel",
    brand: "Purell - 500ml Pump",
    image: "/images/photos/transparent/prod-05.svg",
    price: 12.49,
    shipping: 0,
    advertCount: 400,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 8,
    name: "Vitamin D3 5000 IU",
    brand: "NatureWise - 360 Softgels",
    image: "/images/photos/transparent/prod-07.svg",
    price: 19.99,
    shipping: 0,
    advertCount: 280,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 9,
    name: "Compression Socks",
    brand: "Dr. Scholl's - 15-20 mmHg",
    image: "/images/photos/transparent/prod-02.svg",
    price: 22.99,
    shipping: 0,
    advertCount: 120,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 10,
    name: "Wound Care Dressing",
    brand: "Tegaderm - Transparent",
    image: "/images/photos/transparent/prod-04.svg",
    price: 28.99,
    shipping: 1,
    advertCount: 85,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 11,
    name: "Nebulizer Machine",
    brand: "Philips Respironics",
    image: "/images/photos/transparent/prod-15.svg",
    price: 149.99,
    shipping: 0,
    advertCount: 45,
    isFavorite: true,
    backgroundColor: "bg-[#F4F5F9]",
  },
  {
    id: 12,
    name: "Insulin Syringes 31G",
    brand: "BD Ultra-Fine - 100 Count",
    image: "/images/photos/transparent/prod-08.svg",
    price: 32.99,
    shipping: 0,
    advertCount: 160,
    isFavorite: false,
    backgroundColor: "bg-[#F4F5F9]",
  },
];

const AltCategories: FC<any> = () => {
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
    <div className="bg-[#F4F5F9]">
      <div className={`flex flex-col w-full pt-8 pb-4 xl:py-12 px-4 xl:px-0 mx-auto container`}>
        <div className="text-lg xl:text-2xl font-bold text-[#4CBEC5]">Best Selling Listings in the Last 7 Days</div>
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
          className="!py-8"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {itemList &&
            itemList.slice(0, 8).map((content: HomeProductItem) => (
              <SwiperSlide key={content.id} className="!h-auto">
                <SingleCard content={content} deleteCard={deleteCard} favoriteCard={favoriteCard} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="relative flex justify-center w-full gap-2 py-2 pb-8 xl:hidden">
          {[0, 1, 2, 3].map((page) => (
            <button
              type="button"
              key={page}
              onClick={() => swiperRef.current?.slideToLoop(page * 2)}
              className={`rounded-full px-4 py-1 border cursor-pointer border-[#4CBEC5] ${
                activePage === page && "bg-[#4CBEC5]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AltCategories;
