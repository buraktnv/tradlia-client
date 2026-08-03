import { FC, useState} from "react";
import FilterTabMenu from "./FilterTabMenu";
import ProductCard from "./ProductCard";
import UpdateProduct from "./UpdateProduct";
import EraseModal from "./EraseAdvertModal";

const ProductList = [
  {
    id: 1,
    image: "/images/photos/StrepNaz Herbal.svg",
    name: "StrepNaz Orange &",
    brand: "Echinacea 24 Lozenges",
    miad: "March 2023",
    quantity: "15",
    price: "47.98",
    total: "$719.90",
    info: "$47.98",
    red: true,
    green: true,
  },
  {
    id: 2,
    image: "/images/photos/Oxygenated Water.svg",
    name: "VitaHealth Oxygenated Water",
    brand: "100 ml",
    miad: "March 2024",
    quantity: "16",
    price: "53.25",
    total: "$1325.00",
    info: "$53.25",
    red: true,
    green: false,
  },
  {
    id: 3,
    image: "/images/photos/product-3.svg",
    name: "Nasarinse",
    brand: "Plus Pediatric 250 ml",
    miad: "March 2023",
    quantity: "35",
    price: "28.50",
    total: "$1325.00",
    info: "$28.50",
    red: false,
    green: false,
  },
  {
    id: 4,
    image: "/images/photos/product-4.svg",
    name: "ThroatEase Lozenges",
    brand: "Honey-Lemon Flavored 24 Lozenges",
    miad: "March 2023",
    quantity: "15",
    price: "47.98",
    total: "$1325.00",
    info: "$47.98",
    red: false,
    green: true,
  },
];

const OfflineAdverts: FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModal2, setOpenModal2] = useState<boolean>(false);
  const [listType, setListType] = useState<number>(0);
  return (
    <div>
      <FilterTabMenu setOpenModal2={setOpenModal2} setListType={setListType} />
      {openModal && <UpdateProduct setOpenModal={setOpenModal} />}
      {openModal2 && <EraseModal setOpenModal2={setOpenModal2} />}
      <div className="relative ring-1 ring-[#00B1B265] rounded-full w-full ring-offset-0 xl:hidden my-2 ">
        <input
          type="search"
          id="search"
          placeholder="Search product"
          className="outline-0 bg-white placeholder-[#4CBEC5] placeholder:font-light px-4 w-full py-1.5 rounded-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 30.921 30.807"
          className="absolute w-4 h-4 right-5 top-3"
        >
          <path
            d="M2736.929,620.224l-6.214-6.215a13.386,13.386,0,1,0-2.682,2.715l6.2,6.2a1.907,1.907,0,0,0,2.7,0h0A1.908,1.908,0,0,0,2736.929,620.224Zm-16.979-4.236a9.93,9.93,0,1,1,9.93-9.93A9.93,9.93,0,0,1,2719.95,615.988Z"
            transform="translate(-2706.567 -592.675)"
            fill="#4cbec5"
          />
        </svg>
      </div>
      <div className="grid gap-4 py-4 rounded-3xl">
        <div className="grid gap-2">
          {ProductList &&
            ProductList.map((el) => (
              <ProductCard content={el} key={el.id} setOpenModal={setOpenModal} listType={listType} />
            ))}
        </div>
      </div>
    </div>
  );
};


export default OfflineAdverts;
