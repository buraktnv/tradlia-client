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
  { id: 0, title: "Medical", active: true },
  { id: 1, title: "Family Medicine", active: false },
  { id: 2, title: "Dentistry", active: false },
  { id: 3, title: "Veterinary", active: false },
  { id: 4, title: "Personal Care & Cosmetics", active: false },
  { id: 5, title: "Dietary Supplements", active: false },
  { id: 6, title: "Office & Stationery & Hygiene", active: false },
];

const Wallet: NextPage = () => {
  const [activeTab, setActiveTab] = useState<WALLET_TABS>(WALLET_TABS.DISCOUNT_COUPONS);
  return (
    <ProfileLayout>
      <div className="flex flex-col w-full px-3 xl:px-0 bg-[#F2F2F2] xl:bg-transparent">
        <div className="tabs">
          <Tabmenu setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className="xl:h-[3rem] flex xl:flex-row flex-col xl:gap-0 gap-3 mt-3 xl:mt-[1.5rem] justify-between xl:pl-8 xl:mx-0 xl:border xl:border-[#00B1B265] xl:bg-[#F4F5F7] xl:rounded-full mb-3 xl:mb-[1.5rem]">
          <div className="flex justify-around xl:justify-start xl:gap-12 border rounded-full py-2 xl:py-0 border-[#00B1B265] xl:border-0">
            <div className="flex xl:mx-8">
              <FilterDropdown filterList={filterList} />
            </div>
            <div className="flex xl:mx-8">
              <DateDropdown />
            </div>
          </div>
          <div className="flex relative ring-1 rounded-full ring-[#4CBEC565] ">
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="outline-none bg-white placeholder-[#7E8096] xl:placeholder-[#4CBEC5] px-5 text-left text-[#7E8096] xl:text-[#4CBEC5]  placeholder:font-light w-full  xl:px-20 py-2 rounded-full xl:text-center"
            />
            <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-[#4cbec5]">
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
