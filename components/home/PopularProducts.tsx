/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, useLayoutEffect, useRef, useState } from "react";
import useMediaQuery from "../../helpers/hooks/useMediaQuery";
import SingleCard from "../profile/favourites/SingleCard";
import styles from "./PopularProducts.module.scss";

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
  {
    id: 11,
    name: "VitaPlus Healing",
    brand: "Cream 40 ml",
    image: "/images/photos/product-1.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 12,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/product-2.svg",
    price: 36.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 13,
    name: "MediCore Digital",
    brand: "Contactless Thermometer",
    image: "/images/photos/product-3.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 14,
    name: "SafeGuard 3-Ply Black",
    brand: "Surgical Mask with Ear Loops 50 pcs",
    image: "/images/photos/product-4.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 15,
    name: "ClearMed Hydrogen Peroxide",
    brand: "100 ml",
    image: "/images/photos/product-5.svg",
    price: 4.25,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 16,
    name: "Herbiva Orange & ",
    brand: "Echinacea 24 Lozenges",
    image: "/images/photos/product-6.svg",
    price: 8.44,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 17,
    name: "Nordwell Relief",
    brand: "Honey-Lemon Flavor 24 Lozenges",
    image: "/images/photos/product-7.svg",
    price: 24.69,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 18,
    name: "GreenLeaf Baby Powder",
    brand: "100 gr",
    image: "/images/photos/product-8.svg",
    price: 9.9,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 19,
    name: "GreenLeaf InsectGuard",
    brand: "Insect Repellent 1 L",
    image: "/images/photos/product-9.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 20,
    name: "VitaPlus Healing",
    brand: "Cream 40 ml",
    image: "/images/photos/product-1.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 21,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/product-2.svg",
    price: 36.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 22,
    name: "MediCore Digital",
    brand: "Contactless Thermometer",
    image: "/images/photos/product-3.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 23,
    name: "SafeGuard 3-Ply Black",
    brand: "Surgical Mask with Ear Loops 50 pcs",
    image: "/images/photos/product-4.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 24,
    name: "ClearMed Hydrogen Peroxide",
    brand: "100 ml",
    image: "/images/photos/product-5.svg",
    price: 4.25,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 25,
    name: "Herbiva Orange & ",
    brand: "Echinacea 24 Lozenges",
    image: "/images/photos/product-6.svg",
    price: 8.44,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 26,
    name: "Nordwell Relief",
    brand: "Honey-Lemon Flavor 24 Lozenges",
    image: "/images/photos/product-7.svg",
    price: 24.69,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 27,
    name: "GreenLeaf Baby Powder",
    brand: "100 gr",
    image: "/images/photos/product-8.svg",
    price: 9.9,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 28,
    name: "GreenLeaf InsectGuard",
    brand: "Insect Repellent 1 L",
    image: "/images/photos/product-9.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 29,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/product-2.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
];

const AltCategories: FC<any> = () => {
  const [itemList, setItemList] = useState<any>(items);
  const slideDiv = useRef<HTMLDivElement>(null);
  const mobile = !useMediaQuery("(min-width: 768px)");
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  const [activeItem, setActiveItem] = useState<string>("itema1");

  useLayoutEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    timer = setTimeout(() => {
      const newItem = activeItem.split("itema");
      const newMath: number = Number(newItem[1]) + Number(2);
      if (activeItem !== "itema7") scrollToElement("itema" + newMath);
      else scrollToElement("itema1");
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
    const offset1 = document.getElementById("itema1")!.offsetLeft - 16;
    const offset2 = document.getElementById("itema3")!.offsetLeft - 16;
    const offset3 = document.getElementById("itema5")!.offsetLeft - 16;
    const offset4 = document.getElementById("itema7")!.offsetLeft - 16;

    const tar: HTMLDivElement = e.target;
    //console.dir(tar.scrollLeft);
    if (tar.scrollLeft > offset1 && tar.scrollLeft < offset2) activeItem !== "itema1" && setActiveItem("itema1");
    else if (tar.scrollLeft >= offset2 && tar.scrollLeft < offset3) activeItem !== "itema3" && setActiveItem("itema3");
    else if (tar.scrollLeft >= offset3 && tar.scrollLeft < offset4) activeItem !== "itema5" && setActiveItem("itema5");
    else if (tar.scrollLeft >= offset4) activeItem !== "itema7" && setActiveItem("itema7");
  };

  const scrollToElement = (item: string) => {
    slideDiv?.current?.scrollTo({
      left: document.getElementById(item)?.offsetLeft,
      behavior: "smooth",
    });
    setActiveItem(item);
  };

  return (
    <div className="bg-[#F4F5F9]">
      <div className={`flex flex-col w-full pt-8 pb-4 xl:py-12 px-4 xl:px-0 mx-auto container`}>
        <div className="text-lg xl:text-2xl font-bold text-[#4CBEC5]">Best Selling Listings in the Last 7 Days</div>
        <div
          className={`flex py-8 mx-auto w-full overflow-y-hidden overflow-x-auto gap-x-[4%] xl:gap-x-8 snap-mandatory scroll-smooth snap-x ${
            mobile ? "hiddenScroll" : styles.PopularProducts
          } `}
          ref={slideDiv}
          onScroll={scrollEvent}
        >
          {itemList &&
            itemList.slice(0, 8).map((content: any, index: number) => (
              <div
                key={content.id}
                className="sm:w-1/2 xl:w-[18%] shrink-0 basis-[48%] xl:basis-auto snap-start"
                id={String("itema" + (index + 1))}
              >
                <SingleCard content={content} deleteCard={deleteCard} favoriteCard={favoriteCard} />
              </div>
            ))}
        </div>
        <div className="relative flex justify-center w-full gap-2 py-2 pb-8 xl:hidden">
          <button type="button"
            onClick={() => scrollToElement("itema1")}
            className={`rounded-full px-4 py-1 border cursor-pointer border-[#4CBEC5] ${activeItem === "itema1" && "bg-[#4CBEC5]"}`}
          ></button>
          <button type="button"
            onClick={() => scrollToElement("itema3")}
            className={`rounded-full px-4 py-1 border cursor-pointer border-[#4CBEC5] ${activeItem === "itema3" && "bg-[#4CBEC5]"}`}
          ></button>
          <button type="button"
            onClick={() => scrollToElement("itema5")}
            className={`rounded-full px-4 py-1 border cursor-pointer border-[#4CBEC5] ${activeItem === "itema5" && "bg-[#4CBEC5]"}`}
          ></button>
          <button type="button"
            onClick={() => scrollToElement("itema7")}
            className={`rounded-full px-4 py-1 border cursor-pointer border-[#4CBEC5] ${activeItem === "itema7" && "bg-[#4CBEC5]"}`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default AltCategories;
