import { NextPage } from "next";
import { useState } from "react";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import { SETTINGS_TABS } from "../../components/profile/settings/properties";
import Tabmenu from "../../components/profile/settings/Tabmenu";
import AddressReceipt from "../../components/profile/settings/tabs/AddressReceipt";
import Notifications from "../../components/profile/settings/tabs/Notifications";
import Password from "../../components/profile/settings/tabs/Password";
import Profile from "../../components/profile/settings/tabs/Profile";
import SalesInfo from "../../components/profile/settings/tabs/SalesInfo";
import SalesRules from "../../components/profile/settings/tabs/SalesRules";
import Shipment from "../../components/profile/settings/tabs/Shipment";

const Settings: NextPage = () => {
  const [activeTab, setActiveTab] = useState<SETTINGS_TABS>(SETTINGS_TABS.PROFILE);
  return (
    <ProfileLayout>
      <div className="flex flex-col w-full">
        <div className="filters">
          <Tabmenu setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className="flex flex-col mt-3 px-3 xl:px-0 xl:mt-[1.5rem] content pb-5 xl:pb-0">
          {
            {
              [SETTINGS_TABS.PROFILE]: <Profile />,
              [SETTINGS_TABS.PASSWORD]: <Password />,
              [SETTINGS_TABS.ADDRESSRECEIPT]: <AddressReceipt />,
              [SETTINGS_TABS.SALESINFO]: <SalesInfo />,
              [SETTINGS_TABS.SHIPMENT]: <Shipment />,
              [SETTINGS_TABS.SALESRULES]: <SalesRules />,
              [SETTINGS_TABS.NOTIFICATION]: <Notifications />,
            }[activeTab]
          }
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Settings;
