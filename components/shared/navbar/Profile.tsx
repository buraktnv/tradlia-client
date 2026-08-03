import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import {
  SvgAccountMovement,
  SvgAdverts,
  SvgDiscountCoupons,
  SvgFeedBack,
  SvgModalPiece,
  SvgOrders,
  SvgSelledItems,
  SvgSettings,
} from "../../../helpers/svgs/navbarSvg";

const Profile: FC<any> = () => {
  const ProfileData = {
    name: "John Miller",
    profileItems: [
      {
        id: 0,
        svg: <SvgSelledItems />,
        name: "My Sales",
        link: "/profile/orders/sold",
      },
      {
        id: 1,
        svg: <SvgOrders />,
        name: "My Orders",
        link: "/profile/orders/bought",
      },
      {
        id: 2,
        svg: <SvgAdverts />,
        name: "My Listings",
        link: "/profile/adverts",
      },
      {
        id: 3,
        svg: <SvgFeedBack />,
        name: "Ratings & Reviews",
        link: "/profile/feedback",
      },
      {
        id: 4,
        svg: <SvgAccountMovement />,
        name: "Account Activity",
        link: "/profile/receipts",
      },
      {
        id: 5,
        svg: <SvgDiscountCoupons />,
        name: "Discount Coupons",
        link: "/profile/wallet",
      },
      {
        id: 6,
        svg: <SvgSettings />,
        name: "Settings",
        link: "/profile/settings",
      },
    ],
  };
  return (
    <div className="group">
      <div className="relative">
        <div className="w-[28px] h-[28px] relative cursor-pointer">
          <Image src={"/images/navbar/iconPersonal.svg"} width={30} height={30} alt="personal" />
        </div>
        <div
          className={`relative invisible top-4  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:visible z-[99]`}
        >
          <div className="absolute w-56 h-8 right-1 -top-4"></div>
          <div className="absolute right-1 -top-3">
            <div className="w-5 h-5">
              <SvgModalPiece />
            </div>
          </div>
          <div className="absolute top-0 right-0 border border-[#00b2b27e] py-2 px-3 bg-white z-[51] rounded-l-xl rounded-b-2xl w-56">
            <div className="flex items-center justify-start gap-2 px-4 pt-2 pb-3">
              <div className="w-[24px] h-[24px]">
                <Image src={"/images/navbar/iconPersonal.svg"} width={30} height={30} alt="personal" />
              </div>
              <p className="font-medium text-[#4CBEC5]">{ProfileData.name}</p>
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full h-[1px] bg-[#4cbfc5c2] my-1"></div>

              {ProfileData.profileItems &&
                ProfileData.profileItems.map((el) => <NotificationItem key={el.id} content={el} />)}
            </div>
            <div className="flex justify-center w-full py-1">
              <Link href={"/notifications"}>
                <button type="button" className="cursor-pointer select-none text-sm bg-gradient-to-r to-[#009F9A] from-[#66BEBC] rounded-full text-white px-2 py-2 w-full font-bold">
                  Secure Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationItem: FC<any> = ({ content }) => {
  return (
    <div>
      <div className="flex items-center gap-3 px-4 py-3 cursor-pointer">
        <div className="w-6 h-6">{content.svg}</div>
        <Link
          href={content.link}
          className="text-[#7E8096] text-sm leading-snug hover:text-[#4CBEC5] cursor-pointer select-none">
          {content.name}
        </Link>
      </div>
    </div>
  );
};

export default Profile;
