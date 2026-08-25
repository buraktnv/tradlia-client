import Image from "next/image";
import { FC, useState } from "react";
import { SvgPrintInvoice, SvgPrintShipping, SvgLike, SvgMarket, SvgShowMore } from "../../../../helpers/svgs/boughtSvg";
import FirmReceiptInfo from "../../receipts/FirmReceiptInfo";
import ShippingInfo from "../../receipts/ShippingInfo";
import MessageSellerModal from "./MessageSellerModal";
import RateProduct from "./RateProduct";
import RateSeller from "./RateSeller";
import PrintInvoice from "../../_shared/PrintInvoice";
import PrintShippingLabel from "../../_shared/PrintShippingLabel";
import OrderStatusChip, { OrderStatusKey } from "../../_shared/OrderStatusChip";
import { exportCsv } from "../../../../helpers/exportCsv";
import { printSection } from "../../../../helpers/printSection";

const outlineBtn =
  "inline-flex items-center justify-center gap-2 rounded-pill border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:bg-brand-50/40 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1";

const Card: FC<any> = ({ content, status }: { content: any; status?: OrderStatusKey }) => {
  const [active, setActive] = useState<boolean>(content.active || false);
  const [modal1, setModal1] = useState<boolean>(false);
  const [modal3, setModal3] = useState<boolean>(false);
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
      className={`flex flex-col w-full rounded-card border bg-surface p-3 text-sm transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none xl:p-4 ${
        active ? "border-brand-300 shadow-card" : "border-line shadow-card"
      }`}
    >
      {modal1 && <MessageSellerModal setModal1={setModal1} />}
      {modal3 && <RateProduct setModal3={setModal3} />}
      <div className="flex items-center justify-between pb-2 xl:hidden">
        <div className="flex items-center gap-2">
          <span className="font-medium leading-5 text-ink">{content.customer}</span>
          <OrderStatusChip status={status} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs leading-5 text-ink-muted">{content.orderDate}</span>
          <button type="button"
            aria-expanded={active}
            aria-label={active ? "Collapse order" : "Expand order"}
            onClick={() => setActive((pre) => !pre)}
            className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
              active ? "rotate-180 border-brand-400 bg-brand-400 text-white" : "border-line bg-canvas text-brand-500"
            }`}
          >
            <span className={`h-3 w-3 fill-current ${active ? "-translate-y-[1px]" : ""}`}>
              <SvgShowMore />
            </span>
          </button>
        </div>
      </div>
      <div className="grid w-full grid-cols-12 gap-1 xl:h-auto xl:grid-cols-6 xl:px-4">
        <div className="relative col-span-6 mr-5 row-span-2 flex my-3 gap-0.5 border-r border-line px-3 xl:hidden">
          {content.productList.length > 3 && (
            <div className="absolute -right-3.5 top-0 flex h-full items-center justify-center">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface text-xs leading-[15px] text-ink-muted tabular-nums">
                +{content.productList.length - 3}
              </div>
            </div>
          )}
          {content.productList.slice(0, 3).map((el: any) => (
            <div key={el.id} className="relative h-16 w-full">
              <Image src={el.image} alt={el.brand} fill sizes="100vw" className="object-contain" />
              <div className="absolute -bottom-2.5 left-0 flex w-full select-none justify-center">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-400 text-[11px] leading-4 text-white tabular-nums">
                  {el.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-6 flex items-center xl:col-span-2 xl:items-center">
          <div className="flex items-center gap-2 text-ink-muted text-[13px] leading-4 xl:text-sm">
            <span>Order No:</span>
            <span className="font-display font-bold text-brand-600">{content.orderID}</span>
            <OrderStatusChip status={status} />
          </div>
        </div>

        <div className="col-span-4 hidden xl:block">
          <div className="flex items-center justify-center text-sm text-ink-muted">
            Ordered:
            <span className="px-1 font-medium tabular-nums text-ink"> {content.orderDate} </span>
          </div>
        </div>
        <div className={`col-span-2 flex justify-between xl:col-span-1 xl:items-center xl:gap-4 ${active ? "col-span-2" : "col-span-4"}`}>
          <div className="flex items-center whitespace-nowrap gap-1 text-[13px] leading-4 text-ink-muted xl:text-sm">
            <span>Total</span>
            <span className="font-bold tabular-nums text-ink">$ {content.total}</span>
          </div>
          <button type="button"
            aria-expanded={active}
            aria-label={active ? "Collapse order" : "Expand order"}
            onClick={() => setActive((pre) => !pre)}
            className={`hidden h-7 w-7 items-center justify-center rounded-full border p-1 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 xl:flex ${
              active ? "rotate-180 border-brand-400 bg-brand-400 text-white" : "border-line bg-canvas text-brand-500"
            }`}
          >
            <span className={`h-3 w-3 fill-current ${active ? "-translate-y-[1px]" : ""}`}>
              <SvgShowMore />
            </span>
          </button>
        </div>
      </div>
      {active && (
        <div className="mt-3 grid gap-3 border-t border-line pt-3 xl:px-4">
          <div className="flex flex-wrap items-center justify-between gap-3 xl:justify-start">
            <div className="hidden items-center gap-2 py-0 xl:flex xl:py-1">
              <div className="flex items-center justify-center rounded-card bg-canvas p-2">
                <div className="h-6 w-6 text-ink-soft fill-current">
                  <SvgMarket />
                </div>
              </div>
              <h3 className="font-medium text-ink">ShopMart</h3>
            </div>
            <button type="button"
              onClick={() => {
                setModal1(true);
              }}
              className={`${outlineBtn} w-full sm:w-auto`}
            >
              Message Seller
            </button>
            <button type="button"
              onClick={() => {
                setModal3(true);
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-pill border px-4 py-2 text-sm font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 sm:w-auto border-amberTint bg-amberTint text-amberDark hover:brightness-[0.97]"
            >
              Rate Seller
            </button>
          </div>
          {content.productList &&
            content.productList.map((el: { id: any }) => <ProductCard content={el} key={el.id} />)}
          <div className="grid grid-cols-12 gap-3 xl:gap-4">
            <div className="order-3 col-span-12 col-start-1 xl:order-none xl:col-span-4 xl:col-start-auto">
              <button type="button" aria-label="Export product list to Excel" onClick={exportProductList} className={`${outlineBtn} w-full`}>
                Export Product List to Excel
              </button>
            </div>

            <div className="order-0 col-span-6 col-start-3 flex flex-col gap-2 pl-12 text-[13px] leading-4 text-ink-muted xl:order-none xl:col-span-3 xl:col-start-10 xl:text-sm">
              <div className="grid grid-cols-2 gap-1">
                <h3 className="text-right">Discount:</h3>
                <h3 className="px-1 font-medium tabular-nums text-ink">${content.discount}</h3>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <h3 className="text-right">Tax:</h3>
                <h3 className="px-1 font-medium tabular-nums text-ink">${content.KDV}</h3>
              </div>
            </div>

            <button type="button" onClick={() => handlePrint("invoice")} className="order-4 col-span-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill bg-success px-4 py-2 text-[13px] font-medium leading-3 text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-successDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:order-none xl:col-span-2 xl:py-3 xl:text-sm">
              <span className="h-5 fill-current xl:h-5 xl:w-5">
                <SvgPrintInvoice />
              </span>
              <span>Print Invoice</span>
            </button>
            <button type="button" onClick={() => handlePrint("shipping-label")} className="order-5 col-span-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill bg-amber-500 px-4 py-2 text-[13px] font-medium leading-3 text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-amberDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:order-none xl:col-span-2 xl:py-3 xl:text-sm">
              <span className="h-5 fill-current xl:h-5 xl:w-5">
                <SvgPrintShipping />
              </span>
              <span>Print Shipping Label</span>
            </button>

            <button type="button" aria-expanded={showDetails} onClick={() => setShowDetails((pre) => !pre)} className={`${outlineBtn} order-2 col-span-12 w-full xl:order-none xl:col-span-3 xl:col-start-6`}>
              Order Details
            </button>

            {showDetails && (
              <div className="order-8 col-span-12 rounded-card border border-line bg-canvas p-3 text-xs leading-5 text-ink-soft xl:text-sm">
                <div className="grid gap-1 xl:grid-cols-2">
                  <div>
                    <b className="text-brand-600">Order No:</b> {content.orderID}
                  </div>
                  <div>
                    <b className="text-brand-600">Order Date:</b> {content.orderDate}
                  </div>
                  <div>
                    <b className="text-brand-600">Seller:</b> ShopMart
                  </div>
                  <div>
                    <b className="text-brand-600">Delivery:</b> {content.deliveryDate}
                  </div>
                  <div className="xl:col-span-2">
                    <b className="text-brand-600">Items:</b>{" "}
                    {content.productList
                      .map((el: any) => `${el.name} (${el.brand}) x${el.quantity}`)
                      .join(", ")}
                  </div>
                  <div className="xl:col-span-2">
                    <b className="text-brand-600">Billing Address:</b> {content.receiptInfo?.address}
                  </div>
                  <div className="xl:col-span-2">
                    <b className="text-brand-600">Tracking No:</b> {content.shippingInfo?.trackingNumber}
                  </div>
                </div>
              </div>
            )}

            <div className="order-1 col-span-10 col-start-2 flex items-center justify-center gap-1 whitespace-nowrap rounded-pill bg-ink px-4 py-2.5 text-white xl:order-none xl:col-span-4 xl:col-start-10">
              <span className="text-xs font-medium leading-3 xl:text-sm">Order Total:</span>
              <span className="whitespace-nowrap font-display text-base font-bold tabular-nums xl:text-lg">$ {content.total}</span>
            </div>
            <div className="order-6 col-span-12 p-0 text-[11px] leading-3 text-dangerDark xl:order-none xl:col-span-12 xl:pb-3 xl:pt-2 xl:text-sm">
              Please remember to include your e-invoice printout inside the shipping package.
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-4">
            <div className="col-span-3">
              <FirmReceiptInfo content={content.receiptInfo} />
            </div>
            <div className="col-span-3 w-full xl:col-span-1">
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
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <div className="relative grid grid-cols-12 gap-2 rounded-card border border-line bg-canvas/60 px-4 py-2 text-sm xl:grid-cols-7">
        {modal && <RateSeller setModal={setModal} content={content} />}
        <div className="col-span-4 flex h-full w-full p-2 xl:col-span-1">
          <div className="relative h-20 w-full">
            <Image className="object-contain" src={content?.image} fill sizes="100vw" alt={content.brand} />
          </div>
        </div>
        <div className="col-span-8 grid grid-cols-1 gap-1 xl:col-span-6 xl:grid-cols-6">
          <div className="grid grid-cols-5 justify-start gap-2 xl:col-span-2 xl:flex xl:flex-col xl:py-2">
            <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-left xl:text-sm xl:normal-case xl:tracking-normal">Product</h3>
            <div className="col-span-4 text-[12px] leading-[18px] text-ink-soft xl:text-sm">
              <h4 className="font-medium text-ink"> {content?.name}</h4> {content?.brand}
            </div>
          </div>
          <div className="grid grid-cols-5 justify-start gap-2 xl:flex xl:flex-col xl:py-2">
            <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-left xl:text-sm xl:normal-case xl:tracking-normal">Expiry</h3>
            <p className="col-span-4 font-medium text-[12px] leading-[18px] text-ink-soft tabular-nums xl:text-sm">
              {content?.miad}
            </p>
          </div>
          <div className="grid grid-cols-5 items-center justify-start gap-2 xl:flex xl:flex-col xl:px-4 xl:py-2">
            <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:px-2 xl:text-sm xl:normal-case xl:tracking-normal">Quantity</h3>
            <div className="col-span-2 flex xl:justify-center">
              <input
                aria-label="Quantity"
                className="inline-block w-3/4 rounded-pill border border-line bg-surface px-1 py-0.5 text-center text-[12px] font-medium leading-[18px] text-ink tabular-nums outline-none transition-colors duration-200 focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 xl:w-2/3 xl:px-2 xl:py-1.5 xl:text-sm"
                type="number"
                defaultValue={content?.quantity}
                placeholder="0"
              />
            </div>
          </div>
          <div className="grid grid-cols-5 justify-start gap-2 xl:flex xl:flex-col xl:px-2 xl:py-2">
            <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-left xl:text-sm xl:normal-case xl:tracking-normal">Price</h3>
            <div className="col-span-4 flex w-full">
              <input
                aria-label="Price"
                className="w-2/3 bg-transparent text-[12px] font-medium leading-[18px] text-ink tabular-nums outline-none xl:text-sm"
                defaultValue={content?.price}
                placeholder="0"
                type="number"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="grid grid-cols-5 justify-start gap-2 xl:flex xl:flex-col xl:py-2">
              <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-left xl:text-sm xl:normal-case xl:tracking-normal">Amount</h3>
              <p className="col-span-4 font-medium text-[12px] leading-[18px] text-ink-soft tabular-nums xl:text-sm">
                {content?.total}
              </p>
            </div>
            <div className="absolute right-5 top-2 flex h-full items-center justify-center xl:static">
              <button type="button" aria-label="Like product" onClick={() => setModal(true)} className="h-8 w-8 cursor-pointer text-success transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:scale-110 fill-current">
                <SvgLike />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
