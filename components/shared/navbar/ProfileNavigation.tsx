import { FC, useState } from "react";
import { useRouter } from "next/router";
import * as U from "../../../helpers/urls";
import * as Icon from "../../../helpers/svgs/profileSidebar";
import {
  SvgExit,
  SvgHome2,
  SvgMail,
  SvgPlus,
  SvgProfile,
  SvgPhone,
  SvgWhatsapp,
} from "../../../helpers/svgs/navbarSvg";

const profileMenuList = [
  {
    id: 1,
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
    id: 2,
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
  {
    id: 3,
    url: U.URL_PROFILE_ADVERTS,
    icon: <Icon.SvgAnnounce />,
    text: "My Listings",
    submenu: true,
    subItems: ["Add New", "Bulk Add Listings", "Published", "Unpublished", "Pending Approval"],
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
      <div className="fixed z-[999] inset-0 bg-gray-200 h-screen w-screen">
        <div className="flex flex-col w-full h-full">
          <div className="relative flex flex-col h-32 py-7 w-full bg-[#5327A8] rounded-b-[2rem] p-2 pb-[4.5rem]">
            <div className="flex items-center px-4">
              <span
                className="relative w-8 h-8 p-1 mx-3 rounded-full fill-gray-600 bg-gray-50 "
                onClick={() => setIsProfileDropdownShown(true)}
              >
                <SvgProfile />
              </span>
              <span className="text-lg font-medium text-white ">John Miller</span>
            </div>
            <div className="flex items-center mx-[20%] gap-4 pt-3">
              <div className="flex flex-col items-center justify-center">
                <span className="w-6 h-6" onClick={() => setIsProfileDropdownShown(true)}>
                  <SvgExit />
                </span>
                <span className="text-[#F2F2F2] font-medium text-xs">Phone</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="w-6 h-6" onClick={() => setIsProfileDropdownShown(true)}>
                  <SvgMail />
                </span>
                <span className="text-[#F2F2F2] font-medium text-xs">WhatsApp</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="w-6 h-6" onClick={() => setIsProfileDropdownShown(true)}>
                  <SvgWhatsapp />
                </span>
                <span className="text-[#F2F2F2] font-medium text-xs">Email</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="w-6 h-6" onClick={() => setIsProfileDropdownShown(true)}>
                  <SvgPhone />
                </span>
                <span className="text-[#F2F2F2] font-medium text-xs">Logout</span>
              </div>
            </div>
            <div className="rightSide right-4 top-[50px] absolute flex flex-col h-full items-center justify-center gap-1">
              <button type="button" onClick={() => setIsProfileDropdownShown(false)}>
                <span>
                  <SvgHome2 />
                </span>
              </button>
              <button type="button"
                className="w-14 h-14 mt-1 relative fill-gray-600 mx-3 bg-gray-50 border border-[#4CBEC5] rounded-full p-1"
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
              <div className="flex flex-col px-10 py-6">
                <button type="button" className="flex items-center justify-start invisible w-full py-2">
                  <span className="font-semibold text-[#00A29D] ml-8 transform rotate-180">
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
              <div className="flex flex-col px-10 py-6">
                <button type="button" className="flex items-center justify-start w-full py-2" onClick={() => setSelectedCategory(0)}>
                  <span className="font-semibold text-[#00A29D] ml-8 transform rotate-180">
                    <SvgArrow />
                  </span>
                </button>

                <button type="button" className="relative flex items-center w-full py-1 mt-2 mb-4">
                  {profileMenuList
                    .filter((el) => el.id === selectedCategory)
                    .map((el) => (
                      <span className="h-6 w-6 fill-[#4CBEC5]" key={el.id}>
                        {el.icon}
                      </span>
                    ))}

                  <span className="text-left mx-2 font-medium text-[#7E8096]">
                    {profileMenuList.filter((el) => el.id === selectedCategory)[0]?.text}
                  </span>
                </button>
                {profileMenuList
                  .filter((el) => el.id === selectedCategory)[0]
                  .subItems.map((el) => (
                    <button type="button"
                      className="flex items-center w-full py-1"
                      key={el}
                      onClick={() => {
                        setIsProfileDropdownShown(false);
                        router.push(profileMenuList.filter((el) => el.id === selectedCategory)[0]?.url);
                      }}
                    >
                      <span className="mr-2 ml-8 text-left font-base text-[#7E8096]">{el}</span>
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
          className={`flex items-center w-full py-2 ${
            activePath === url ? "border-[#4CBEC59c]" : "border-transparent hover:border-[#4CBEC59c]"
          }`}
        >
          <span className={`h-6 w-6 fill-[url(#linear-gradient)] `}>{icon}</span>
          <h1
            className={`mx-2 text-left font-medium ${
              activePath === url ? "text-[#4CBEC5]" : "text-[#7E8096] group-hover:text-[#4CBEC5]"
            }`}
          >
            {text}
          </h1>

          <span className={`ml-auto w-3 h-3 text-2xl font-medium text-[#7E8096] ${submenu ? " " : "invisible"}`}>
            <SvgPlus />
          </span>
        </div>
      </button>
    </div>
  );
};

const SvgArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 7.884 13.488">
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
