import { FC, useState } from "react";
import Content from "../../components/basket/Content";
import Sidebar from "../../components/basket/Sidebar";
import SingleCard from "../../components/profile/favourites/SingleCard";

const Recommended: any = [
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
    name: "PureSafe 3-Ply Black",
    brand: "Dust Mask FFP2 with Valve 5-pack",
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
];

const Basket: FC<any> = ({ setActivePage, activePage, basketData, setBasketData }) => {
  const [recommendedList, setRecommendedList] = useState<any>(Recommended);

  const deleteCard = (item: any) => {
    setRecommendedList((pre: any[]) =>
      pre.map((el) => (el.id === item.id ? { ...el, isFavorite: false } : el))
    );
  };
  return (
    <>
      <div>
        <div className="container grid grid-cols-12 gap-3 mx-auto mt-6 xl:gap-8">
          <div className="col-span-12 xl:col-span-9">
            <Content content={basketData} setContent={setBasketData} />
          </div>
          <div className="col-span-12 mx-3 xl:mx-0 xl:col-span-3 xl:block">
            <Sidebar setActivePage={setActivePage} activePage={activePage} basketData={basketData} />
          </div>
        </div>
        <div className="container grid gap-4 px-3 py-8 mx-auto xl:py-12 xl:px-0">
          <h2 className="font-display text-xs uppercase tracking-wider text-ink-muted font-semibold">
            Recommendations from Sellers in Your Cart
          </h2>
          <div className="grid grid-cols-2 gap-3 text-base xl:grid-cols-5">
            {recommendedList &&
              recommendedList.map((content: any) => (
                <SingleCard key={content.id} content={content} deleteCard={deleteCard} />
              ))}
          </div>
        </div>

        <div className="bg-brand-50 border-y border-line py-8 xl:py-12 px-3 xl:px-0">
          <div className="container grid gap-4 mx-auto">
            <h2 className="font-display text-xs uppercase tracking-wider text-brand-700 font-semibold">
              Best-Selling Listings in the Last 7 Days
            </h2>

            <div className="grid grid-cols-2 gap-3 text-base xl:grid-cols-5">
              {recommendedList &&
                recommendedList.map((content: any) => (
                  <SingleCard key={content.id} content={content} deleteCard={deleteCard} />
                ))}
            </div>
          </div>
        </div>

        <div className="container grid gap-4 px-3 py-8 mx-auto xl:py-12 xl:px-0">
          <h2 className="font-display text-xs uppercase tracking-wider text-ink-muted font-semibold">
            Recently Viewed
          </h2>
          <div className="grid grid-cols-2 gap-3 text-base xl:grid-cols-5">
            {recommendedList &&
              recommendedList.map((content: any) => (
                <SingleCard key={content.id} content={content} deleteCard={deleteCard} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
