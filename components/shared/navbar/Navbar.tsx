import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BasketDropdown from "./BasketDropdown";
import Messages from "./Messages";
import Notification from "./Notification";
import SearchInput from "./SearchInput";
import Profile from "./Profile";
import { NavbarDropboxIcon, SvgSmartBasket } from "../../../helpers/svgs/navbarSvg";
import { useRouter } from "next/router";
import TopCategories from "../../home/TopCategories";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const condition = !router.asPath.includes("/profile");

  useEffect(() => {
    if (condition) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [condition]);

  return (
    <>
      <nav className="hidden flex-col w-full bg-surface border-b border-line xl:flex">
        <div className="container py-4 mx-auto">
          <div className="grid grid-cols-6 gap-5 items-center">
            <div className="relative flex w-11/12 col-span-1">
              <Link
                href="/"
                aria-label="Tradlia home"
                className="relative block h-10 w-32 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
              >
                <Image
                  src={"/images/navbar/tradlia.svg"}
                  className="left-0 object-contain cursor-pointer"
                  fill sizes="100vw"
                  loading="eager"
                  alt="tradlia"
                />
              </Link>
            </div>
            <div className="grid items-center grid-cols-12 col-span-4 gap-12 pl-5">
              {!condition && (
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen((pre: boolean) => !pre)}
                  className={`flex items-center justify-center w-full col-span-3 gap-2 cursor-pointer select-none rounded-card px-2 py-1.5 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
                    isOpen ? "text-brand-600" : "text-ink-soft"
                  }`}
                >
                  <div className="w-7 h-7 shrink-0">
                    <SvgCategory isOpen={isOpen} />
                  </div>
                  <h3 className="font-semibold text-base">Categories</h3>
                </button>
              )}
              <div className={`flex items-center w-full ${condition ? "col-span-5" : "col-start-4 col-span-8"}`}>
                <SearchInput />
              </div>
              {condition && (
                <>
                  <Link
                    href="/profile/adverts"
                    className="col-span-3 inline-flex items-center justify-center h-10 px-5 text-sm font-semibold whitespace-nowrap rounded-pill bg-amber-400 text-ink transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
                  >
                    Add Free Listing
                  </Link>
                  <Link
                    href="/basket/smart"
                    className="col-span-3 inline-flex items-center justify-center gap-2 h-10 px-5 py-2 text-sm font-medium whitespace-nowrap rounded-pill border border-line text-ink transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-400 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
                  >
                    <div className="w-6 h-6">
                      <SvgSmartBasket />
                    </div>
                    Smart Basket
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-center justify-end w-full col-span-1 gap-4">
              <Link
                href="/product"
                aria-label="Browse all products"
                className="flex items-center justify-center w-[26px] h-[26px] mt-1 cursor-pointer text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-full"
              >
                <NavbarDropboxIcon />
              </Link>
              <Notification />
              <Messages />
              <BasketDropdown />
              <Profile />
            </div>
          </div>
        </div>
      </nav>

      <TopCategories isOpen={isOpen} />
    </>
  );
};

const SvgCategory: FC<any> = ({ isOpen }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 56 56" aria-hidden="true">
    <g id="Group_895" data-name="Group 895" transform="translate(-4285.842 -86.318)">
      <g id="Group_894" data-name="Group 894">
        <ellipse
          id="Ellipse_49"
          data-name="Ellipse 49"
          cx="10.888"
          cy="10.743"
          rx="10.888"
          ry="10.743"
          transform="translate(4287.342 87.818)"
          fill={`${isOpen ? "currentColor" : "none"}`}
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <ellipse
          id="Ellipse_50"
          data-name="Ellipse 50"
          cx="10.888"
          cy="10.743"
          rx="10.888"
          ry="10.743"
          transform="translate(4318.565 87.818)"
          fill={`${isOpen ? "currentColor" : "none"}`}
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <ellipse
          id="Ellipse_51"
          data-name="Ellipse 51"
          cx="10.888"
          cy="10.743"
          rx="10.888"
          ry="10.743"
          transform="translate(4287.342 119.332)"
          fill={`${isOpen ? "currentColor" : "none"}`}
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
        <ellipse
          id="Ellipse_52"
          data-name="Ellipse 52"
          cx="10.888"
          cy="10.743"
          rx="10.888"
          ry="10.743"
          transform="translate(4318.565 119.332)"
          fill={`${isOpen ? "currentColor" : "none"}`}
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="3"
        />
      </g>
    </g>
  </svg>
);

export default Navbar;
