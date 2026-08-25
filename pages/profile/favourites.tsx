import { NextPage } from "next";
import { useState } from "react";
import SingleCard from "../../components/profile/favourites/SingleCard";
import SingleCardListStyle from "../../components/profile/favourites/SingleCardListStyle";
import DateDropdown from "../../components/profile/feedback/DateDropdown";
import FilterDropdown from "../../components/profile/feedback/FilterDropdown";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import { SvgFilterTabIcon1, SvgFilterTabIcon2, SvgSearch } from "../../helpers/svgs/favoriteSvg";
import useLocalStorage from "../../helpers/hooks/useLocalStorage";
import { HIRE_ME_COPY } from "../../helpers/config";

const items: any = [
  {
    id: 1,
    name: "StackSafe Double-Wall Boxes",
    brand: "50 pcs ",
    image: "/images/photos/product-1.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 2,
    name: "ClearOffice A4 Paper",
    brand: "500 Sheets 80 gsm",
    image: "/images/photos/product-15.svg",
    price: 36.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 3,
    name: "MultiCheck Digital TRMS",
    brand: "Multimeter",
    image: "/images/photos/product-14.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 4,
    name: "PureSafe 3-Layer Black",
    brand: "Dust Mask FFP2 Nose Wire 50 pcs",
    image: "/images/photos/product-2.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 5,
    name: "GripTight Pallet Wrap",
    brand: "20 µm Roll",
    image: "/images/photos/product-2.svg",
    price: 4.25,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 6,
    name: "TorqueMax Wood Screws ",
    brand: "4×40 (500 Count)",
    image: "/images/photos/product-3.svg",
    price: 8.44,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 7,
    name: "WriteWell Gel Pens",
    brand: "Blue 0.7 mm 10 pcs",
    image: "/images/photos/product-4.svg",
    price: 24.69,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 8,
    name: "BoltCore Threadlocker",
    brand: "10 ml",
    image: "/images/photos/product-4.svg",
    price: 9.9,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 9,
    name: "K-Othrine AL",
    brand: "Insecticide 1 lt",
    image: "/images/photos/K-Othrine.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 10,
    name: "ClearOffice A4 Paper",
    brand: "500 Sheets 80 gsm",
    image: "/images/photos/product-15.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 11,
    name: "Nordwell Insect Repellent",
    brand: "Ant Granules",
    image: "/images/photos/product-5.svg",
    price: 19.49,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },

  {
    id: 12,
    name: "SafeGrip Cut-Resistant",
    brand: "Gloves Level D Pair",
    image: "/images/photos/product-6.svg",
    price: 185.0,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
];

const filterList = [
  { id: 0, title: "All", active: true },
  { id: 1, title: "Answered", active: false },
  { id: 2, title: "Not Answered", active: false },
  { id: 3, title: "1 Star", active: false },
  { id: 4, title: "2 Stars", active: false },
  { id: 5, title: "3 Stars", active: false },
  { id: 6, title: "4 Stars", active: false },
  { id: 7, title: "5 Stars", active: false },
];

const Favourites: NextPage = () => {
  const [itemList, setItemList] = useLocalStorage<any[]>("favourites", items);

  const [cardStyle, setCardStyle] = useState<any>("card");

  const deleteCard = (item: any) => {
    setItemList((pre: any[]) => pre.filter((el: any) => el.id !== item.id));
  };

  return (
    <ProfileLayout>
      <div className="flex flex-col w-full xl:px-0 bg-[#F2F2F2] xl:bg-transparent px-3 xl:mx-0">
        <div className="xl:h-[3rem] flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between xl:pl-8 xl:mx-0 xl:border xl:border-[#00B1B265] xl:bg-[#F4F5F7] xl:rounded-full mb-3 xl:mb-[1.5rem]">
          <div className="flex justify-around xl:justify-start xl:gap-12 border rounded-full py-2 xl:py-0 border-[#00B1B265] xl:border-0">
            <div className="flex xl:mx-8">
              <FilterDropdown filterList={filterList} />
            </div>
            <div className="flex xl:mx-8">
              <DateDropdown />
            </div>
          </div>
          <div className="items-center hidden gap-2 xl:flex">
            <div
              className={`w-4 h-4  cursor-pointer ${
                cardStyle === "card" ? "text-[#4CBEC5]" : "text-[#7E8096] hover:text-[#4CBEC5]"
              }`}
              onClick={() => setCardStyle("card")}
            >
              <SvgFilterTabIcon1 />
            </div>
            <div
              className={`w-4 h-4  cursor-pointer ${
                cardStyle === "list" ? "text-[#4CBEC5]" : "text-[#7E8096] hover:text-[#4CBEC5]"
              }`}
              onClick={() => setCardStyle("list")}
            >
              <SvgFilterTabIcon2 />
            </div>
          </div>
          <div className="flex relative ring-1 rounded-full ring-[#4CBEC565] ">
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="outline-none bg-white placeholder-[#7E8096] xl:placeholder-[#4CBEC5] px-5 text-left text-[#7E8096] xl:text-[#4CBEC5]  placeholder:font-light w-full  xl:px-20 py-2 rounded-full xl:text-center"
            />
            <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-[#4cbec5]">
              <SvgSearch />
            </div>
          </div>
        </div>
        {cardStyle === "list" ? (
          itemList.length === 0 ? (
            <div className="flex items-center justify-center w-full px-6 py-16 text-center text-[#7E8096]">
              {HIRE_ME_COPY.favouritesEmpty}
            </div>
          ) : (
            <div className="flex flex-col gap-3 xl:gap-[1.5rem]">
              {itemList &&
                itemList.map((content: any) => (
                  <SingleCardListStyle key={content.id} content={content} deleteCard={deleteCard} />
                ))}
            </div>
          )
        ) : itemList.length === 0 ? (
          <div className="flex items-center justify-center w-full px-6 py-16 text-center text-[#7E8096]">
            {HIRE_ME_COPY.favouritesEmpty}
          </div>
        ) : (
          <div className="grid w-full h-full grid-cols-2 gap-3 xl:gap-[1.5rem] xl:grid-cols-4">
            {itemList &&
              itemList.map((content: any) => <SingleCard key={content.id} content={content} deleteCard={deleteCard} />)}
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default Favourites;
