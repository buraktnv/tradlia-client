import Link from "next/link";
import React, { FC, useState } from "react";
import { SvgMarket, SvgMessages, SvgModalPiece } from "../../../helpers/svgs/navbarSvg";

const messageList: any[] = [
  {
    id: 0,
    title: "Delivery & Shipping",
    seller: "TradeDirect",
    message: "Hello, could you please expedite the shipping?",
    date: "20.04.2022",
    hour: "11:34",
  },
  {
    id: 1,
    title: "Delivery & Shipping",
    seller: "PackPro",
    message: "Hello, could you please expedite the shipping?",
    date: "20.04.2022",
    hour: "10:34",
  },
  {
    id: 2,
    title: "Delivery & Shipping",
    seller: "ToolWorks",
    message: "Hello, could you please expedite the shipping?",
    date: "20.04.2022",
    hour: "09:34",
  },
];

const Notification: FC<any> = () => {
  const [messageCount] = useState<number>(messageList.length);
  return (
    <div className="group">
      <div className="relative">
        <button
          type="button"
          aria-label={`Messages, ${messageCount} unread`}
          className="relative flex w-[32px] h-[24px] items-center justify-center text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-full cursor-pointer"
        >
          <SvgMessages />
          <span className="pulse-dot absolute -top-1 -right-1 bg-danger" aria-hidden="true" />
          <span role="status" className="sr-only">
            Messages, {messageCount} unread
          </span>
        </button>
        <div
          className={`relative invisible top-4 opacity-0 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none z-[99]`}
        >
          <div className="absolute w-56 h-8 right-1 -top-4"></div>
          <div className="absolute right-1 -top-3">
            <div className="w-5 h-5">
              <SvgModalPiece />
            </div>
          </div>
          <div className="absolute top-0 right-0 border border-line py-2 px-3 bg-surface z-[51] rounded-card shadow-pop w-64">
            <div className="flex items-center justify-center gap-2 px-4 pt-2 pb-3">
              <div className="w-[26px] h-[26px] text-brand-600">
                <SvgMessages />
              </div>
              <p className="font-display font-semibold text-ink">My Messages</p>
            </div>
            <div className="flex flex-col w-full divide-y divide-line">
              {messageList && messageList.map((el) => <MessageItem key={el.id} content={el} />)}
            </div>
            <div className="flex justify-center w-full py-1 pt-2">
              <Link
                href={"/profile/messages"}
                className="cursor-pointer select-none block text-sm text-center bg-brand-600 w-full rounded-pill text-white px-2 py-2 font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
              >
                View All Messages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MessageItem: FC<any> = ({ content }) => {
  return (
    <div className="py-2 cursor-pointer">
      <div className="flex items-center gap-1.5 py-1">
        <div className="flex justify-center items-center h-8 w-8 border rounded-full bg-canvas border-line text-ink-soft">
          <div className="w-5 h-5">
            <SvgMarket />
          </div>
        </div>
        <div className="text-ink-soft text-xs font-medium">{content.seller}</div>
      </div>
      <div className="font-display text-sm font-semibold leading-relaxed tracking-tight text-ink">{content.title}</div>
      <div className="text-ink-soft text-xs">{content.message}</div>
      <div className="flex text-[11px] text-ink-soft leading-relaxed mt-0.5">
        <p className="font-semibold">{content.date}</p>
        <p>- {content.hour}</p>
      </div>
    </div>
  );
};

export default Notification;
