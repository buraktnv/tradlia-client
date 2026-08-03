import Image from "next/image";
import { FC, useState } from "react";
import { SvgPrintInvoice, SvgPrintShipping, SvgShowMore } from "../../../helpers/svgs/receiptSvg";
import MessageSellerModal from "../bought/tabs/MessageSellerModal";
import FirmReceiptInfo from "./FirmReceiptInfo";
import ShippingInfo from "./ShippingInfo";

const ReceiptCard: FC<any> = ({ content }) => {
  const [active, setActive] = useState<boolean>(content.active || false);
  const [modal1, setModal1] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col bg-white w-full border transition ${
        active ? "border-[#00b2b2ce] shadow-lg" : "border-transparent xl:border-[#ccccccce]"
      } rounded-xl xl:rounded-[1.75rem] p-3 xl:px-3 xl:py-4 text-sm`}
    >
      {modal1 && <MessageSellerModal setModal1={setModal1} />}
      <div className="flex items-center justify-between pb-2 xl:hidden">
        <div className={`font-bold text-[14px] leading-5 text-[#7E8096] ${active && "invisible"}`}>
          {content.customer}
        </div>
        <div className="flex gap-2">
          <div className="text-[12px] leading-5 text-[#7E8096]">{content.orderDate}</div>
          <button type="button"
            onClick={() => setActive((pre) => !pre)}
            className={`w-5 h-5 flex items-center justify-center border rounded-full transition ${
              active
                ? "rotate-0 bg-gradient-to-tr from-[#66c1c0] to-[#00a29d]"
                : "border-[#00b2b2c4] bg-[#F4F5F7] rotate-180"
            }`}
          >
            <div
              className={`w-[10px] h-[6px] transform transition ease-in-out duration-300 ${
                active ? "text-white" : "text-[#00B1B2] rotate-180"
              }`}
            >
              <SvgShowMore />
            </div>
          </button>
        </div>
      </div>
      <div
        className={`grid w-full grid-cols-12 xl:grid-cols-6 xl:px-6 gap-1 h-24 xl:h-auto ${
          active && "items-center xl:pb-3"
        }`}
      >
        {!active ? (
          <div className="relative flex row-span-2 col-span-6 mr-5 my-3 gap-0.5 px-3 border-r border-[#CCCCCC80] xl:hidden">
            {content.productList.length > 3 && (
              <div className="absolute top-0 flex items-center justify-center h-full -right-3.5">
                <div className="flex items-center justify-center w-7 h-7 border border-[#C6C6C680] bg-white rounded-full text-[13px] text-[#7E8096] leading-[15px]">
                  +{content.productList.length - 3}
                </div>
              </div>
            )}
            {content.productList.slice(0, 3).map((el: any) => (
              <div key={el.id} className="relative w-full h-full">
                <Image src={el.image} alt={el.brand} fill sizes="100vw" className="object-contain" />
                <div className="absolute -bottom-2.5 left-0 flex justify-center w-full select-none">
                  <div className="w-5 h-5 bg-[#4CBEC5] rounded-full text-white text-[11px] leading-4 flex items-center justify-center">
                    {el.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="col-span-6 xl:hidden flex justify-center-center flex-col text-[#7E8096] mr-5 pl-3 pr-4 border-r h-16 border-[#CCCCCC80]">
            <p className="text-[13px] leading-[18px]"> Buyer</p>
            <p className="font-bold text-[13px] leading-[20px]"> {content.customer}</p>
          </div>
        )}
        <div className={`flex items-end col-span-4 xl:col-span-2 ${!active && "items-end"}`}>
          <div
            className={`text-[#7E8096] flex xl:flex-row xl:items-center gap-1 text-[13px] xl:text-[0.90rem] leading-4 ${
              active ? "flex-col" : "flew-row gap-1"
            }`}
          >
            <h3> Order</h3>
            <p className="hidden xl:block">No:</p>
            <h3 className={`text-[#4CBEC5] flex gap-1 font-bold ${!active ? "before:content-[':']" : ""}`}>
              {content.orderID}
            </h3>
            {active && (
              <h3 className="xl:before:content-['('] xl:after:content-[')']"> {content.orderPiece} Items</h3>
            )}
          </div>
        </div>
        <div className="hidden col-span-1 xl:block">
          <div className="text-[#7E8096] flex items-center text-sm xl:text-[0.90rem]">
            Buyer:<h3 className="text-[#4CBEC5] font-bold px-1"> {content.customer} </h3>
          </div>
        </div>
        <div className="hidden col-span-2 xl:block xl:text-[0.90rem]">
          <div className="text-[#7E8096] flex items-center text-sm justify-center">
            Order Date:<h3 className="px-1 font-medium"> {content.orderDate} </h3>
          </div>
        </div>
        <div
          className={`flex justify-between col-span-2 xl:items-center xl:col-span-1 xl:gap-4 ${
            active ? "col-span-2" : "col-span-4"
          }`}
        >
          <div
            className={`text-[#7E8096] flex xl:flex-row xl:items-center text-[13px] xl:text-[0.90rem] leading-4 whitespace-nowrap xl:text-sm xl:text-center gap-1 ${
              active ? "flex-col pb-5 xl:pb-0" : "flex-row"
            }`}
          >
            <h3 className={`${!active && "after:content-[':']"}`}>Amount</h3>
            <h3 className="font-bold text-[#E8336E]"> ${content.total} </h3>
          </div>
          <button type="button"
            onClick={() => setActive((pre) => !pre)}
            className={`p-1 items-baseline justify-center border hidden xl:flex rounded-full transition ${
              active
                ? "rotate-180 bg-gradient-to-tr from-[#66c1c0] to-[#00a29d]"
                : "border-[#00b2b2c4] bg-[#F4F5F7] rotate-0"
            }`}
          >
            <div className={`w-3 h-3 transform ${active ? "text-white" : "text-[#00B1B2]"}`}>
              <SvgShowMore />
            </div>
          </button>
        </div>
      </div>
      {active && (
        <div className="flex flex-col w-full gap-2 mt-3 xl:px-3">
          {content.productList &&
            content.productList.map((el: { id: any }) => <ProductCard content={el} key={el.id} />)}
          <div className="grid grid-cols-12 gap-3 xl:gap-4">
            <div className="order-3 col-span-12 col-start-1 xl:order-none xl:col-start-auto xl:col-span-4">
              <button type="button" className="text-[13px] leading-3 xl:text-sm border-[#00B1B2] border bg-[#F4F5F7] text-[#7E8096] font-medium rounded-full xl:px-16 py-3 w-full">
                Export Product List to Excel
              </button>
            </div>

            <div className="text-[13px] leading-4 xl:text-sm text-[#7E8096] col-start-3 col-span-6 xl:col-start-10 xl:col-span-3 flex flex-col gap-2 pl-12 xl:order-none order-0">
              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-1">
                  <h3 className="text-right">Discount:</h3> <h3 className="px-1 font-bold">${content.discount}</h3>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <h3 className="text-right"> VAT:</h3> <h3 className="px-1 font-bold">${content.KDV}</h3>
                </div>
              </div>
            </div>

            <button type="button" className="xl:col-span-2 col-span-6 xl:order-none order-4 bg-gradient-to-r from-[#AFCA19] to-[#52AE33] whitespace-nowrap text-white flex px-4 py-2 xl:py-3 rounded-full items-center justify-center gap-2 text-[13px] leading-3 xl:text-sm">
              <div className="h-5 xl:w-5 xl:h-5">
                <SvgPrintInvoice />
              </div>
              <h3>Print Invoice</h3>
            </button>
            <button type="button" className="xl:col-span-2 col-span-6 xl:order-none order-5 bg-gradient-to-r whitespace-nowrap from-[#FFBE00] to-[#FF7B03] text-white flex px-4 py-2 xl:py-3 rounded-full items-center justify-center gap-2 text-[13px] leading-3 xl:text-sm">
              <div className="h-5 xl:w-5 xl:h-5">
                <SvgPrintShipping />
              </div>
              <h3>Print Shipping Label</h3>
            </button>

            <button type="button"
              onClick={() => setModal1(true)}
              className="col-start-3 xl:col-start-auto col-span-8 xl:col-span-3 text-[13px] leading-3 xl:text-sm xl:order-none order-7 flex justify-center w-full text-[#4CBEC5] border border-[#4CBEC5] px-8 py-3 rounded-full whitespace-nowrap"
            >
              Message Seller
            </button>

            <button type="button" className="xl:order-none order-2 text-[13px] leading-3 xl:text-sm col-start-1 xl:col-start-auto col-span-12 xl:col-span-2 flex justify-center w-full text-[#5327A8] border border-[#5327A8] px-4 py-3 rounded-full whitespace-nowrap">
              Order Details
            </button>

            <button type="button" className="xl:order-none order-1 col-span-10 col-start-2 xl:col-start-auto xl:col-span-3 flex bg-gradient-to-r from-[#FF516B] to-[#FF0045] text-white py-2.5 rounded-full items-center justify-center gap-1 whitespace-nowrap px-4">
              <h3 className="text-[12px] leading-3 xl:text-sm font-medium">Order Total:</h3>
              <h3 className="font-bold text-[16px] leading-3 xl:text-[1.2rem] whitespace-nowrap">${content.total}</h3>
            </button>
            <div className="xl:order-none leading-3 text-[11px] xl:text-sm order-6 text-[#FB295A] p-0 xl:pb-3 xl:pt-6 col-span-12 xl:col-span-12 ">
              Please remember to place your e-invoice printout inside the shipping package.
            </div>
          </div>
          <div className="grid w-full gap-3 xl:grid-cols-9">
            <div className="xl:col-span-6">
              <FirmReceiptInfo content={content.receiptInfo} />
            </div>
            <div className="xl:col-span-3">
              <ShippingInfo content={content.shippingInfo} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProductCard: FC<any> = ({ content }) => {
  return (
    <div className="grid grid-cols-12 gap-3 p-3 xl:py-2 text-sm border border-[#dadadab1] xl:grid-cols-7 xl:px-6 rounded-xl xl:rounded-[1.5rem]">
      <div className="flex w-full h-full col-span-4 p-2 xl:col-span-1 ">
        <div className="relative w-full h-20">
          <Image className="object-contain" src={content?.image} fill sizes="100vw" alt={content.brand} />
        </div>
      </div>
      <div className="grid grid-cols-1 col-span-8 gap-1 xl:grid-cols-6 xl:col-span-6">
        <div className="grid justify-start grid-cols-5 gap-2 xl:py-2 xl:flex xl:flex-col xl:col-span-2">
          <h3 className="text-[#4CBEC5] font-medium  xl:text-left text-[12px] leading-5 xl:text-sm">Product</h3>
          <div className="text-[#7E8096] xl:py-1.5 text-[12px] leading-[18px] xl:text-sm col-span-4">
            <h4 className="font-bold"> {content?.name}</h4> {content?.brand}
          </div>
        </div>
        <div className="grid justify-start grid-cols-5 gap-2 xl:py-2 xl:flex xl:flex-col">
          <h3 className="text-[#4CBEC5] font-medium  xl:text-left text-[12px] leading-5 xl:text-sm">Expiry</h3>
          <p className="text-[#7E8096] font-medium xl:py-1.5 text-[12px] leading-[18px] xl:text-sm col-span-4">
            {content?.miad}
          </p>
        </div>
        <div className="grid items-center justify-start grid-cols-5 gap-2 xl:py-2 xl:px-4 xl:flex xl:flex-col">
          <h3 className="text-[#4CBEC5] font-medium text-left xl:px-2 text-[12px] leading-5 xl:text-sm">Quantity</h3>
          <div className="flex col-span-2 xl:justify-center">
            <input
              className="text-[#7E8096] outline-none text-[12px] leading-[18px] xl:text-sm font-medium border rounded-full text-center w-3/4 xl:w-2/3 px-1 xl:px-2 py-0.5 xl:py-1.5 inline-block border-[#00B1B2] bg-[#F4F5F7]"
              type="number"
              defaultValue={content?.quantity}
              placeholder="0"
            />
          </div>
        </div>
        <div className="grid justify-start grid-cols-5 gap-2 xl:px-2 xl:py-2 xl:flex xl:flex-col">
          <h3 className="text-[#4CBEC5] font-medium  xl:text-left text-[12px] leading-5 xl:text-sm">Price</h3>
          <div className="flex w-full col-span-4">
            <input
              className="text-[#7E8096] font-medium xl:py-1.5 w-2/3 outline-none text-[12px] leading-[18px] xl:text-sm"
              defaultValue={content?.price}
              placeholder="0"
              type="number"
            />
          </div>
        </div>
        <div className="grid justify-start grid-cols-5 gap-2 xl:py-2 xl:flex xl:flex-col">
          <h3 className="text-[#4CBEC5] font-medium  xl:text-left text-[12px] leading-5 xl:text-sm">Amount</h3>
          <p className="text-[#7E8096] font-medium xl:py-1.5 text-[12px] leading-[18px] xl:text-sm col-span-4">
            {content?.total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceiptCard;
