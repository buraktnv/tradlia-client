import { Dispatch, FC, SetStateAction } from "react";
import {
  SvgBilling,
  SvgBuying,
  SvgCompletedPayments,
  SvgNextPayments,
  SvgSelling,
} from "../../../helpers/svgs/receiptSvg";
import TabItem from "../commonComponents/tabbar/TabItem";

enum RECEIPT_TABS {
  INCOMING_PAYMENTS,
  FINISHED_PAYMENTS,
  RECEIPT_LIST,
  BUY_MOVEMENTS,
  SELL_MOVEMENTS,
}

interface TebMenuProps {
  setActiveTab: Dispatch<SetStateAction<RECEIPT_TABS>>;
  activeTab: RECEIPT_TABS;
}

const Tabmenu: FC<TebMenuProps> = ({ setActiveTab, activeTab }) => {
  return (
    <div className="grid grid-cols-2 gap-2 xl:grid-cols-5 xl:p-[0.25rem] rounded-full border-transparent xl:border xl:border-[#00b2b265] w-full">
      <TabItem
        tab={RECEIPT_TABS.INCOMING_PAYMENTS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#ea5b0c]",
          bgColor: "bg-[#ea5b0c]",
          hoverBG: "group-hover:bg-[#ea5b0c] xl:border-transparent border border-[#ea5b0c80]",
        }}
        icon={<SvgNextPayments />}
        text={"Upcoming Payments"}
      />
      <TabItem
        tab={RECEIPT_TABS.FINISHED_PAYMENTS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#F9B000]",
          bgColor: "bg-[#F9B000]",
          hoverBG: "group-hover:bg-[#F9B000] xl:border-transparent border border-[#F9B00080]",
        }}
        icon={<SvgCompletedPayments />}
        text={"Completed Payments"}
      />
      <TabItem
        tab={RECEIPT_TABS.RECEIPT_LIST}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#4CBEC5]",
          bgColor: "bg-[#4CBEC5]",
          hoverBG: "group-hover:bg-[#4CBEC5] xl:border-transparent border border-[#4CBEC580]",
        }}
        icon={<SvgBilling />}
        text={"My Invoices"}
      />
      <TabItem
        tab={RECEIPT_TABS.BUY_MOVEMENTS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#86BC25]",
          bgColor: "bg-[#86BC25]",
          hoverBG: "group-hover:bg-[#86BC25] xl:border-transparent border border-[#86BC2580]",
        }}
        icon={<SvgBuying />}
        text={"Purchase Transactions"}
      />

      <TabItem
        tab={RECEIPT_TABS.SELL_MOVEMENTS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#E8336E]",
          bgColor: "bg-[#E8336E]",
          hoverBG: "group-hover:bg-[#E8336E] xl:border-transparent border border-[#E8336E80]",
        }}
        icon={<SvgSelling />}
        text={"Sales Transactions"}
      />
    </div>
  );
};

export default Tabmenu;
