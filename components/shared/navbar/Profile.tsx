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
        svg: <SvgAdverts />,
        name: "My Listings",
        link: "/profile/adverts",
      },
      {
        id: 1,
        svg: <SvgSelledItems />,
        name: "My Sales",
        link: "/profile/orders/sold",
      },
      {
        id: 2,
        svg: <SvgOrders />,
        name: "My Orders",
        link: "/profile/orders/bought",
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
        <button
          type="button"
          aria-label="Account menu"
          className="relative flex w-[28px] h-[28px] items-center justify-center rounded-full cursor-pointer transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
        >
          <Image src={"/images/navbar/iconPersonal.svg"} width={30} height={30} alt="" />
          <span className="pulse-dot absolute bottom-0 right-0 bg-success" aria-hidden="true" />
        </button>
        <div
          className={`relative invisible top-4 opacity-0 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none z-[99]`}
        >
          <div className="absolute w-56 h-8 right-1 -top-4"></div>
          <div className="absolute right-1 -top-3">
            <div className="w-5 h-5">
              <SvgModalPiece />
            </div>
          </div>
          <div className="absolute top-0 right-0 border border-line py-2 px-3 bg-surface z-[51] rounded-card shadow-pop w-56">
            <div className="flex items-center justify-start gap-2 px-4 pt-2 pb-3">
              <div className="w-[24px] h-[24px]">
                <Image src={"/images/navbar/iconPersonal.svg"} width={30} height={30} alt="" />
              </div>
              <p className="font-display font-semibold text-ink">{ProfileData.name}</p>
            </div>
            <div className="flex flex-col w-full">
              <div className="w-full h-[1px] bg-line my-1"></div>

              {ProfileData.profileItems &&
                ProfileData.profileItems.map((el) => <NotificationItem key={el.id} content={el} />)}
            </div>
            <div className="flex justify-center w-full py-1 pt-2 border-t border-line mt-2">
              <Link
                href={"/notifications"}
                className="cursor-pointer select-none block text-sm text-center border border-line rounded-pill text-ink px-2 py-2 w-full font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-danger hover:text-danger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
              >
                Secure Logout
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
      <div className="flex items-center gap-3 px-3 py-2 rounded-card cursor-pointer transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-canvas group/item">
        <div className="w-6 h-6 text-ink-soft group-hover/item:text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
          {content.svg}
        </div>
        <Link
          href={content.link}
          className="text-ink-soft text-sm leading-snug transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 cursor-pointer select-none"
        >
          {content.name}
        </Link>
      </div>
    </div>
  );
};

export default Profile;
