import React, { FC } from "react";
import { SvgExcel, SvgDomesticCargo } from "../../../helpers/svgs/receiptSvg";
import ReceiptCard from "./ReceiptCard";

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
        image: "/images/photos/StrepNaz Herbal.svg",
        name: "StrepNaz Orange &",
        brand: "Echinacea 24 Lozenges",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/Oxygenated Water.svg",
        name: "HealthPro Oxygenated Water",
        brand: "100 ml",
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
    customer: "MediSupply",
    orderDate: "28.02.2022 - 14:20",
    total: "515.73",
    active: false,
    discount: 150,
    KDV: 350,
    productList: [
      {
        id: 1,
        image: "/images/photos/StrepNaz Herbal.svg",
        name: "StrepNaz Orange &",
        brand: "Echinacea 24 Lozenges",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/Oxygenated Water.svg",
        name: "HealthPro Oxygenated Water",
        brand: "100 ml",
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
        image: "/images/photos/StrepNaz Herbal.svg",
        name: "StrepNaz Orange &",
        brand: "Echinacea 24 Lozenges",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/Oxygenated Water.svg",
        name: "HealthPro Oxygenated Water",
        brand: "100 ml",
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
        image: "/images/photos/StrepNaz Herbal.svg",
        name: "StrepNaz Orange &",
        brand: "Echinacea 24 Lozenges",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/Oxygenated Water.svg",
        name: "HealthPro Oxygenated Water",
        brand: "100 ml",
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

const SellMovements: FC<any> = () => {
  const totalPayment = "13,535.60";
  return (
    <div className="grid gap-3 xl:gap-[0.75rem]">
      {cardList && cardList.map((content) => <ReceiptCard key={content.id} content={content} />)}

      <div className="xl:bg-[#E8336E] text-white flex flex-col-reverse xl:flex-row justify-between items-center rounded-full gap-3 xl:gap-0 xl:pl-12 xl:px-20 xl:py-4">
        <button type="button" className="flex items-center justify-center w-full xl:w-max gap-2 bg-[#FF3A67] xl:bg-transparent rounded-full h-10 xl:h-auto">
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

export default SellMovements;
