import { NextPage } from "next";
import Sidebar from "../../components/category/Sidebar";
import Content from "../../components/category/Content";
import { FC, useState } from "react";
import { SvgLessThan, SvgMoreThan } from "../../helpers/svgs/category";
const items: any = [
  {
    id: 1,
    name: "VitaPlus Healing",
    brand: "Cream 40 ml",
    image: "/images/photos/product-1.svg",
    price: 18.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 2,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/product-2.svg",
    price: 36.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 3,
    name: "MediCore Digital",
    brand: "Contactless Thermometer",
    image: "/images/photos/product-3.svg",
    price: 23.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 4,
    name: "SafeGuard 3-Ply Black",
    brand: "Surgical Mask with Ear Loops 50 pcs",
    image: "/images/photos/product-4.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 5,
    name: "ClearMed Hydrogen Peroxide",
    brand: "100 ml",
    image: "/images/photos/product-5.svg",
    price: 4.25,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 6,
    name: "Herbiva Orange & ",
    brand: "Echinacea 24 Lozenges",
    image: "/images/photos/product-6.svg",
    price: 8.44,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 7,
    name: "Nordwell Relief",
    brand: "Honey-Lemon Flavor 24 Lozenges",
    image: "/images/photos/product-7.svg",
    price: 24.69,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 8,
    name: "GreenLeaf Baby Powder",
    brand: "100 gr",
    image: "/images/photos/product-8.svg",
    price: 9.9,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
  {
    id: 9,
    name: "GreenLeaf InsectGuard",
    brand: "Insect Repellent 1 L",
    image: "/images/photos/product-9.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 10,
    name: "PureLife Baby",
    brand: "Tear-Free Shampoo 200 ml",
    image: "/images/photos/product-2.svg",
    price: 45.0,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 11,
    name: "Nordwell PestGuard",
    brand: "Ant Granules",
    image: "/images/photos/product-12.svg",
    price: 19.49,
    shipping: 0,
    advertCount: 250,
    isFavorite: true,
  },

  {
    id: 12,
    name: "PureLife Manual",
    brand: "Breast Pump",
    image: "/images/photos/product-13.svg",
    price: 185.0,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
];

const Category: NextPage = () => {
  const [activeCardPage, setActiveCardPage] = useState<any>(4);
  const [sidebar, setSidebar] = useState<any>(false);
  return (
    <>
      <div className="container px-3 py-6 mx-auto text-sm">
        <div className="grid grid-cols-5 gap-6">
          <div
            className={`${
              sidebar ? "block col-span-5 absolute h-full w-full top-0 left-0 z-[99999]" : "hidden xl:block"
            }`}
          >
            <Sidebar setSidebar={setSidebar} />
          </div>
          {!sidebar && (
            <div className="col-span-5 xl:col-span-4">
              <Content items={items} setSidebar={setSidebar} />
              <div className="flex items-center justify-center w-full">
                <div className="flex items-center gap-3 mt-12">
                  <h3>
                    <div className="w-4 h-7 text-[#4CBEC5]">
                      <SvgLessThan />
                    </div>
                  </h3>
                  <div className="flex items-center gap-2 xl:gap-8">
                    <CardNavItem pageNumber="1" activePage={activeCardPage} setActivePage={setActiveCardPage} />
                    <CardNavItem pageNumber="2" activePage={activeCardPage} setActivePage={setActiveCardPage} />
                    <CardNavItem pageNumber="3" activePage={activeCardPage} setActivePage={setActiveCardPage} />
                    <CardNavItem pageNumber="4" activePage={activeCardPage} setActivePage={setActiveCardPage} />
                    <CardNavItem pageNumber="5" activePage={activeCardPage} setActivePage={setActiveCardPage} />
                    <CardNavItem pageNumber="6" activePage={activeCardPage} setActivePage={setActiveCardPage} />
                    <CardNavItem pageNumber="7" activePage={activeCardPage} setActivePage={setActiveCardPage} />
                  </div>
                  <h3>
                    <div className="w-4 h-7 text-[#4CBEC5]">
                      <SvgMoreThan />
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const CardNavItem: FC<any> = ({ pageNumber, activePage, setActivePage }) => (
  <h3
    className={`cursor-pointer select-none w-8 h-8 rounded-full flex items-center justify-center text-lg text-[#7E8096] font-medium transition duration-150 ease-in-out ${
      activePage == pageNumber ? "bg-[#4CBEC5] text-white" : "hover:bg-[#4CBEC5] hover:text-white"
    }`}
    onClick={() => setActivePage(pageNumber)}
  >
    {pageNumber}
  </h3>
);

export default Category;
