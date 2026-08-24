import Image from "next/image";
import { FC, useState } from "react";
import { SvgCheck, SvgPrintInvoice, SvgPrintShipping, SvgShowMore } from "../../../../helpers/svgs/soldSvg";
import FirmReceiptInfo from "../../receipts/FirmReceiptInfo";
import ShippingInfo from "../../receipts/ShippingInfo";
import MessageSellerModal from "./MessageSellerModal";
import PrintInvoice from "../../_shared/PrintInvoice";
import PrintShippingLabel from "../../_shared/PrintShippingLabel";
import { exportCsv } from "../../../../helpers/exportCsv";
import { printSection } from "../../../../helpers/printSection";

const SoldCard: FC<any> = ({ content }) => {
  const [active, setActive] = useState<boolean>(content.active || false);
  const [modal1, setModal1] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [printTarget, setPrintTarget] = useState<"invoice" | "shipping-label" | null>(null);

  const exportProductList = () => {
    exportCsv(
      `Order-${content.orderID}-ProductList`,
      ["Order No", "Product", "Brand", "Expiry", "Qty", "Price", "Amount"],
      content.productList.map((el: any) => [
        content.orderID,
        el.name,
        el.brand,
        el.miad,
        el.quantity,
        el.price,
        el.total,
      ])
    );
  };

  const handlePrint = (target: "invoice" | "shipping-label") => {
    setPrintTarget(target);
    setTimeout(() => {
      printSection(target);
      setPrintTarget(null);
    }, 100);
  };

  return (
    <div
      className={`flex flex-col bg-white w-full border transition ${
        active ? "border-[#00b2b2ce] drop-shadow-brand" : "border-transparent xl:border-[#ccccccce]"
      } rounded-xl xl:rounded-3xl p-3 xl:px-4 xl:py-3 text-sm`}
    >
      {modal1 && <MessageSellerModal setModal1={setModal1} />}
      {/* Closed Card Customer date shomore */}
      <div className="flex items-center justify-between pb-2 xl:hidden">
        <div className={`font-bold text-[14px] leading-5 text-[#7E8096] xl:text-[0.9rem]`}>{content.customer}</div>
        <div className="flex gap-2">
          <div className="text-[12px] leading-5 text-[#7E8096] xl:text-[0.9rem]">{content.orderDate}</div>
          <button type="button"
            onClick={() => setActive((pre) => !pre)}
            className={`w-5 h-5 flex items-center justify-center border rounded-full transition ${
              active
                ? "rotate-0 bg-gradient-to-tr from-[#66c1c0] to-[#00a29d]"
                : "border-[#00b2b2c4] bg-[#F4F5F7] rotate-180"
            }`}
          >
            <div
              className={`w-[10px] h-[6px] transform ${active ? "text-white -translate-y-[1px]" : "text-[#00B1B2]"}`}
            >
              <SvgShowMore />
            </div>
          </button>
        </div>
      </div>
      {/* Closed Card Photos */}
      <div className={`grid w-full grid-cols-12 xl:grid-cols-6 xl:px-0 xl:pl-6 gap-1 h-full`}>
        <div className="relative flex row-span-2 col-span-6 xl:col-span-2 mr-5 gap-0.5 pr-3 border-r border-[#CCCCCC80]">
          {content.productList.length > 3 && (
            <div className="absolute top-0 flex items-center justify-center h-full -right-3.5">
              <div className="flex items-center justify-center w-7 h-7 border border-[#C6C6C680] bg-white rounded-full text-[13px] text-[#7E8096] leading-[15px]">
                +{content.productList.length - 3}
              </div>
            </div>
          )}
          {content.productList.slice(0, 3).map((el: any) => (
            <div key={el.id} className="relative w-full h-20">
              <Image src={el.image} alt={el.brand} fill sizes="100vw" className="object-contain" />
              <div className="absolute bottom-0 left-0 flex justify-center w-full select-none xl:hidden">
                <div className="w-5 h-5 bg-[#4CBEC5] rounded-full text-white text-[11px] leading-4 flex items-center justify-center">
                  {el.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Order Id */}
        <div className={`flex col-span-6 xl:col-span-1 xl:items-center xl:h-[100px] w-full items-end`}>
          <div
            className={`text-[#7E8096] flex flex-row xl:flex-col xl:items-start gap-1 text-[13px] xl:text-[0.9rem] leading-4`}
          >
            <div className="flex">
              Order <p className="hidden xl:block">Number:</p>
            </div>

            <h3 className={`text-[#4CBEC5] flex font-bold before:content-[':'] xl:before:content-['']`}>
              {content.orderID}
            </h3>
          </div>
        </div>
        {/* Buyer */}
        <div className="hidden col-span-1 xl:flex items-center xl:h-[100px]">
          <div className="text-[#7E8096] flex xl:flex-col xl:items-start items-center text-[13px] leading-4 xl:text-[0.9rem]">
            Buyer<h3 className="text-[#4CBEC5] font-bold"> {content.customer} </h3>
          </div>
        </div>
        {/* Order Date */}
        <div className="hidden col-span-1 xl:flex items-center xl:h-[100px]">
          <div className="text-[#7E8096] flex xl:flex-col items-start text-[13px] leading-4 justify-center xl:text-[0.9rem]">
            Order Date<h3 className="font-medium"> {content.orderDate} </h3>
          </div>
        </div>
        {/* Total */}
        <div
          className={`flex xl:flex-row justify-between xl:items-center xl:h-[100px] xl:col-span-1 xl:gap-4 ${
            active ? "col-span-2" : "col-span-4"
          }`}
        >
          <div
            className={`text-[#7E8096] flex flex-row xl:items-center text-[13px] leading-4 xl:text-[0.9rem] whitespace-nowrap xl:text-center gap-1`}
          >
            <div className="flex flex-row items-start gap-1 xl:flex-col">
              <h3 className={`after:content-[':'] xl:after:content-[''] xl:text-[0.9rem]`}>Amount</h3>
              <h3 className="font-bold text-[#E8336E] xl:text-[0.9rem]"> {content.total} $ </h3>
            </div>
          </div>
          <button type="button"
            onClick={() => setActive((pre) => !pre)}
            className={`p-1 border hidden xl:block rounded-full transition ${
              active
                ? "rotate-0 bg-gradient-to-tr from-[#66c1c0] to-[#00a29d]"
                : "border-[#00b2b2c4] bg-[#F4F5F7] rotate-180"
            }`}
          >
            <div className={`w-3 h-3 transform ${active ? "text-white -translate-y-[1px]" : "text-[#00B1B2]"}`}>
              <SvgShowMore />
            </div>
          </button>
        </div>
        <div className="grid col-span-12 text-xs xl:grid-cols-3 xl:text-sm">
          <div className="grid items-center grid-cols-3 font-bold">
            <div className="text-[#E94190]"> {content.deliveryDate}</div>
            <div className="flex items-center w-full gap-1 text-[#86BC25]">
              <div className="w-3 h-3">
                <SvgCheck />
              </div>
              E-Invoice
            </div>
            <div className="flex items-center w-full gap-1 text-[#86BC25] whitespace-nowrap">
              <div className="w-3 h-3">
                <SvgCheck />
              </div>
              Shipping Label
            </div>
          </div>
        </div>
      </div>

      {active && (
        <div className="flex flex-col w-full gap-2 mt-3 xl:px-3">
          {content.productList &&
            content.productList.map((el: { id: any }) => <ProductCard content={el} key={el.id} />)}
          <div className="grid grid-cols-12 gap-3 xl:gap-4">
            <div className="order-3 col-span-12 col-start-1 xl:order-none xl:col-start-auto xl:col-span-4">
              <button type="button" onClick={exportProductList} className="text-[13px] leading-3 xl:text-sm border-[#00B1B2] border bg-[#F4F5F7] text-[#7E8096] font-medium rounded-full xl:px-16 py-3 w-full">
                Export Product List to Excel
              </button>
            </div>

            <div className="text-[13px] leading-4 xl:text-sm text-[#7E8096] col-start-3 col-span-6 xl:col-start-10 xl:col-span-3 flex flex-col gap-2 pl-12 xl:order-none order-0">
              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-1">
                  <h3 className="text-right">Discount:</h3> <h3 className="px-1 font-bold">{content.discount}$</h3>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <h3 className="text-right"> Tax:</h3> <h3 className="px-1 font-bold">{content.KDV}$</h3>
                </div>
              </div>
            </div>

            <button type="button" onClick={() => handlePrint("invoice")} className="xl:col-span-2 col-span-6 xl:order-none order-4 bg-gradient-to-r from-[#AFCA19] to-[#52AE33] whitespace-nowrap text-white flex px-4 py-2 xl:py-3 rounded-full items-center justify-center gap-2 text-[13px] leading-3 xl:text-sm">
              <div className="h-5 xl:w-5 xl:h-5">
                <SvgPrintInvoice />
              </div>
              <h3>Print Invoice</h3>
            </button>
            <button type="button" onClick={() => handlePrint("shipping-label")} className="xl:col-span-2 col-span-6 xl:order-none order-5 bg-gradient-to-r whitespace-nowrap from-[#FFBE00] to-[#FF7B03] text-white flex px-4 py-2 xl:py-3 rounded-full items-center justify-center gap-2 text-[13px] leading-3 xl:text-sm">
              <div className="h-5 xl:w-5 xl:h-5">
                <SvgPrintShipping />
              </div>
              <h3>Print Shipping Label</h3>
            </button>

            <button type="button"
              onClick={() => setModal1(true)}
              className="col-start-3 xl:col-start-auto col-span-8 xl:col-span-3 text-[13px] leading-3 xl:text-sm xl:order-none order-7 flex justify-center w-full text-[#4CBEC5] border border-[#4CBEC5] px-8 py-3 rounded-full whitespace-nowrap"
            >
              Send Message to Seller
            </button>

            <button type="button" onClick={() => setShowDetails((pre) => !pre)} className="xl:order-none order-2 text-[13px] leading-3 xl:text-sm col-start-1 xl:col-start-auto col-span-12 xl:col-span-2 flex justify-center w-full text-[#5327A8] border border-[#5327A8] px-4 py-3 rounded-full whitespace-nowrap">
              Order Details
            </button>

            {showDetails && (
              <div className="order-8 col-span-12 border border-[#5327A8] rounded-xl p-3 text-xs xl:text-sm text-[#7E8096] leading-5">
                <div className="grid gap-1 xl:grid-cols-2">
                  <div>
                    <b className="text-[#4CBEC5]">Order No:</b> {content.orderID}
                  </div>
                  <div>
                    <b className="text-[#4CBEC5]">Order Date:</b> {content.orderDate}
                  </div>
                  <div>
                    <b className="text-[#4CBEC5]">Buyer:</b> {content.customer}
                  </div>
                  <div>
                    <b className="text-[#4CBEC5]">Delivery:</b> {content.deliveryDate}
                  </div>
                  <div className="xl:col-span-2">
                    <b className="text-[#4CBEC5]">Items:</b>{" "}
                    {content.productList
                      .map((el: any) => `${el.name} (${el.brand}) x${el.quantity}`)
                      .join(", ")}
                  </div>
                  <div className="xl:col-span-2">
                    <b className="text-[#4CBEC5]">Billing Address:</b> {content.receiptInfo?.address}
                  </div>
                  <div className="xl:col-span-2">
                    <b className="text-[#4CBEC5]">Tracking No:</b> {content.shippingInfo?.trackingNumber}
                  </div>
                </div>
              </div>
            )}

            <button type="button" className="xl:order-none order-1 col-span-10 col-start-2 xl:col-start-auto xl:col-span-3 flex bg-gradient-to-r from-[#FF516B] to-[#FF0045] text-white py-2.5 rounded-full items-center justify-center gap-1 whitespace-nowrap px-4">
              <h3 className="text-[12px] leading-3 xl:text-sm font-medium">Order Total:</h3>
              <h3 className="font-bold text-[16px] leading-3 xl:text-base whitespace-nowrap xl:text-[1.2rem]">
                {content.total} $
              </h3>
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
      {printTarget === "invoice" && <PrintInvoice order={content} />}
      {printTarget === "shipping-label" && <PrintShippingLabel order={content} />}
    </div>
  );
};

const ProductCard: FC<any> = ({ content }) => {
  return (
    <div className="grid grid-cols-12 gap-3 p-3 xl:py-2 text-sm border border-[#DADADA80] xl:grid-cols-7 xl:px-6 rounded-xl xl:rounded-[1.5rem]">
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
          <h3 className="text-[#4CBEC5] font-medium text-left xl:px-2 text-[12px] leading-5 xl:text-sm">Qty</h3>
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

export default SoldCard;
