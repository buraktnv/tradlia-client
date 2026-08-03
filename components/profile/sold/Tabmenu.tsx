import { Dispatch, FC, SetStateAction } from "react";
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
  setActiveTab: Dispatch<SetStateAction<SOLD_TABS>>;
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
    <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 xl:p-[0.25rem] rounded-[1.3rem] border-transparent xl:border xl:border-[#00b2b265] w-full">
      <TabItemWithNumbers
        text={"New Order"}
        icon={<SvgNewOrder />}
        number={Tabs.NewOrder}
        tab={SOLD_TABS.NewOrder}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#EA5B0C]",
          text: "text-[#EA5B0C]",
          bgColor: "bg-[#EA5B0C]",
          hoverBG: "group-hover:bg-[#EA5B0C] xl:border-transparent border border-[#EA5B0C80]",
        }}
      />
      <TabItemWithNumbers
        text={"To Be Shipped"}
        icon={<SvgToBeShipped />}
        number={Tabs.WillBeShipped}
        tab={SOLD_TABS.WillBeShipped}
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
        text={"In Shipping"}
        icon={<SvgInTransit />}
        number={Tabs.Shipping}
        tab={SOLD_TABS.Shipping}
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
        text={"Delivered"}
        icon={<SvgDelivered2 />}
        number={Tabs.ReceivedShipment}
        tab={SOLD_TABS.ReceivedShipment}
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
        icon={<SvgCompleted />}
        number={Tabs.CompletedShops}
        tab={SOLD_TABS.CompletedShops}
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
        text={"Money Transferred"}
        icon={<SvgTransferred />}
        number={Tabs.TransmittedMoney}
        tab={SOLD_TABS.TransmittedMoney}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#F9B000]",
          text: "text-[#F9B000]",
          bgColor: "bg-[#F9B000]",
          hoverBG: "group-hover:bg-[#F9B000] xl:border-transparent border border-[#F9B00080]",
        }}
      />
      <TabItemWithNumbers
        text={"Canceled & Returned"}
        icon={<SvgCancelReturn />}
        number={Tabs.CanceledOrReturnedShops}
        tab={SOLD_TABS.CanceledOrReturnedShops}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#5E4F9C]",
          text: "text-[#5E4F9C]",
          bgColor: "bg-[#5E4F9C]",
          hoverBG: "group-hover:bg-[#5E4F9C] xl:border-transparent border border-[#5E4F9C80]",
        }}
      />
      <TabItemWithNumbers
        text={"Troubled Orders"}
        icon={<SvgProblemOrders />}
        number={Tabs.TroubledOrders}
        tab={SOLD_TABS.TroubledOrders}
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
