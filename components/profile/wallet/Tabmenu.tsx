import { Dispatch, FC, SetStateAction } from "react";
import { SvgDiscount, SvgWallet } from "../../../helpers/svgs/walletSvg";
import TabItem from "../commonComponents/tabbar/TabItem";

enum WALLET_TABS {
  MY_WALLET,
  DISCOUNT_COUPONS,
}

interface TebMenuProps {
  setActiveTab: Dispatch<SetStateAction<WALLET_TABS>>;
  activeTab: WALLET_TABS;
}

const Tabmenu: FC<TebMenuProps> = ({ setActiveTab, activeTab }) => {
  return (
    <div className="grid grid-cols-2 gap-2 xl:h-[3rem] xl:grid-cols-5 xl:items-center rounded-full xl:border border-[#00b2b265] w-full">
      <TabItem
        tab={WALLET_TABS.MY_WALLET}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#4CBEC5]",
          bgColor: "bg-[#4CBEC5]",
          hoverBG: "group-hover:bg-[#4CBEC5] xl:border-transparent border border-[#00B1B280]",
        }}
        icon={<SvgWallet />}
        text={"My Wallet"}
      />
      <TabItem
        tab={WALLET_TABS.DISCOUNT_COUPONS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          text: "text-[#EA5B0C]",
          bgColor: "bg-[#EA5B0C]",
          hoverBG: "group-hover:bg-[#EA5B0C] xl:border-transparent border border-[#EA5B0C80]",
        }}
        icon={<SvgDiscount />}
        text={"My Discount Coupons"}
      />
    </div>
  );
};

export default Tabmenu;
