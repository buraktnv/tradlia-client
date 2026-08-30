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
      <div className="flex flex-col w-full bg-canvas xl:bg-transparent">
        <div className="mx-3 mb-3 flex flex-col justify-between gap-3 rounded-card border border-line bg-surface p-2 shadow-card sm:flex-row sm:items-center xl:mx-0 xl:mb-[1.5rem] mt-3 xl:mt-[1.5rem]">
          <div className="flex flex-wrap items-center justify-around gap-2 py-1 sm:justify-start xl:gap-8">
            <div className="flex xl:px-2">
              <FilterDropdown filterList={filterList} />
            </div>
            <div className="flex xl:px-2">
              <DateDropdown />
            </div>
          </div>
          <div className="relative flex rounded-full ring-1 ring-brand-200 transition duration-200 focus-within:ring-2 focus-within:ring-brand-400/40">
            <input
              type="search"
              id="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-full bg-surface px-5 text-left text-sm text-ink outline-none placeholder:font-light placeholder:text-ink-muted focus-visible:outline-none sm:w-64 xl:w-72"
            />
            <div className="absolute w-5 h-5 right-4 xl:right-10 top-3.5 text-brand-500">
              <SvgSearch />
            </div>
          </div>
        </div>
        <div className="mx-3 mb-3 xl:mb-[1.5rem] xl:mx-0">
          <button type="button"
            className="inline-flex h-[2.75rem] items-center justify-center rounded-pill bg-brand-400 px-8 py-3 text-sm font-semibold text-white shadow-card outline-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
            onClick={() => setModal(true)}
          >
            New Support Request
          </button>
        </div>
        <div className="flex flex-col xl:gap-[1rem] gap-5">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((content: any) => <Card key={content.id} content={content} onReply={replyToTicket} />)
          ) : (
            <div className="rounded-card border border-line bg-surface p-10 text-center text-sm text-ink-muted shadow-card">
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
    <div className="grid grid-cols-3 gap-3 rounded-card border border-line bg-surface p-4 font-medium shadow-card xl:grid-cols-5 xl:gap-6 xl:p-6">
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="font-display text-xs uppercase tracking-wider text-ink-muted">ID</div>
        <div className="text-ink-soft rounded-full border-line py-2 w-full xl:w-1/2 text-center xl:h-[3rem] flex items-center justify-center">
          {content.id}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full col-span-2 gap-2 text-ellipsis xl:col-span-1">
        <div className="font-display text-xs uppercase tracking-wider text-ink-muted">Subject</div>
        <div className="text-ink-soft rounded-full border-line px-4 whitespace-nowrap w-full py-2 text-center xl:h-[3rem] flex items-center justify-center">
          {content.subject}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="font-display text-xs uppercase tracking-wider text-ink-muted">Date</div>
        <div className="text-ink-soft rounded-full border-line w-full text-center xl:px-4 py-2 xl:h-[3rem] flex items-center justify-center">
          {content.date}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-2 gap-2 xl:col-span-1">
        <div className="font-display text-xs uppercase tracking-wider text-ink-muted">Status</div>
        <div className="text-ink-soft rounded-full border-line px-8 py-2 w-full xl:w-full text-center xl:h-[3rem] flex items-center justify-center">
          {content.condition}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center col-span-3 gap-2 xl:col-span-1">
        <div className="font-display text-xs uppercase tracking-wider text-ink-muted hidden xl:block">Action</div>
        <button type="button"
          onClick={() => setCardState((pre: any) => !pre)}
          className={`flex h-[2.75rem] w-full items-center justify-center gap-1.5 rounded-pill px-6 py-2 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 xl:w-auto ${
            active ? "border border-brand-400 bg-brand-400 text-white" : "border border-line bg-surface text-brand-600 hover:border-brand-300 hover:bg-brand-50"
          }`}
        >
          <span className={`h-4 w-4 shrink-0 fill-current ${active ? "text-white" : "text-brand-500"}`}>
            <SvgPencil />
          </span>
          <span className={`ml-1.5 block text-xs xl:hidden ${active ? "text-white" : ""}`}>
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
    <div className="mx-3 flex flex-col overflow-hidden rounded-card border border-line bg-surface text-sm shadow-card xl:mx-0">
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
              className="w-full rounded-pill border border-line bg-surface px-5 py-2.5 text-sm outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-400/30 xl:w-10/12 xl:text-left"
            />
            <button type="button" onClick={sendReply} className="inline-flex w-full items-center justify-center rounded-pill bg-brand-400 px-4 py-2.5 font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:w-2/12">
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
        <div className="w-full xl:w-10/12 px-4 py-5 mb-8 mr-auto rounded-card border border-line bg-canvas relative xl:ml-0 xl:mb-12 xl:w-10/12 text-ink-soft relative">
          <p className="text-xs whitespace-pre-wrap xl:whitespace-pre-line xl:text-sm">{content.message}</p>
          <div className="absolute flex py-4 left-4">
            <div className="fill-current h-7 w-7 text-surface">
              <SvgSpeechBubble />
            </div>
            <div className="px-2 py-2 text-sm">{content.date}</div>
          </div>
        </div>
      ) : (
        <div className="px-4 py-5 mb-12 ml-auto rounded-card bg-brand-400 text-white relative w-full text-right xl:mr-0 xl:w-max xl:pl-24">
          <p className="whitespace-pre-line">{content.message}</p>
          <div className="absolute flex py-4 right-4">
            <div className="px-2 py-2 text-sm text-ink-soft">{content.date}</div>
            <div className="w-7 h-7">
              <SvgSpeechBubbleTwo />
            </div>
          </div>
          <div className="absolute flex items-center py-5 left-4">
            <div className={`w-7 h-7  ${content.received ? "text-brand-500" : "text-gray-500"}`}>
              <SvgM />
            </div>
            <div className="px-2 text-xs text-surface/90">{content.received ? "Read" : "Sent"}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Support;
