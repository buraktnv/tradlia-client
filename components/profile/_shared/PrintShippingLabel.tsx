import { FC } from "react";

/**
 * Print-only A6-ish shipping label fragment. Rendered off-screen while the
 * print dialog is open; printSection("shipping-label") targets it via
 * [data-print-area="shipping-label"].
 */
const PrintShippingLabel: FC<any> = ({ order }) => {
  const { orderID, customer, productList, receiptInfo, shippingInfo } = order;

  return (
    <div
      data-print-area="shipping-label"
      className="fixed -left-[9999px] top-0 w-[105mm] bg-white p-4 text-black"
    >
      <div className="border-2 border-black rounded-md p-3">
        <div className="flex items-center justify-between border-b border-dashed border-black pb-2">
          <div>
            <p className="text-sm font-bold">Tradlia</p>
            <p className="text-[10px] leading-3">{receiptInfo?.name || "-"}</p>
            <p className="text-[10px] leading-3">{receiptInfo?.address || "-"}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px]">Order</p>
            <p className="text-xs font-bold">{orderID}</p>
          </div>
        </div>

        <div className="py-2 text-xs">
          <p className="font-bold">SHIP TO</p>
          <p>{customer}</p>
          <p className="text-[10px] leading-3">{receiptInfo?.address || "-"}</p>
          <p className="text-[10px] leading-3">{receiptInfo?.email || "-"}</p>
        </div>

        <div className="py-1 text-xs border-t border-dashed border-black">
          <p>
            Tracking No: <strong>{shippingInfo?.trackingNumber || "-"}</strong>
          </p>
          <p>
            {productList?.length || 0} item(s) — {productList?.reduce((sum: number, el: any) => sum + Number(el.quantity || 0), 0)} pcs
          </p>
        </div>

        {/* barcode placeholder */}
        <div className="mt-2 flex h-10 items-stretch justify-between gap-[2px] px-1 border border-dashed border-black rounded-sm">
          {[2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 2, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1].map(
            (w, i) => (
              <div key={i} className="bg-black" style={{ width: `${w}px` }} />
            )
          )}
        </div>
        <p className="mt-1 text-center text-[9px] tracking-[0.3em]">{shippingInfo?.trackingNumber || orderID}</p>
      </div>
    </div>
  );
};

export default PrintShippingLabel;
