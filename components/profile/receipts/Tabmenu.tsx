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
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5 w-full">
      <TabItem
        tab={RECEIPT_TABS.INCOMING_PAYMENTS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgNextPayments />}
        text={"Upcoming Payments"}
      />
      <TabItem
        tab={RECEIPT_TABS.FINISHED_PAYMENTS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgCompletedPayments />}
        text={"Completed Payments"}
      />
      <TabItem
        tab={RECEIPT_TABS.RECEIPT_LIST}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgBilling />}
        text={"My Invoices"}
      />
      <TabItem
        tab={RECEIPT_TABS.BUY_MOVEMENTS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgBuying />}
        text={"Purchase Transactions"}
      />

      <TabItem
        tab={RECEIPT_TABS.SELL_MOVEMENTS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgSelling />}
        text={"Sales Transactions"}
      />
    </div>
  );
};

export default Tabmenu;
