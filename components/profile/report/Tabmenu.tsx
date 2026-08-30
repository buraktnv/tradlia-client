import { Dispatch, FC, SetStateAction } from "react";
import {
  SvgCanceledOrReturned,
  SvgConfirmedSale,
  SvgNetProfit,
  SvgTotalPurchase,
} from "../../../helpers/svgs/reportSvg";
import TabItem from "../commonComponents/tabbar/TabItem";

enum REPORT_TABS {
  TOTAL_PURCHASE,
  NET_PROFIT,
  CANCELED_OR_RETURNED,
  CONFIRMED_SALES,
}

interface TebMenuProps {
  setActiveTab: Dispatch<SetStateAction<REPORT_TABS>>;
  activeTab: REPORT_TABS;
}

const Tabmenu: FC<TebMenuProps> = ({ setActiveTab, activeTab }) => {
  return (
    <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 w-full">
      <TabItem
        tab={REPORT_TABS.TOTAL_PURCHASE}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgTotalPurchase />}
        text={"Total Sales Amount"}
      />
      <TabItem
        tab={REPORT_TABS.NET_PROFIT}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgNetProfit />}
        text={"Net Profit"}
      />
      <TabItem
        tab={REPORT_TABS.CANCELED_OR_RETURNED}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgCanceledOrReturned />}
        text={"Cancelled - Returned"}
      />
      <TabItem
        tab={REPORT_TABS.CONFIRMED_SALES}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgConfirmedSale />}
        text={"Confirmed Sales Amount"}
      />
    </div>
  );
};

export default Tabmenu;
