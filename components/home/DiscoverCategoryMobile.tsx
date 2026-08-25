import { FC, useEffect, useRef, useState } from "react";
import useIsClient from "../../helpers/hooks/useIsClient";
import useMediaQuery from "../../helpers/hooks/useMediaQuery";
import usePrefersReducedMotion from "../../helpers/hooks/usePrefersReducedMotion";
import styles from "./DiscoverCategoryMobile.module.scss";
import Image from "next/image";
import Link from "next/link";

const discoverItems = [
  {
    id: "item1",
    text: "Packaging",
    type: "packaging",
    imgUrl: "/images/main/homepage/product-17.svg",
  },
  {
    id: "item2",
    text: "Power Tools",
    type: "tools",
    imgUrl: "/images/main/homepage/product-18.svg",
  },
  {
    id: "item3",
    text: "Safety Gear",
    type: "safety",
    imgUrl: "/images/main/homepage/product-19.svg",
  },
  {
    id: "item4",
    text: "Electronics",
    type: "electronics",
    imgUrl: "/images/main/homepage/product-20.svg",
  },
];

const DiscoverCategoryMobile = () => {
  const slideDiv = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string>("item1");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    let timer: NodeJS.Timeout | null = null;

    timer = setTimeout(() => {
      const newItem = activeItem.split("item");
      const newMath: number = Number(newItem[1]) + Number(1);
      if (activeItem !== "item4") scrollToElement("item" + newMath);
      else scrollToElement("item1");
    }, 4000);

    return () => {
      timer && clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem, prefersReducedMotion]);

  const scrollEvent = (e: any) => {
    const offset1 = document.getElementById("item1")!.offsetLeft - 16;
    const offset2 = document.getElementById("item2")!.offsetLeft - 16;
    const offset3 = document.getElementById("item3")!.offsetLeft - 16;
    const offset4 = document.getElementById("item4")!.offsetLeft - 16;

    const tar: HTMLDivElement = e.target;
    if (tar.scrollLeft > offset1 && tar.scrollLeft < offset2) activeItem !== "item1" && setActiveItem("item1");
    else if (tar.scrollLeft >= offset2 && tar.scrollLeft < offset3) activeItem !== "item2" && setActiveItem("item2");
    else if (tar.scrollLeft >= offset3 && tar.scrollLeft < offset4) activeItem !== "item3" && setActiveItem("item3");
    else if (tar.scrollLeft >= offset4) activeItem !== "item4" && setActiveItem("item4");
  };

  const scrollToElement = (item: string) => {
    slideDiv?.current?.scrollTo({
      left: document.getElementById(item)?.offsetLeft,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    setActiveItem(item);
  };
  return (
    <>
      <div className="relative flex items-center w-full">
        <div
          className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-gradient-to-b from-brand-50 via-canvas to-brand-50/60"
          aria-hidden="true"
        >
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-brand-200/40 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full bg-brand-100/50 blur-3xl"></div>
        </div>
        <div className="w-full px-4">
          <div className={`carousel w-full ${styles.carousel}`} ref={slideDiv} onScroll={scrollEvent}>
            {discoverItems.map((item) => (
              <div key={item.id} id={item.id} className="relative w-full py-4 carousel-item">
                <SingleItem text={item.text} type={item.type} imgUrl={item.imgUrl} />
              </div>
            ))}
          </div>
          <div className="relative flex justify-center w-full gap-2 py-2 pb-8">
            {discoverItems.map((item, index) => (
              <button
                type="button"
                key={item.id}
                aria-label={`Go to ${item.text}`}
                aria-current={activeItem === item.id ? "true" : undefined}
                onClick={() => scrollToElement(item.id)}
                className={`h-2 cursor-pointer rounded-pill transition-[width,background-color] duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
                  activeItem === item.id ? "w-6 bg-brand-400" : "w-2 bg-line hover:bg-ink-muted"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const SingleItem: FC<any> = ({ text, type, imgUrl }) => {
  return (
    <Link
      href={`/category?cat=${type}`}
      className="block rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
    >
      <div className="relative flex flex-col w-full h-full px-3 cursor-pointer select-none group">
        <div className="px-6 pt-5 pb-2 font-display text-xl font-semibold text-ink">{text}</div>
        <div className="relative w-full h-full pb-6">
          <div className="absolute inset-x-0 top-0 bottom-6 bg-surface shadow-card group-hover:shadow-pop transition-shadow duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none"></div>
          <div className="h-56 w-[70%] relative flex items-center justify-center transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:scale-105">
            <div className="relative w-40 h-40">
              <Image className="object-contain" src={imgUrl} alt="" fill sizes="100vw" />
            </div>
          </div>
        </div>
        <div className="absolute text-sm font-semibold bottom-8 right-8" aria-hidden="true">
          <p className="px-3 py-1 bg-ink text-surface rounded-pill text-center">Shop</p>
          <p className="px-3 py-1 mt-1 bg-brand-400 text-ink rounded-pill text-center">Discover</p>
        </div>
      </div>
    </Link>
  );
};

const ClientControler: FC = () => {
  const isClient = useIsClient();

  if (!isClient) return <></>;
  return <BreakpointController />;
};

const BreakpointController = () => {
  const mobile = !useMediaQuery("(min-width: 768px)");

  return <>{mobile && <DiscoverCategoryMobile />}</>;
};

export default ClientControler;
