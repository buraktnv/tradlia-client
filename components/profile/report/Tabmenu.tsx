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
    <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 xl:p-[0.25rem] rounded-[1.3rem] px-3 border-transparent xl:border xl:border-[#00b2b265] w-full">
      <TabItem
        tab={REPORT_TABS.TOTAL_PURCHASE}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#ea5b0c]",
          bgColor: "bg-[#ea5b0c]",
          hoverBG: "group-hover:bg-[#ea5b0c]",
          extraClass: "border border-[#ea5b0c] xl:border-none",
        }}
        icon={<SvgTotalPurchase />}
        text={"Total Sales Amount"}
      />
      <TabItem
        tab={REPORT_TABS.NET_PROFIT}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#F9B000]",
          bgColor: "bg-[#F9B000]",
          hoverBG: "group-hover:bg-[#F9B000]",
          extraClass: "border border-[#F9B000] xl:border-none",
        }}
        icon={<SvgNetProfit />}
        text={"Net Profit"}
      />
      <TabItem
        tab={REPORT_TABS.CANCELED_OR_RETURNED}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#E8336E]",
          bgColor: "bg-[#E8336E]",
          hoverBG: "group-hover:bg-[#e8336e]",
          extraClass: "border border-[#e8336e] xl:border-none",
        }}
        icon={<SvgCanceledOrReturned />}
        text={"Cancelled - Returned"}
      />
      <TabItem
        tab={REPORT_TABS.CONFIRMED_SALES}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#4CBEC5]",
          bgColor: "bg-[#4CBEC5]",
          hoverBG: "group-hover:bg-[#4CBEC5]",
          extraClass: "border border-[#4CBEC5] xl:border-none",
        }}
        icon={<SvgConfirmedSale />}
        text={"Confirmed Sales Amount"}
      />
    </div>
  );
};

export default Tabmenu;
