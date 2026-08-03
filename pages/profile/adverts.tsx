import { NextPage } from "next";
import { useState } from "react";
import AddNewAdvert from "../../components/profile/adverts/AddNewAdvert";
import AddNewGroup from "../../components/profile/adverts/AddNewGroup";
import OfflineAdverts from "../../components/profile/adverts/OfflineAdverts";
import OnlineAdverts from "../../components/profile/adverts/OnlineAdverts";
import Tabmenu from "../../components/profile/adverts/Tabmenu";
import WaitingApproval from "../../components/profile/adverts/WaitingApproval";
import { ProfileLayout } from "../../components/profile/ProfileLayout";

enum ADVERTS_TABS {
  ADD_NEW,
  ADD_NEW_GROUP,
  ONLINE,
  OFFLINE,
  WAITING_APPROVAL,
}
//TODO modals inside page tabs
const Adverts: NextPage = () => {
  const [activeTab, setActiveTab] = useState<ADVERTS_TABS>(ADVERTS_TABS.ADD_NEW);
  return (
    <ProfileLayout>
      <div className="flex flex-col w-full">
        <div className="filters">
          <Tabmenu setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
        <div className="flex flex-col mx-3 mt-3 lg:mt-[1.5rem] content lg:mx-0">
          {
            {
              [ADVERTS_TABS.ADD_NEW]: <AddNewAdvert />,
              [ADVERTS_TABS.ADD_NEW_GROUP]: <AddNewGroup />,
              [ADVERTS_TABS.ONLINE]: <OnlineAdverts />,
              [ADVERTS_TABS.OFFLINE]: <OfflineAdverts />,
              [ADVERTS_TABS.WAITING_APPROVAL]: <WaitingApproval />,
            }[activeTab]
          }
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Adverts;
