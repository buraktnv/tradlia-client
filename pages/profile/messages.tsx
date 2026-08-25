import { NextPage } from "next";
import { useState } from "react";
import DateDropdown from "../../components/profile/feedback/DateDropdown";
import FilterDropdown from "../../components/profile/feedback/FilterDropdown";
import SingleMessageItem from "../../components/profile/messages/SingleMessageItem";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import { SvgSearch } from "../../helpers/svgs/messageSvg";
import useLocalStorage from "../../helpers/hooks/useLocalStorage";
import { HIRE_ME_COPY } from "../../helpers/config";

const filterList = [
  { id: 0, title: "All Messages", active: true },
  { id: 1, title: "Read Messages", active: false },
  { id: 2, title: "Unread Messages", active: false },
  { id: 3, title: "Delivery and Shipping", active: false },
  { id: 4, title: "Product Features", active: false },
  { id: 5, title: "Return and Cancellation", active: false },
  { id: 6, title: "Technical Support", active: false },
];

const messageContentList = [
  {
    id: 0,
    customer: "Daniel Harrison",
    subject: "Return and Cancellation",
    active: false,
    message:
      "Hello, I had a product that I purchased from you. You shipped it on 10/12 but there is no change in the shipping tracking, it still shows as being at the departure branch. Could you please look into this? I cannot reach the package",
    date: "28.02.2022 - 14:20",
    messages: [
      {
        id: "a",
        sender: "customer",
        message:
          "Hello, I had a product that I purchased from you. You shipped it on 10/12 but there is no change in the shipping tracking, it still shows as being at the departure branch. Could you please look into this? I cannot reach the package",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "b",
        sender: "seller",
        message:
          "Hello, we had already shipped it.\n As you mentioned, it still shows at the branch.\nWe are looking into it right away",
        date: "28.02.2022 - 14:20",
        received: true,
      },
    ],
  },
  {
    id: 1,
    customer: "Kevin Anderson",
    subject: "Product Features",
    message: "Hello, when will our shipment depart...",
    date: "28.02.2022 - 14:20",
    active: true,
    messages: [
      {
        id: "a",
        sender: "customer",
        message:
          "Hello, I had a product that I purchased from you. You shipped it on 10/12 but there is no change in the shipping tracking, it still shows as being at the departure branch. Could you please look into this? I cannot reach the package",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "b",
        sender: "seller",
        message:
          "Hello, we had already shipped it.\n As you mentioned, it still shows at the branch.\n We are looking into it right away",
        date: "28.02.2022 - 14:20",
        received: true,
      },
    ],
  },
  {
    id: 2,
    customer: "SupplyHub",
    subject: "Return and Cancellation",
    message: "Hello. 4 items, lot no: HVCG0653 Silver...",
    date: "28.02.2022 - 14:20",
    active: false,
    messages: [
      {
        id: "a",
        sender: "customer",
        message:
          "Hello, I had a product that I purchased from you. You shipped it on 10/12 but there is no change in the shipping tracking, it still shows as being at the departure branch. Could you please look into this? I cannot reach the package",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "b",
        sender: "seller",
        message:
          "Hello, we had already shipped it.\n As you mentioned, it still shows at the branch.\n We are looking into it right away",
        date: "28.02.2022 - 14:20",
        received: true,
      },
    ],
  },
  {
    id: 3,
    customer: "Daniel Harrison",
    subject: "Technical Support",
    message:
      "Hello, I had a product that I purchased from you. You shipped it on 10/12 but there is no change in the shipping tracking, it still shows as being at the departure branch. Could you please look into this? I cannot reach the package",
    date: "28.02.2022 - 14:20",
    active: false,
    messages: [
      {
        id: "a",
        sender: "customer",
        message:
          "Hello, I had a product that I purchased from you. You shipped it on 10/12 but there is no change in the shipping tracking, it still shows as being at the departure branch. Could you please look into this? I cannot reach the package",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "b",
        sender: "seller",
        message:
          "Hello, we had already shipped it.\n As you mentioned, it still shows at the branch.\n We are looking into it right away",
        date: "28.02.2022 - 14:20",
        received: true,
      },
    ],
  },
  {
    id: 4,
    customer: "Kevin Anderson",
    subject: "Product Features",
    message: "Hello, when will our shipment depart...",
    date: "28.02.2022 - 14:20",
    active: false,
    messages: [
      {
        id: "a",
        sender: "customer",
        message:
          "Hello, I had a product that I purchased from you. You shipped it on 10/12 but there is no change in the shipping tracking, it still shows as being at the departure branch. Could you please look into this? I cannot reach the package",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "b",
        sender: "seller",
        message:
          "Hello, we had already shipped it.\n As you mentioned, it still shows at the branch.\n We are looking into it right away",
        date: "28.02.2022 - 14:20",
        received: true,
      },
    ],
  },
  {
    id: 5,
    customer: "SupplyHub",
    subject: "Delivery and Shipping",
    message: "Hello. 4 items, lot no: HVCG0653 Silver...",
    date: "28.02.2022 - 14:20",
    active: false,
    messages: [
      {
        id: "a",
        sender: "customer",
        message:
          "Hello, I had a product that I purchased from you. You shipped it on 10/12 but there is no change in the shipping tracking, it still shows as being at the departure branch. Could you please look into this? I cannot reach the package",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "b",
        sender: "seller",
        message:
          "Hello, we had already shipped it.\n As you mentioned, it still shows at the branch.\n We are looking into it right away",
        date: "28.02.2022 - 14:20",
        received: true,
      },
    ],
  },
];

const Messages: NextPage = () => {
  const [view, setView] = useState<"inbox" | "archived">("inbox");
  const [archivedIds, setArchivedIds] = useLocalStorage<number[]>("messages-archived", []);
  const [subjectFilter, setSubjectFilter] = useState<string | null>(null);

  const archive = (id: number) => {
    setArchivedIds((pre: number[]) => (pre.includes(id) ? pre : [...pre, id]));
  };

  const restore = (id: number) => {
    setArchivedIds((pre: number[]) => pre.filter((x) => x !== id));
  };

  const onFilterSelect = (item: any) => {
    if (item.title === "All Messages") {
      setSubjectFilter(null);
    } else if (item.title === "Read Messages") {
      setSubjectFilter("read");
    } else if (item.title === "Unread Messages") {
      setSubjectFilter("unread");
    } else {
      setSubjectFilter(item.title);
    }
  };

  const visibleList = messageContentList
    .filter((c) => (view === "archived" ? archivedIds.includes(c.id) : !archivedIds.includes(c.id)))
    .filter((c) => {
      if (!subjectFilter) return true;
      if (subjectFilter === "read") return c.active;
      if (subjectFilter === "unread") return !c.active;
      return c.subject === subjectFilter;
    });

  return (
    <ProfileLayout>
      <div className="flex flex-col w-full">
        <div className="xl:h-[3rem] flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between xl:pl-8 mx-3 xl:mx-0 xl:border xl:border-[#00B1B265] xl:bg-[#F4F5F7] xl:rounded-full mb-3 xl:mb-[1.5rem]">
          <div className="flex justify-around xl:justify-start xl:gap-12 border rounded-full py-2 xl:py-0 border-[#00B1B265] xl:border-0">
            <div className="flex xl:mx-8">
              <FilterDropdown filterList={filterList} onSelect={onFilterSelect} />
            </div>
            <div className="flex xl:mx-8">
              <DateDropdown />
            </div>
          </div>
          <div className="flex relative ring-1 rounded-full ring-[#4CBEC565] ">
            <input
              type="search"
              id="search"
              placeholder="Search"
              className="outline-none bg-white placeholder-[#7E8096] xl:placeholder-[#4CBEC5] px-5 text-left text-[#7E8096] xl:text-[#4CBEC5]  placeholder:font-light w-full  xl:px-20 py-3 rounded-full xl:text-center"
            />
            <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-[#4cbec5]">
              <SvgSearch />
            </div>
          </div>
        </div>
        <div className="flex gap-2 px-3 mb-3 xl:mb-[1.5rem] xl:px-0">
          <button type="button"
            onClick={() => setView("inbox")}
            className={`px-6 py-2 rounded-full border text-sm transition ${
              view === "inbox"
                ? "bg-[#4CBEC5] border-[#4CBEC5] text-white"
                : "bg-white border-[#00B1B265] text-[#7E8096]"
            }`}
          >
            Inbox
          </button>
          <button type="button"
            onClick={() => setView("archived")}
            className={`px-6 py-2 rounded-full border text-sm transition ${
              view === "archived"
                ? "bg-[#4CBEC5] border-[#4CBEC5] text-white"
                : "bg-white border-[#00B1B265] text-[#7E8096]"
            }`}
          >
            Archived
          </button>
        </div>
        {visibleList.length === 0 ? (
          <div className="flex items-center justify-center w-full h-full px-6 py-16 text-center text-[#7E8096]">
            {view === "archived" ? "No archived messages." : HIRE_ME_COPY.messagesEmpty}
          </div>
        ) : (
          <div className="flex flex-col w-full gap-3 xl:gap-[1.5rem]">
            {visibleList.map((content) => (
              <SingleMessageItem
                key={content.id}
                content={content}
                onArchive={archive}
                onRestore={restore}
                archived={view === "archived"}
              />
            ))}
          </div>
        )}
      </div>
    </ProfileLayout>
  );
};

export default Messages;
