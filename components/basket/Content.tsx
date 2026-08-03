import React, { FC, useState } from "react";
import { SvgEczaMax, SvgMediTome } from "../../helpers/svgs/basketSvg";
import SingleCard from "../profile/favourites/SingleCard";
import BasketCard from "./BasketCard";
import Notification from "./Notification";

const BasketCardData: any[] = [
  {
    id: 0,
    svg: <SvgMediTome />,
    firm: "MediSupply",
    shippingCampaign: 500,
    shippingCampaign2: "Same-Day Shipping if Ordered by 3:55 PM",
    minTotalPrice: 100,
    productCards: [
      {
        id: 1,
        name: "StrepNaz\n Orange & Orange",
        brand: "Echinacea 24 Lozenges",
        image: "/images/photos/StrepNaz Herbal.svg",
        price: 47.98,
        miad: "March 2023",
        isFavorite: false,
        count: 3,
        purchasable: true,
        warning: "",
        total: 143.94,
      },
      {
        id: 2,
        name: "Oxygenated Water",
        brand: "100 ml",
        image: "/images/photos/Oxygenated Water.svg",
        price: 25.98,
        miad: "March 2023",
        count: 2,
        isFavorite: true,
        purchasable: false,
        warning: "Removed\n from Listing",
        total: 51.96,
      },
    ],
    domesticShipping: 20.9,
    expressShipping: 18.9,
    total: 195.9,
  },
  {
    id: 3,
    svg: <SvgEczaMax />,
    firm: "PharmaMax",
    shippingCampaign: null,
    shippingCampaign2: "Same-Day Shipping if Ordered by 3:55 PM",
    minTotalPrice: 250,
    productCards: [
      {
        id: 4,
        name: "StrepNaz Orange & ",
        brand: "Echinacea 24 Lozenges",
        image: "/images/photos/StrepNaz Herbal.svg",
        price: 47.98,
        miad: "March 2023",
        isFavorite: false,
        count: 2,
        purchasable: true,
        warning: "",
        total: 95.69,
      },
    ],
    domesticShipping: 0,
    expressShipping: 0,
    total: 54.65,
  },
  {
    id: 5,
    svg: <SvgMediTome />,
    firm: "MediSupply",
    shippingCampaign: 500,
    shippingCampaign2: "Same-Day Shipping if Ordered by 3:55 PM",
    minTotalPrice: 100,
    productCards: [
      {
        id: 6,
        name: "StrepNaz\n Orange & Orange",
        brand: "Echinacea 24 Lozenges",
        image: "/images/photos/StrepNaz Herbal.svg",
        price: 47.98,
        miad: "March 2023",
        isFavorite: false,
        count: 3,
        purchasable: true,
        warning: "",
        total: 143.94,
      },
      {
        id: 7,
        name: "Oxygenated Water",
        brand: "100 ml",
        image: "/images/photos/Oxygenated Water.svg",
        price: 25.98,
        miad: "March 2023",
        count: 2,
        isFavorite: true,
        purchasable: false,
        warning: "Removed\n from Listing",
        total: 51.96,
      },
    ],
    domesticShipping: 0,
    expressShipping: 0,
    total: 500.9,
  },
];
const content: FC<any> = () => {
  return (
    <div className="grid gap-3 xl:gap-[1rem]">
      <Notification />
      {BasketCardData.map((el: any) => (
        <BasketCard content={el} key={el.id} />
      ))}
      <div className="flex justify-end w-full px-3 xl:px-0">
        <button type="button" className="px-8 py-3 text-sm font-medium text-[#7E8096] bg-[#F4F5F9] border border-[#00B1B265] rounded-full">
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default content;
