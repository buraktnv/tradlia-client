import React, { FC } from "react";
import { SvgExcel, SvgDomesticCargo } from "../../../helpers/svgs/receiptSvg";
import ReceiptCard from "./ReceiptCard";
import { exportCsv } from "../../../helpers/exportCsv";

const cardList = [
  {
    id: 3,
    orderID: "OhCaDwnom ",
    orderPiece: "5",
    customer: "ShopMart",
    orderDate: "28.02.2022 - 14:20",
    total: "980.11",
    active: false,
    discount: 150,
    KDV: 350,
    productList: [
      {
        id: 1,
        image: "/images/photos/product-3.svg",
        name: "TorqueMax Wood Screws",
        brand: "4×40 (500 Count)",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/product-2.svg",
        name: "HealthPro GripTight Pallet Wrap",
        brand: "20 µm Roll",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
    ],
    receiptInfo: {
      name: "Northwind Traders",
      taxID: "TX-184634082",
      taxOffice: "Central Tax Office",
      TCNo: "ID-900023656",
      address: "123 Commerce St, Suite 37, New York, NY 10001",
      email: "contact@northwind.example.com",
      active: true,
    },
    shippingInfo: {
      trackingNumber: "613364404629",
      image: <SvgDomesticCargo />,
      active: true,
    },
  },
  {
    id: 4,
    orderID: "AvTEyBXUq ",
    orderPiece: "12",
    customer: "SupplyHub",
    orderDate: "28.02.2022 - 14:20",
    total: "515.73",
    active: false,
    discount: 150,
    KDV: 350,
    productList: [
      {
        id: 1,
        image: "/images/photos/product-3.svg",
        name: "TorqueMax Wood Screws",
        brand: "4×40 (500 Count)",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/product-2.svg",
        name: "HealthPro GripTight Pallet Wrap",
        brand: "20 µm Roll",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
    ],
    receiptInfo: {
      name: "Northwind Traders",
      taxID: "TX-184634082",
      taxOffice: "Central Tax Office",
      TCNo: "ID-900023656",
      address: "123 Commerce St, Suite 37, New York, NY 10001",
      email: "contact@northwind.example.com",
      active: true,
    },
    shippingInfo: {
      trackingNumber: "613364404629",
      image: <SvgDomesticCargo />,
      active: true,
    },
  },
  {
    id: 5,
    orderID: "OhCaDwnom",
    orderPiece: "1",
    customer: "PlusStore",
    orderDate: "28.02.2022 - 14:20",
    total: "184.91",
    active: true,
    discount: 150,
    KDV: 350,
    productList: [
      {
        id: 1,
        image: "/images/photos/product-3.svg",
        name: "TorqueMax Wood Screws",
        brand: "4×40 (500 Count)",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/product-2.svg",
        name: "HealthPro GripTight Pallet Wrap",
        brand: "20 µm Roll",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
    ],
    receiptInfo: {
      name: "Northwind Traders",
      taxID: "TX-184634082",
      taxOffice: "Central Tax Office",
      TCNo: "ID-900023656",
      address: "123 Commerce St, Suite 37, New York, NY 10001",
      email: "contact@northwind.example.com",
      active: true,
    },
    shippingInfo: {
      trackingNumber: "613364404629",
      image: <SvgDomesticCargo />,
      active: true,
    },
  },
  {
    id: 6,
    orderID: "OuYimVxdR",
    orderPiece: "1",
    customer: "GreenLeaf Co",
    orderDate: "28.02.2022 - 14:20",
    total: "261.56",
    active: false,
    discount: 150,
    KDV: 350,
    productList: [
      {
        id: 1,
        image: "/images/photos/product-3.svg",
        name: "TorqueMax Wood Screws",
        brand: "4×40 (500 Count)",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/product-2.svg",
        name: "HealthPro GripTight Pallet Wrap",
        brand: "20 µm Roll",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
      {
        id: 3,
        image: "/images/photos/product-2.svg",
        name: "HealthPro GripTight Pallet Wrap",
        brand: "20 µm Roll",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
      {
        id: 4,
        image: "/images/photos/product-2.svg",
        name: "HealthPro GripTight Pallet Wrap",
        brand: "20 µm Roll",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
      {
        id: 5,
        image: "/images/photos/product-2.svg",
        name: "HealthPro GripTight Pallet Wrap",
        brand: "20 µm Roll",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
    ],
    receiptInfo: {
      name: "Northwind Traders",
      taxID: "TX-184634082",
      taxOffice: "Central Tax Office",
      TCNo: "ID-900023656",
      address: "123 Commerce St, Suite 37, New York, NY 10001",
      email: "contact@northwind.example.com",
      active: true,
    },
    shippingInfo: {
      trackingNumber: "613364404629",
      image: <SvgDomesticCargo />,
      active: true,
    },
  },
];

const ReceiptContent: FC<any> = () => {
  const exportToExcel = () => {
    const rows = cardList.flatMap((order: any) =>
      order.productList.map((el: any) => [
        order.orderID,
        order.orderDate,
        `${el.name} ${el.brand}`,
        el.quantity,
        el.price,
        el.total,
      ])
    );
    exportCsv("Receipts", ["Order No", "Date", "Product", "Qty", "Price", "Total"], rows);
  };

  return (
    <div className="grid w-full gap-3 xl:gap-[0.75rem] text-sm">
      {cardList && cardList.map((content) => <ReceiptCard key={content.id} content={content} />)}
      <div className="flex flex-col-reverse items-center justify-between gap-3 rounded-card border border-line bg-surface px-4 py-3 shadow-card sm:flex-row sm:px-6">
        <button type="button" aria-label="Export list to Excel" onClick={exportToExcel} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-pill border border-line px-4 text-sm font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:bg-brand-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 sm:w-max">
          <span className="h-5 w-5 fill-current text-brand-600">
            <SvgExcel />
          </span>
          <span>Export to <b>Excel</b></span>
        </button>
        <p className="flex items-center justify-center gap-2 text-base text-ink-soft">
          Total:
          <span className="font-display font-bold text-lg tabular-nums text-ink">13,535.60 $</span>
        </p>
      </div>
    </div>
  );
};

export default ReceiptContent;
