import { NextPage } from "next";
import { useState } from "react";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import CanceledOrReturned from "../../components/profile/report/CanceledOrReturned";
import ConfirmedSales from "../../components/profile/report/ConfirmedSales";
import NetProfit from "../../components/profile/report/NetProfit";
import Tabmenu from "../../components/profile/report/Tabmenu";
import TotalPurchase from "../../components/profile/report/TotalPurchase";

enum REPORT_TABS {
  TOTAL_PURCHASE,
  NET_PROFIT,
  CANCELED_OR_RETURNED,
  CONFIRMED_SALES,
}

const Report: NextPage = () => {
  const [activeTab, setActiveTab] = useState<REPORT_TABS>(REPORT_TABS.TOTAL_PURCHASE);
  return (
    <ProfileLayout>
      <div className="flex flex-col w-full gap-1">
        <div className="tabs">
          <Tabmenu setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>

        <div className="flex flex-col w-full content">
          {
            {
              [REPORT_TABS.TOTAL_PURCHASE]: <TotalPurchase />,
              [REPORT_TABS.NET_PROFIT]: <NetProfit />,
              [REPORT_TABS.CANCELED_OR_RETURNED]: <CanceledOrReturned />,
              [REPORT_TABS.CONFIRMED_SALES]: <ConfirmedSales />,
            }[activeTab]
          }
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Report;
