import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Tabmenu from "../../../components/profile/bought/Tabmenu";
import { ProfileLayout } from "../../../components/profile/ProfileLayout";
import Shipped from "../../../components/profile/bought/tabs/Shipped";
import WaitingApproval from "../../../components/profile/bought/tabs/WaitingApproval";
import WillBeShipped from "../../../components/profile/bought/tabs/WillBeShipped";
import ReceivedShipment from "../../../components/profile/bought/tabs/ReceivedShipment";
import CanceledOrReturnedShops from "../../../components/profile/bought/tabs/CanceledOrReturnedShops";
import CompletedShops from "../../../components/profile/bought/tabs/CompletedShops";
import DateDropdown from "../../../components/profile/feedback/DateDropdown";
import FilterDropdown from "../../../components/profile/feedback/FilterDropdown";
import { SvgSearch } from "../../../helpers/svgs/boughtSvg";

enum BOUGHT_TABS {
  Shipped,
  WaitingApproval,
  WillBeShipped,
  ReceivedShipment,
  CanceledOrReturnedShops,
  CompletedShops,
}

const TAB_SLUGS: Record<string, BOUGHT_TABS> = {
  shipped: BOUGHT_TABS.Shipped,
  "waiting-approval": BOUGHT_TABS.WaitingApproval,
  "will-be-shipped": BOUGHT_TABS.WillBeShipped,
  received: BOUGHT_TABS.ReceivedShipment,
  canceled: BOUGHT_TABS.CanceledOrReturnedShops,
  completed: BOUGHT_TABS.CompletedShops,
};

const TAB_NAMES: Record<BOUGHT_TABS, string> = {
  [BOUGHT_TABS.Shipped]: "shipped",
  [BOUGHT_TABS.WaitingApproval]: "waiting-approval",
  [BOUGHT_TABS.WillBeShipped]: "will-be-shipped",
  [BOUGHT_TABS.ReceivedShipment]: "received",
  [BOUGHT_TABS.CanceledOrReturnedShops]: "canceled",
  [BOUGHT_TABS.CompletedShops]: "completed",
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

const Bought: NextPage = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<BOUGHT_TABS>(BOUGHT_TABS.WillBeShipped);

  useEffect(() => {
    if (!router.isReady) return;
    const slug = router.query.tab;
    if (typeof slug === "string" && TAB_SLUGS[slug] !== undefined) {
      setActiveTab(TAB_SLUGS[slug]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  const changeTab = (tab: BOUGHT_TABS) => {
    setActiveTab(tab);
    router.push({ query: { ...router.query, tab: TAB_NAMES[tab] } }, undefined, { shallow: true });
  };

  return (
    <ProfileLayout>
      <div className="flex flex-col w-full min-h-screen px-3 xl:px-0 bg-canvas xl:bg-transparent">
        <div className="filters">
          <Tabmenu setActiveTab={changeTab} activeTab={activeTab} />
        </div>
        <div className="mt-3 mb-3 flex flex-col justify-between gap-3 rounded-card border border-line bg-surface p-2 shadow-card sm:flex-row sm:items-center xl:my-[1.5rem] xl:h-auto">
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
              [BOUGHT_TABS.WillBeShipped]: <WillBeShipped />,
              [BOUGHT_TABS.Shipped]: <Shipped />,
              [BOUGHT_TABS.WaitingApproval]: <WaitingApproval />,
              [BOUGHT_TABS.ReceivedShipment]: <ReceivedShipment />,
              [BOUGHT_TABS.CompletedShops]: <CompletedShops />,
              [BOUGHT_TABS.CanceledOrReturnedShops]: <CanceledOrReturnedShops />,
            }[activeTab]
          }
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Bought;
