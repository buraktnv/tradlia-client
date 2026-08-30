import { FC, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import usePrefersReducedMotion from "../../helpers/hooks/usePrefersReducedMotion";

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
  const prefersReducedMotion = usePrefersReducedMotion();

  const goToSlide = (index: number) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <>
      <div className="relative flex flex-col overflow-hidden px-5 bg-surface xl:px-3">
        <div className="bg-canvas absolute w-[100%] h-[60%] left-0 bottom-0" aria-hidden="true"></div>
        <div className="container relative mx-auto mb-6 xl:mb-0">
          <div className="absolute flex w-full h-full rounded-full">
            <div className="relative w-full h-full xl:h-[400px] drop-shadow-md">
              <Image src="/images/main/homepage/photoBg.svg" alt="" aria-hidden="true" fill sizes="100vw" className="rounded-card" />
            </div>
          </div>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/80 shadow-card backdrop-blur transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-surface text-ink-soft hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/80 shadow-card backdrop-blur transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-surface text-ink-soft hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5" aria-hidden="true">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Swiper
            modules={[Autoplay]}
            loop
            speed={600}
            autoplay={
              prefersReducedMotion
                ? false
                : { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }
            }
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
                    <div className="h-full xl:w-full flex flex-col justify-between xl:justify-center rounded-card pl-1 pr-3 py-4 xl:p-0 bg-surface/95 xl:bg-transparent">
                      <div className="xl:text-3xl text-[19px] leading-tight font-light xl:tracking-normal tracking-tighter text-ink-soft mx-3 xl:ml-14">
                        <p className="whitespace-pre">{el.text1}</p>

                        <div className="font-display xl:text-5xl text-[22px] font-semibold leading-[1.05] tracking-tight text-ink mt-2 xl:mt-3">
                          <span className="whitespace-pre">{el.text2}</span>
                        </div>
                        <div className="hidden px-10 xl:flex text-brand-500" aria-hidden="true">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-9 w-9"
                          >
                            <path d="M3 17l6-6 4 4 8-9" />
                            <path d="M15 6h6v6" />
                          </svg>
                        </div>
                      </div>
                      <div className="m-1 mx-3 xl:ml-14">
                        <Link
                          href={`/category?cat=${el.type}`}
                          className="inline-flex items-center justify-center xl:px-8 px-3 py-1.5 xl:py-2 text-[11px] xl:text-base cursor-pointer mt-2 font-semibold text-white bg-ink rounded-pill col-span-3 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
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
                        <Image src={el.url} alt="" aria-hidden="true" fill sizes="100vw" className="rounded-full" />
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
        <div className="container relative hidden mx-auto xl:block">
          <div className="flex justify-start gap-3 px-[2.5rem] py-5 mx-auto overflow-x-auto hiddenScroll">
            {photos.map((el, index) => (
              <button
                type="button"
                key={el.id}
                aria-label={`Show slide ${index + 1}: ${el.category}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => goToSlide(index)}
                className={`shrink-0 cursor-pointer rounded-card border px-4 py-2.5 text-left transition-[border-color,background-color,box-shadow] duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
                  activeIndex === index
                    ? "border-brand-400 bg-brand-50 shadow-card"
                    : "border-line bg-surface hover:border-brand-300"
                }`}
              >
                <span
                  className={`block text-[10px] font-semibold uppercase tracking-wider ${
                    activeIndex === index ? "text-brand-600" : "text-ink-muted"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={`block text-xs font-semibold leading-tight mt-0.5 ${
                    activeIndex === index ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {el.category}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="container relative block mx-auto xl:hidden">
          <div className="relative flex justify-center w-full gap-2 py-2 pb-8">
            {photos.map((el, index) => (
              <button
                type="button"
                key={el.id}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => goToSlide(index)}
                className={`h-2 cursor-pointer rounded-pill transition-[width,background-color] duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
                  activeIndex === index ? "w-6 bg-brand-400" : "w-2 bg-line hover:bg-ink-muted"
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
