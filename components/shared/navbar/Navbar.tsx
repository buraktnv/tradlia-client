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

// TODO Tradlia logo is directly inside Link as Image, this should be Link > A > Image.
const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { asPath } = useRouter();
  const condition = !asPath.includes("/profile");
  const router = useRouter();

  useEffect(() => {
    if (condition) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [condition]);

  return (
    <>
      <nav className="flex-col hidden w-full bg-white xl:flex">
        <div className="container py-5 mx-auto">
          <div className="grid grid-cols-6 gap-5">
            <div className="relative flex w-11/12 col-span-1">
              <Link href="/">
                {/* Here an A tag should wrap the Image tag */}
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
                <div
                  className="flex items-center justify-center w-full col-span-3 gap-2 cursor-pointer select-none group"
                  onClick={() => setIsOpen((pre: boolean) => !pre)}
                >
                  <div
                    className={`w-7 h-7 group-hover:text-[#5327A8] text-[#7E8096] transition ease-in-out duration-200 ${
                      isOpen && "text-[#5327A8]"
                    }`}
                  >
                    <SvgCategory isOpen={isOpen} />
                  </div>
                  <h3
                    className={`font-bold text-[#7E8096] text-lg group-hover:text-[#5327A8] transition ease-in-out duration-200 ${
                      isOpen && "text-[#5327A8]"
                    }`}
                  >
                    Categories
                  </h3>
                </div>
              )}
              <div className={`flex items-center w-full ${condition ? "col-span-5" : "col-start-4 col-span-8"}`}>
                <SearchInput />
              </div>
              {condition && (
                <>
                  <Link
                    href="/profile/adverts"
                    className="bg-gradient-to-r from-[#FFBE00] col-span-3 to-[#FF7B03] text-white px-5 h-10 text-sm rounded-full whitespace-nowrap flex items-center justify-center">
                    
                      Add Free Listing
                    
                  </Link>
                  <Link
                    href="/basket/smart"
                    className="flex items-center col-span-3 justify-center gap-2 bg-gradient-to-r h-10 from-[#FF516B] to-[#FF0045] text-sm text-white px-5 py-2 rounded-full whitespace-nowrap">

                    <div className="w-6 h-6">
                      <SvgSmartBasket />
                    </div>Smart Basket
                                        
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-center justify-end w-full col-span-1 gap-4">
              <div className="w-[26px] h-[26px] mt-1 cursor-pointer" onClick={() => router.push("/product")}>
                <NavbarDropboxIcon />
              </div>
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
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 56 56">
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
          fill={`${isOpen ? "#5327A8" : "none"}`}
          stroke={`${isOpen ? "#5327A8" : "currentColor"}`}
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
          fill={`${isOpen ? "#5327A8" : "none"}`}
          stroke={`${isOpen ? "#5327A8" : "currentColor"}`}
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
          fill={`${isOpen ? "#5327A8" : "none"}`}
          stroke={`${isOpen ? "#5327A8" : "currentColor"}`}
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
          fill={`${isOpen ? "#5327A8" : "none"}`}
          stroke={`${isOpen ? "#5327A8" : "currentColor"}`}
          strokeMiterlimit="10"
          strokeWidth="3"
        />
      </g>
    </g>
  </svg>
);

// TODO Turkish character causes build error

export default Navbar;
