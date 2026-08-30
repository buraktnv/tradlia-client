import { NextPage } from "next";
import { useState } from "react";
import DateDropdown from "../../components/profile/feedback/DateDropdown";
import FilterDropdown from "../../components/profile/feedback/FilterDropdown";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import DiscountCoupons from "../../components/profile/wallet/DiscountCoupons";
import MyWallet from "../../components/profile/wallet/MyWallet";
import Tabmenu from "../../components/profile/wallet/Tabmenu";
import { SvgSearch } from "../../helpers/svgs/walletSvg";

enum WALLET_TABS {
  MY_WALLET,
  DISCOUNT_COUPONS,
}

const filterList = [
  { id: 0, title: "Packaging & Shipping", active: true },
  { id: 1, title: "Fasteners & Fixings", active: false },
  { id: 2, title: "Electronics Components", active: false },
  { id: 3, title: "Safety Gear & Workwear", active: false },
  { id: 4, title: "Power Tools & Accessories", active: false },
  { id: 5, title: "Electrical Supplies", active: false },
  { id: 6, title: "Lab & Measurement", active: false },
  { id: 7, title: "Office & Facility", active: false },
];

const Wallet: NextPage = () => {
  const [activeTab, setActiveTab] = useState<WALLET_TABS>(WALLET_TABS.DISCOUNT_COUPONS);
  return (
    <ProfileLayout>
      <div className="flex flex-col w-full px-3 xl:px-0 bg-canvas xl:bg-transparent">
        <div className="tabs">
          <Tabmenu setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className="mx-3 mb-3 flex flex-col justify-between gap-3 rounded-card border border-line bg-surface p-2 shadow-card sm:flex-row sm:items-center xl:mx-0 xl:mb-[1.5rem] mt-3 xl:mt-[1.5rem]">
          <div className="flex flex-wrap items-center justify-around gap-2 py-1 sm:justify-start xl:gap-8">
            <div className="flex xl:px-2">
              <FilterDropdown filterList={filterList} />
            </div>
            <div className="flex xl:px-2">
              <DateDropdown />
            </div>
          </div>
          <div className="relative flex rounded-full ring-1 ring-brand-200 transition duration-200 focus-within:ring-2 focus-within:ring-brand-400/40">
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="h-10 w-full rounded-full bg-surface px-5 text-left text-sm text-ink outline-none placeholder:font-light placeholder:text-ink-muted focus-visible:outline-none sm:w-64 xl:w-72"
            />
            <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-brand-500">
              <SvgSearch />
            </div>
          </div>
        </div>
        <div className="flex flex-col content">
          {
            {
              [WALLET_TABS.MY_WALLET]: <MyWallet />,
              [WALLET_TABS.DISCOUNT_COUPONS]: <DiscountCoupons />,
            }[activeTab]
          }
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Wallet;
