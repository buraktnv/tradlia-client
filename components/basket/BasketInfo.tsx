import React, { FC } from "react";

const BasketInfo: FC<any> = ({ setActivePage, basketData }) => {
  const sellers: any[] = basketData ?? [];
  const pieces = sellers.reduce(
    (sum, seller) => sum + seller.productCards.reduce((a: number, p: any) => a + p.count, 0),
    0
  );
  const firms = sellers.length;
  const shipping = sellers.reduce(
    (sum, seller) =>
      sum + (seller.shippingOption === "express" ? seller.expressShipping : seller.domesticShipping),
    0
  );
  const productsPrice = sellers.reduce(
    (sum, seller) => sum + seller.productCards.reduce((a: number, p: any) => a + p.price * p.count, 0),
    0
  );
  const total = shipping + productsPrice;
  const totalParts = total.toFixed(2).split(".");
  const fmt = (value: number) => value.toFixed(2).replace(".", ",");
  const hasItems = pieces > 0;

  return (
    <>
      {/* Cart info */}
      <div className="hidden xl:grid gap-5 px-8 py-6 bg-white border border-[#00B1B265] rounded-3xl">
        <div>
          <p className="font-bold text-[#4CBEC5] text-center xl:text-left">
            Selected Products in Cart({pieces})
          </p>
          <p className="text-xs text-[#7E8096] text-center xl:text-left">
            Selected {pieces} products from {firms} sellers
          </p>
        </div>
        <div className="font-bold text-[#7E8096] flex items-end py-2 xl:justify-start justify-center">
          <p className="text-5xl">{totalParts[0]},</p>
          <p className="text-3xl">{totalParts[1]} $</p>
        </div>
        <div className="flex w-full">
          <button
            type="button"
            disabled={!hasItems}
            className={`w-full text-lg py-2 rounded-full font-medium transition-colors ${
              hasItems
                ? "bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] text-white cursor-pointer"
                : "bg-[#CCCFDD] text-white cursor-not-allowed"
            }`}
            onClick={() => setActivePage(() => "payment")}
          >
            Complete Purchase
          </button>
        </div>
        <div className="font-bold text-[#7E8096] text-base px-12 xl:px-0">
          <div className="flex justify-between w-full">
            <p>Shipping</p> <p>{fmt(shipping)} $</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Products</p> <p>{fmt(productsPrice)} $</p>
          </div>
        </div>
      </div>
      <div className="fixed xl:hidden bottom-0 pb-[100px] left-0 right-0 bg-[#E5F3F3] rounded-3xl rounde px-3 pt-4 z-40 border border-[#00B1B265]">
        <div className="grid justify-between grid-cols-2">
          <div className="col-span-1 font-bold text-[#7E8096] flex items-center xl:justify-start justify-start">
            <p className="text-2xl">{totalParts[0]},</p>
            <p className="text-xl">{totalParts[1]} $</p>
          </div>
          <div className="flex justify-end col-span-1">
            <button
              type="button"
              disabled={!hasItems}
              className={`text-sm px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                hasItems
                  ? "bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] text-white cursor-pointer"
                  : "bg-[#CCCFDD] text-white cursor-not-allowed"
              }`}
              onClick={() => setActivePage(() => "payment")}
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketInfo;
