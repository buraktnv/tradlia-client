import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IBasketProduct, useBasketContext } from "../../../helpers/contexts/BasketContext";
import { SvgModalPiece } from "../../../helpers/svgs/navbarSvg";
import styles from "./BasketDropdown.module.scss";

const BasketDropdown: FC = () => {
  const { basket, basketTotal } = useBasketContext();

  return (
    <span className={styles.DropdownMenu}>
      <div className="dropdown group dropdown-hover">
        <label tabIndex={0} className="relative flex items-center p-1 mx-1 rounded-full cursor-pointer">
          <Image src={"/images/navbar/iconCart.svg"} width={26} height={26} alt="cart" />
          <div className="absolute right-0 px-1 text-xs -bottom-1 text-white bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] rounded-full">
            {basket.length}
          </div>
        </label>
        <div
          tabIndex={0}
          className="z-[99] dropdown-content relative flex flex-col p-4 top-12 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white text-white border border-[#66bebc] shadow rounded-l-xl rounded-br-xl w-max"
        >
          <div className="absolute w-56 h-8 right-1 -top-4"></div>
          <div className="absolute right-1 -top-3">
            <div className="w-4 h-4">
              <SvgModalPiece />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image src={"/images/navbar/iconCart.svg"} width={26} height={26} alt="cart" />
            <span className="text-base text-[#66bebc] mx-1 font-medium">My Cart</span>
          </div>
          <div className="list">
            {basket.length > 0 ? (
              basket.map((el) => <ItemsList key={el.id} content={el} />)
            ) : (
              <div className="text-sm font-medium text-center text-gray-500">Your cart is currently empty</div>
            )}
          </div>
          <span className="h-[1px] w-full my-2 bg-[#66bebc] opacity-50" />
          <div className="flex flex-col items-center justify-center">
            <span className="flex gap-1 mx-1 text-base font-medium text-[#E8336E]">
              Total : <p className="font-bold"> {basketTotal.prices} $</p>
            </span>
            <Link
              href="/basket"
              className="cursor-pointer select-none drop-shadow-md text-sm text-center bg-gradient-to-r to-[#FF7B03] from-[#FFBE00] w-full rounded-full text-white px-4 mt-3 py-2 font-bold">
              
                Go to Cart
              
            </Link>
          </div>
        </div>
      </div>
    </span>
  );
};

const ItemsList: FC<{ content: IBasketProduct }> = ({ content }) => {
  const { removeItem } = useBasketContext();

  const handleRemove = () => {
    removeItem(content);
  };
  return (
    <div className="flex flex-col w-full">
      <span className="h-[1px] w-full my-2 bg-[#66bebc] opacity-50" />
      <div className="flex w-full gap-3 p-2">
        <div className="px-4 py-3">
          <Image className="object-contain" src={content.image} width={80} height={60} alt="cart" />
        </div>
        <div className="flex flex-col flex-1 ml-4">
          <div className="flex flex-col flex-1">
            <p className="text-sm font-bold text-[#7E8096]">{content.name}</p>
            <p className="text-sm text-[#7E8096]">{content.brand}</p>
          </div>
          <span className="font-bold text-[#7E8096]">{String(content.price)} $</span>
        </div>
        <div className="flex items-start">
          <span className="h-5 w-5 stroke-[#66bebc] cursor-pointer hover:stroke-[#009f9a]" onClick={handleRemove}>
            <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" fill="#66bebc" viewBox="0 0 458.5 458.5">
              <path d="M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421     c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508     c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z      M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501     c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778     c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657     c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z" />
              <path d="M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705     C214.249,385.607,220.965,392.323,229.249,392.323z" />
              <path d="M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705     C291.671,385.607,298.387,392.323,306.671,392.323z" />
              <path d="M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705     C136.828,385.607,143.544,392.323,151.828,392.323z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BasketDropdown;
