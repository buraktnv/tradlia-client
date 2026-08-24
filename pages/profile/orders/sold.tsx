import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Tabmenu from "../../../components/profile/sold/Tabmenu";
import { ProfileLayout } from "../../../components/profile/ProfileLayout";
import Shipping from "../../../components/profile/sold/tabs/Shipping";
import TroubledOrders from "../../../components/profile/sold/tabs/TroubledOrders";
import TransmittedMoney from "../../../components/profile/sold/tabs/TransmittedMoney";
import NewOrder from "../../../components/profile/sold/tabs/NewOrder";
import WillBeShipped from "../../../components/profile/sold/tabs/WillBeShipped";
import ReceivedShipment from "../../../components/profile/sold/tabs/ReceivedShipment";
import CanceledOrReturnedShops from "../../../components/profile/sold/tabs/CanceledOrReturnedShops";
import CompletedShops from "../../../components/profile/bought/tabs/CompletedShops";
import DateDropdown from "../../../components/profile/feedback/DateDropdown";
import FilterDropdown from "../../../components/profile/feedback/FilterDropdown";
import { SvgSearch } from "../../../helpers/svgs/soldSvg";

enum SOLD_TABS {
  NewOrder,
  WillBeShipped,
  Shipping,
  ReceivedShipment,
  CompletedShops,
  TransmittedMoney,
  CanceledOrReturnedShops,
  TroubledOrders,
}

const TAB_SLUGS: Record<string, SOLD_TABS> = {
  "new-order": SOLD_TABS.NewOrder,
  "will-be-shipped": SOLD_TABS.WillBeShipped,
  shipping: SOLD_TABS.Shipping,
  received: SOLD_TABS.ReceivedShipment,
  completed: SOLD_TABS.CompletedShops,
  transmitted: SOLD_TABS.TransmittedMoney,
  canceled: SOLD_TABS.CanceledOrReturnedShops,
  troubled: SOLD_TABS.TroubledOrders,
};

const TAB_NAMES: Record<SOLD_TABS, string> = {
  [SOLD_TABS.NewOrder]: "new-order",
  [SOLD_TABS.WillBeShipped]: "will-be-shipped",
  [SOLD_TABS.Shipping]: "shipping",
  [SOLD_TABS.ReceivedShipment]: "received",
  [SOLD_TABS.CompletedShops]: "completed",
  [SOLD_TABS.TransmittedMoney]: "transmitted",
  [SOLD_TABS.CanceledOrReturnedShops]: "canceled",
  [SOLD_TABS.TroubledOrders]: "troubled",
};

const filterList = [
  { id: 0, title: "All", active: true },
  { id: 1, title: "Overdue", active: false },
  { id: 2, title: "Delivery Today", active: false },
  { id: 3, title: "Delivery Tomorrow", active: false },
  { id: 4, title: "Domestic Shipping", active: false },
  { id: 5, title: "Aras Shipping", active: false },
  { id: 6, title: "PTT Shipping", active: false },
];

const Sold: NextPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<SOLD_TABS>(SOLD_TABS.WillBeShipped);

  useEffect(() => {
    const slug = router.query.tab;
    if (typeof slug === "string" && TAB_SLUGS[slug] !== undefined) {
      setActiveTab(TAB_SLUGS[slug]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeTab = (tab: SOLD_TABS) => {
    setActiveTab(tab);
    router.push({ query: { ...router.query, tab: TAB_NAMES[tab] } }, undefined, { shallow: true });
  };

  return (
    <ProfileLayout>
      <div className="flex flex-col w-full bg-[#F2F2F2] xl:bg-transparent px-3 xl:px-0">
        <div className="filters">
          <Tabmenu setActiveTab={changeTab} activeTab={activeTab} />
        </div>
        <div className="xl:h-[3rem] flex xl:flex-row flex-col xl:gap-0 gap-3 mt-3 xl:mt-[1rem] justify-between xl:pl-8 xl:mx-0 xl:border xl:border-[#00B1B265] xl:bg-[#F4F5F7] xl:rounded-full">
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
              className="outline-none bg-white placeholder-[#7E8096] xl:placeholder-[#4CBEC5] px-5 text-left text-[#7E8096] xl:text-[#4CBEC5]  placeholder:font-light w-full  xl:px-20 py-3 rounded-full xl:text-center"
            />
            <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-[#4cbec5]">
              <SvgSearch />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-3 xl:mt-[1.5rem] content w-full">
          
          {
            {
              [SOLD_TABS.NewOrder]: <NewOrder />,
              [SOLD_TABS.WillBeShipped]: <WillBeShipped />,
              [SOLD_TABS.Shipping]: <Shipping />,
              [SOLD_TABS.ReceivedShipment]: <ReceivedShipment />,
              [SOLD_TABS.CompletedShops]: <CompletedShops />,
              [SOLD_TABS.TransmittedMoney]: <TransmittedMoney />,
              [SOLD_TABS.CanceledOrReturnedShops]: <CanceledOrReturnedShops />,
              [SOLD_TABS.TroubledOrders]: <TroubledOrders />,
            }[activeTab]
          }
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Sold;
