import { Dispatch, ReactNode, SetStateAction } from "react";

export enum SETTINGS_TABS {
  PROFILE,
  PASSWORD,
  ADDRESSRECEIPT,
  SALESINFO,
  SHIPMENT,
  SALESRULES,
  NOTIFICATION,
}

export interface TebMenuProps {
  setActiveTab: Dispatch<SetStateAction<SETTINGS_TABS>>;
  activeTab: SETTINGS_TABS;
}

export interface SingleTabButtonProps {
  text: string;
  icon: ReactNode;
  tab: SETTINGS_TABS;
  setActiveTab: Dispatch<SetStateAction<SETTINGS_TABS>>;
  activeTab: SETTINGS_TABS;
  color: string;
}
