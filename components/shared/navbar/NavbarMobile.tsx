import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { SvgBasket, SvgMessages1, SvgOrders1, SvgSmartBasket } from "../../../helpers/svgs/navbarSvg";

const isActiveRoute = (asPath: string, route: string) => asPath.split("?")[0] === route;

const NavbarMobile: FC = () => {
  return (
    <div className="relative">
      <div className="navbarMobile fixed bottom-0 left-0 right-0 flex h-20 w-full z-50 drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
        <div className="flex h-full w-full bg-white rounded-t-[25px] p-2 border border-[#4CBEC5]/50">
          <div className="grid w-full grid-cols-11 gap-2">
            <div className="flex flex-col items-center justify-center col-span-2 p-1">
              <NavItemMessages />
            </div>
            <div className="flex flex-col items-center justify-center col-span-2 p-1">
              <NavItemOrdersBought />
            </div>
            <div className="col-span-3 p-1">
              <Link
                href="/profile/adverts"
                className="relative flex flex-col items-center justify-center h-full cursor-pointer select-none">

                <span className="absolute border border-[#4CBEC5] rounded-full borderWrapper -top-8">
                  <button type="button" className="border-4 bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] text-white rounded-full text-3xl px-3.5 py-1 whitespace-nowrap drop-shadow-md">
                    +
                  </button>
                </span>
                <div className="w-6 h-6 my-0.5"></div>
                <span className="text-[11px] leading-[8px] font-medium text-[#FF7B03] whitespace-nowrap">
                  Add Free Listing
                </span>

              </Link>
            </div>
            <div className="flex flex-col items-center justify-center col-span-2 p-1">
              <NavItemOrdersSmartBasket />
            </div>
            <div className="flex flex-col items-center justify-center col-span-2 p-1">
              <NavItemOrdersBasket />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItemOrdersBasket = () => {
  const router = useRouter();
  const route = "/basket";
  return (
    <Link
      href={route}
      className="flex flex-col items-center justify-center w-full gap-1 cursor-pointer select-none group">

      <span
        className={`w-11 h-11 relative fill-gray-600 group-hover:fill-[#4CBEC5] flex items-center justify-center ${
          isActiveRoute(router.asPath, route) && "fill-[#4CBEC5]"
        }`}
      >
        <div className="w-6 h-6">
          <SvgBasket />
        </div>
        <div className="absolute -right-2 w-[22px] h-[22px] flex items-center justify-center text-xs text-center text-white bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] rounded-full -top-2">
          3
        </div>
      </span>
      <span
        className={`text-[10px] text-gray-600 whitespace-nowrap group-hover:text-[#4CBEC5] ${
          isActiveRoute(router.asPath, route) && "text-[#4CBEC5]"
        }`}
      >
        My Cart
      </span>

    </Link>
  );
};

const NavItemOrdersSmartBasket = () => {
  const router = useRouter();
  const route = "/basket/smart";
  return (
    <Link
      href={route}
      className="flex flex-col items-center justify-center w-full gap-1 cursor-pointer select-none group">

      <span
        className={`w-11 h-11 relative fill-gray-600 group-hover:fill-[#4CBEC5] flex items-center justify-center ${
          isActiveRoute(router.asPath, route) && "fill-[#4CBEC5]"
        }`}
      >
        <div className="w-6 h-6">
          <SvgSmartBasket />
        </div>
      </span>
      <span
        className={`text-[10px] text-gray-600 whitespace-nowrap group-hover:text-[#4CBEC5] ${
          isActiveRoute(router.asPath, route) && "text-[#4CBEC5]"
        }`}
      >
        Smart Basket
      </span>

    </Link>
  );
};

const NavItemOrdersBought = () => {
  const router = useRouter();
  const route = "/profile/orders/bought";
  return (
    <Link
      href={route}
      className="flex flex-col items-center justify-center w-full gap-1 cursor-pointer select-none group">

      <span
        className={`w-11 h-11 relative fill-gray-600 group-hover:fill-[#4CBEC5] flex items-center justify-center ${
          isActiveRoute(router.asPath, route) && "fill-[#4CBEC5]"
        }`}
      >
        <div className="w-6 h-6">
          <SvgOrders1 />
        </div>
      </span>
      <span
        className={`text-[10px] text-gray-600 whitespace-nowrap group-hover:text-[#4CBEC5] ${
          isActiveRoute(router.asPath, route) && "text-[#4CBEC5]"
        }`}
      >
        My Orders
      </span>

    </Link>
  );
};

const NavItemMessages = () => {
  const router = useRouter();
  const route = "/profile/messages";
  return (
    <Link
      href={route}
      className="flex flex-col items-center justify-center w-full gap-1 cursor-pointer select-none group">

      <span
        className={`w-11 h-11 relative fill-gray-600 group-hover:fill-[#4CBEC5] flex items-center justify-center ${
          isActiveRoute(router.asPath, route) && "fill-[#4CBEC5]"
        }`}
      >
        <div className="w-6 h-6">
          <SvgMessages1 />
        </div>
        <div className="absolute -right-2 w-[22px] h-[22px] flex items-center justify-center text-xs text-center text-white bg-gradient-to-r from-[#66C1BF] to-[#00A29D] rounded-full -top-2">
          3
        </div>
      </span>
      <span
        className={`text-[10px] text-gray-600 whitespace-nowrap group-hover:text-[#4CBEC5] ${
          isActiveRoute(router.asPath, route) && "text-[#4CBEC5]"
        }`}
      >
        Messages
      </span>

    </Link>
  );
};

export default NavbarMobile;
