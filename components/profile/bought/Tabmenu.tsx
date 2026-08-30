import { FC } from "react";
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
  setActiveTab: (tab: BOUGHT_TABS) => void;
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
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6 w-full">
      <TabItemWithNumbers
        text={"To Be Shipped"}
        icon={<SvgWillBeShipped />}
        number={Tabs.willBeShipped}
        tab={BOUGHT_TABS.WillBeShipped}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Shipped"}
        icon={<SvgShipped />}
        number={Tabs.shipped}
        tab={BOUGHT_TABS.Shipped}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Waiting Approval"}
        icon={<SvgWaitingApproval />}
        number={Tabs.waitingForApproval}
        tab={BOUGHT_TABS.WaitingApproval}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Received"}
        icon={<SvgReceivedShipment />}
        number={Tabs.receivedShipment}
        tab={BOUGHT_TABS.ReceivedShipment}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Completed"}
        icon={<SvgCompletedShops />}
        number={Tabs.completedShops}
        tab={BOUGHT_TABS.CompletedShops}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Cancellations & Returns"}
        icon={<SvgCanceledOrReturnedShops />}
        number={Tabs.CanceledOrReturnedShops}
        tab={BOUGHT_TABS.CanceledOrReturnedShops}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default Tabmenu;
