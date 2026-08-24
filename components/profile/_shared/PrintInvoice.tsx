import { FC } from "react";

/**
 * Print-only invoice fragment. Rendered off-screen while the print dialog is
 * open; printSection("invoice") targets it via [data-print-area="invoice"].
 */
const PrintInvoice: FC<any> = ({ order }) => {
  const {
    orderID,
    orderDate,
    customer,
    productList,
    total,
    discount,
    KDV,
    receiptInfo,
    deliveryDate,
  } = order;

  return (
    <div
      data-print-area="invoice"
      className="fixed -left-[9999px] top-0 w-[210mm] bg-white p-10 text-black"
    >
      <div className="flex items-start justify-between border-b border-black pb-4">
        <div>
          <h2 className="text-2xl font-bold">E-Invoice</h2>
          <p className="text-sm mt-1">{receiptInfo?.name || "Tradlia"}</p>
          <p className="text-sm">{receiptInfo?.taxOffice || "Central Tax Office"}</p>
          <p className="text-sm">Tax No: {receiptInfo?.taxID || "-"}</p>
        </div>
        <div className="text-right text-sm">
          <p>
            Invoice No: <strong>{orderID}</strong>
          </p>
          <p>Order Date: {orderDate}</p>
          {deliveryDate && <p>Delivery: {deliveryDate}</p>}
          <p>Buyer: {customer}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 py-4 text-sm">
        <div>
          <p className="font-bold">Bill To</p>
          <p>{customer}</p>
          <p>{receiptInfo?.address || "-"}</p>
          <p>{receiptInfo?.email || "-"}</p>
        </div>
        <div>
          <p className="font-bold">Member Invoice Info</p>
          <p>ID No: {receiptInfo?.TCNo || "-"}</p>
        </div>
      </div>

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-black text-left">
            <th className="py-2 pr-2">Product</th>
            <th className="py-2 pr-2">Brand</th>
            <th className="py-2 pr-2">Qty</th>
            <th className="py-2 pr-2 text-right">Unit Price</th>
            <th className="py-2 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {productList?.map((el: any) => (
            <tr key={el.id} className="border-b border-gray-300">
              <td className="py-2 pr-2">{el.name}</td>
              <td className="py-2 pr-2">{el.brand}</td>
              <td className="py-2 pr-2">{el.quantity}</td>
              <td className="py-2 pr-2 text-right">{el.price} $</td>
              <td className="py-2 text-right">{el.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="ml-auto mt-4 w-64 text-sm">
        <div className="flex justify-between py-1">
          <span>Discount:</span>
          <span>{discount} $</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Tax (KDV):</span>
          <span>{KDV} $</span>
        </div>
        <div className="flex justify-between py-1 border-t border-black font-bold">
          <span>Total:</span>
          <span>{total} $</span>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-gray-600">
        Thank you for your order. Please place this e-invoice printout inside the shipping package.
      </p>
    </div>
  );
};

export default PrintInvoice;
