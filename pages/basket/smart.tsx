import { NextPage } from "next";
import Image from "next/image";
import { FC, useState } from "react";
import {
  SvgCheckMark,
  SvgClose,
  SvgPlus,
  SvgSearch,
  SvgShopCar,
  SvgSmartBasket,
  SvgDomesticCargo,
} from "../../helpers/svgs/basketSvg";

const Shippingfirm: FC<any> = () => <SvgDomesticCargo />;

const confirmBasket: any = {
  total: "3290,40",
  baskets: [
    {
      products: "2500,50",
      shipment: "35,00",
      total: "2535,50",
      productsList: [
        {
          id: 1,
          image: "/images/photos/StrepNaz Herbal.svg",
          name: "StrepNaz Orange &",
          brand: "Echinacea 24 Lozenges",
          miad: "March 2023",
          quantity: "15",
          price: "47.98",
          total: "719.90 $",
        },
        {
          id: 2,
          image: "/images/photos/Oxygenated Water.svg",
          name: "Oxygenated Water",
          brand: "100 ml",
          miad: "March 2024",
          quantity: "25",
          price: "53.98",
          total: "1325.00 $",
        },
      ],
    },
    {
      products: "719,90",
      shipment: "35,00",
      total: "754,90",
      productsList: [
        {
          id: 3,
          image: "/images/photos/StrepNaz Herbal.svg",
          name: "StrepNaz Orange &",
          brand: "Echinacea 24 Lozenges",
          miad: "March 2023",
          quantity: "15",
          price: "47.98",
          total: "719.90 $",
        },
      ],
    },
  ],
};
const SmartBasket: NextPage = () => {
  const [basketItemList, setBasketItemList] = useState<any>([
    { id: 0, show: true },
    { id: 1, show: true },
    { id: 2, show: true },
    { id: 3, show: true },
    { id: 4, show: true },
  ]);

  const [activePage, setActivePage] = useState<any>("create");

  const handleBasketItem = (index: any) => {
    setBasketItemList((pre: any) => {
      pre.splice(index, 1);
      return pre;
    });
  };

  const AddNewBasketItem = () => {
    if (basketItemList.length < 10) {
      setBasketItemList((pre: any) => {
        return [
          ...pre,
          {
            id: Math.random(),
            show: true,
          },
        ];
      });
    }
  };

  return (
    <div className="container xl:bg-[#F4F5F7] mx-auto rounded-3xl px-5 pt-2 xl:px-24 xl:py-16 flex flex-col gap-3 xl:w-3/5 mt-[2rem] mb-[3rem] xl:mb-0">
      <div className="flex items-center gap-4 px-1 xl:px-0">
        <div className="w-12 h-12 xl:w-16 xl:h-16 text-[#FB295A]">
          <SvgSmartBasket />
        </div>

        <div>
          <h3 className="font-bold text-[#FB295A] text-[13px] xl:text-base">Tradlia Smart Basket</h3>
          <p className="text-[#7E8096] text-[11px] xl:text-[0.85rem] xl:leading-4 leading-3">
            Create your shopping list with up to 10 products.
            <br /> Generate the most profitable basket with a single click.
          </p>
        </div>
      </div>
      {activePage === "create" ? (
        <>
          <div className="text-[#FB295A] font-medium grid grid-cols-4 xl:grid-cols-5 py-1 pt-3 xl:pt-8">
            <div className="xl:px-3 text-[13px] leading-[8px] px-3 col-span-3 xl:col-span-4 xl:text-base">
              Product List
            </div>
            <div className="w-full xl:col-start-5 text-[13px] leading-[8px] xl:text-base text-left xl:pr-14 xl:text-center">
              Qty
            </div>
          </div>
          <div className="grid gap-[1.5rem]">
            {basketItemList.map((el: any, index: number) => (
              <BasketItem key={el.id} index={index} show={el.show} setShow={handleBasketItem} />
            ))}
          </div>
          <div
            className="flex items-center gap-3 px-3 my-2 cursor-pointer select-none xl:px-4 xl:py-4"
            onClick={() => AddNewBasketItem()}
          >
            <div className="w-4 xl:w-5 h-5 text-[#FB295A]">
              <SvgPlus />
            </div>
            <p className="font-bold text-[13px] xl:text-base leading-[10px] xl:leading-normal text-[#FB295A]">
              Add Another Product
            </p>
          </div>
          <div className="flex items-center justify-start px-4">
            <label htmlFor="1" className="flex items-center justify-center gap-3 cursor-pointer select-none">
              <input type="checkbox" className="hidden peer" id="1" />
              <div className="flex justify-center  items-center w-[23px] h-[23px] rounded-md peer-checked:bg-[#FB295A] text-transparent peer-checked:text-white border-2 border-[#FB295A]">
                <div className="w-3 h-3">
                  <SvgCheckMark />
                </div>
              </div>
              <p className="font-bold text-[#A0A2AF] text-[13px] leading-[10px] xl:text-base">
                Only Shelf Life Over 12 Months
              </p>
            </label>
          </div>
          <div className="py-4">
            <button type="button"
              className="bg-gradient-to-r from-[#FF516B] to-[#FF0045] text-white px-4 py-3.5 drop-shadow-md xl:py-2 rounded-full w-full xl:w-max text-[13px] leading-3 xl:text-base font-bold"
              onClick={() => setActivePage("basket")}
            >
              Create Smart Basket
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            {confirmBasket.baskets.map((content: any) => (
              <ConfirmBasket key={content.id} content={content} />
            ))}
          </div>
          <div className="grid grid-cols-6 gap-3 px-3 text-sm xl:py-3 xl:px-9">
            <div className="grid xl:col-start-5 xl:h-10 xl:col-span-3 col-span-7 items-center xl:items-center grid-cols-2 gap-2 py-2 border rounded-full text-white bg-gradient-to-r from-[#FF516B] to-[#FF0045] ">
              <div className="font-medium text-right text-[12px] leading-3 xl:text-sm">Total:</div>
              <div className="text-base font-bold leading-4">{confirmBasket.total} $</div>
            </div>
            <div className="xl:col-start-5 col-span-7 xl:h-10 xl:col-span-3 gap-2 font-medium bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] rounded-full flex justify-center items-center text-white py-2">
              <div>Add All to Cart</div>
              <div className="w-5 h-5">
                <SvgShopCar />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const ConfirmBasket: FC<any> = ({ content }) => {
  return (
    <div className="border rounded-3xl border-[#00b2b280] xl:p-6 bg-white mt-6 text-sm shadow-md">
      <div className="w-full xl:border-b xl:pb-[1rem] border-[#00B1B2] p-3 flex flex-col gap-6 xl:gap-0 xl:p-0">
        {content.productsList &&
          content.productsList.map((content: any) => <ProductCard content={content} key={content.id} />)}
      </div>
      <div className="grid items-center grid-cols-3 px-3 xl:py-6 xl:grid-cols-6">
        <div className="w-full h-6 xl:col-start-4">
          <Shippingfirm />
        </div>
        <div className="flex flex-col col-span-2 gap-2 text-xs leading-3 xl:col-span-2 xl:col-start-5 xl:text-sm">
          <div className="grid grid-cols-2 gap-1 xl:gap-2">
            <div className="text-right text-[#7E8096]">Products:</div>
            <div className="font-bold text-[#7E8096] whitespace-nowrap">{content.products} $</div>
          </div>
          <div className="grid grid-cols-2 gap-1 xl:gap-2">
            <div className="text-right text-[#7E8096]">Domestic Shipping:</div>
            <div className="font-bold text-[#7E8096] whitespace-nowrap">{content.shipment} $</div>
          </div>
        </div>
        <div className="grid xl:flex xl:col-start-5 xl:col-span-2 xl:h-10 items-center col-span-5 xl:w-full justify-center grid-cols-2 my-3 xl:px-2 gap-2 py-2 border border-[#00b2b266] rounded-full text-[#4CBEC5]">
          <div className="text-xs font-medium text-right xl:text-sm"> Order Total:</div>
          <div className="text-[18px] leading-[15px] xl:text-base font-bold">{content.total} $</div>
        </div>
      </div>
    </div>
  );
};

const BasketItem: FC<any> = ({ show, setShow, index }) => {
  const dropdownList = [
    {
      id: 1,
      name: "PureSafe 3-Ply Black",
      brand: "Surgical Mask with Wire 50-pack",
      image: "/images/photos/product-2.svg",
    },
    {
      id: 2,
      name: "PureSafe 3-Ply Black",
      brand: "Surgical Mask with Wire 50-pack",
      image: "/images/photos/product-2.svg",
    },
    {
      id: 3,
      name: "PureSafe 3-Ply Black",
      brand: "Surgical Mask with Wire 50-pack",
      image: "/images/photos/product-2.svg",
    },
    {
      id: 4,
      name: "PureSafe 3-Ply Black",
      brand: "Surgical Mask with Wire 50-pack",
      image: "/images/photos/product-2.svg",
    },
    {
      id: 5,
      name: "PureSafe 3-Ply Black",
      brand: "Surgical Mask with Wire 50-pack",
      image: "/images/photos/product-2.svg",
    },
  ];

  const [productName, setProductName] = useState<any>("");
  const [open, setOpen] = useState<boolean>(show);

  const [dropdown, setDropdown] = useState<boolean>(false);

  return (
    <div className={`${open ? "flex" : "hidden"}`}>
      {dropdown && <div className="fixed top-0 bottom-0 left-0 right-0" onClick={() => setDropdown(false)}></div>}
      <div className="grid grid-cols-4 gap-2 xl:grid-cols-5 xl:gap-3">
        <div className="relative col-span-3 xl:col-span-4">
          <input
            type="text"
            name=""
            id=""
            className="w-full xl:px-12 px-9 py-2.5 text-[11px] leading-[8px] xl:text-sm drop-shadow-lg rounded-full shadow-sm outline-none focus:ring-1 ring-[#fb295a8c] text-[#A0A2AF] peer z-10"
            placeholder="Enter Product Name or Barcode"
            value={productName}
            onChange={(e) => {
              setProductName(() => e.target.value);
              setDropdown(true);
            }}
          />
          <div className="absolute w-[14px] h-[14px] xl:w-4 xl:h-4 left-3 top-[12px]">
            <SvgSearch />
          </div>

          <div
            className={`absolute gap-3 w-max xl:w-full bg-white rounded-[2rem] top-8 xl:top-10 border border-[#fb295a8c] z-10 p-4 h-80 overflow-x-scroll ${
              dropdown ? "grid" : "hidden"
            }`}
          >
            {dropdownList &&
              dropdownList.map((el: any) => (
                <DropDownItem key={el.id} content={el} setProductName={setProductName} setDropdown={setDropdown} />
              ))}
          </div>
        </div>
        <div className="col-span-1">
          <input
            type="number"
            name=""
            id=""
            className="w-full xl:leading-[1.5rem] px-3 xl:px-12 py-2.5 text-[11px] leading-[8px] xl:text-sm drop-shadow-md rounded-full shadow-sm outline-none focus:ring-1 text-center text-[#A0A2AF] ring-[#fb295a8c] z-10"
            placeholder="e.g. 2"
          />
        </div>
      </div>
      <div
        className="flex items-center px-3"
        onClick={() => {
          setShow(index);
          setOpen((pre) => !pre);
        }}
      >
        <div className="w-[14px] h-[14px] cursor-pointer">
          <SvgClose />
        </div>
      </div>
    </div>
  );
};

const DropDownItem: FC<any> = ({ content, setProductName, setDropdown }) => {
  return (
    <div
      className="grid h-16 grid-cols-5 gap-3 rounded-xl mx-1 xl:gap-0 py-1.5 hover:bg-[#F4F5F9] transition-all ease-in-out duration-300 cursor-pointer select-none"
      onClick={() => {
        setProductName(content.name + content.brand);
        setDropdown(false);
      }}
    >
      <div className="flex items-center w-full h-full">
        <div className="relative w-[50px] h-[32px] xl:w-full xl:h-full">
          <Image src={content.image} alt="" fill sizes="100vw" className="object-contain" />
        </div>
      </div>
      <div className="col-span-4 flex text-[#7E8096] text-[11px] leading-3 items-center">
        <div className="font-bold">{content.name}</div>
        <div>{content.brand}</div>
      </div>
    </div>
  );
};

const ProductCard: FC<any> = ({ content }) => {
  return (
    <div className="grid grid-cols-12 gap-3 px-4 py-4 xl:py-2 text-sm border border-[#DADADA80] xl:border-none xl:grid-cols-7 xl:px-6 rounded-[1.5rem]">
      <div className="flex col-span-4 xl:col-span-1 justify-items-start">
        <div className="relative w-full h-full">
          <Image className="object-contain" src={content?.image} fill sizes="100vw" alt={content.brand} />
        </div>
      </div>
      <div className="grid grid-cols-1 col-span-8 gap-1 xl:grid-cols-6 xl:col-span-6">
        <div className="grid justify-start grid-cols-5 gap-2 xl:py-2 xl:flex xl:flex-col xl:col-span-2">
          <h3 className="text-[#4CBEC5] font-medium  xl:text-left text-[12px] leading-5 xl:text-sm">Product</h3>
          <div className="text-[#7E8096] xl:py-1.5 text-[12px] leading-[18px] xl:text-sm col-span-4">
            <h4 className="font-bold"> {content?.name}</h4> {content?.brand}
          </div>
        </div>
        <div className="grid justify-start grid-cols-5 gap-2 xl:py-2 xl:flex xl:flex-col">
          <h3 className="text-[#4CBEC5] font-medium  xl:text-left text-[12px] leading-5 xl:text-sm">Expiry</h3>
          <p className="text-[#7E8096] font-medium xl:py-1.5 text-[12px] leading-[18px] xl:text-sm col-span-4">
            {content?.miad}
          </p>
        </div>
        <div className="grid items-center justify-start grid-cols-5 gap-2 xl:py-2 xl:px-4 xl:flex xl:flex-col">
          <h3 className="text-[#4CBEC5] font-medium text-left xl:px-2 text-[12px] leading-5 xl:text-sm">Qty</h3>
          <div className="flex col-span-2 xl:justify-center">
            <input
              className="text-[#7E8096] outline-none text-[12px] leading-[18px] xl:text-sm font-medium border rounded-full text-center w-3/4 xl:w-2/3 px-1 xl:px-2 py-0.5 xl:py-1.5 inline-block border-[#00B1B2] bg-[#F4F5F7]"
              type="number"
              defaultValue={content?.quantity}
              placeholder="0"
            />
          </div>
        </div>
        <div className="grid justify-start grid-cols-5 gap-2 xl:px-2 xl:py-2 xl:flex xl:flex-col">
          <h3 className="text-[#4CBEC5] font-medium  xl:text-left text-[12px] leading-5 xl:text-sm">Price</h3>
          <div className="flex w-full col-span-4">
            <input
              className="text-[#7E8096] font-medium xl:py-1.5 w-2/3 outline-none text-[12px] leading-[18px] xl:text-sm"
              defaultValue={content?.price}
              placeholder="0"
              type="number"
            />
          </div>
        </div>
        <div className="grid justify-start grid-cols-5 gap-2 xl:py-2 xl:flex xl:flex-col">
          <h3 className="text-[#4CBEC5] font-medium  xl:text-left text-[12px] leading-5 xl:text-sm">Amount</h3>
          <p className="text-[#7E8096] font-medium xl:py-1.5 text-[12px] leading-[18px] xl:text-sm col-span-4">
            {content?.total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartBasket;
