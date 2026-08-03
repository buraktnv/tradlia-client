import { FC } from "react";
import { SvgDomesticCargo } from "../../../../helpers/svgs/soldSvg";
import BoughtCard from "./SoldCard";

const cardList = [
  {
    id: 3,
    orderID: "OhCaDwnom ",
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
        name: "VitaC Orange &",
        brand: "Echinacea 24 Pastilles",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/Oxygenated Water.svg",
        name: "HealthAid Oxygen Water",
        brand: "100 ml",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
    ],
    receiptInfo: {
      name: "Northwind Traders",
      taxID: "TX-18463408",
      taxOffice: "Central Tax Office",
      TCNo: "9000236566",
      address: "123 Commerce St, New York, NY 10001",
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
        name: "VitaC Orange &",
        brand: "Echinacea 24 Pastilles",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/Oxygenated Water.svg",
        name: "HealthAid Oxygen Water",
        brand: "100 ml",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
    ],
    receiptInfo: {
      name: "Northwind Traders",
      taxID: "TX-18463408",
      taxOffice: "Central Tax Office",
      TCNo: "9000236566",
      address: "123 Commerce St, New York, NY 10001",
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
        name: "VitaC Orange &",
        brand: "Echinacea 24 Pastilles",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/Oxygenated Water.svg",
        name: "HealthAid Oxygen Water",
        brand: "100 ml",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
    ],
    receiptInfo: {
      name: "Northwind Traders",
      taxID: "TX-18463408",
      taxOffice: "Central Tax Office",
      TCNo: "9000236566",
      address: "123 Commerce St, New York, NY 10001",
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
    customer: "TechRetail Inc",
    orderDate: "28.02.2022 - 14:20",
    total: "2535.50",
    active: false,
    discount: 150,
    KDV: 350,
    productList: [
      {
        id: 1,
        image: "/images/photos/StrepNaz Herbal.svg",
        name: "VitaC Orange &",
        brand: "Echinacea 24 Pastilles",
        miad: "March 2023",
        quantity: "15",
        price: "47.98",
        total: "$719.90",
      },
      {
        id: 2,
        image: "/images/photos/Oxygenated Water.svg",
        name: "HealthAid Oxygen Water",
        brand: "100 ml",
        miad: "March 2024",
        quantity: "25",
        price: "53.98",
        total: "$1325.00",
      },
    ],
    receiptInfo: {
      name: "Northwind Traders",
      taxID: "TX-18463408",
      taxOffice: "Central Tax Office",
      TCNo: "9000236566",
      address: "123 Commerce St, New York, NY 10001",
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

const Shipped: FC = () => {
  return (
    <div className="flex flex-col gap-3 xl:gap-[0.75rem]">
      {cardList && cardList.map((content) => <BoughtCard key={content.id} content={content} />)}
    </div>
  );
};

export default Shipped;
