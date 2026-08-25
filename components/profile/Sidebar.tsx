import Link from "next/link";
import { FC } from "react";
import * as Icon from "../../helpers/svgs/profileSidebar";
import * as U from "../../helpers/urls";
import { useRouter } from "next/router";
import { SvgPlus } from "../../helpers/svgs/adverts";

const SvgGrid = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.5 3.5h7v7h-7zM13.5 3.5h7v7h-7zM3.5 13.5h7v7h-7zM13.5 13.5h7v7h-7z" />
  </svg>
);

const itemBase =
  "group flex select-none items-center gap-3 rounded-r-card border-l-2 px-3 py-2 text-sm transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1";
const activeItem = "bg-brand-50 text-brand-700 border-brand-400 font-medium";
const inactiveItem = "border-transparent text-ink-soft hover:text-ink hover:bg-canvas";

const SectionLabel: FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="px-3 pb-1 pt-4 font-display text-xs uppercase tracking-wider text-ink-muted first-of-type:pt-1">
    {children}
  </h2>
);

const Sidebar: FC = () => {
  return (
    <div className="hidden w-full flex-col lg:flex">
      <div className="flex items-center gap-3 rounded-card border border-line bg-surface p-4 shadow-card">
        <div className="h-10 w-10 shrink-0 rounded-card bg-brand-400 p-2.5 text-surface fill-current">
          <Icon.SvgTradliaMark />
        </div>
        <div>
          <p className="font-display text-lg font-bold leading-tight text-ink">Tradlia</p>
          <p className="font-display text-xs uppercase tracking-wider text-ink-muted">Seller Dashboard</p>
        </div>
      </div>

      <nav
        aria-label="Dashboard"
        className="mt-4 flex flex-col rounded-card border border-line bg-surface p-3 shadow-card"
      >
        <SectionLabel>Menu</SectionLabel>
        <SingleLinkItem url={U.URL_PROFILE} icon={<SvgGrid />} text={"Overview"} />
        <SingleLinkItem url={U.URL_PROFILE_ADVERTS} icon={<Icon.SvgAnnounce />} text={"My Listings"} />
        <SingleDropdownItem />
        <SingleLinkItem url={U.URL_PROFILE_FEEDBACK} icon={<Icon.SvgOk />} text={"Ratings and Reviews"} />
        <SingleLinkItem url={U.URL_PROFILE_MESSAGES} icon={<Icon.SvgMessage />} text={"My Messages"} />
        <SingleLinkItem url={U.URL_PROFILE_INTEGRATORS} icon={<Icon.SvgEnteg />} text={"Integrators"} />
        <SingleLinkItem url={U.URL_PROFILE_FAVOURITES} icon={<Icon.SvgLike />} text={"My Favorites"} />

        <SectionLabel>Billing</SectionLabel>
        <SingleLinkItem url={U.URL_PROFILE_RECEIPTS} icon={<Icon.SvgPay />} text={"Payments and Invoices"} />
        <SingleLinkItem url={U.URL_PROFILE_WALLET} icon={<Icon.SvgWallet />} text={"My Wallet"} />
        <SingleLinkItem url={U.URL_PROFILE_REPORT} icon={<Icon.SvgPerf />} text={"Performance Report"} />

        <SectionLabel>Account</SectionLabel>
        <SingleLinkItem url={U.URL_PROFILE_SETTINGS} icon={<Icon.SvgSetting />} text={"Settings"} />
        <SingleLinkItem url={U.URL_PROFILE_SUPPORT} icon={<Icon.SvgSupport />} text={"Support"} />
      </nav>
    </div>
  );
};

const SingleLinkItem: FC<any> = ({ url, icon, text }) => {
  const router = useRouter();
  const isActive = router.asPath === url;
  return (
    <Link
      href={url}
      aria-current={isActive ? "page" : undefined}
      className={`${itemBase} ${isActive ? activeItem : inactiveItem}`}
    >
      <span className="h-5 w-5 shrink-0 fill-current">{icon}</span>
      <span className="truncate">{text}</span>
    </Link>
  );
};

const SingleDropdownItem: FC<any> = () => {
  const router = useRouter();
  const activePath = router.asPath;
  const condition =
    activePath === U.URL_PROFILE_ORDERS_SOLD || activePath === U.URL_PROFILE_ORDERS_BOUGHT;
  return (
    <details className="group">
      <summary className={`${itemBase} cursor-pointer list-none ${condition ? activeItem : inactiveItem}`}>
        <span className={`h-5 w-5 shrink-0 fill-current`}>
          <Icon.SvgOrder />
        </span>
        <span className="truncate">Orders</span>
        <span
          aria-hidden="true"
          className="ml-auto h-5 w-5 shrink-0 fill-current text-ink-muted transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-open:rotate-45 group-hover:text-ink"
        >
          <SvgPlus />
        </span>
      </summary>

      <nav aria-label="Orders" className="mb-1 ml-9 mt-1 flex flex-col gap-0.5">
        <SubLink url={U.URL_PROFILE_ORDERS_SOLD} label={"My Sales"} />
        <SubLink url={U.URL_PROFILE_ORDERS_BOUGHT} label={"My Orders"} />
      </nav>
    </details>
  );
};

const SubLink: FC<{ url: string; label: string }> = ({ url, label }) => {
  const router = useRouter();
  const isActive = router.asPath === url;
  return (
    <Link
      href={url}
      aria-current={isActive ? "page" : undefined}
      className={`select-none rounded-r-pill py-1.5 pl-3 pr-2 text-sm transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 ${
        isActive ? "font-medium text-brand-700" : "text-ink-soft hover:text-ink"
      }`}
    >
      {label}
    </Link>
  );
};

export default Sidebar;
