import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { SvgBasket, SvgMessages1, SvgOrders1, SvgSmartBasket } from "../../../helpers/svgs/navbarSvg";

const isActiveRoute = (asPath: string, route: string) => asPath.split("?")[0] === route;

const NavbarMobile: FC = () => {
  return (
    <div className="relative">
      <nav aria-label="Mobile primary" className="navbarMobile fixed bottom-0 left-0 right-0 flex h-20 w-full z-50">
        <div className="flex h-full w-full bg-surface/95 backdrop-blur rounded-t-3xl p-2 border-t border-x border-line shadow-pop">
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
                aria-label="Add free listing"
                className="relative flex flex-col items-center justify-center h-full cursor-pointer select-none focus-visible:outline-none group rounded-card focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
              >
                <span className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <span
                    className="flex items-center justify-center w-12 h-12 bg-amber-400 text-ink border-4 border-surface rounded-full text-3xl font-light shadow-pop transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:bg-amber-500 group-focus-visible:bg-amber-500"
                  >
                    +
                  </span>
                </span>
                <div className="w-6 h-6 my-0.5"></div>
                <span className="text-[10px] leading-[10px] font-medium text-ink-soft whitespace-nowrap transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:text-brand-600 group-focus-visible:text-brand-600">
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
      </nav>
    </div>
  );
};

const NavItemOrdersBasket = () => {
  const router = useRouter();
  const route = "/basket";
  return (
    <Link
      href={route}
      aria-label={`My Cart, 3 items`}
      className="flex flex-col items-center justify-center w-full gap-1 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-card"
    >
      <span role="status" className="sr-only">
        Cart, 3 items
      </span>
      <span
        className={`w-11 h-11 relative fill-ink-soft group-hover:fill-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none flex items-center justify-center ${
          isActiveRoute(router.asPath, route) && "fill-brand-600"
        }`}
      >
        <div className="w-6 h-6">
          <SvgBasket />
        </div>
        <span
          className="absolute -right-1.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-bold text-center text-surface bg-danger rounded-pill -top-1"
          aria-hidden="true"
        >
          3
        </span>
      </span>
      <span
        className={`text-[10px] text-ink-soft whitespace-nowrap transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:text-brand-600 ${
          isActiveRoute(router.asPath, route) && "text-brand-600 font-semibold"
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
      className="flex flex-col items-center justify-center w-full gap-1 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-card"
    >

      <span
        className={`w-11 h-11 relative fill-ink-soft group-hover:fill-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none flex items-center justify-center ${
          isActiveRoute(router.asPath, route) && "fill-brand-600"
        }`}
      >
        <div className="w-6 h-6">
          <SvgSmartBasket />
        </div>
      </span>
      <span
        className={`text-[10px] text-ink-soft whitespace-nowrap transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:text-brand-600 ${
          isActiveRoute(router.asPath, route) && "text-brand-600 font-semibold"
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
      className="flex flex-col items-center justify-center w-full gap-1 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-card"
    >

      <span
        className={`w-11 h-11 relative fill-ink-soft group-hover:fill-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none flex items-center justify-center ${
          isActiveRoute(router.asPath, route) && "fill-brand-600"
        }`}
      >
        <div className="w-6 h-6">
          <SvgOrders1 />
        </div>
      </span>
      <span
        className={`text-[10px] text-ink-soft whitespace-nowrap transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:text-brand-600 ${
          isActiveRoute(router.asPath, route) && "text-brand-600 font-semibold"
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
      aria-label="Messages, 3 unread"
      className="flex flex-col items-center justify-center w-full gap-1 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-card"
    >
      <span role="status" className="sr-only">
        Messages, 3 unread
      </span>
      <span
        className={`w-11 h-11 relative fill-ink-soft group-hover:fill-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none flex items-center justify-center ${
          isActiveRoute(router.asPath, route) && "fill-brand-600"
        }`}
      >
        <div className="w-6 h-6">
          <SvgMessages1 />
        </div>
        <span
          className="absolute -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-bold text-center text-surface bg-danger rounded-pill -top-1"
          aria-hidden="true"
        >
          3
        </span>
      </span>
      <span
        className={`text-[10px] text-ink-soft whitespace-nowrap transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:text-brand-600 ${
          isActiveRoute(router.asPath, route) && "text-brand-600 font-semibold"
        }`}
      >
        Messages
      </span>

    </Link>
  );
};

export default NavbarMobile;
