import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import * as U from "../../../helpers/urls";
import * as Icon from "../../../helpers/svgs/profileSidebar";
import {
  SvgExit,
  SvgHome2,
  SvgMail,
  SvgPlus,
  SvgPhone,
  SvgWhatsapp,
} from "../../../helpers/svgs/navbarSvg";

const profileMenuList = [
  {
    id: 1,
    url: U.URL_PROFILE_ADVERTS,
    icon: <Icon.SvgAnnounce />,
    text: "My Listings",
    submenu: true,
    subItems: ["Add New", "Bulk Add Listings", "Published", "Unpublished", "Pending Approval"],
  },
  {
    id: 2,
    url: U.URL_PROFILE_ORDERS_BOUGHT,
    icon: <Icon.SvgOrder />,
    text: "My Orders",
    submenu: true,
    subItems: [
      "To Be Shipped",
      "In Transit",
      "Pending Approval",
      "Received",
      "Completed",
      "Cancellations & Returns",
    ],
  },
  {
    id: 3,
    url: U.URL_PROFILE_ORDERS_SOLD,
    icon: <Icon.SvgOrder />,
    text: "My Sales",
    submenu: true,
    subItems: [
      "New Order",
      "To Be Shipped",
      "In Transit",
      "Delivered",
      "Completed",
      "Transferred Payments",
      "Cancellations & Returns",
      "Problematic Orders",
    ],
  },
  { id: 4, url: U.URL_PROFILE_FEEDBACK, icon: <Icon.SvgOk />, text: "Ratings & Reviews", submenu: false, subItems: [] },
  { id: 5, url: U.URL_PROFILE_MESSAGES, icon: <Icon.SvgMessage />, text: "My Messages", submenu: false, subItems: [] },
  {
    id: 6,
    url: U.URL_PROFILE_INTEGRATORS,
    icon: <Icon.SvgEnteg />,
    text: "Integrators",
    submenu: false,
    subItems: [],
  },
  { id: 7, url: U.URL_PROFILE_FAVOURITES, icon: <Icon.SvgLike />, text: "My Favorites", submenu: false, subItems: [] },
  {
    id: 8,
    url: U.URL_PROFILE_RECEIPTS,
    icon: <Icon.SvgPay />,
    text: "Payment & Invoices",
    submenu: true,
    subItems: ["Upcoming Payments", "Completed Payments", "My Invoice List", "Purchase Activity", "Sales Activity"],
  },
  {
    id: 9,
    url: U.URL_PROFILE_WALLET,
    icon: <Icon.SvgWallet />,
    text: "My Wallet",
    submenu: true,
    subItems: ["My Wallet", "Discount Coupons"],
  },
  {
    id: 10,
    url: U.URL_PROFILE_REPORT,
    icon: <Icon.SvgPerf />,
    text: "Performance Report",
    submenu: true,
    subItems: ["Total Sales Amount", "Net Earnings", "Cancellations - Returns", "Approved Sales Amount"],
  },
  {
    id: 11,
    url: U.URL_PROFILE_SETTINGS,
    icon: <Icon.SvgSetting />,
    text: "Settings",
    submenu: true,
    subItems: [
      "My Membership Info",
      "Password Settings",
      "Delivery & Invoice Info",
      "My Sales Info",
      "Shipping Info",
      "Sales Restrictions",
      "Notification Settings",
    ],
  },
  { id: 12, url: U.URL_PROFILE_SUPPORT, icon: <Icon.SvgSupport />, text: "Support", submenu: false, subItems: [] },
];

const ProfileNavigation: FC<any> = ({ setIsProfileDropdownShown }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const router = useRouter();
  return (
    <>
      <div className="fixed z-[999] inset-0 bg-canvas h-screen w-screen">
        <div className="flex flex-col w-full h-full">
          <div className="relative flex flex-col h-32 py-7 w-full bg-ink rounded-b-card p-2 pb-[4.5rem]">
            <div className="flex items-center px-4">
              <span
                className="relative w-8 h-8 mx-3 rounded-full overflow-hidden border border-surface/20"
                aria-hidden="true"
              >
                <Image src={"/images/navbar/iconPersonal.svg"} fill sizes="32px" alt="" />
              </span>
              <span className="text-lg font-display font-semibold text-surface">John Miller</span>
            </div>
            <div className="flex items-center mx-[20%] gap-4 pt-3">
              <div className="flex flex-col items-center justify-center">
                <span className="w-6 h-6 text-brand-300" onClick={() => setIsProfileDropdownShown(true)}>
                  <SvgExit />
                </span>
                <span className="text-surface/70 font-medium text-xs">Phone</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="w-6 h-6 text-brand-300" onClick={() => setIsProfileDropdownShown(true)}>
                  <SvgMail />
                </span>
                <span className="text-surface/70 font-medium text-xs">WhatsApp</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="w-6 h-6 text-brand-300" onClick={() => setIsProfileDropdownShown(true)}>
                  <SvgWhatsapp />
                </span>
                <span className="text-surface/70 font-medium text-xs">Email</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="w-6 h-6 text-brand-300" onClick={() => setIsProfileDropdownShown(true)}>
                  <SvgPhone />
                </span>
                <span className="text-surface/70 font-medium text-xs">Logout</span>
              </div>
            </div>
            <div className="rightSide right-4 top-[50px] absolute flex flex-col h-full items-center justify-center gap-1">
              <button type="button" aria-label="Close menu" onClick={() => setIsProfileDropdownShown(false)} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-full">
                <span className="text-surface">
                  <SvgHome2 />
                </span>
              </button>
              <button type="button"
                aria-label="Close menu"
                className="w-14 h-14 mt-1 relative fill-ink-soft mx-3 bg-surface border border-line rounded-full p-1 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                onClick={() => setIsProfileDropdownShown(false)}
              >
                <span className="absolute w-5 h-5 right-4 top-4">
                  <SvgArrow />
                </span>
              </button>
            </div>
          </div>
          <div className="flex w-full h-full overflow-y-auto">
            {!selectedCategory ? (
              <div className="flex flex-col px-10 py-6 w-full">
                <button type="button" className="flex items-center justify-start invisible w-full py-2" tabIndex={-1} aria-hidden="true">
                  <span className="font-semibold text-brand-600 ml-8 transform rotate-180">
                    <SvgArrow />
                  </span>
                </button>
                {profileMenuList.map((el) => (
                  <SingleLinkItem
                    url={el.url}
                    icon={el.icon}
                    text={el.text}
                    id={el.id}
                    setIsProfileDropdownShown={setIsProfileDropdownShown}
                    key={el.id}
                    submenu={el.submenu}
                    setSelectedCategory={setSelectedCategory}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col px-10 py-6 w-full">
                <button type="button" aria-label="Back to menu" className="flex items-center justify-start w-full py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-card" onClick={() => setSelectedCategory(0)}>
                  <span className="font-semibold text-brand-600 ml-8 transform rotate-180">
                    <SvgArrow />
                  </span>
                </button>

                <button type="button" className="relative flex items-center w-full py-1 mt-2 mb-4 rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1">
                  {profileMenuList
                    .filter((el) => el.id === selectedCategory)
                    .map((el) => (
                      <span className="h-6 w-6 text-brand-600" key={el.id}>
                        {el.icon}
                      </span>
                    ))}

                  <span className="text-left mx-2 font-medium font-display text-ink">
                    {profileMenuList.filter((el) => el.id === selectedCategory)[0]?.text}
                  </span>
                </button>
                {profileMenuList
                  .filter((el) => el.id === selectedCategory)[0]
                  .subItems.map((el) => (
                    <button type="button"
                      className="group flex items-center w-full py-1 rounded-card text-left transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
                      key={el}
                      onClick={() => {
                        setIsProfileDropdownShown(false);
                        router.push(profileMenuList.filter((el) => el.id === selectedCategory)[0]?.url);
                      }}
                    >
                      <span className="mr-2 ml-8 text-left font-base text-ink-soft group-hover:text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">{el}</span>
                    </button>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const SingleLinkItem: FC<any> = ({ id, url, icon, text, setIsProfileDropdownShown, submenu, setSelectedCategory }) => {
  const router = useRouter();
  const activePath = router.asPath;

  const handleClick = () => {
    if (submenu === false) {
      setIsProfileDropdownShown(false);
      router.push(url);
    } else {
      setSelectedCategory(id);
    }
  };
  return (
    <div className="flex flex-col">
      <button type="button" onClick={handleClick}>
        <div
          className={`group flex items-center w-full px-3 py-2 rounded-card transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none ${
            activePath === url ? "bg-brand-100" : "hover:bg-brand-50"
          }`}
        >
          <span className={`h-6 w-6 ${activePath === url ? "text-brand-700" : "text-ink-soft group-hover:text-brand-600"} transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none`}>{icon}</span>
          <h1
            className={`mx-2 text-left font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none ${
              activePath === url ? "text-brand-700" : "text-ink-soft group-hover:text-brand-600"
            }`}
          >
            {text}
          </h1>

          <span className={`ml-auto w-3 h-3 text-2xl font-medium text-ink-muted ${submenu ? " " : "invisible"}`}>
            <SvgPlus />
          </span>
        </div>
      </button>
    </div>
  );
};

const SvgArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 7.884 13.488" aria-hidden="true">
    <g transform="translate(-320.157 -845.824)">
      <path
        id="Path_34"
        data-name="Path 34"
        d="M327.707,853.374l-5.606,5.6a1.138,1.138,0,0,1-1.61,0h0a1.138,1.138,0,0,1,0-1.61l4.8-4.8-4.8-4.8a1.138,1.138,0,0,1,0-1.61h0a1.138,1.138,0,0,1,1.61,0l5.606,5.6A1.139,1.139,0,0,1,327.707,853.374Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default ProfileNavigation;
