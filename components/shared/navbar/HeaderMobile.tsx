import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileNavigation from "./ProfileNavigation";
import DashboardNavigation from "./DashboardNavigation";
import { SvgDashboard, SvgNotifications, SvgProfile } from "../../../helpers/svgs/navbarSvg";
import { useRouter } from "next/router";

const HeaderMobile: FC = () => {
  const [isDashboardShown, setIsDashboardShown] = useState<boolean>(false);
  const [isProfileDropdownShown, setIsProfileDropdownShown] = useState<boolean>(false);

  const router = useRouter();
  const isHomepage = router.asPath === "/";

  return (
    <div className="headerMobile absolute top-0 left-0 right-0 flex h-16 w-full z-[999] drop-shadow-[0_0_5px_rgba(0,0,0,0.25)]">
      <div
        className={`flex flex-col h-full w-full bg-[#5327A8] rounded-b-[2rem] p-2 ${
          !isHomepage ? "pb-[2.5rem]" : "pb-[4.5rem]"
        }`}
      >
        <div className="grid w-full grid-cols-3">
          <div className="flex items-center justify-center col-span-1 p-1">
            <span className="relative mx-3 mb-2 w-7 h-7 fill-gray-600" onClick={() => setIsDashboardShown(true)}>
              <SvgDashboard />
            </span>
            <span className="invisible w-8 h-8 mx-3" />
          </div>
          <div className="flex flex-col items-center justify-center col-span-1 p-1">
            <Link href="/">

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
            <Link href="/notifications" className="flex mb-2 cursor-pointer select-none">

              <span className="relative w-6 h-6 mx-3 fill-gray-600">
                <SvgNotifications />
                <div className="absolute -right-3  justify-center px-1.5 py- text-sm text-center text-white bg-gradient-to-r from-[#F5168B] to-[#FF0045] rounded-full top-2">
                  3
                </div>
              </span>

            </Link>
            <span
              className="relative w-8 h-8 p-1 mx-3 mb-2 rounded-full fill-gray-600 bg-gray-50"
              onClick={() => setIsProfileDropdownShown(true)}
            >
              <SvgProfile />
            </span>
          </div>
        </div>
        {isHomepage && (
          <div className="flex items-center justify-center w-full px-4">
            <div className="relative w-full">
              <span className="absolute flex items-center justify-center h-full pl-4">
                <Image src={"/images/navbar/searchIcon.svg"} width={16} height={16} alt="search" />
              </span>
              <input
                className="w-full text-sm border px-12 py-3 rounded-full border-[#66bebc] focus:outline-none font-light"
                placeholder="search product name, barcode, brand or member"
              />
            </div>
          </div>
        )}
      </div>
      {isDashboardShown && <DashboardNavigation setIsDashboardShown={setIsDashboardShown} />}
      {isProfileDropdownShown && <ProfileNavigation setIsProfileDropdownShown={setIsProfileDropdownShown} />}
    </div>
  );
};

export default HeaderMobile;
