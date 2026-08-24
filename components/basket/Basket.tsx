import { FC, useState } from "react";
import Content from "../../components/basket/Content";
import Sidebar from "../../components/basket/Sidebar";
import SingleCard from "../../components/profile/favourites/SingleCard";

const Recommended: any = [
  {
    id: 1,
    name: "VitaPlus Healing Cream",
    brand: "Cream 40 ml ",
    image: "/images/photos/VitaPlus Healing Cream.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 2,
    name: "GentleCare Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/GentleCare Baby.svg",
    price: 36.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 3,
    name: "Bo Hui Contactless Digital",
    brand: "Thermometer",
    image: "/images/photos/thermometer.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 4,
    name: "PureSafe 3-Ply Black",
    brand: "Surgical Mask with Wire 50-pack",
    image: "/images/photos/product-2.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 5,
    name: "Oxygenated Water",
    brand: "100 ml",
    image: "/images/photos/Oxygenated Water.svg",
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
          <p className="text-[#4CBEC5] font-bold text-base xl:text-xl">Recommendations from Sellers in Your Cart</p>
          <div className="grid grid-cols-2 gap-3 text-base xl:grid-cols-5">
            {recommendedList &&
              recommendedList.map((content: any) => (
                <SingleCard key={content.id} content={content} deleteCard={deleteCard} />
              ))}
          </div>
        </div>

        <div className="bg-[#4CBEC5] py-8 xl:py-12 px-3 xl:px-0">
          <div className="container grid gap-4 mx-auto">
            <p className="text-base font-bold text-white xl:text-xl">Best-Selling Listings in the Last 7 Days</p>

            <div className="grid grid-cols-2 gap-3 text-base xl:grid-cols-5">
              {recommendedList &&
                recommendedList.map((content: any) => (
                  <SingleCard key={content.id} content={content} deleteCard={deleteCard} />
                ))}
            </div>
          </div>
        </div>

        <div className="container grid gap-4 px-3 py-8 mx-auto xl:py-12 xl:px-0">
          <p className="text-[#4CBEC5] font-bold text-base xl:text-xl">Recently Viewed</p>
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
