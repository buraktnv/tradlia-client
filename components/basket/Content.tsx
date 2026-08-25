import React, { FC } from "react";
import { toast } from "react-toastify";
import { HIRE_ME_COPY } from "../../helpers/config";
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
        name: "TorqueMax\n Wood Screws",
        brand: "4×40 (500 Count)",
        image: "/images/photos/product-3.svg",
        price: 47.98,
        miad: "March 2023",
        isFavorite: false,
        count: 3,
        purchasable: true,
        warning: "",
      },
      {
        id: 2,
        name: "GripTight Pallet Wrap",
        brand: "20 µm Roll",
        image: "/images/photos/product-2.svg",
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
    firm: "PartsHub",
    shippingCampaign: null,
    shippingCampaign2: "Same-Day Shipping if Ordered by 3:55 PM",
    minTotalPrice: 250,
    shippingOption: "domestic",
    productCards: [
      {
        id: 4,
        name: "TorqueMax Wood Screws ",
        brand: "4×40 (500 Count)",
        image: "/images/photos/product-3.svg",
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
        name: "TorqueMax\n Wood Screws",
        brand: "4×40 (500 Count)",
        image: "/images/photos/product-3.svg",
        price: 47.98,
        miad: "March 2023",
        isFavorite: false,
        count: 3,
        purchasable: true,
        warning: "",
      },
      {
        id: 7,
        name: "GripTight Pallet Wrap",
        brand: "20 µm Roll",
        image: "/images/photos/product-2.svg",
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
        <div className="rounded-card border border-dashed border-line bg-surface p-10 text-center">
          <p className="font-display text-base font-semibold text-ink">Your cart is empty.</p>
          <p className="mt-2 text-sm text-ink-muted">{HIRE_ME_COPY.searchEmpty}</p>
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
    <div className="grid gap-3 xl:gap-[1rem]" role="list" aria-label="Basket sellers">
      <Notification />
      {enriched.map((el: any) => (
        <div role="listitem" key={el.id}>
          <BasketCard
            content={el}
            onChange={updateSeller}
            onRemoveSeller={removeSeller}
            onCompleteSeller={completeSeller}
            onRemoveCampaign={removeCampaign}
          />
        </div>
      ))}
      <div className="flex justify-end w-full px-3 xl:px-0">
        <button
          type="button"
          onClick={clearCart}
          className="px-8 py-3 text-sm font-medium text-ink-soft bg-surface border border-line rounded-pill transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-danger/40 hover:text-dangerDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          Empty Cart
        </button>
      </div>
    </div>
  );
};

export default content;
