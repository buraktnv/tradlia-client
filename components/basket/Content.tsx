import React, { FC } from "react";
import { toast } from "react-toastify";
import BasketCard from "./BasketCard";
import Notification from "./Notification";

/**
 * Seed data for the basket. Serializable (no JSX) so it can be persisted
 * with useLocalStorage("basket-data") — the seller logo is resolved at
 * render time from the `logo` field.
 */
export const BasketCardData: any[] = [
  {
    id: 0,
    logo: "medi",
    firm: "SupplyHub",
    shippingCampaign: 500,
    shippingCampaign2: "Same-Day Shipping if Ordered by 3:55 PM",
    minTotalPrice: 100,
    shippingOption: "domestic",
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
      },
    ],
    domesticShipping: 20.9,
    expressShipping: 18.9,
  },
  {
    id: 3,
    logo: "pharma",
    firm: "PharmaMax",
    shippingCampaign: null,
    shippingCampaign2: "Same-Day Shipping if Ordered by 3:55 PM",
    minTotalPrice: 250,
    shippingOption: "domestic",
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
      },
    ],
    domesticShipping: 0,
    expressShipping: 0,
  },
  {
    id: 5,
    logo: "medi",
    firm: "SupplyHub",
    shippingCampaign: 500,
    shippingCampaign2: "Same-Day Shipping if Ordered by 3:55 PM",
    minTotalPrice: 100,
    shippingOption: "domestic",
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
      },
    ],
    domesticShipping: 0,
    expressShipping: 0,
  },
];

const getSellerTotal = (seller: any) => {
  const productsPrice = seller.productCards.reduce((sum: number, p: any) => sum + p.price * p.count, 0);
  const shipping = seller.shippingOption === "express" ? seller.expressShipping : seller.domesticShipping;
  return { productsPrice, shipping, total: productsPrice + shipping };
};

const content: FC<any> = ({ content: basketData, setContent }) => {
  if (!basketData || basketData.length === 0) {
    return (
      <div className="grid gap-3 xl:gap-[1rem]">
        <Notification />
        <div className="rounded-2xl border border-[#00B1B265] bg-white p-10 text-center text-sm text-[#A0A2AF]">
          Your cart is empty.
        </div>
      </div>
    );
  }

  const removeSeller = (id: number) => {
    setContent((pre: any[]) => pre.filter((seller) => seller.id !== id));
    toast.info("Seller removed from cart.");
  };

  const completeSeller = (id: number) => {
    const seller = basketData.find((s: any) => s.id === id);
    setContent((pre: any[]) => pre.filter((el) => el.id !== id));
    toast.success(`Purchase completed for ${seller?.firm ?? "the seller"}.`);
  };

  const updateSeller = (seller: any) => {
    setContent((pre: any[]) => pre.map((s) => (s.id === seller.id ? seller : s)));
  };

  const removeCampaign = (id: number) => {
    setContent((pre: any[]) => pre.map((s) => (s.id === id ? { ...s, shippingCampaign: null } : s)));
    toast.info("Campaign removed.");
  };

  const clearCart = () => {
    setContent([]);
    toast.info("Cart cleared.");
  };

  const enriched = basketData.map((seller: any) => ({ ...seller, ...getSellerTotal(seller) }));

  return (
    <div className="grid gap-3 xl:gap-[1rem]">
      <Notification />
      {enriched.map((el: any) => (
        <BasketCard
          key={el.id}
          content={el}
          onChange={updateSeller}
          onRemoveSeller={removeSeller}
          onCompleteSeller={completeSeller}
          onRemoveCampaign={removeCampaign}
        />
      ))}
      <div className="flex justify-end w-full px-3 xl:px-0">
        <button
          type="button"
          onClick={clearCart}
          className="px-8 py-3 text-sm font-medium text-[#7E8096] bg-[#F4F5F9] border border-[#00B1B265] rounded-full"
        >
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default content;
