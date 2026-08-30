import Image from "next/image";
import { FC, useState } from "react";
import { SvgCheck, SvgPrintInvoice, SvgPrintShipping, SvgShowMore } from "../../../../helpers/svgs/soldSvg";
import FirmReceiptInfo from "../../receipts/FirmReceiptInfo";
import ShippingInfo from "../../receipts/ShippingInfo";
import MessageSellerModal from "./MessageSellerModal";
import PrintInvoice from "../../_shared/PrintInvoice";
import PrintShippingLabel from "../../_shared/PrintShippingLabel";
import OrderStatusChip, { OrderStatusKey } from "../../_shared/OrderStatusChip";
import { exportCsv } from "../../../../helpers/exportCsv";
import { printSection } from "../../../../helpers/printSection";

const outlineBtn =
  "inline-flex items-center justify-center gap-2 rounded-pill border border-line bg-surface px-4 py-2 text-sm font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:bg-brand-50/40 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1";

const SoldCard: FC<any> = ({ content, status }: { content: any; status?: OrderStatusKey }) => {
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
      className={`flex flex-col w-full rounded-card border bg-surface p-3 text-sm transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none xl:p-4 ${
        active ? "border-brand-300 shadow-card" : "border-line shadow-card"
      }`}
    >
      {modal1 && <MessageSellerModal setModal1={setModal1} />}
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
      <div className="grid w-full grid-cols-12 gap-4 xl:grid-cols-6 xl:gap-1 xl:pl-4">
        <div className="relative col-span-6 mr-5 row-span-2 flex gap-0.5 border-r border-line pr-3 xl:col-span-2">
          {content.productList.length > 3 && (
            <div className="absolute -right-3.5 top-0 flex h-full items-center justify-center">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface text-[13px] leading-[15px] text-ink-muted tabular-nums">
                +{content.productList.length - 3}
              </div>
            </div>
          )}
          {content.productList.slice(0, 3).map((el: any) => (
            <div key={el.id} className="relative h-20 w-full">
              <Image src={el.image} alt={el.brand} fill sizes="100vw" className="object-contain" />
              <div className="absolute bottom-0 left-0 flex w-full select-none justify-center xl:hidden">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-400 text-[11px] leading-4 text-white tabular-nums">
                  {el.quantity}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-6 flex w-full items-end xl:col-span-1 xl:h-[96px] xl:flex-col xl:items-start xl:justify-center">
          <div className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px] leading-4 text-ink-muted xl:flex-col xl:items-start xl:text-sm">
            <span>Order No:</span>
            <span className="font-display font-bold text-brand-600">{content.orderID}</span>
            <OrderStatusChip status={status} />
          </div>
        </div>
        <div className="col-span-1 hidden items-center xl:flex xl:h-[96px] xl:flex-col xl:items-start xl:justify-center">
          <div className="flex flex-wrap items-center text-[13px] leading-4 text-ink-muted xl:flex-col xl:items-start xl:text-sm">
            Buyer<span className="font-medium text-brand-600"> {content.customer} </span>
          </div>
        </div>
        <div className="col-span-1 hidden items-center xl:flex xl:h-[96px] xl:flex-col xl:items-start xl:justify-center">
          <div className="flex flex-wrap items-start text-[13px] leading-4 text-ink-muted xl:flex-col xl:text-sm">
            Ordered<span className="font-medium tabular-nums text-ink"> {content.orderDate} </span>
          </div>
        </div>
        <div className={`flex justify-between xl:h-[96px] xl:flex-row xl:items-center xl:col-span-1 xl:gap-4 ${active ? "col-span-2" : "col-span-4"}`}>
          <div className="flex flex-row items-start gap-1 whitespace-nowrap text-[13px] leading-4 text-ink-muted xl:flex-col xl:text-sm">
            <span>Total</span>
            <span className="font-bold tabular-nums text-ink"> {content.total} $ </span>
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
        <div className="col-span-12 grid text-xs xl:grid-cols-3 xl:text-sm">
          <div className="grid grid-cols-3 items-center gap-2 font-medium">
            <div className="text-dangerDark tabular-nums"> {content.deliveryDate}</div>
            <div className="flex w-full items-center gap-1 text-successDark">
              <span className="h-3 w-3 fill-current">
                <SvgCheck />
              </span>
              E-Invoice
            </div>
            <div className="flex w-full items-center gap-1 whitespace-nowrap text-successDark">
              <span className="h-3 w-3 fill-current">
                <SvgCheck />
              </span>
              Shipping Label
            </div>
          </div>
        </div>
      </div>

      {active && (
        <div className="mt-3 flex w-full flex-col gap-3 border-t border-line pt-3 xl:px-4">
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
                <h3 className="px-1 font-medium tabular-nums text-ink">{content.discount}$</h3>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <h3 className="text-right">Tax:</h3>
                <h3 className="px-1 font-medium tabular-nums text-ink">{content.KDV}$</h3>
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

            <button type="button"
              onClick={() => setModal1(true)}
              className={`${outlineBtn} order-7 col-span-8 col-start-3 w-full xl:order-none xl:col-span-3 xl:col-start-auto`}
            >
              Send Message to Buyer
            </button>

            <button type="button" aria-expanded={showDetails} onClick={() => setShowDetails((pre) => !pre)} className={`${outlineBtn} order-2 col-span-12 w-full xl:order-none xl:col-span-2 xl:col-start-auto`}>
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
                    <b className="text-brand-600">Buyer:</b> {content.customer}
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

            <div className="order-1 col-span-10 col-start-2 flex items-center justify-center gap-1 whitespace-nowrap rounded-pill bg-ink px-4 py-2.5 text-white xl:order-none xl:col-span-3 xl:col-start-auto">
              <span className="text-xs font-medium leading-3 xl:text-sm">Order Total:</span>
              <span className="whitespace-nowrap font-display text-base font-bold tabular-nums xl:text-lg">{content.total} $</span>
            </div>
            <div className="order-6 col-span-12 p-0 text-[11px] leading-3 text-dangerDark xl:order-none xl:col-span-12 xl:pb-3 xl:pt-2 xl:text-sm">
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
    <div className="grid grid-cols-12 gap-3 rounded-card border border-line bg-canvas/60 p-3 text-sm xl:grid-cols-7 xl:py-2 xl:px-5">
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
          <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:px-2 xl:text-sm xl:normal-case xl:tracking-normal">Qty</h3>
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
        <div className="grid grid-cols-5 justify-start gap-2 xl:flex xl:flex-col xl:py-2">
          <h3 className="font-display text-xs uppercase tracking-wider text-ink-muted xl:text-left xl:text-sm xl:normal-case xl:tracking-normal">Amount</h3>
          <p className="col-span-4 font-medium text-[12px] leading-[18px] text-ink-soft tabular-nums xl:text-sm">
            {content?.total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SoldCard;
