import { FC, useState } from "react";
import Image from "next/image";
import DateDropdown from "../../components/profile/feedback/DateDropdown";
import FilterDropdown from "../../components/profile/feedback/FilterDropdown";
import SellerModal from "../../components/sellerModal/SellerModal";
import AllComments from "../../components/sellerModal/AllComments";
import Sidebar from "../../components/seller/Sidebar";
import {
  SvgBanner,
  SvgBanner1,
  SvgBannerWrite,
  SvgBannerWrite1,
  SvgBascet,
  SvgBasket2,
  SvgBox,
  SvgButton1,
  SvgButton2,
  SvgButton3,
  SvgButton4,
  SvgCar,
  SvgClock,
  SvgMng,
  SvgSearch1,
  SvgFilter,
  SvgSearch2,
  SvgStarEmpty,
  SvgStarFilled,
  SvgTooth,
  SvgLine,
} from "../../helpers/svgs/sellerSvg";
import { SvgTrashCan } from "../../helpers/svgs/product";
import { useBasketContext } from "../../helpers/contexts/BasketContext";
import { SvgSearch } from "../../helpers/svgs/product";

const ProductList: any = [
  {
    id: 10,
    image: "/images/photos/product-14.svg",
    name: "Merfill Micro Universal",
    brand: "Light-Cured Composite (A3 color/4g)",
    miad: "No Expiry",
    quantity: "15",
    price: "377,23",
    total: "$719.90",
    red: true,
    green: true,
    show: false,
    amount: null,
  },
  {
    id: 11,
    image: "/images/photos/product-15.svg",
    name: "Orthometric Dental Hand Tool ",
    brand: "Tweezer Organizer",
    miad: "No Expiry",
    quantity: "8",
    price: "787,26",
    total: "$1325.00",
    red: true,
    green: false,
    show: true,
    amount: 2,
  },
  {
    id: 12,
    image: "/images/photos/product-16.svg",
    name: "Microdont Microglass C - Glass Ionomer ",
    brand: "Adhesive 15 Gm Powder + 10 ml Liquid",
    miad: "No Expiry",
    quantity: "15",
    price: "360,83",
    total: "$1325.00",
    red: false,
    green: false,
    show: false,
    amount: 1,
  },
  {
    id: 13,
    image: "/images/photos/product-14.svg",
    name: "Merfill Micro Universal",
    brand: "Light-Cured Composite (A3 color/4g)",
    miad: "No Expiry",
    quantity: "15",
    price: "377,23",
    total: "$1325.00",
    red: true,
    green: true,
    show: false,
    amount: null,
  },
  {
    id: 14,
    image: "/images/photos/product-15.svg",
    name: "Orthometric Dental Hand Tool ",
    brand: "Tweezer Organizer",
    miad: "No Expiry",
    quantity: "8",
    price: "787,26",
    total: "$1325.00",
    red: true,
    green: false,
    show: false,
    amount: null,
  },
  {
    id: 15,
    image: "/images/photos/product-16.svg",
    name: "Microdont Microglass C - Glass Ionomer ",
    brand: "Adhesive 15 Gm Powder + 10 ml Liquid",
    miad: "No Expiry",
    quantity: "15",
    price: "360,83",
    total: "$1325.00",
    red: false,
    green: false,
    show: false,
    amount: null,
  },
];

const filterList = [
  { id: 0, title: "All", active: true },
  { id: 1, title: "Answered", active: false },
  { id: 2, title: "Not Answered", active: false },
  { id: 3, title: "1 Star", active: false },
  { id: 4, title: "2 Stars", active: false },
  { id: 5, title: "3 Stars", active: false },
  { id: 6, title: "4 Stars", active: false },
  { id: 7, title: "5 Stars", active: false },
];

const Seller: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [modal1, setModal1] = useState<boolean>(false);

  const [sidebar, setSidebar] = useState<boolean>(false);

  if (sidebar) {
    return (
      <div className="px-3 z-[9999] min-h-[150vh] absolute inset-0 bg-white py-5">
        <Sidebar />
        <button type="button"
          className="w-full text-white rounded-full bg-[#4CBEC5] py-3 xl:h-10 sm:mt-4"
          onClick={() => setSidebar(false)}
        >
          FILTER
        </button>
      </div>
    );
  }

  return (
    <div className="container grid mx-auto snap-none xl:pt-[1.5rem]">
      {modal1 && <AllComments setModal1={setModal1} />}
      {modal && <SellerModal setModal={setModal} />}

      <div className="grid w-full grid-cols-4 col-span-6 gap-3 mt-4 xl:grid-cols-5">
        <div className="flex mx-3 xl:mx-0 col-span-4 xl:col-span-5 justify-around bg-[#E5F3F3] border border-[#00B1B2] border-opacity-20 rounded-3xl py-4">
          <div className="flex flex-col w-full gap-2 xl:flex-row xl:items-center xl:justify-around ">
            <div className="flex">
              <div className=" relative w-24 h-24 m-4 p-6 rounded-full bg-white ring-1 ring-[#00B1B2] ring-opacity-25">
                <SvgTooth />
                <div className=" absolute w-8 h-8 right-16 mr-2 mb-1 bottom-16 p-2 rounded-full bg-gradient-to-r from-[#FFBD00] to-[#FF7B03]">
                  <SvgBascet />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center">
                <div className=" text-xl font-bold text-[#7E8096]">Tradlia</div>
                <div className="flex items-center w-auto mt-2 space-x-1 max-w-20">
                  <SvgStarFilled />
                  <SvgStarFilled />
                  <SvgStarFilled />
                  <SvgStarFilled />
                  <SvgStarEmpty />
                  <div className=" text-[#F9B000] text-xl font-bold pl-2">4,1</div>
                </div>
                <div className=" text-sm font-medium text-[#7E8096]">53 Listings</div>
              </div>
            </div>
            <div className="items-center hidden xl:flex">
              <SvgMng />
            </div>
            <div className="flex xl:hidden border-b-2 mb-3  border-[#AFD3D2]">
              <div className="flex flex-col px-5 w-max xl:w-full gap-y-5">
                <div className="flex items-center gap-2 ">
                  <SvgClock />
                  <p className=" text-[#FF792E] text-sm font-bold">Same-Day Shipping Until 15:55</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <SvgCar />
                  <p className=" text-[#86bc25] text-sm font-bold">Free Shipping over $500</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <SvgBox />
                  <p className=" text-[#4cbec5] text-sm font-bold">Min. $100</p>
                </div>
              </div>
              <div className="flex items-center mb-12">
                <SvgMng />
              </div>
            </div>
            <div className="xl:flex xl:flex-col grid grid-cols-2 items-center w-full xl:w-[15%] px-5 xl:px-0 gap-3 xl:gap-0 gap-y-6 xl:space-y-5 ">
              <div className="flex xl:hidden col-span-2 h-full items-center text-[#7E8096] text-sm font-normal leading-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
              </div>
              <div className="flex w-full col-span-2 gap-2 xl:flex-col xl:gap-8 xl:pb-3">
                <button type="button"
                  onClick={() => setModal1(true)}
                  className=" bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] text-white rounded-full py-2 xl:py-1 xl:w-full w-full  text-md font-medium "
                >
                  All Reviews
                </button>
                <button type="button"
                  onClick={() => setModal(true)}
                  className=" bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white rounded-full py-2 xl:py-1 xl:w-full w-full text-md font-medium"
                >
                  Ask Store a Question
                </button>
              </div>
            </div>
            <div className=" xl:flex hidden flex-col gap-y-3 px-5 border-r-2 border-[#AFD3D2]">
              <div className="flex items-center gap-2 ">
                <SvgClock />
                <p className=" text-[#FF792E] text-sm font-bold">Same-Day Shipping Until 15:55</p>
              </div>
              <div className="flex items-center gap-2 ">
                <SvgCar />
                <p className=" text-[#86bc25] text-sm font-bold">Free Shipping over $500</p>
              </div>
              <div className="flex items-center gap-2 ">
                <SvgBox />
                <p className=" text-[#4cbec5] text-sm font-bold">Min. $100</p>
              </div>
            </div>
            <div className="xl:flex hidden w-64 h-full items-center text-[#7E8096] text-sm font-normal leading-5">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <Sidebar />
        </div>
        <div className="col-span-4 mx-3 md:mx-0">
          <OnlineAdverts setSidebar={setSidebar} />
        </div>
      </div>
    </div>
  );
};

const OnlineAdverts: FC<any> = ({ setSidebar }) => {
  return (
    <div>
      <div className="xl:h-[3rem] flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between xl:pl-8  xl:mx-0 xl:border xl:border-[#00B1B265] xl:bg-[#F4F5F7] xl:rounded-full mb-[0.5rem] xl:mb-[1rem] w-full">
        <div className="flex xl:w-full justify-around xl:justify-start xl:gap-12 border rounded-full py-1 xl:py-0 border-[#00B1B265] xl:border-0">
          <div className="flex xl:mx-8">
            <FilterDropdown filterList={filterList} />
          </div>
          <div className="flex xl:mx-8">
            <DateDropdown />
          </div>
          <div className="flex items-center gap-1 xl:hidden" onClick={() => setSidebar(true)}>
            <div className="w-3.5 h-3.5">
              <SvgFilter />
            </div>
            <p className="text-xs text-[#7E8096]">Filter</p>
          </div>
        </div>
        <div className="lg:flex hidden relative ring-1 rounded-full ring-[#4CBEC565] ">
          <input
            type="search"
            id="search"
            placeholder="Search"
            className="outline-none bg-white placeholder-[#7E8096] xl:placeholder-[#4CBEC5] px-5 text-left text-[#7E8096] xl:text-[#4CBEC5]  placeholder:font-light w-full  xl:px-20 py-2 rounded-full xl:text-center"
          />
          <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-[#4cbec5]">
            <SvgSearch />
          </div>
        </div>
      </div>
      <div className="flex relative ring-1 ring-[#00B1B2] ring-opacity-20 rounded-full w-full ring-offset-0 xl:hidden mb-[0.5rem] xl:mb-0">
        <input
          type="search"
          id="search"
          placeholder="Search"
          className=" outline-0 bg-white  placeholder-[#7E8096] w-full placeholder:text-sm xl:placeholder:text-base placeholder:font-light px-4 xl:px-8 py-2 rounded-full"
          required
        />
        <SvgSearch2 />
      </div>
      <span className="text-xs xl:text-sm text-[#7E8096] font-medium xl:ml-7 mx-4 xl:mx-[72px] xl:my-4">
        30 Listings Displayed
      </span>
      <div className="grid w-full gap-2 mt-[0.5rem] xl:mt-[1rem]">
        <div className="grid w-full gap-4 xl:gap-2">
          {ProductList && ProductList.map((el: any) => <ProductCard content={el} key={el.id} />)}
        </div>
      </div>
    </div>
  );
};

const ProductCard: FC<any> = ({ content }) => {
  return (
    <div className="grid xl:grid-cols-7 gap-2 xl:border border-[#DADADA] bg-white xl:bg-inherit rounded-3xl xl:rounded-[1.5rem] px-6 py-3 w-full xl:pr-6 text-xs xl:text-sm relative xl:w-full xl:h-[10rem] drop-shadow-sm ">
      <div className="relative flex gap-1 xl:static xl:justify-around xl:self-start xl:gap-0 ">
        <div>
          <div className="relative flex w-32 h-16 mt-8 xl:w-20 xl:h-202 xl:mb-4 xl:mr-2">
            <Image className="object-contain" src={content?.image} fill sizes="100vw" alt={content.brand} />
          </div>
          <div className="flex justify-center mt-6 xl:hidden">
            {content.amount == null ? (
              <div className="flex items-center justify-center w-full h-full cursor-pointer ">
                <div className="flex justify-center gap-1 py-2 text-white rounded-full bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] w-32">
                  <SvgBasket2 />

                  <div className="text-sm font-medium whitespace-nowrap">Add to Cart</div>
                </div>
              </div>
            ) : content.amount !== 1 ? (
              <div className="flex items-center justify-center h-full ">
                <div className="border-[#F39200] border rounded-full w-full">
                  <div className="flex items-center justify-around rounded-full border-4 border-[#F4F5F9] w-32">
                    <button type="button" className="border-[#F4F5F9] bg-white h-full ">
                      <SvgButton1 />
                    </button>
                    <div className="text-[#7E8096] font-medium text-sm bg-[#F4F5F7] h-full py-1 px-6">
                      {content.amount}
                    </div>
                    <button type="button">
                      <SvgButton2 />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="border-[#F39200] border rounded-full w-full">
                  <div className="flex items-center justify-around rounded-full border-4 border-[#F4F5F9] w-32">
                    <button type="button" className="border-[#F4F5F9] bg-white h-full ">
                      <SvgButton3 />
                    </button>
                    <div className="text-[#7E8096] font-medium text-sm bg-[#F4F5F7] h-full py-1 px-6">
                      {content.amount}
                    </div>
                    <button type="button">
                      <SvgButton4 />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute flex flex-col py-12 xl:py-8 xl:static left-44 xl:left-40 xl:top-10 xl:items-start xl:col-span-2 xl:mr-7">
        <h3 className="text-[#4CBEC5] font-medium hidden xl:block">Product</h3>
        <div className="text-[#7E8096] font-semibold xl:font-normal py-1.5 ">
          <h4 className="font-semibold xl:font-bold"> {content?.name}</h4> {content?.brand}
        </div>
        <div className="absolute hidden left-[450px] bottom-[25px]  lg:flex">
          <SvgLine />
        </div>
      </div>

      <div className="absolute flex flex-col xl:static left-44 xl:left-40 xl:top-10 top-28 xl:flex-row xl:col-span-4 xl:gap-16 xl:ml-4 xl:mx-2 mb-7">
        <div className="flex items-center xl:flex-col xl:py-8 ">
          <h3 className="text-[#4CBEC5] font-medium">Expiry</h3>
          <p className="text-[#4CBEC5] font-medium block xl:hidden px-1">:</p>
          <p className="text-[#7E8096] font-medium xl:py-1.5 ">{content?.miad}</p>
        </div>
        <div className="flex items-center w-full xl:flex-col xl:w-1/5 xl:py-8">
          <h3 className="text-[#4CBEC5] font-medium">Quantity</h3>
          <p className="text-[#4CBEC5] font-medium block xl:hidden px-1">:</p>
          <div className="flex xl:justify-center">
            <input
              className="text-[#7E8096] outline-none font-medium rounded-full xl:text-center xl:w-2/3 xl:py-1.5 bg-transparent"
              type="number"
              defaultValue={content?.quantity}
            />
          </div>
        </div>
        <div className="flex items-center xl:flex-col xl:w-1/5 xl:py-8">
          <h3 className="text-[#4CBEC5] font-medium ">Price</h3>
          <p className="text-[#4CBEC5] font-medium block xl:hidden px-1">:</p>
          <div className="flex xl:justify-center">
            <input
              className="text-[#7E8096] font-medium rounded-full xl:text-center xl:w-full xl:px-4 bg-transparent "
              type="number"
              defaultValue={content?.price}
            />
          </div>
        </div>
        <div className="self-start hidden xl:flex xl:py-10">
          <BasketConnector item={content} />
        </div>
        {content.red === true && content.green === true && (
          <div className="absolute right-[65%] w-max h-max xl:right-0 xl:left-[30%] xl:top-[2px] bottom-[278%] xl:bottom-0 scale-125">
            <div className="ml-10 xl:ml-9">
              <div className="absolute ">
                <SvgBanner />
              </div>
              <div className="relative flex flex-col top-1 left-3">
                <SvgBannerWrite1 />
              </div>
            </div>
            <div className="absolute top-0">
              <div className="absolute fill-red">
                <SvgBanner1 />
              </div>
              <div className="relative flex flex-col top-1 left-3">
                <SvgBannerWrite />
              </div>
            </div>
          </div>
        )}
        {content.red === false && content.green === true && (
          <div className="absolute right-[94%] w-max h-max xl:right-0 xl:left-[30%] xl:top-[2px] bottom-[278%] xl:bottom-0 scale-125">
            <div className="ml-10 mf:ml-9 ">
              <div className="absolute">
                <SvgBanner />
              </div>
              <div className="relative flex flex-col top-1 left-3">
                <SvgBannerWrite1 />
              </div>
            </div>
          </div>
        )}
        {content.red === true && content.green === false && (
          <div className="absolute right-[94%] w-max h-max xl:right-0 xl:left-[30%] xl:top-[2px] bottom-[278%] xl:bottom-0 scale-125">
            <div className="ml-10 xl:ml-9">
              <div className="absolute ">
                <SvgBanner1 />
              </div>
              <div className="relative flex flex-col top-1 left-3">
                <SvgBannerWrite />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BasketConnector: FC<any> = ({ item }) => {
  const [isBasketActive, setIsBasketActive] = useState<boolean>(false);
  const { addItem, containsItemId, removeItemById } = useBasketContext();

  const itemQuantity = containsItemId(item);

  if (!isBasketActive) {
    return (
      <div className="flex items-center justify-center h-full cursor-pointer xl:w-40">
        <div
          onClick={() => setIsBasketActive(true)}
          className="flex gap-2 px-4 xl:px-6 py-2 text-white rounded-full bg-gradient-to-r  from-[#FFBE00] to-[#FF7B03] items-center justify-center my-auto  xl:w-full  xl:ml-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39.363"
            height="34.815"
            viewBox="0 0 39.363 34.815"
            className="w-4 h-4 mr-1"
          >
            <g transform="translate(-6285.254 -793.329)">
              <path
                d="M6292.58,797.48c1.219-.1,2.4-.2,3.569-.3q4.616-.405,9.231-.815l11.54-1.016c2.01-.176,4.019-.356,6.029-.524a1.542,1.542,0,0,1,1.65,1.891q-.764,6.048-1.507,12.1c-.1.844-.186,1.691-.294,2.534a3.156,3.156,0,0,1-3.008,2.767q-7.137.613-14.273,1.242c-3.187.279-6.381.5-9.557.871-1.49.175-3.855-1.566-4.188-2.981-.236-1.008-.4-2.034-.548-3.06-.51-3.666-1-7.335-1.491-11-.112-.827-.221-1.655-.309-2.485-.028-.261-.125-.347-.384-.342-.725.013-1.451.009-2.176,0a1.516,1.516,0,1,1,.02-3.025c.8,0,1.608,0,2.413,0a3.1,3.1,0,0,1,3.138,2.912C6292.47,796.648,6292.529,797.05,6292.58,797.48Zm.409,3.007c.074.574.14,1.1.211,1.628.436,3.214.867,6.428,1.315,9.64a1.389,1.389,0,0,0,1.616,1.342c1.7-.109,3.392-.266,5.087-.413q5.134-.447,10.264-.9,3.907-.344,7.817-.674c.33-.027.475-.137.519-.505.415-3.487.856-6.971,1.288-10.456.086-.694.162-1.39.248-2.141Z"
                fill="#fff"
              />
              <path
                d="M6294.511,822.844a5.3,5.3,0,1,1,5.3,5.3A5.356,5.356,0,0,1,6294.511,822.844Zm3.027-.009a2.319,2.319,0,0,0,2.249,2.281,2.269,2.269,0,1,0,.023-4.538A2.314,2.314,0,0,0,6297.538,822.835Z"
                fill="#fff"
              />
              <path
                d="M6314.186,817.55a5.3,5.3,0,1,1-5.294,5.3A5.39,5.39,0,0,1,6314.186,817.55Zm-2.266,5.25a2.32,2.32,0,0,0,2.214,2.316,2.269,2.269,0,1,0,.093-4.538A2.316,2.316,0,0,0,6311.92,822.8Z"
                fill="#fff"
              />
            </g>
          </svg>
          <div className="text-sm font-medium">Add to Cart</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full xl:w-40">
      <div className="border-[#F39200] border rounded-full xl:w-full xl:ml-0">
        <div className="flex items-center justify-center gap-2.5 px-3 xl:px-6 rounded-full border-4 border-[#F4F5F9] ">
          {itemQuantity < 1 ? (
            <button type="button"
              className="border-[#F4F5F9] bg-white h-full w-full flex items-center justify-center"
              onClick={() => setIsBasketActive(false)}
            >
              <SvgTrashCan />
            </button>
          ) : (
            <button type="button" className="flex items-center justify-center w-full" onClick={() => removeItemById(item)}>
              <SvgDelete />
            </button>
          )}
          <div className="text-[#7E8096] font-medium text-sm bg-[#F4F5F7] h-full py-1 px-6 w-full">{itemQuantity}</div>
          <button type="button"
            className="flex items-center justify-center w-full"
            onClick={() =>
              addItem({
                id: item.id,
                name: item.name,
                brand: item.brand,
                image: item.image,
                price: item.price,
                shipping: item.shipping,
              })
            }
          >
            <SvgPlus />
          </button>
        </div>
      </div>
    </div>
  );
};
const SvgDelete = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16.212" height="2.852" viewBox="0 0 16.212 2.852" className="w-3 h-3">
    <rect width="16.213" height="2.852" rx="1.288" fill="#f39200" />
  </svg>
);
const SvgPlus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16.212"
    height="16.212"
    viewBox="0 0 16.212 16.212"
    className="w-3 h-3"
  >
    <path
      d="M6477.445,1029.311h-5.393v-5.393a1.286,1.286,0,0,0-1.287-1.287h-.278a1.286,1.286,0,0,0-1.287,1.287v5.393h-5.393a1.287,1.287,0,0,0-1.287,1.287v.277a1.287,1.287,0,0,0,1.287,1.288h5.393v5.393a1.286,1.286,0,0,0,1.287,1.287h.278a1.286,1.286,0,0,0,1.287-1.287v-5.393h5.393a1.287,1.287,0,0,0,1.287-1.288v-.277A1.287,1.287,0,0,0,6477.445,1029.311Z"
      transform="translate(-6462.52 -1022.631)"
      fill="#f39200"
    />
  </svg>
);

export default Seller;
