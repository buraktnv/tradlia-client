import { Dispatch, FC, SetStateAction } from "react";
import {
  SvgAddAllAdvert,
  SvgNewAdvert,
  SvgNotOnline,
  SvgOnline,
  SvgWaitingApproval,
} from "../../../helpers/svgs/adverts";
import TabItemWithNumbers from "../commonComponents/tabbar/TabItemWithNumbers";

enum ADVERTS_TABS {
  ADD_NEW,
  ADD_NEW_GROUP,
  ONLINE,
  OFFLINE,
  WAITING_APPROVAL,
}

interface TebMenuProps {
  setActiveTab: Dispatch<SetStateAction<ADVERTS_TABS>>;
  activeTab: ADVERTS_TABS;
}

const Tabmenu: FC<TebMenuProps> = ({ setActiveTab, activeTab }) => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5 w-full">
      <TabItemWithNumbers
        text={"Add New Listing"}
        icon={<SvgNewAdvert />}
        number={""}
        tab={ADVERTS_TABS.ADD_NEW}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Add New Listing */}
      <TabItemWithNumbers
        text={"Bulk Add Listings"}
        icon={<SvgAddAllAdvert />}
        number={""}
        tab={ADVERTS_TABS.ADD_NEW_GROUP}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Bulk Add Listings */}
      <TabItemWithNumbers
        text={"Published"}
        icon={<SvgOnline />}
        number={"123"}
        tab={ADVERTS_TABS.ONLINE}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Published */}
      <TabItemWithNumbers
        text={"Unpublished"}
        icon={<SvgNotOnline />}
        number={"12"}
        tab={ADVERTS_TABS.OFFLINE}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Unpublished */}

      <TabItemWithNumbers
        text={"Pending Approval"}
        icon={<SvgWaitingApproval />}
        number={"3"}
        tab={ADVERTS_TABS.WAITING_APPROVAL}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* Pending Approval */}
    </div>
  );
};

export default Tabmenu;
