import { FC } from "react";
import {
  SvgInTransit,
  SvgToBeShipped,
  SvgTransferred,
  SvgProblemOrders,
  SvgCompleted,
  SvgDelivered2,
  SvgNewOrder,
  SvgCancelReturn,
} from "../../../helpers/svgs/soldSvg";
import TabItemWithNumbers from "../commonComponents/tabbar/TabItemWithNumbers";

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

interface TebMenuProps {
  setActiveTab: (tab: SOLD_TABS) => void;
  activeTab: SOLD_TABS;
}

const Tabs = {
  NewOrder: 32,
  WillBeShipped: 8,
  Shipping: 16,
  ReceivedShipment: 10,
  CompletedShops: 104,
  TransmittedMoney: 4,
  CanceledOrReturnedShops: 12,
  TroubledOrders: 3,
};

const Tabmenu: FC<TebMenuProps> = ({ setActiveTab, activeTab }) => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4 w-full">
      <TabItemWithNumbers
        text={"New Order"}
        icon={<SvgNewOrder />}
        number={Tabs.NewOrder}
        tab={SOLD_TABS.NewOrder}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"To Be Shipped"}
        icon={<SvgToBeShipped />}
        number={Tabs.WillBeShipped}
        tab={SOLD_TABS.WillBeShipped}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"In Shipping"}
        icon={<SvgInTransit />}
        number={Tabs.Shipping}
        tab={SOLD_TABS.Shipping}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Delivered"}
        icon={<SvgDelivered2 />}
        number={Tabs.ReceivedShipment}
        tab={SOLD_TABS.ReceivedShipment}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Completed"}
        icon={<SvgCompleted />}
        number={Tabs.CompletedShops}
        tab={SOLD_TABS.CompletedShops}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Money Transferred"}
        icon={<SvgTransferred />}
        number={Tabs.TransmittedMoney}
        tab={SOLD_TABS.TransmittedMoney}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Canceled & Returned"}
        icon={<SvgCancelReturn />}
        number={Tabs.CanceledOrReturnedShops}
        tab={SOLD_TABS.CanceledOrReturnedShops}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItemWithNumbers
        text={"Troubled Orders"}
        icon={<SvgProblemOrders />}
        number={Tabs.TroubledOrders}
        tab={SOLD_TABS.TroubledOrders}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default Tabmenu;
