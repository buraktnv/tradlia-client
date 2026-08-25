import { FC } from "react";
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

const FinishedPayments: FC<any> = () => {
  const totalPayment = "13,535.60";

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
    exportCsv("FinishedPayments", ["Order No", "Date", "Product", "Qty", "Price", "Total"], rows);
  };

  return (
    <div className="grid gap-3  xl:gap-[0.75rem] text-sm">
      {cardList && cardList.map((content) => <ReceiptCard key={content.id} content={content} />)}

      <div className="xl:bg-[#F9B000] text-white flex flex-col-reverse xl:flex-row justify-between items-center rounded-full gap-3 xl:gap-0 xl:pl-12 xl:px-20 xl:py-4">
        <button type="button" onClick={exportToExcel} className="flex items-center justify-center w-full xl:w-max gap-2 bg-[#FF3A67] xl:bg-transparent rounded-full h-10 xl:h-auto">
          <div className="w-6 h-6 xl:w-7 xl:h-7">
            <SvgExcel />
          </div>
          <div className="flex">
            Export to <h3 className="pl-1 font-bold">Excel</h3>
          </div>
        </button>
        <div className="flex gap-2 text-base items-center w-full xl:w-max justify-center bg-[#EA5B0C] xl:bg-transparent rounded-full h-10 xl:h-auto">
          Total: <h3 className="font-bold">${totalPayment}</h3>
        </div>
      </div>
    </div>
  );
};

export default FinishedPayments;
