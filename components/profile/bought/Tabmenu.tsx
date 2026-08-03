import { Dispatch, FC, SetStateAction } from "react";
import {
  SvgCanceledOrReturnedShops,
  SvgCompletedShops,
  SvgReceivedShipment,
  SvgShipped,
  SvgWaitingApproval,
  SvgWillBeShipped,
} from "../../../helpers/svgs/boughtSvg";
import TabItemWithNumbers from "../commonComponents/tabbar/TabItemWithNumbers";

enum BOUGHT_TABS {
  Shipped,
  WaitingApproval,
  WillBeShipped,
  ReceivedShipment,
  CanceledOrReturnedShops,
  CompletedShops,
}

interface TebMenuProps {
  setActiveTab: Dispatch<SetStateAction<BOUGHT_TABS>>;
  activeTab: BOUGHT_TABS;
}

const Tabs = {
  willBeShipped: 3,
  shipped: 8,
  waitingForApproval: 5,
  receivedShipment: 10,
  completedShops: 78,
  CanceledOrReturnedShops: 3,
};

const Tabmenu: FC<TebMenuProps> = ({ setActiveTab, activeTab }) => {
  return (
    <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 xl:p-[0.25rem] rounded-[1.3rem] border-transparent xl:border xl:border-[#00b2b265] w-full">
      <TabItemWithNumbers
        text={"To Be Shipped"}
        icon={<SvgWillBeShipped />}
        number={Tabs.willBeShipped}
        tab={BOUGHT_TABS.WillBeShipped}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#E94190]",
          text: "text-[#E94190]",
          bgColor: "bg-[#E94190]",
          hoverBG: "group-hover:bg-[#E94190] xl:border-transparent border border-[#E9419080]",
        }}
      />
      <TabItemWithNumbers
        text={"Shipped"}
        icon={<SvgShipped />}
        number={Tabs.shipped}
        tab={BOUGHT_TABS.Shipped}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#86BC25]",
          text: "text-[#86BC25]",
          bgColor: "bg-[#86BC25]",
          hoverBG: "group-hover:bg-[#86BC25] xl:border-transparent border border-[#86BC2580]",
        }}
      />
      <TabItemWithNumbers
        text={"Waiting Approval"}
        icon={<SvgWaitingApproval />}
        number={Tabs.waitingForApproval}
        tab={BOUGHT_TABS.WaitingApproval}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#FF792E]",
          text: "text-[#FF792E]",
          bgColor: "bg-[#FF792E]",
          hoverBG: "group-hover:bg-[#FF792E] xl:border-transparent border border-[#FF792E80]",
        }}
      />
      <TabItemWithNumbers
        text={"Received"}
        icon={<SvgReceivedShipment />}
        number={Tabs.receivedShipment}
        tab={BOUGHT_TABS.ReceivedShipment}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#00ACE9]",
          text: "text-[#00ACE9]",
          bgColor: "bg-[#00ACE9]",
          hoverBG: "group-hover:bg-[#00ACE9] xl:border-transparent border border-[#00ACE980]",
        }}
      />

      <TabItemWithNumbers
        text={"Completed"}
        icon={<SvgCompletedShops />}
        number={Tabs.completedShops}
        tab={BOUGHT_TABS.CompletedShops}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#4CBEC5]",
          text: "text-[#4CBEC5]",
          bgColor: "bg-[#4CBEC5]",
          hoverBG: "group-hover:bg-[#4CBEC5] xl:border-transparent border border-[#4CBEC580]",
        }}
      />

      <TabItemWithNumbers
        text={"Cancellations & Returns"}
        icon={<SvgCanceledOrReturnedShops />}
        number={Tabs.CanceledOrReturnedShops}
        tab={BOUGHT_TABS.CanceledOrReturnedShops}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#E8336E]",
          text: "text-[#E8336E]",
          bgColor: "bg-[#E8336E]",
          hoverBG: "group-hover:bg-[#E8336E] xl:border-transparent border border-[#E8336E80]",
        }}
      />
    </div>
  );
};

export default Tabmenu;
