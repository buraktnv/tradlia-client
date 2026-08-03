import React, { FC } from "react";

const data: any = {
  basketPiece: 5,
  basketFirms: 2,
  total: 198.59,
  shipping: 18.99,
  productsPrice: 179.69,
};

const BasketInfo: FC<any> = ({ setActivePage }) => {
  return (
    <>
      {/* Cart info */}
      <div className="hidden xl:grid gap-5 px-8 py-6 bg-white border border-[#00B1B265] rounded-3xl">
        <div>
          <p className="font-bold text-[#4CBEC5] text-center xl:text-left">
            Selected Products in Cart({data.basketPiece})
          </p>
          <p className="text-xs text-[#7E8096] text-center xl:text-left">
            Selected {data.basketPiece} products from {data.basketFirms} sellers
          </p>
        </div>
        <div className="font-bold text-[#7E8096] flex items-end py-2 xl:justify-start justify-center">
          <p className="text-5xl">{String(data.total).split(".")[0]},</p>
          <p className="text-3xl">{String(data.total).split(".")[1]} $</p>
        </div>
        <div className="flex w-full">
          <button type="button"
            className="w-full text-lg  bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] text-white cursor-pointer py-2 rounded-full font-medium"
            onClick={() => setActivePage(() => "payment")}
          >
            Complete Purchase
          </button>
        </div>
        <div className="font-bold text-[#7E8096] text-base px-12 xl:px-0">
          <div className="flex justify-between w-full">
            <p>Shipping</p> <p>{`${data.shipping.toFixed(2)}`.replace(".", ",")} $</p>
          </div>
          <div className="flex justify-between w-full">
            <p>Products</p> <p>{`${data.productsPrice.toFixed(2)}`.replace(".", ",")} $</p>
          </div>
        </div>
      </div>
      <div className="fixed xl:hidden bottom-0 pb-[100px] left-0 right-0 bg-[#E5F3F3] rounded-3xl rounde px-3 pt-4 z-40 border border-[#00B1B265]">
        <div className="grid justify-between grid-cols-2">
          <div className="col-span-1 font-bold text-[#7E8096] flex items-center xl:justify-start justify-start">
            <p className="text-2xl">{String(data.total).split(".")[0]},</p>
            <p className="text-xl">{String(data.total).split(".")[1]} $</p>
          </div>
          <div className="flex justify-end col-span-1">
            <button type="button"
              className="text-sm px-4 py-2 bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] text-white cursor-pointer rounded-full font-medium whitespace-nowrap"
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
