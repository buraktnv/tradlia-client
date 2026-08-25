import { FC, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface SliderImage {
  id: number;
  text1: string;
  text2: string;
  /** slider-bar asset used as the soft background disc */
  url: string;
  /** transparent product image used as the slide visual */
  product: string;
  category: string;
  /** value for the /category?cat=… link */
  type: string;
}

// Industrial/B2B themed slider content using catalog product visuals
const photos: SliderImage[] = [
  {
    id: 1,
    text1: "Quality Packaging\nSupplies",
    text2: "At Wholesale\nPrices",
    url: "/images/main/homepage/slider-bar-1.svg",
    product: "/images/photos/transparent/prod-13.svg",
    category: "Packaging & Shipping",
    type: "packaging",
  },
  {
    id: 2,
    text1: "Fasteners\n& Fixings",
    text2: "Direct from\nManufacturers",
    url: "/images/main/homepage/slider-bar-2.svg",
    product: "/images/photos/transparent/prod-07.svg",
    category: "Fasteners",
    type: "fasteners",
  },
  {
    id: 3,
    text1: "Electronics\nComponents",
    text2: "Certified &\nReliable",
    url: "/images/main/homepage/slider-bar-3.svg",
    product: "/images/photos/transparent/prod-10.svg",
    category: "Electronics Components",
    type: "electronics",
  },
  {
    id: 4,
    text1: "Safety Gear\n& Workwear",
    text2: "Trusted Brands\nfor Your Team",
    url: "/images/main/homepage/slider-bar-4.svg",
    product: "/images/photos/transparent/prod-02.svg",
    category: "Safety Gear",
    type: "safety",
  },
  {
    id: 5,
    text1: "Power Tools\n& Accessories",
    text2: "Pro Grade\nQuality Assured",
    url: "/images/main/homepage/slider-bar-5.svg",
    product: "/images/photos/transparent/prod-12.svg",
    category: "Power Tools",
    type: "tools",
  },
  {
    id: 6,
    text1: "Electrical\nSupplies",
    text2: "Wiring, Breakers\n& Lighting",
    url: "/images/main/homepage/slider-bar-6.svg",
    product: "/images/photos/transparent/prod-04.svg",
    category: "Electrical Supplies",
    type: "electrical",
  },
  {
    id: 7,
    text1: "Lab & Measurement\nInstruments",
    text2: "Precision for\nEvery Workshop",
    url: "/images/main/homepage/slider-bar-7.svg",
    product: "/images/photos/transparent/prod-11.svg",
    category: "Lab & Measurement",
    type: "lab",
  },
  {
    id: 8,
    text1: "Office\n& Facility",
    text2: "Everything for\nYour Workspace",
    url: "/images/main/homepage/slider-bar-8.svg",
    product: "/images/photos/transparent/prod-16.svg",
    category: "Office & Facility",
    type: "office",
  },
];

const Slider: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);
  // Guard against missing lookups so the slider never crashes on bad indexes.
  const activeImage = photos[activeIndex] ?? photos[0];

  const goToSlide = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <>
      <div className="relative flex flex-col px-5 bg-white xl:px-3">
        <div className="bg-[#F4F5F9] absolute w-[100%] h-[60%] left-0 bottom-0"></div>
        <div className="container relative mx-auto mb-6 xl:mb-0">
          <div className="absolute flex w-full h-full rounded-full">
            <div className="relative w-full h-full xl:h-[400px] drop-shadow-md">
              <Image src="/images/main/homepage/photoBg.svg" alt="bg" fill sizes="100vw" className="rounded-3xl" />
            </div>
          </div>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur transition hover:bg-white xl:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 text-[#4CBEC5]">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur transition hover:bg-white xl:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5 text-[#4CBEC5]">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Swiper
            modules={[Autoplay]}
            loop
            speed={600}
            autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            className="w-[341px] xl:w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {photos.map((el) => (
              <SwiperSlide key={el.id}>
                <div className="relative flex h-[200px] w-[341px] xl:h-[400px] xl:w-full">
                  <div className="z-10 xl:p-2 xl:m-1 m-1 w-1/2 xl:w-[35%]">
                    <div className="h-full xl:w-full flex flex-col justify-between xl:justify-center xl:rounded-[2.5rem] rounded-[1.3rem] pl-1 pr-3 py-4 xl:p-0 bg-white/95 xl:bg-transparent">
                      <div className="xl:text-4xl leading-5 text-[19px] font-light xl:tracking-normal tracking-tighter text-[#7E8096] mx-3 xl:ml-14">
                        <p className="whitespace-pre">{el.text1}</p>

                        <div className="xl:text-5xl text-[22px] font-bold text-[#4CBEC5]">
                          <span className="whitespace-pre">{el.text2}</span>
                        </div>
                        <div className="hidden px-10 xl:flex">
                          <Image src="/images/main/secondSection/heartBeat.svg" alt="Heart Beat" height={36} width={36} />
                        </div>
                      </div>
                      <div className="m-1 mx-3 xl:ml-14">
                        <Link
                          href={`/category?cat=${el.type}`}
                          className="xl:px-8 px-2 py-1 xl:py-2 text-[10px] xl:text-xl cursor-pointer mt-2 font-light drop-shadow-lg text-white bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] rounded-3xl col-span-3"
                        >
                          Shop {el.category}
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="relative grow">
                    {/* slider-bar asset used as a soft background disc */}
                    <div className="absolute right-[2%] xl:right-[6%] top-1/2 -translate-y-1/2 pointer-events-none opacity-25 blur-2xl">
                      <div className="relative w-[200px] h-[200px] xl:w-[400px] xl:h-[400px]">
                        <Image src={el.url} alt="" fill sizes="100vw" className="rounded-full" />
                      </div>
                    </div>
                    {/* transparent product hero */}
                    <div className="absolute right-[12%] xl:right-[20%] top-1/2 -translate-y-1/2">
                      <div className="relative w-[140px] h-[140px] xl:w-[300px] xl:h-[300px]">
                        <Image
                          src={el.product}
                          alt={el.category}
                          fill
                          sizes="100vw"
                          className="object-contain drop-shadow-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container hidden mx-auto xl:block">
          <div className="flex justify-around px-[2.5rem] py-6 mx-auto space-x-6 overflow-x-auto">
            {photos.map((el, index) => (
              <button type="button" key={el.id} className={`p-2 relative group cursor-pointer`} onClick={() => goToSlide(index)}>
                <div
                  className={`absolute top-0 left-0 w-full h-full transform transition-all duration-300 ease-in-out group ${
                    activeImage.url === el.url ? "block" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <Image src="/images/main/homepage/png-1-2.svg" alt="" fill sizes="100vw" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-40">
                  <Image src="/images/main/homepage/png-1.svg" alt="" fill sizes="100vw" className="rounded-[1.7rem]" />
                </div>
                <div className="relative flex w-20 p-2 h-14">
                  <Image className="object-contain" src={el.url} fill sizes="100vw" alt="" />
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="container block mx-auto xl:hidden">
          <div className="relative flex justify-center w-full gap-2 py-2 pb-8">
            {photos.map((el, index) => (
              <button
                type="button"
                key={el.id}
                onClick={() => goToSlide(index)}
                className={`rounded-full p-1 border border-[#4CBEC5] cursor-pointer ${
                  activeIndex === index && "bg-[#4CBEC5]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
