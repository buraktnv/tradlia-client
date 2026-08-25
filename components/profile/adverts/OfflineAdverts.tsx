import { FC, useState} from "react";
import FilterTabMenu from "./FilterTabMenu";
import ProductCard from "./ProductCard";
import UpdateProduct from "./UpdateProduct";
import EraseModal from "./EraseAdvertModal";

const ProductList = [
  {
    id: 1,
    image: "/images/photos/product-3.svg",
    name: "TorqueMax Wood Screws",
    brand: "4×40 (500 Count)",
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
    image: "/images/photos/product-2.svg",
    name: "GripTight Pallet Wrap",
    brand: "20 µm Roll",
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
    name: "WriteWell Gel Pens",
    brand: "Blue 0.7 mm 10 pcs",
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
      <div className="relative ring-1 ring-brand-200 rounded-full w-full ring-offset-0 xl:hidden my-2 ">
        <input
          type="search"
          id="search"
          placeholder="Search product"
          className="w-full rounded-pill bg-surface px-4 py-2 text-sm outline-none transition-colors duration-200 placeholder:font-light placeholder:text-brand-500 focus-visible:ring-2 focus-visible:ring-brand-400/30"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 30.921 30.807"
          className="absolute right-4 top-3 h-4 w-4 text-brand-500"
        >
          <path
            d="M2736.929,620.224l-6.214-6.215a13.386,13.386,0,1,0-2.682,2.715l6.2,6.2a1.907,1.907,0,0,0,2.7,0h0A1.908,1.908,0,0,0,2736.929,620.224Zm-16.979-4.236a9.93,9.93,0,1,1,9.93-9.93A9.93,9.93,0,0,1,2719.95,615.988Z"
            transform="translate(-2706.567 -592.675)"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="grid gap-3 py-4">
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
