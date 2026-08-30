import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileNavigation from "./ProfileNavigation";
import DashboardNavigation from "./DashboardNavigation";
import { SvgDashboard, SvgNotifications } from "../../../helpers/svgs/navbarSvg";
import { useRouter } from "next/router";

const HeaderMobile: FC = () => {
  const [isDashboardShown, setIsDashboardShown] = useState<boolean>(false);
  const [isProfileDropdownShown, setIsProfileDropdownShown] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const router = useRouter();
  const isHomepage = router.asPath === "/";

  return (
    <div className="headerMobile absolute top-0 left-0 right-0 flex h-16 w-full z-[999]">
      <div
        className={`flex flex-col h-full w-full bg-surface/95 backdrop-blur border-b border-line rounded-b-card p-2 ${
          !isHomepage ? "pb-[2.5rem]" : "pb-[4.5rem]"
        }`}
      >
        <nav aria-label="Mobile header" className="grid w-full grid-cols-3">
          <div className="flex items-center justify-center col-span-1 p-1">
            <button
              type="button"
              aria-label="Open categories menu"
              className="relative mx-1 flex h-11 w-11 items-center justify-center text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-full"
              onClick={() => setIsDashboardShown(true)}
            >
              <span className="block w-7 h-7">
                <SvgDashboard />
              </span>
            </button>
            <span className="invisible w-4 h-8" />
          </div>
          <div className="flex flex-col items-center justify-center col-span-1 p-1">
            <Link href="/" aria-label="Tradlia home">

              <Image
                src={"/images/footer/tradlia.svg"}
                className="left-0 object-contain cursor-pointer select-none"
                height={40}
                width={120}
                loading="eager"
                alt="tradlia"
              />

            </Link>
          </div>
          <div className="flex items-center justify-center col-span-1 p-1">
            <Link
              href="/notifications"
              aria-label="Notifications, 3 unread"
              className="flex h-11 w-11 items-center justify-center cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-full"
            >
              <span className="relative w-6 h-6 text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
                <SvgNotifications />
                <span className="pulse-dot absolute top-0 -right-2 bg-danger" aria-hidden="true" />
              </span>

            </Link>
            <button
              type="button"
              aria-label="Open profile menu"
              className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              onClick={() => setIsProfileDropdownShown(true)}
            >
              <span className="relative block w-8 h-8 overflow-hidden rounded-full border border-line">
                <Image src={"/images/navbar/iconPersonal.svg"} fill sizes="32px" alt="" />
              </span>
            </button>
          </div>
        </nav>
        {isHomepage && (
          <div className="flex items-center justify-center w-full px-4">
            <form
              className="relative w-full"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                const query = searchValue.trim();
                if (query) {
                  router.push(`/search?q=${encodeURIComponent(query)}`);
                }
              }}
            >
              <span className="absolute flex items-center justify-center h-full pl-4 pointer-events-none" aria-hidden="true">
                <Image src={"/images/navbar/searchIcon.svg"} width={16} height={16} alt="" />
              </span>
              <input
                type="search"
                autoComplete="off"
                className="w-full text-sm border px-12 py-3 rounded-pill bg-canvas border-transparent text-ink placeholder:text-ink-muted focus:outline-none focus:border-brand-400 focus:bg-surface focus-visible:ring-2 focus-visible:ring-brand-400 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none font-light"
                placeholder="Search product, barcode, brand or member…"
                aria-label="Search products"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </form>
          </div>
        )}
      </div>
      {isDashboardShown && <DashboardNavigation setIsDashboardShown={setIsDashboardShown} />}
      {isProfileDropdownShown && <ProfileNavigation setIsProfileDropdownShown={setIsProfileDropdownShown} />}
    </div>
  );
};

export default HeaderMobile;
