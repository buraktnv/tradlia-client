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
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5 w-full">
      <TabItem
        tab={WALLET_TABS.MY_WALLET}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgWallet />}
        text={"My Wallet"}
      />
      <TabItem
        tab={WALLET_TABS.DISCOUNT_COUPONS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        icon={<SvgDiscount />}
        text={"My Discount Coupons"}
      />
    </div>
  );
};

export default Tabmenu;
