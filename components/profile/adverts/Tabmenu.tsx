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
    <div className="grid grid-cols-2 gap-2 px-3 xl:grid-cols-5 xl:p-[0.25rem] rounded-[1.3rem] border-transparent xl:border xl:border-[#00b2b265] w-full">
      <TabItemWithNumbers
        text={"Add New Listing"}
        icon={<SvgNewAdvert />}
        number={""}
        tab={ADVERTS_TABS.ADD_NEW}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#ea5b0c]",
          text: "text-[#ea5b0c]",
          bgColor: "bg-[#ea5b0c]",
          hoverBG: "group-hover:bg-[#ea5b0c] xl:border-transparent border border-[#ea5b0c80]",
        }}
      />
      {/* Add New Listing */}
      <TabItemWithNumbers
        text={"Bulk Add Listings"}
        icon={<SvgAddAllAdvert />}
        number={""}
        tab={ADVERTS_TABS.ADD_NEW_GROUP}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#00ace9]",
          text: "text-[#00ace9]",
          bgColor: "bg-[#00ace9]",
          hoverBG: "group-hover:bg-[#00ace9] xl:border-transparent border border-[#00ace980]",
        }}
      />
      {/* Bulk Add Listings */}
      <TabItemWithNumbers
        text={"Published"}
        icon={<SvgOnline />}
        number={"123"}
        tab={ADVERTS_TABS.ONLINE}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#86bc25]",
          text: "text-[#86bc25]",
          bgColor: "bg-[#86bc25]",
          hoverBG: "group-hover:bg-[#86bc25] xl:border-transparent border border-[#86bc2580]",
        }}
      />
      {/* Published */}
      <TabItemWithNumbers
        text={"Unpublished"}
        icon={<SvgNotOnline />}
        number={"12"}
        tab={ADVERTS_TABS.OFFLINE}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#e8336e]",
          text: "text-[#e8336e]",
          bgColor: "bg-[#e8336e]",
          hoverBG: "group-hover:bg-[#e8336e] xl:border-transparent border border-[#e8336e80]",
        }}
      />
      {/* Unpublished */}

      <TabItemWithNumbers
        text={"Pending Approval"}
        icon={<SvgWaitingApproval />}
        number={"3"}
        tab={ADVERTS_TABS.WAITING_APPROVAL}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        style={{
          icon: "text-[#00ace9]",
          text: "text-[#00ace9]",
          bgColor: "bg-[#00ace9]",
          hoverBG: "group-hover:bg-[#00ace9] xl:border-transparent border border-[#00ace980]",
        }}
      />
      {/* Pending Approval */}
    </div>
  );
};

export default Tabmenu;
