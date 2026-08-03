/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, useLayoutEffect, useRef, useState } from "react";
import useMediaQuery from "../../helpers/hooks/useMediaQuery";
import SingleCard from "../profile/favourites/SingleCard";
import { jsonCategoryList } from "./jsonCategoryList";

const items: any = [
  {
    id: 1,
    name: "VitaPlus Healing",
    brand: "Cream 40 ml",
    image: "/images/photos/product-1.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 2,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/product-2.svg",
    price: 36.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 3,
    name: "MediCore Digital",
    brand: "Contactless Thermometer",
    image: "/images/photos/product-3.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 4,
    name: "SafeGuard 3-Ply Black",
    brand: "Surgical Mask with Ear Loops 50 pcs",
    image: "/images/photos/product-4.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 5,
    name: "ClearMed Hydrogen Peroxide",
    brand: "100 ml",
    image: "/images/photos/product-5.svg",
    price: 4.25,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 6,
    name: "Herbiva Orange & ",
    brand: "Echinacea 24 Lozenges",
    image: "/images/photos/product-6.svg",
    price: 8.44,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 7,
    name: "Nordwell Relief",
    brand: "Honey-Lemon Flavor 24 Lozenges",
    image: "/images/photos/product-7.svg",
    price: 24.69,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 8,
    name: "GreenLeaf Baby Powder",
    brand: "100 gr",
    image: "/images/photos/product-8.svg",
    price: 9.9,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 9,
    name: "GreenLeaf InsectGuard",
    brand: "Insect Repellent 1 L",
    image: "/images/photos/product-9.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 10,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/product-2.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
];

const AltCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [itemList, setItemList] = useState<any>(items);
  const [activeItem, setActiveItem] = useState<string>("itemd1");
  const slideDiv = useRef<HTMLDivElement>(null);
  const mobile = !useMediaQuery("(min-width: 768px)");

  useLayoutEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    timer = setTimeout(() => {
      const newItem = activeItem.split("itemd1");
      const newMath: number = Number(newItem[1]) + Number(2);
      if (activeItem === "itemd1") scrollToElement("itemd4");
      else if (activeItem === "itemd4") scrollToElement("itemd6");
      else scrollToElement("itemd1");
    }, 4000);

    return () => {
      timer && clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeItem]);

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

  const scrollEvent = (e: any) => {
    const offset1 = document.getElementById("itemd1")!.offsetLeft - 16;
    const offset2 = document.getElementById("itemd4")!.offsetLeft - 16;
    const offset3 = document.getElementById("itemd6")!.offsetLeft - 16;

    const tar: HTMLDivElement = e.target;
    //console.dir(tar.scrollLeft);
    if (tar.scrollLeft > offset1 && tar.scrollLeft < offset2) activeItem !== "itemd1" && setActiveItem("itemd1");
    else if (tar.scrollLeft >= offset2 && tar.scrollLeft < offset3) activeItem !== "itemd4" && setActiveItem("itemd4");
    else if (tar.scrollLeft >= offset3) activeItem !== "itemd6" && setActiveItem("itemd6");
  };

  const scrollToElement = (item: string) => {
    slideDiv?.current?.scrollTo({
      left: document.getElementById(item)?.offsetLeft,
      behavior: "smooth",
    });
    setActiveItem(item);
  };
  return (
    <div className="relative flex flex-col w-full bg-white">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#66C1BF33] to-[#00A29D33]"></div>
      <div className="container mx-auto">
        <div
          className={`flex pt-8 pb-3 mx-auto w-full overflow-y-hidden gap-x-[3.3333%] overflow-x-auto xl:gap-x-8 snap-mandatory scroll-smooth snap-x ${
            mobile && "hiddenScroll"
          }
          }`}
          ref={slideDiv}
          onScroll={scrollEvent}
        >
          {jsonCategoryList.map((el, index) => (
            <div
              key={el.id}
              id={String("itemd" + (index + 1))}
              className="snap-start basis-[30%] min-w-[30%] xl:basis-auto xl:min-w-fit"
            >
              <SingleCategoryItem
                content={el}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          ))}
        </div>
        <div className="relative flex justify-center w-full gap-2 pb-8 xl:hidden">
          <button type="button"
            onClick={() => scrollToElement("itemd1")}
            className={`rounded-full px-4 py-1 border border-[#4CBEC5] ${activeItem === "itemd1" && "bg-[#4CBEC5]"}`}
          ></button>
          <button type="button"
            onClick={() => scrollToElement("itemd4")}
            className={`rounded-full px-4 py-1 border border-[#4CBEC5] ${activeItem === "itemd4" && "bg-[#4CBEC5]"}`}
          ></button>
          <button type="button"
            onClick={() => scrollToElement("itemd6")}
            className={`rounded-full px-4 py-1 border border-[#4CBEC5] ${activeItem === "itemd6" && "bg-[#4CBEC5]"}`}
          ></button>
        </div>
      </div>
      <div className="container hidden grid-cols-2 pt-8 mx-auto xl:grid xl:grid-cols-5 gap-x-8 gap-y-8">
        {itemList &&
          itemList.map((content: any) => (
            <SingleCard key={content.id} content={content} deleteCard={deleteCard} favoriteCard={favoriteCard} />
          ))}
      </div>
      <div className="grid grid-cols-2 gap-3 px-4 pt-4 mx-auto xl:hidden xl:grid-cols-5 xl:gap-x-8 xl:gap-y-8">
        {itemList &&
          itemList
            .slice(0, 4)
            .map((content: any) => (
              <SingleCard key={content.id} content={content} deleteCard={deleteCard} favoriteCard={favoriteCard} />
            ))}
      </div>
      <div className="flex justify-center w-full pt-8 pb-10">
        <button type="button" className="bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white px-8 py-2 font-thin rounded-full xl:font-bold text-[12px] leading-[14px] xl:text-base h-10">
          Show More
        </button>
      </div>
    </div>
  );
};

const SingleCategoryItem: FC<any> = ({ content, selectedCategory, setSelectedCategory }) => {
  const isActive = content.id === selectedCategory;
  return (
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
  );
};

export default AltCategories;
