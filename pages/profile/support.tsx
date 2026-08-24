import { NextPage } from "next";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import DateDropdown from "../../components/profile/feedback/DateDropdown";
import FilterDropdown from "../../components/profile/feedback/FilterDropdown";
import { ProfileLayout } from "../../components/profile/ProfileLayout";
import SupportModal from "../../components/profile/support/SupportModal";
import useLocalStorage from "../../helpers/hooks/useLocalStorage";
import { SvgM, SvgPencil, SvgSearch, SvgSpeechBubble, SvgSpeechBubbleTwo } from "../../helpers/svgs/supportSvg";

const cardList = [
  {
    id: 53,
    subject: "Shipping Tracking and Delivery",
    date: "13.05.2022",
    condition: "Completed",
    active: false,

    messages: [
      {
        id: "a",
        sender: "customer",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dapibus magna. Fusce eu posuere libero.\n Aliquam sollicitudin quam ante, id pharetra nisi ornare sed.",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "b",
        sender: "seller",
        message: "Cras in eros efficitur, condimentum risus dapibus \n imperdiet arcu.",
        date: "28.02.2022 - 14:20",
        received: false,
      },
    ],
  },
  {
    id: 106,
    subject: "Order Tracking",
    date: "14.06.2022",
    condition: "Completed",
    active: true,

    messages: [
      {
        id: "c",
        sender: "customer",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dapibus magna. Fusce eu posuere libero.\n Aliquam sollicitudin quam ante, id pharetra nisi ornare sed.",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "d",
        sender: "seller",
        message: "Cras in eros efficitur, condimentum risus dapibus \n imperdiet arcu.",
        date: "28.02.2022 - 14:20",
        received: true,
      },
    ],
  },
  {
    id: 218,
    subject: "Product Details About",
    date: "15.07.2022",
    condition: "Completed",
    active: false,

    messages: [
      {
        id: "e",
        sender: "customer",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dapibus magna. Fusce eu posuere libero.\n Aliquam sollicitudin quam ante, id pharetra nisi ornare sed.",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "f",
        sender: "seller",
        message: "Cras in eros efficitur, condimentum risus dapibus \n imperdiet arcu.",
        date: "28.02.2022 - 14:20",
        received: true,
      },
    ],
  },
  {
    id: 514,
    subject: "Gift Vouchers About",
    date: "16.08.2022",
    condition: "Completed",
    active: false,
    messages: [
      {
        id: "g",
        sender: "customer",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dapibus magna. Fusce eu posuere libero.\n Aliquam sollicitudin quam ante, id pharetra nisi ornare sed.",
        date: "28.02.2022 - 14:20",
      },
      {
        id: "h",
        sender: "seller",
        message: "Cras in eros efficitur, condimentum risus dapibus \n imperdiet arcu.",
        date: "28.02.2022 - 14:20",
        received: true,
      },
    ],
  },
];

const filterList = [
  { id: 0, title: "All", active: true },
  { id: 1, title: "Answered", active: false },
  { id: 2, title: "Not Answered", active: false },
  { id: 3, title: "1 Star", active: false },
  { id: 4, title: "2 Stars", active: false },
  { id: 5, title: "3 Stars", active: false },
  { id: 6, title: "4 Stars", active: false },
  { id: 7, title: "5 Stars", active: false },
];

const formatNow = () => {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()} - ${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const Support: NextPage = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [tickets, setTickets] = useLocalStorage<any[]>("support-tickets", cardList);

  const createTicket = ({ subject, message }: { subject: string; message: string }) => {
    const newTicket = {
      id: Date.now(),
      subject,
      date: formatNow().split(" - ")[0],
      condition: "Open",
      active: true,
      messages: [{ id: `m-${Date.now()}`, sender: "customer", message, date: formatNow() }],
    };
    setTickets((pre: any[]) => [newTicket, ...pre]);
  };

  const replyToTicket = (id: number, message: string) => {
    setTickets((pre: any[]) =>
      pre.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              messages: [
                ...ticket.messages,
                { id: `m-${Date.now()}-${Math.random()}`, sender: "seller", message, date: formatNow(), received: true },
              ],
            }
          : ticket
      )
    );
  };

  const filteredTickets = (tickets ?? cardList).filter((ticket: any) =>
    ticket.subject.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <ProfileLayout>
      {modal && <SupportModal setModal={setModal} onCreate={createTicket} />}
      <div className="flex flex-col w-full bg-[#F2F2F2] xl:bg-transparent">
        <div className="xl:h-[3rem] flex xl:flex-row flex-col xl:gap-0 gap-3 justify-between xl:pl-8 mx-3 xl:mx-0 xl:border xl:border-[#00B1B265] xl:bg-[#F4F5F7] xl:rounded-full mb-3 xl:mb-[1.5rem]">
          <div className="flex justify-around xl:justify-start xl:gap-12 border rounded-full py-2 xl:py-0 border-[#00B1B265] xl:border-0">
            <div className="flex xl:mx-8">
              <FilterDropdown filterList={filterList} />
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none bg-white placeholder-[#7E8096] xl:placeholder-[#4CBEC5] px-5 text-left text-[#7E8096] xl:text-[#4CBEC5]  placeholder:font-light w-full  xl:px-20 py-2 rounded-full xl:text-center"
            />
            <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-[#4cbec5]">
              <SvgSearch />
            </div>
          </div>
        </div>
        <div className="mx-3 mb-3 xl:mb-[1.5rem] xl:mx-0">
          <button type="button"
            className="bg-gradient-to-r to-[#00A29D] from-[#66C1BF] px-6 xl:px-8 py-3 text-sm rounded-full text-white outline-none shadow font-bold xl:h-[3rem]"
            onClick={() => setModal(true)}
          >
            New Support Request
          </button>
        </div>
        <div className="flex flex-col xl:gap-[1rem] gap-5">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((content: any) => <Card key={content.id} content={content} onReply={replyToTicket} />)
          ) : (
            <div className="rounded-2xl border border-[#00B1B265] bg-white p-10 text-center text-sm text-[#A0A2AF]">
              No support tickets match your search.
            </div>
          )}
        </div>
      </div>
    </ProfileLayout>
  );
};

const ClosedCard: FC<any> = ({ active, setCardState, content }) => {
  return (
    <div className="grid grid-cols-3 xl:grid-cols-5  bg-white xl:bg-[#F4F5F7] rounded-2xl font-medium gap-3 p-3 xl:px-[2rem] xl:py-[2rem] xl:gap-6">
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="text-[#4CBEC5] font-medium">ID</div>
        <div className="text-[#7E8096] rounded-full border-[#00b2b240] border py-2 w-full xl:w-1/2 text-center xl:h-[3rem] flex items-center justify-center">
          {content.id}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full col-span-2 gap-2 text-ellipsis xl:col-span-1">
        <div className="text-[#4CBEC5] font-medium">Subject</div>
        <div className="text-[#7E8096] rounded-full border-[#00B1B240] border px-4 whitespace-nowrap w-full py-2 text-center xl:h-[3rem] flex items-center justify-center">
          {content.subject}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="text-[#4CBEC5] font-medium">Date</div>
        <div className="text-[#7E8096] rounded-full border-[#00B1B240] border w-full text-center xl:px-4 py-2 xl:h-[3rem] flex items-center justify-center">
          {content.date}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-2 gap-2 xl:col-span-1">
        <div className="text-[#4CBEC5] font-medium">Status</div>
        <div className="text-[#7E8096] rounded-full border-[#00B1B240] border px-8 py-2 w-full xl:w-full text-center xl:h-[3rem] flex items-center justify-center">
          {content.condition}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-3 gap-2 xl:col-span-1">
        <div className="text-[#4CBEC5] font-medium hidden xl:block">Action</div>
        <button type="button"
          onClick={() => setCardState((pre: any) => !pre)}
          className={`w-full xl:w-auto border xl:border-none rounded-full group px-8 py-2 shadow-md duration-100 h-[3rem] flex items-center justify-center ${
            active ? "bg-[#4CBEC5]" : "xl:bg-white hover:bg-[#4CBEC5]"
          } `}
        >
          <div className={`w-4 h-4 ${active ? "text-white" : "text-[#4CBEC5] group-hover:text-white"}`}>
            <SvgPencil />
          </div>
          <span className={`block xl:hidden ml-2 ${active ? "text-white" : "text-[#4CBEC5] group-hover:text-white"}`}>
            Action
          </span>
        </button>
      </div>
    </div>
  );
};
const Card: FC<any> = ({ content, onReply }) => {
  const [cardState, setCardState] = useState<boolean>(content?.active || false);
  const [reply, setReply] = useState<string>("");

  const sendReply = () => {
    if (!reply.trim()) {
      toast.error("Please write a reply first.");
      return;
    }
    onReply(content.id, reply.trim());
    setReply("");
    toast.success("Your reply has been sent.");
  };

  return (
    <div className="flex flex-col bg-white xl:bg-[#F4F5F7] rounded-xl text-sm mx-3 xl:mx-0">
      <ClosedCard active={cardState} setCardState={setCardState} content={content} />
      {cardState && (
        <div className="flex flex-col px-3 py-2 xl:py-8 xl:px-16">
          <div className="flex flex-col">
            {content.messages &&
              content.messages.map((content: { id: any }) => <MessageCard key={content.id} content={content} />)}
          </div>
          <div className="flex flex-col items-center gap-2 py-2 xl:flex-row">
            <input
              type="text"
              placeholder="Your Answer"
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendReply();
              }}
              className="border border-[#00b2b291] bg-white rounded-full w-full xl:w-10/12 px-4 py-2 outline-none text-center xl:text-left"
            />
            <button type="button" onClick={sendReply} className="bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] text-white px-4 py-2 rounded-full font-bold w-full xl:w-2/12">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const MessageCard: FC<any> = ({ content }) => {
  return (
    <>
      {content.sender === "customer" ? (
        <div className="w-full xl:w-10/12 pl-6 xl:pr-8 py-5 px-3 xl:ml-0 mb-8 xl:mb-12 mx-auto bg-[#F2F2F2] sm:bg-white rounded-xl xl:rounded-3xl text-[#7E8096] relative">
          <p className="text-xs whitespace-pre-wrap xl:whitespace-pre-line xl:text-sm">{content.message}</p>
          <div className="absolute flex py-4 left-4">
            <div className="xl:text-white w-7 h-7 text-[#F2F2F2]">
              <SvgSpeechBubble />
            </div>
            <div className="px-2 py-2 text-sm">{content.date}</div>
          </div>
        </div>
      ) : (
        <div className="xl:pr-6 xl:pl-24 py-5 px-3 xl:py-5 mb-12 ml-auto xl:mr-0 bg-[#4CBEC5] rounded-xl xl:rounded-3xl text-white text-sm relative w-full xl:w-max text-right">
          <p className="whitespace-pre-line">{content.message}</p>
          <div className="absolute flex py-4 right-4">
            <div className="px-2 py-2 text-sm text-[#7E8096]">{content.date}</div>
            <div className="w-7 h-7">
              <SvgSpeechBubbleTwo />
            </div>
          </div>
          <div className="absolute flex items-center py-5 left-4">
            <div className={`w-7 h-7  ${content.received ? "text-[#4cbec5]" : "text-gray-500"}`}>
              <SvgM />
            </div>
            <div className="px-2 text-sm text-[#4CBEC5]">{content.received ? "Read" : "Sent"}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Support;
