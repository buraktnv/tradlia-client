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
    if (!router.isReady) return;
    const slug = router.query.tab;
    if (typeof slug === "string" && TAB_SLUGS[slug] !== undefined) {
      setActiveTab(TAB_SLUGS[slug]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const changeTab = (tab: SOLD_TABS) => {
    setActiveTab(tab);
    router.push({ query: { ...router.query, tab: TAB_NAMES[tab] } }, undefined, { shallow: true });
  };

  return (
    <ProfileLayout>
      <div className="flex flex-col w-full bg-canvas xl:bg-transparent px-3 xl:px-0">
        <div className="filters">
          <Tabmenu setActiveTab={changeTab} activeTab={activeTab} />
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
