/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, useLayoutEffect, useRef, useState } from "react";
import useIsClient from "../../helpers/hooks/useIsClient";
import useMediaQuery from "../../helpers/hooks/useMediaQuery";
import styles from "./DiscoverCategoryMobile.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SvgM } from "../../helpers/svgs/homeSvg";

const DiscoverCategoryMobile = () => {
  const slideDiv = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string>("item1");

  useLayoutEffect(() => {
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
  }, [activeItem]);

  const scrollEvent = (e: any) => {
    const offset1 = document.getElementById("item1")!.offsetLeft - 16;
    const offset2 = document.getElementById("item2")!.offsetLeft - 16;
    const offset3 = document.getElementById("item3")!.offsetLeft - 16;
    const offset4 = document.getElementById("item4")!.offsetLeft - 16;

    const tar: HTMLDivElement = e.target;
    //console.dir(tar.scrollLeft);
    if (tar.scrollLeft > offset1 && tar.scrollLeft < offset2) activeItem !== "item1" && setActiveItem("item1");
    else if (tar.scrollLeft >= offset2 && tar.scrollLeft < offset3) activeItem !== "item2" && setActiveItem("item2");
    else if (tar.scrollLeft >= offset3 && tar.scrollLeft < offset4) activeItem !== "item3" && setActiveItem("item3");
    else if (tar.scrollLeft >= offset4) activeItem !== "item4" && setActiveItem("item4");
  };

  const scrollToElement = (item: string) => {
    slideDiv?.current?.scrollTo({
      left: document.getElementById(item)?.offsetLeft,
      behavior: "smooth",
    });
    setActiveItem(item);
  };
  return (
    <>
      <div className="relative flex items-center w-full">
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-gradient-to-b from-[#E0F2F1] via-[#F0FAF9] to-[#E8F1FB]">
          <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#4CBEC5]/25 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full bg-[#5327A8]/10 blur-3xl"></div>
        </div>
        <div className="w-full px-4">
          <div className={`carousel w-full ${styles.carousel}`} ref={slideDiv} onScroll={scrollEvent}>
            <div id="item1" className="relative w-full py-4 carousel-item">
              <SingleItem
                text={"Medical"}
                type={"medical"}
                colorClass={"to-[#3fdcc4] via-[#0275b5] from-[#00bfae]"}
                imgUrl={"/images/main/homepage/product-17.svg"}
              />
            </div>
            <div id="item2" className="relative w-full py-4 carousel-item">
              <SingleItem
                text={"Health"}
                type={"health"}
                colorClass={"to-[#FF7B03] from-[#FFBE00]"}
                imgUrl={"/images/main/homepage/product-18.svg"}
              />
            </div>
            <div id="item3" className="relative w-full py-4 carousel-item">
              <SingleItem
                text={"Supplements"}
                type={"supplements"}
                colorClass={"to-[#FF0045] from-[#FF516B]"}
                imgUrl={"/images/main/homepage/product-19.svg"}
              />
            </div>
            <div id="item4" className="relative w-full py-4 carousel-item">
              <SingleItem
                text={"Personal Care"}
                type={"personal-care"}
                colorClass={"from-[#00A29D] to-[#66C1BF]"}
                imgUrl={"/images/main/homepage/product-20.svg"}
              />
            </div>
          </div>
          <div className="relative flex justify-center w-full gap-2 py-2 pb-8">
            <button type="button"
              onClick={() => scrollToElement("item1")}
              className={`rounded-full px-4 py-1 border cursor-pointer border-[#4CBEC5] ${activeItem === "item1" && "bg-[#5327A8]"}`}
            ></button>
            <button type="button"
              onClick={() => scrollToElement("item2")}
              className={`rounded-full px-4 py-1 border cursor-pointer border-[#4CBEC5] ${activeItem === "item2" && "bg-[#5327A8]"}`}
            ></button>
            <button type="button"
              onClick={() => scrollToElement("item3")}
              className={`rounded-full px-4 py-1 border cursor-pointer border-[#4CBEC5] ${activeItem === "item3" && "bg-[#5327A8]"}`}
            ></button>
            <button type="button"
              onClick={() => scrollToElement("item4")}
              className={`rounded-full px-4 py-1 border cursor-pointer border-[#4CBEC5] ${activeItem === "item4" && "bg-[#5327A8]"}`}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

const SingleItem: FC<any> = ({ text, type, imgUrl, colorClass }) => {
  return (
    <Link href={`/category?cat=${type}`}>
      <div className="relative flex flex-col w-full h-full px-3 cursor-pointer select-none group">
        <div className="px-8 py-4 text-xl text-[#5327A8]">{text}</div>
        <div className="relative w-full h-full">
          <div className={`absolute w-full h-full rounded-[3.2rem] bg-gradient-to-r ${colorClass}`}></div>
          <div className="absolute w-[50%] h-[50%] right-3 top-8">
            <SvgM />
          </div>
          <div className="h-56 w-[65%] flex items-center justify-center">
            <div className="relative w-40 h-40 transition-all duration-200 ease-in-out transform group-hover:scale-105">
              <Image className="object-contain" src={imgUrl} alt="" fill sizes="100vw" />
            </div>
          </div>
        </div>
        <div className="absolute text-xl font-bold -bottom-4 right-10 ">
          <p className="px-3 py-1 bg-[#5327A8] text-white rounded-full text-center">Shop</p>
          <p className="px-3 py-1 bg-[#4CBEC5] text-white rounded-full text-center">Discover</p>
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
