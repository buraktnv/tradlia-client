/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextPage } from "next";
import Link from "next/link";
import { useRef, useState } from "react";
import SingleProductItem from "../../components/product/SingleProductItem";
import BottomBar from "../../components/product/Bottombar";
import SellerCard from "../../components/product/SellerCard";
import SidebarCard from "../../components/product/SidebarCard";
import FilterTabMenu from "../../components/product/FilterTabMenu";
import { SvgWarranty, SvgMaximum, SvgSearch, SvgVendoPay } from "../../helpers/svgs/product";
import StateFilter from "../../components/shared/category/StateFilter";

const BottomBarData = {
  commentCount: 56,
  image: "/images/photos/product-6.svg",
  name: "TorqueMax Wood Screws",
  brand: "4×40 (500 Count)",
  votes: {
    5: 450,
    4: 65,
    3: 25,
    2: 10,
    1: 1,
  },
  votesRate: 4.8,
  star: 5,
  comments: [
    {
      id: 0,
      star: 4,
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      like: 12,
      dislike: 1,
      sender: "B** M**",
      date: "May 28, 2022",
    },
    {
      id: 1,
      star: 4,
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      like: 12,
      dislike: 1,
      sender: "M** A**",
      date: "May 28, 2022",
    },
    {
      id: 2,
      star: 4,
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      like: 12,
      dislike: 1,
      sender: "T** K**",
      date: "May 28, 2022",
    },
    {
      id: 3,
      star: 4,
      message:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.",
      like: 12,
      dislike: 1,
      sender: "T** K**",
      date: "May 28, 2022",
    },
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros \n \n Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros ",
  payment: [
    {
      icon: <SvgWarranty />,
      id: 0,
      2: { 0: "$853.65", 1: "$853.65" },
      3: { 0: "$953.65", 1: "$853.65" },
      4: { 0: "$1053.65", 1: "$1053.65" },
      5: { 0: "$1153.65", 1: "$1153.65" },
      6: { 0: "$1253.65", 1: "$1253.65" },
    },
    {
      id: 1,
      icon: <SvgVendoPay />,
      2: { 0: "$853.65", 1: "$853.65" },
      3: { 0: "$953.65", 1: "$853.65" },
      4: { 0: "$1053.65", 1: "$1053.65" },
      5: { 0: "$1153.65", 1: "$1153.65" },
      6: { 0: "$1253.65", 1: "$1253.65" },
    },
    {
      id: 2,
      icon: <SvgMaximum />,
      2: { 0: "$853.65", 1: "$853.65" },
      3: { 0: "$953.65", 1: "$853.65" },
      4: { 0: "$1053.65", 1: "$1053.65" },
      5: { 0: "$1153.65", 1: "$1153.65" },
      6: { 0: "$1253.65", 1: "$1253.65" },
    },
  ],
};
const items: any = [
  {
    id: 1,
    name: "Classic Lemon Cologne",
    brand: "Nordwell",
    image: "/images/photos/product-10.svg",
    price: 23.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 2,
    name: "TRMS Multimeter",
    brand: "MultiCheck Instruments",
    image: "/images/photos/product-3.svg",
    price: 53.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 3,
    name: "SenseIt Temp Sensor",
    brand: "Module ±0.5°C",
    image: "/images/photos/product-11.svg",
    price: 35.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 4,
    name: "SafeGuard 3-Ply Black",
    brand: "Dust Mask FFP2 Ear Loops 50 pcs",
    image: "/images/photos/product-4.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
];

const SidebarCardData: any = {
  mainImage: "/images/photos/product-6.svg",
  slider1: "/images/photos/product-5.svg",
  slider2: "/images/photos/product-6.svg",
  slider3: "/images/photos/product-6.svg",
  slider4: "/images/photos/product-6.svg",
  name: "TorqueMax Wood Screws",
  brand: "4×40 (500 Count)",
};

const Product: NextPage = () => {
  const [filter, setFilter] = useState("");
  const [itemList, setItemList] = useState<any>(items);
  const slideDiv = useRef<HTMLDivElement>(null);
  const slideDiv2 = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string>("itemb1");
  const [activeItem2, setActiveItem2] = useState<string>("itemc1");

  const scrollEvent = (e: any) => {
    const offset1 = document.getElementById("itemb1")!.offsetLeft - 12;
    const offset2 = document.getElementById("itemb2")!.offsetLeft - 12;
    const offset3 = document.getElementById("itemb3")!.offsetLeft - 12;
    const offset4 = document.getElementById("itemb4")!.offsetLeft - 12;

    const tar: HTMLDivElement = e.target;
    //console.dir(tar.scrollLeft);
    if (tar.scrollLeft > offset1 && tar.scrollLeft < offset2) activeItem !== "itemb1" && setActiveItem("itemb1");
    else if (tar.scrollLeft >= offset2 && tar.scrollLeft < offset3) activeItem !== "itemb2" && setActiveItem("itemb2");
    else if (tar.scrollLeft >= offset3 && tar.scrollLeft < offset4) activeItem !== "itemb3" && setActiveItem("itemb3");
    else if (tar.scrollLeft >= offset4) activeItem !== "itemb4" && setActiveItem("itemb4");
  };
  const scrollToElement = (item: string) => {
    slideDiv?.current?.scrollTo({
      left: document.getElementById(item)?.offsetLeft,
      behavior: "smooth",
    });
    setActiveItem(item);
  };

  const scrollEvent2 = (e: any) => {
    const offset1 = document.getElementById("itemc1")!.offsetLeft - 12;
    const offset2 = document.getElementById("itemc2")!.offsetLeft - 12;
    const offset3 = document.getElementById("itemc3")!.offsetLeft - 12;
    const offset4 = document.getElementById("itemc4")!.offsetLeft - 12;

    const tar: HTMLDivElement = e.target;
    //console.dir(tar.scrollLeft);
    if (tar.scrollLeft > offset1 && tar.scrollLeft < offset2) activeItem2 !== "itemc1" && setActiveItem2("itemc1");
    else if (tar.scrollLeft >= offset2 && tar.scrollLeft < offset3)
      activeItem2 !== "itemc2" && setActiveItem2("itemc2");
    else if (tar.scrollLeft >= offset3 && tar.scrollLeft < offset4)
      activeItem2 !== "itemc3" && setActiveItem2("itemc3");
    else if (tar.scrollLeft >= offset4) activeItem2 !== "itemc4" && setActiveItem2("itemc4");
  };
  const scrollToElement2 = (item: string) => {
    slideDiv2?.current?.scrollTo({
      left: document.getElementById(item)?.offsetLeft,
      behavior: "smooth",
    });
    setActiveItem2(item);
  };

  const unfavoriteCard = (item: any) => {
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
  return (
    <div className="min-h-screen pb-8">
      <div className="container mx-auto pt-4">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs">
            <li>
              <Link
                href="/"
                className="text-ink-muted hover:text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink-muted">/</li>
            <li>
              <Link
                href="/category?cat=tools"
                className="text-ink-muted hover:text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none"
              >
                Tools &amp; Fasteners
              </Link>
            </li>
            <li aria-hidden="true" className="text-ink-muted">/</li>
            <li aria-current="page" className="font-medium text-ink-soft">
              TorqueMax Wood Screws
            </li>
          </ol>
        </nav>
      </div>
      <div className="flex flex-col col-span-1 gap-3 mt-3 xl:hidden">
        <SidebarCard content={SidebarCardData} />
      </div>
      <div className="container grid grid-cols-6 mx-auto my-3 xl:my-[1.5rem]">
        <div className="flex-col hidden col-span-1 gap-3 xl:gap-[1.5rem] xl:flex">
          <SidebarCard content={SidebarCardData} />
          <StateFilter />
        </div>
        <div className="w-full col-span-6 px-3 mb-3 xl:mb-[1.5rem] xl:px-6 xl:col-span-5">
          <FilterTabMenu />

          <div className="grid w-full grid-cols-2 gap-3 mt-2 mb-3 xl:my-[1.5rem] xl:grid-cols-6">
            <button
              type="button"
              aria-pressed={filter === "Next-Day Delivery"}
              className={`w-full py-2 px-4 rounded-pill border text-sm font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                filter == "Next-Day Delivery"
                  ? "bg-brand-400 border-brand-400 text-white"
                  : "border-line bg-surface text-ink-soft hover:border-brand-300 hover:text-brand-600"
              }`}
              onClick={() => setFilter("Next-Day Delivery")}
            >
              Next-Day Delivery
            </button>
            <button
              type="button"
              aria-pressed={filter === "Fast Delivery"}
              className={`w-full py-2 px-4 rounded-pill border text-sm font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                filter == "Fast Delivery"
                  ? "bg-brand-400 border-brand-400 text-white"
                  : "border-line bg-surface text-ink-soft hover:border-brand-300 hover:text-brand-600"
              }`}
              onClick={() => setFilter("Fast Delivery")}
            >
              Fast Delivery
            </button>
          </div>
          <div className="grid gap-3 xl:gap-[0.75rem]">
            <SellerCard
              svg={svg.TradliaMark}
              title="Tradlia"
              star={4}
              starPoint={"4.1"}
              advertisementCount={63}
              date="Apr 2025"
              stock="15"
              price="63.23"
              item={{
                id: 1,
                name: "Classic Lemon Cologne",
                brand: "Nordwell",
                image: "/images/photos/product-10.svg",
                price: 23.5,
                shipping: 1,
                advertCount: 250,
                isFavorite: false,
              }}
            />
            <SellerCard
              svg={svg.tradedirect}
              title="TradeDirect"
              star={4}
              starPoint={"4.1"}
              advertisementCount={63}
              date="Apr 2025"
              stock="63"
              price="25.00"
              item={{
                id: 2,
                name: "TRMS Multimeter",
                brand: "MultiCheck Instruments",
                image: "/images/photos/product-3.svg",
                price: 53.5,
                shipping: 0,
                advertCount: 250,
                isFavorite: false,
              }}
            />
            <SellerCard
              svg={svg.SupplyHub}
              title="SupplyHub"
              star={4}
              starPoint={"4,0"}
              advertisementCount={63}
              date="Apr 2025"
              stock="63"
              price="18.23"
              item={{
                id: 3,
                name: "SenseIt Temp Sensor",
                brand: "Module ±0.5°C",
                image: "/images/photos/product-11.svg",
                price: 35.5,
                shipping: 1,
                advertCount: 250,
                isFavorite: false,
              }}
            />
            <SellerCard
              svg={svg.ToolWorks}
              title="ToolWorks"
              star={3}
              starPoint={"3,9"}
              advertisementCount={42}
              date="May 2023"
              stock="34"
              price="46.23"
              item={{
                id: 4,
                name: "SafeGuard 3-Ply Black",
                brand: "Dust Mask FFP2 Ear Loops 50 pcs",
                image: "/images/photos/product-4.svg",
                price: 45.5,
                shipping: 1,
                advertCount: 250,
                isFavorite: true,
              }}
            />
          </div>
          <div className="mt-12">
            <h2 className="font-display text-lg font-semibold text-ink">Best Sellers in This Category</h2>
            {/* Web Products */}
            <div className="hidden grid-cols-2 gap-2 mt-6 xl:gap-6 xl:grid-cols-4 xl:grid">
              <SingleProductItem content={itemList[0]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              <SingleProductItem content={itemList[1]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              <SingleProductItem content={itemList[2]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              <SingleProductItem content={itemList[3]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
            </div>
            {/* Mobile Products */}
            <div
              className={`xl:hidden flex py-8 mx-auto w-full overflow-y-hidden overflow-x-auto gap-x-8 snap-mandatory scroll-smooth snap-x`}
              ref={slideDiv}
              onScroll={scrollEvent}
            >
              <div id="itemb1">
                <SingleProductItem content={itemList[0]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              </div>
              <div id="itemb2">
                <SingleProductItem content={itemList[1]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              </div>
              <div id="itemb3">
                <SingleProductItem content={itemList[2]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              </div>
              <div id="itemb4">
                <SingleProductItem content={itemList[3]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              </div>
            </div>
            <div className="relative flex justify-center w-full gap-2 py-2 pb-8 xl:hidden" role="group" aria-label="Best sellers pages">
              {[1, 2, 3, 4].map((n) => {
                const id = `itemb${n}`;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-label={`Go to best sellers slide ${n}`}
                    aria-current={activeItem === id || undefined}
                    onClick={() => scrollToElement(id)}
                    className={`rounded-full px-4 py-1 border transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                      activeItem === id ? "bg-brand-500 border-brand-500" : "bg-transparent border-line hover:border-brand-300"
                    }`}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="mt-12">
            <h2 className="font-display text-lg font-semibold text-ink">Recently Viewed</h2>
            {/* Web Products */}
            <div className="hidden grid-cols-2 gap-2 mt-6 xl:gap-6 xl:grid-cols-4 xl:grid">
              <SingleProductItem content={itemList[3]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              <SingleProductItem content={itemList[2]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              <SingleProductItem content={itemList[0]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              <SingleProductItem content={itemList[1]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
            </div>
            {/* Mobile Products */}
            <div
              className={`xl:hidden flex py-8 mx-auto w-full overflow-y-hidden overflow-x-auto gap-x-8 snap-mandatory scroll-smooth snap-x`}
              ref={slideDiv2}
              onScroll={scrollEvent2}
            >
              <div id="itemc1">
                <SingleProductItem content={itemList[0]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              </div>
              <div id="itemc2">
                <SingleProductItem content={itemList[1]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              </div>
              <div id="itemc3">
                <SingleProductItem content={itemList[2]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              </div>
              <div id="itemc4">
                <SingleProductItem content={itemList[3]} unfavoriteCard={unfavoriteCard} favoriteCard={favoriteCard} />
              </div>
            </div>
            <div className="relative flex justify-center w-full gap-2 py-2 pb-8 xl:hidden" role="group" aria-label="Recently viewed pages">
              {[1, 2, 3, 4].map((n) => {
                const id = `itemc${n}`;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-label={`Go to recently viewed slide ${n}`}
                    aria-current={activeItem2 === id || undefined}
                    onClick={() => scrollToElement2(id)}
                    className={`rounded-full px-4 py-1 border transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                      activeItem2 === id ? "bg-brand-500 border-brand-500" : "bg-transparent border-line hover:border-brand-300"
                    }`}
                  ></button>
                );
              })}
            </div>
          </div>
          <div>
            <BottomBar content={BottomBarData} />
          </div>
        </div>
      </div>
    </div>
  );
};

const svg = {
  TradliaMark: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="74.808"
      height="74.818"
      viewBox="0 0 74.808 74.818"
      className="w-8 h-8"
    >
      <defs>
        <linearGradient id="seller-mark-grad" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#66c1bf" />
          <stop offset="1" stopColor="#00a29d" />
        </linearGradient>
      </defs>
      <path
        id="Path_132"
        data-name="Path 132"
        d="M4802.9,847.53c-.324,0-.648,0-.973-.009a1.334,1.334,0,0,1-1.434-1.246c-.009-.572-.022-1.146-.035-1.72a59.086,59.086,0,0,1,.088-6.482c.307-3.5,2.229-5.874,5.876-7.264a1.717,1.717,0,0,0,1.274-1.814c-.049-1.558-.032-3.127-.007-4.592a1.571,1.571,0,0,0-1.381-1.765c-1.6-.3-3.172-.676-4.907-1.094a2.235,2.235,0,0,0-.52-.067,1.641,1.641,0,0,0-1.437.907c-1.683,2.846-3.417,5.73-5.094,8.518l-.685,1.139c-.421.7-.939,1.1-1.423,1.1a1.861,1.861,0,0,1-1.4-1.08l-.932-1.551q-2.436-4.047-4.856-8.1a1.65,1.65,0,0,0-1.441-.927,2.082,2.082,0,0,0-.506.067c-1.774.438-3.428.811-5.055,1.139a1.412,1.412,0,0,0-1.247,1.537c.012,2.986.023,6.456-.008,9.854a1.674,1.674,0,0,0,1.125,1.634,5.891,5.891,0,0,1,3.668,5.526,5.809,5.809,0,0,1-3.4,5.617,5.972,5.972,0,0,1-2.76.673,6.206,6.206,0,0,1-5.56-3.518,6.144,6.144,0,0,1,3.009-8.264,1.8,1.8,0,0,0,1.2-1.831c-.019-1.717-.019-3.434-.019-5.152,0-1.146,0-2.292,0-3.438l.007-.026a1.251,1.251,0,0,0-.23-1.061,1.1,1.1,0,0,0-.852-.37,1.7,1.7,0,0,0-.327.035c-2.146.423-4.579.9-6.581,2.542a10.9,10.9,0,0,0-3.512,5.044c-1.256,3.764-4.96,14.859-4.96,14.859-.03.094-.058.187-.095.277a1.35,1.35,0,0,1-1.729.815,1.314,1.314,0,0,1-.859-1.668c.472-1.431.935-2.865,1.4-4.3,1.238-3.835,2.519-7.8,3.96-11.622,1.65-4.375,5.011-7.152,9.991-8.254l2.89-.642q4.63-1.029,9.264-2.04a1.457,1.457,0,0,0,1.27-1.6c-.027-1.372-.028-2.829,0-4.454a1.751,1.751,0,0,0-.889-1.642,18.081,18.081,0,0,1-8.312-11.62,12.935,12.935,0,0,1-.368-2.561c-.111-3.552-.078-7.06-.028-10.948a9.261,9.261,0,0,1,2.217-5.827,19.985,19.985,0,0,1,13.174-7.389c.056.005.1.007.146.007a1.117,1.117,0,0,0,.595-.164h3.917a1.257,1.257,0,0,0,.476.142,19.742,19.742,0,0,1,13.528,7.349,9.234,9.234,0,0,1,2.259,5.878c.03,3.006.019,6.067.008,9.026l0,1.349a14.028,14.028,0,0,1-.4,3.134,18.1,18.1,0,0,1-8.305,11.624,1.768,1.768,0,0,0-.9,1.64c.027,1.456.027,2.954,0,4.452a1.458,1.458,0,0,0,1.266,1.6c4.4.949,8.4,1.832,12.221,2.7a13.316,13.316,0,0,1,10.376,9.379q.55,1.648,1.1,3.3c.709,2.131,1.418,4.262,2.142,6.387.178.525.346,1.053.513,1.581.364,1.147.739,2.331,1.23,3.478v.7a.826.826,0,0,0-.049.088c-.451.9-.931,1.006-1.252,1.006-.05,0-.1,0-.151-.007-.478-.051-1.009-.232-1.326-1.2q-1.2-3.649-2.422-7.293l-.729-2.185q-.27-.813-.547-1.624c-.36-1.061-.732-2.159-1.073-3.241a10.785,10.785,0,0,0-8.587-7.733l-.55-.113c-.345-.07-.691-.14-1.033-.221a1.591,1.591,0,0,0-.378-.049,1.085,1.085,0,0,0-.792.318,1.3,1.3,0,0,0-.335.95c.011,1.359.019,2.8,0,4.239a1.3,1.3,0,0,0,1.063,1.352l.087.027a8.458,8.458,0,0,1,5.927,6.687,9.037,9.037,0,0,1,.145,1.758c.02,2.238.014,4.508.006,6.641,0,1.163-.519,1.685-1.669,1.69l-1.052,0q-.439,0-.88,0a1.388,1.388,0,0,1-1.534-1.205,1.342,1.342,0,0,1,1.244-1.536,1.2,1.2,0,0,0,1.15-1.29c-.011-.578,0-1.159,0-1.738a32.947,32.947,0,0,0-.085-3.4,5.689,5.689,0,0,0-5.778-5.218c-.1,0-.194,0-.292.007a5.8,5.8,0,0,0-5.527,5.712c-.027.909-.023,1.825-.018,2.712,0,.621.006,1.242,0,1.863a1.244,1.244,0,0,0,1.163,1.365,1.337,1.337,0,0,1,1.233,1.53,1.383,1.383,0,0,1-1.534,1.2C4803.675,847.527,4803.285,847.53,4802.9,847.53Zm-27.466-9.6a3.438,3.438,0,0,0-3.436,3.391,3.448,3.448,0,0,0,3.412,3.451,3.448,3.448,0,0,0,3.456-3.4,3.374,3.374,0,0,0-.985-2.413,3.418,3.418,0,0,0-2.432-1.025Zm12.133-24.619a1.11,1.11,0,0,0-.816.324,1.441,1.441,0,0,0-.334,1.085c.021,1.155.021,2.392,0,3.783a2.824,2.824,0,0,0,.436,1.587c.615,1,1.217,2.006,1.818,3.013l.79,1.322,2.6,4.316.785-.836.069-.071a1.393,1.393,0,0,0,.23-.277l1.467-2.441q1.572-2.613,3.147-5.225a2.287,2.287,0,0,0,.311-1.232l0-.458c-.006-1.143-.012-2.326.007-3.484a1.406,1.406,0,0,0-.33-1.074,1.1,1.1,0,0,0-.811-.322,2.109,2.109,0,0,0-.494.068,18.111,18.111,0,0,1-4.213.509,17.092,17.092,0,0,1-4.165-.518A1.968,1.968,0,0,0,4787.562,813.312Zm-4.171-22.793a2.286,2.286,0,0,0-1.72.87,8.959,8.959,0,0,1-3.956,2.914,1.236,1.236,0,0,0-.908,1.425l0,.07a15.382,15.382,0,0,0,4.349,10.578,15.565,15.565,0,0,0,11.264,4.765c.054,0,.147.005.242.005a15.718,15.718,0,0,0,2.724-.326,15.469,15.469,0,0,0,12.283-15.183v-.057a1.208,1.208,0,0,0-.889-1.27,10.112,10.112,0,0,1-4.235-3.182,1.842,1.842,0,0,0-1.378-.666,2.373,2.373,0,0,0-.84.173,22.435,22.435,0,0,1-15.888.1A3.093,3.093,0,0,0,4783.391,790.519Zm8.738-15.039a17.028,17.028,0,0,0-13.759,6.6,5.934,5.934,0,0,0-1.482,3.464c-.056,1.056-.044,2.1-.032,3.213.006.486.011.985.011,1.5v2.115l2.427-2.459c.685-.7,1.333-1.353,1.985-2.007s.972-.782,1.261-.782a3.137,3.137,0,0,1,1.168.349,19.951,19.951,0,0,0,17.09-.011,3.029,3.029,0,0,1,1.145-.345c.277,0,.591.128,1.222.759.66.659,1.305,1.333,1.95,2.007.289.3,1.335,1.388,1.335,1.388l1.225-.692v-4.051a7.07,7.07,0,0,0-1.674-4.6,16.849,16.849,0,0,0-11.835-6.357C4793.477,775.512,4792.791,775.48,4792.129,775.48Z"
        transform="translate(-4754.838 -772.712)"
        fill="url(#seller-mark-grad)"
      />
    </svg>
  ),
  tradedirect: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="68.628"
      height="74.762"
      viewBox="0 0 68.628 74.762"
      className="w-8 h-8"
    >
      <g id="Group_82" transform="translate(-4757.928 -992.74)">
        <path
          id="Path_130"
          d="M4814.137,992.74a3.555,3.555,0,0,1,2.332,3.981c-.073,1.066-.013,2.14-.013,3.211,0,2.4-.806,3.37-3.246,3.791,0,.744-.035,1.514.027,2.276.014.175.339.367.558.478a22.839,22.839,0,0,1,9.842,9.358,21.594,21.594,0,0,1,2.893,10.649q.057,16.531.009,33.064a7.283,7.283,0,0,1-7.521,7.357c-9.512.015-19.025,0-28.538.018a26.959,26.959,0,0,0-2.876.3,22.726,22.726,0,0,1-2.385.261q-8.466.035-16.933.007a10.359,10.359,0,0,1-.166-20.716c3.989-.029,7.979-.006,11.97-.006h.9v-.885c0-6.228-.077-12.457.018-18.684.143-9.433,4.493-16.333,12.81-20.762a1.1,1.1,0,0,0,.486-.746,18.151,18.151,0,0,0,.023-1.966c-.282-.05-.494-.085-.705-.126a2.987,2.987,0,0,1-2.537-2.947q-.042-2.445,0-4.89a3.226,3.226,0,0,1,2.322-3.02Zm-30.148,53.961a.39.39,0,0,0,.124.05c.389.008.778.008,1.167.016a10.215,10.215,0,0,1,8.511,4.45,1.147,1.147,0,0,0,1.074.535q13.98-.018,27.959-.009h.755c.282-3.479.113-26.073-.19-26.913-1.58,0-3.158-.005-4.737,0-2.92.01-5.84.029-8.76.035a1.448,1.448,0,0,1-1.623-1.671c.1-.79.707-1.24,1.7-1.247q6.059-.039,12.118-.072c.273,0,.546-.03.851-.047-.054-.235-.074-.355-.11-.47a19.542,19.542,0,0,0-11.184-12.624,1.96,1.96,0,0,1-1.375-2.117c.055-.963.012-1.931.012-2.892H4797.25c0,.933-.064,1.812.015,2.677a2.181,2.181,0,0,1-1.574,2.433,19.412,19.412,0,0,0-10.526,11.147c-.25.648-.426,1.324-.665,2.078.338,0,.554,0,.769,0q6.021-.042,12.043-.081a2.917,2.917,0,0,1,1,.132,1.335,1.335,0,0,1,.914,1.358,1.361,1.361,0,0,1-.957,1.332,2.673,2.673,0,0,1-.865.093q-4.452.039-8.9.064c-1.478.008-2.956,0-4.512,0Zm9.144,17.231a2.816,2.816,0,0,0,.282.048c8.634,0,17.269.016,25.9-.007a4.337,4.337,0,0,0,4.3-4.284c.034-1.531.01-3.064.006-4.6a1.91,1.91,0,0,0-.07-.366h-28.146A10.546,10.546,0,0,1,4793.133,1063.932Zm-14.845.6c.222.015.409.038.6.039,2.115,0,4.231.017,6.346,0a7.441,7.441,0,1,0-.024-14.881c-2.091-.011-4.182,0-6.273,0-.209,0-.418.03-.646.047Zm-3.016-.1v-14.748c-1.947,0-3.839-.013-5.731.006a18.394,18.394,0,0,0-2.541.136,7.416,7.416,0,0,0-6.15,7.264c-.015,3.578,2.6,6.932,6.08,7.286A83.33,83.33,0,0,0,4775.272,1064.434Zm18.768-63.73c.282.015.518.038.755.038q8.971,0,17.943,0a1.066,1.066,0,0,0,.432-.016c.142-.07.343-.226.345-.347.023-1.548.015-3.1.015-4.68h-19.49Z"
          fill="url(#seller-mark-grad)"
        />
      </g>
    </svg>
  ),
  SupplyHub: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="78.638"
      height="74.818"
      viewBox="0 0 78.638 74.818"
      className="w-8 h-8"
    >
      <path
        id="Path_131"
        data-name="Path 131"
        d="M4831.4,1254.355a9.033,9.033,0,0,0-6.55-7.2c-1.131-.348-1.167-.3-1.14-1.526a13.8,13.8,0,0,0-1.794-7.572,10.619,10.619,0,0,0-15-3.776,11.746,11.746,0,0,0-5.486,10.447q-.023,12.4,0,24.8a16,16,0,0,1-3.792,10.74,12.961,12.961,0,0,1-18.156,1.709c-4.343-3.587-5.81-8.356-5.579-13.8.011-.271.07-.426.366-.466,2.144-.288,3.054-1.73,3.418-3.675a16.854,16.854,0,0,0,.113-3.828c-.034-.78.209-1.08.95-1.3,7.6-2.233,13.821-9.234,13.5-18.155-.022-.584.194-1.365-.1-1.7-.35-.4-1.157-.155-1.753-.112-.663.047-.78-.181-.779-.8.011-5.272-.044-10.544-.025-15.815a6.6,6.6,0,0,0-5.012-6.754c-.351-.077-.479-.314-.618-.6a3.87,3.87,0,0,0-4.339-2.118,3.9,3.9,0,0,0-.2,7.568,3.843,3.843,0,0,0,4.4-1.822c.236-.407.439-.464.838-.263a4.024,4.024,0,0,1,2.294,3.924c.009,4.862.043,9.725.061,14.587,0,.661.223,1.518-.1,1.93-.347.437-1.243.094-1.9.144a.653.653,0,0,1-.153,0c-.38-.061-.466.115-.464.472a24.035,24.035,0,0,1-.109,3.294,10.021,10.021,0,0,1-4.793,7.558,11.558,11.558,0,0,1-9.734,1.238,10.217,10.217,0,0,1-7.224-7.178,15.308,15.308,0,0,1-.4-4.794c.007-.474-.117-.619-.594-.6-.946.038-1.894,0-2.841.018-.368.008-.54-.051-.539-.489.016-5.528-.008-11.055.027-16.583a3.8,3.8,0,0,1,2.161-3.463c.452-.245.733-.313,1.072.291a3.61,3.61,0,0,0,3.589,1.894,3.882,3.882,0,0,0,3.69-3.647,3.978,3.978,0,0,0-2.854-4.06,3.9,3.9,0,0,0-4.64,2.165.837.837,0,0,1-.6.523,6.656,6.656,0,0,0-5.074,6.861c.061,4.81.017,9.622.013,14.433,0,.661.221,1.522-.107,1.93-.347.43-1.244.09-1.9.138a1.177,1.177,0,0,1-.23,0c-.309-.042-.382.105-.383.394a22.776,22.776,0,0,0,.562,6.55c1.976,6.8,6.54,11.016,13.174,13.135.532.17.71.354.711.919a16.808,16.808,0,0,0,.292,4.882,3.557,3.557,0,0,0,2.739,2.8c.793.145.9.451.88,1.132a18.768,18.768,0,0,0,2.637,10.78c3.179,5.09,7.73,8.036,13.79,8.02,6.033-.017,10.55-2.987,13.7-8.046a19.36,19.36,0,0,0,2.648-10.632c-.038-8.035-.008-16.071-.016-24.107a11.178,11.178,0,0,1,.347-2.881,8.922,8.922,0,0,1,7.2-6.6,8.354,8.354,0,0,1,8.295,4.53,12.471,12.471,0,0,1,1.215,6.321c0,.6-.165.815-.751.941a9.064,9.064,0,0,0-7.106,8.285,9.164,9.164,0,0,0,17.918,3.279c.116-.371.046-.817.393-1.108v-2.764C4831.365,1254.673,4831.433,1254.492,4831.4,1254.355Zm-50.933-36.433a1.259,1.259,0,0,1-1.3-1.229,1.294,1.294,0,0,1,1.267-1.35,1.335,1.335,0,0,1,1.314,1.319A1.3,1.3,0,0,1,4780.471,1217.922Zm-15.731-2.579a1.3,1.3,0,0,1,1.272,1.272,1.257,1.257,0,0,1-1.223,1.3,1.292,1.292,0,0,1-1.361-1.254A1.331,1.331,0,0,1,4764.74,1215.343Zm-8.051,31.839a14.664,14.664,0,0,1-1.134-5.133c-.02-.4.067-.535.487-.522.946.031,1.894.042,2.839,0,.515-.024.62.161.654.639a12.622,12.622,0,0,0,7.023,10.862,14.2,14.2,0,0,0,18.716-5.091,12.663,12.663,0,0,0,1.709-5.821c.022-.454.125-.655.606-.583a5.154,5.154,0,0,0,.766.007c1.376,0,1.376,0,1.205,1.412a16.16,16.16,0,0,1-12.518,13.769,16.484,16.484,0,0,1-4.192.518A17.071,17.071,0,0,1,4756.689,1247.182Zm14.948,17.956a1.311,1.311,0,0,1-1.48-1.138,19.54,19.54,0,0,1-.183-3.961c-.012-.328.183-.279.4-.267.738.041,1.477.068,2.216.1v-.079c.663,0,1.329.044,1.987-.014.475-.043.681.014.642.56a21.689,21.689,0,0,1-.165,3.5c-.228.973-.591,1.285-1.579,1.3C4772.861,1265.145,4772.249,1265.148,4771.637,1265.138Zm57.271-8.938a6.526,6.526,0,1,1-6.348-6.771A6.467,6.467,0,0,1,4828.908,1256.2Zm-6.509-4.182a3.939,3.939,0,0,0-3.921,3.961,3.893,3.893,0,0,0,3.9,3.887,3.946,3.946,0,0,0,3.947-3.939A3.991,3.991,0,0,0,4822.4,1252.018Zm0,5.218a1.269,1.269,0,0,1-1.3-1.312,1.3,1.3,0,0,1,1.277-1.27,1.347,1.347,0,0,1,1.311,1.327A1.308,1.308,0,0,1,4822.4,1257.236Z"
        transform="translate(-4752.923 -1212.712)"
        fill="url(#seller-mark-grad)"
      />
    </svg>
  ),
  ToolWorks: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="69.829"
      height="74.818"
      viewBox="0 0 69.829 74.818"
      className="w-8 h-8"
    >
      <g id="Group_81" data-name="Group 81" transform="translate(-4757.328 -1433.274)">
        <path
          id="Path_129"
          data-name="Path 129"
          d="M4769.72,1445.738v-4.995c-.4,0-.784.017-1.162,0a1.228,1.228,0,0,1-1.221-1.648c.377-1.24.8-2.467,1.221-3.693a1.278,1.278,0,0,1,1.239-.894q9.093-.606,18.186-1.221c1.246-.082,1.712.371,1.716,1.614,0,1.454.009,2.909,0,4.364-.008,1.018-.461,1.477-1.477,1.481-2.519.009-5.038,0-7.557,0h-.89v4.962c.173.01.322.023.471.026,1.625.032,1.826.177,2.079,1.755.389,2.431.733,4.868,1.129,7.3.031.193.283.4.481.511a15.887,15.887,0,0,1,7.882,17.124c-.23,1.428-.387,2.868-.555,4.133,1.808-.3,3.577-.674,5.366-.856,1.5-.153,1.782.3,1.731,1.786a1.477,1.477,0,0,0,.727,1.124,23.717,23.717,0,0,0,2.9.9c-.188-1.472-.342-2.717-.508-3.96-.591-4.424-1.252-8.841-1.75-13.276a41,41,0,0,1-.033-5.373,1.166,1.166,0,0,1,1.211-1.177c.206-.018.416-.007.623-.007h23.686c1.552,0,1.826.335,1.9,1.851.227,4.473-.621,8.844-1.189,13.241-.727,5.637-1.5,11.268-2.248,16.9-.493,3.705-1.041,7.4-1.451,11.118a47.618,47.618,0,0,0-.108,4.978c-.015,2.818-1.463,4.29-4.258,4.29q-25.829,0-51.657,0c-2.577,0-3.937-1.2-4.276-3.747q-2.065-15.474-4.138-30.947c-.307-2.308-.739-4.6-.236-6.959a16.216,16.216,0,0,1,7.814-11.02,1.2,1.2,0,0,0,.681-1.037c.338-2.571.795-5.127,1.247-7.681a1.151,1.151,0,0,1,1.174-.958C4768.861,1445.722,4769.25,1445.738,4769.72,1445.738Zm8.758,42.328c0-1.073,0-2.159,0-3.245,0-1.247.376-1.634,1.6-1.679a7.1,7.1,0,0,0,3.9-1.159c1.337-.935,2.578-2.008,3.894-2.974a1.7,1.7,0,0,0,.725-1.286c.178-1.495.409-2.983.585-4.477a28.854,28.854,0,0,0,.456-4.714,13.636,13.636,0,0,0-9.653-12.224,19.662,19.662,0,0,0-6.638-.583,13.446,13.446,0,0,0-12.276,7.911,10.985,10.985,0,0,0-1.239,6.106c.266,2.528.672,5.041,1.009,7.561q1.8,13.466,3.591,26.932c.133,1,.533,1.358,1.537,1.36q4.167.009,8.335,0c.179,0,.357-.025.43-.03v-13.189C4774.737,1489.709,4775.782,1488.486,4778.478,1488.066Zm41.307,10.022,4.645-34.857h-22.071c.365,2.788.72,5.535,1.086,8.28.333,2.495.669,4.989,1.032,7.479a.886.886,0,0,0,.413.609,5.366,5.366,0,0,1,3.513,5.34c0,1.057,0,2.114,0,3.158,2.53.271,3.737,1.619,3.74,4.083q0,1.675,0,3.35v2.558Zm-26.339,7.509q7.361,0,14.721,0c1.132,0,1.482-.352,1.482-1.49q0-6,0-12c0-1.128-.354-1.476-1.494-1.477h-29.442c-1.134,0-1.48.349-1.481,1.489q0,5.96,0,11.92c0,1.233.326,1.555,1.571,1.556Zm-12.423-19.916v2.4h24.85v-2.4Zm43.555-27.422h-22.345v2.4h22.345Zm-55.834-5.1h11.99c-.28-1.674-.548-3.28-.816-4.887h-10.365C4769.281,1449.912,4769.016,1451.52,4768.744,1453.158Zm36.7,29.953a2.084,2.084,0,0,0-1.828-1.2c-.414-.027-.833.008-1.244-.033-2.706-.275-5.47-.455-6.581-3.6-2.789.113-7.567,2.764-8.761,4.836Zm6.655,17.533v4.944c2.092,0,4.239.046,6.381-.043a1.451,1.451,0,0,0,1.058-.914c.125-1.321.05-2.661.05-3.987Zm-24.925-64.775c-.653.034-1.223.056-1.792.094q-6.8.447-13.6.9c-1.222.078-1.223.061-1.447,1.331h16.843Zm-9.984,9.831v-4.907H4772.3v4.907Z"
          fill="url(#seller-mark-grad)"
        />
      </g>
    </svg>
  ),
};

export default Product;
