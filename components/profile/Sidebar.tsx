import Link from "next/link";
import { FC } from "react";
import * as Icon from "../../helpers/svgs/profileSidebar";
import * as U from "../../helpers/urls";
import { useRouter } from "next/router";
import { SvgPlus } from "../../helpers/svgs/adverts";

const Sidebar: FC = () => {
  return (
    <div className="lg:flex flex-col w-full hidden">
      <div className="sideHeader flex items-center w-full rounded-full bg-[#5327A8] ">
        <div className="flex items-center justify-center p-1 rounded-full">
          <div className="h-10 w-10 p-2 rounded-full bg-white fill-[#5327A8]">
            <Icon.SvgTradliaMark />
          </div>
        </div>
        <p className="w-full p-2 text-lg font-semibold text-white">Tradlia</p>
      </div>
      <div className="flex flex-col w-full gap-1 px-2 mt-3 xl:mt-[1.5rem] sideItems">
        <SingleLinkItem url={U.URL_PROFILE_ADVERTS} icon={<Icon.SvgAnnounce />} text={"My Listings"} />
        <SingleDropdownItem />
        <SingleLinkItem url={U.URL_PROFILE_FEEDBACK} icon={<Icon.SvgOk />} text={"Ratings and Reviews"} />
        <SingleLinkItem url={U.URL_PROFILE_MESSAGES} icon={<Icon.SvgMessage />} text={"My Messages"} />
        <SingleLinkItem url={U.URL_PROFILE_INTEGRATORS} icon={<Icon.SvgEnteg />} text={"Integrators"} />
        <SingleLinkItem url={U.URL_PROFILE_FAVOURITES} icon={<Icon.SvgLike />} text={"My Favorites"} />
        <SingleLinkItem url={U.URL_PROFILE_RECEIPTS} icon={<Icon.SvgPay />} text={"Payments and Invoices"} />
        <SingleLinkItem url={U.URL_PROFILE_WALLET} icon={<Icon.SvgWallet />} text={"My Wallet"} />
        <SingleLinkItem url={U.URL_PROFILE_REPORT} icon={<Icon.SvgPerf />} text={"Performance Report"} />
        <SingleLinkItem url={U.URL_PROFILE_SETTINGS} icon={<Icon.SvgSetting />} text={"Settings"} />
        <SingleLinkItem url={U.URL_PROFILE_SUPPORT} icon={<Icon.SvgSupport />} text={"Support"} />
      </div>
    </div>
  );
};

const SingleLinkItem: FC<any> = ({ url, icon, text }) => {
  const router = useRouter();
  const activePath = router.asPath;
  return (
    <div className="flex flex-col">
      <Link href={url}>
        <div
          className={`select-none flex group items-center cursor-pointer rounded-full px-4 py-2 border  ${
            activePath === url
              ? "shadow-md border-[#4CBEC59c]"
              : "hover:shadow-md border-transparent hover:border-[#4CBEC59c]"
          }`}
        >
          <span
            className={`w-5 h-5 fill-[#7E8096] ${
              activePath === url ? "fill-[#4CBEC5]" : "group-hover:fill-[#4CBEC5]"
            } `}
          >
            {icon}
          </span>
          <h1
            className={`mx-2  ${
              activePath === url ? "text-[#4CBEC5]" : "text-[#7E8096] group-hover:text-[#4CBEC5]"
            }  text-sm font-medium`}
          >
            {text}
          </h1>
        </div>
      </Link>
    </div>
  );
};

const SingleDropdownItem: FC<any> = () => {
  const router = useRouter();
  const activePath = router.asPath;
  const condition = U.URL_PROFILE_ORDERS_SOLD.includes(activePath) || U.URL_PROFILE_ORDERS_BOUGHT.includes(activePath);
  return (
    <details className="group">
      <summary className="flex flex-col">
        <div
          className={`flex group items-center cursor-pointer rounded-full px-4 py-2 group-hover:shadow-md border  ${
            condition
              ? "border-[#4CBEC59c] shadow-md"
              : "border-transparent hover:border-[#4CBEC59c] group-hover:border-[#4CBEC59c]"
          }`}
        >
          <span className={`w-5 h-5  ${condition ? "fill-[#4CBEC5]" : "fill-[#7E8096] group-hover:fill-[#4CBEC5]"}`}>
            <Icon.SvgOrder />
          </span>
          <h1
            className={`mx-2 text-sm font-medium ${
              condition ? "text-[#4CBEC5]" : "text-[#7E8096] group-hover:text-[#4CBEC5]"
            }`}
          >
            Orders
          </h1>
          <span
            className={`ml-auto h-5 w-5 ${condition ? "fill-[#4CBEC5]" : "fill-[#a0a1aa] group-hover:fill-[#4CBEC5]"} `}
          >
            <SvgPlus />
          </span>
        </div>
      </summary>

      <nav className="mt-1.5 ml-10 flex flex-col">
        <Link
          href={U.URL_PROFILE_ORDERS_SOLD}
          className={`select-none cursor-pointer mx-2 my-1 text-sm font-medium ${
            activePath === U.URL_PROFILE_ORDERS_SOLD ? "text-[#4CBEC5]" : "text-[#7E8096] hover:text-[#4CBEC5]"
          }`}>
          
            My Sales

        </Link>
        <Link
          href={U.URL_PROFILE_ORDERS_BOUGHT}
          className={`select-none cursor-pointer mx-2 my-1 text-sm font-medium ${
            activePath === U.URL_PROFILE_ORDERS_BOUGHT ? "text-[#4CBEC5]" : "text-[#7E8096] hover:text-[#4CBEC5]"
          }`}>
          
            My Orders

        </Link>
      </nav>
    </details>
  );
};

export default Sidebar;
