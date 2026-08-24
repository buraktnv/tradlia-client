import Link from "next/link";
import React, { FC, useState } from "react";
import { SvgMarket, SvgMessages, SvgModalPiece } from "../../../helpers/svgs/navbarSvg";

const messageList: any[] = [
  {
    id: 0,
    title: "Delivery & Shipping",
    seller: "PharmaTrend",
    message: "Hello, could you please expedite the shipping?",
    date: "20.04.2022",
    hour: "11:34",
  },
  {
    id: 1,
    title: "Delivery & Shipping",
    seller: "PharmaTrend",
    message: "Hello, could you please expedite the shipping?",
    date: "20.04.2022",
    hour: "10:34",
  },
  {
    id: 2,
    title: "Delivery & Shipping",
    seller: "PharmaTrend",
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
        <div className="w-[32px] h-[24px] relative cursor-pointer">
          <SvgMessages />
          <div className="absolute -right-1 justify-center px-1 text-xs text-center text-white bg-gradient-to-r from-[#66C1BF] to-[#00A29D] rounded-full -bottom-2">
            {messageCount}
          </div>
        </div>
        <div
          className={`relative invisible top-4  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:visible z-[99]`}
        >
          <div className="absolute w-56 h-8 right-1 -top-4"></div>
          <div className="absolute right-1 -top-3">
            <div className="w-5 h-5">
              <SvgModalPiece />
            </div>
          </div>
          <div className="absolute top-0 right-0 border border-[#00b2b27e] py-2 px-3 bg-white z-[51] rounded-l-xl rounded-b-2xl w-64">
            <div className="flex items-center justify-center gap-2 px-4 pt-2 pb-3">
              <div className="w-[26px] h-[26px]">
                <SvgMessages />
              </div>
              <p className="font-medium text-[#4CBEC5]">My Messages</p>
            </div>
            <div className="flex flex-col w-full">
              {messageList && messageList.map((el) => <MessageItem key={el.id} content={el} />)}
            </div>
            <div className="flex justify-center w-full py-1">
              <Link href={"/profile/messages"}>
                <button type="button" className="cursor-pointer select-none text-sm bg-gradient-to-r from-[#66C1BF] to-[#00A29D] w-full rounded-full text-white px-2 py-2 font-bold">
                  View All Messages
                </button>
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
    <div className="py-1 cursor-pointer">
      <div className="w-full h-[1px] bg-[#4CBEC5]/75"></div>
      <div className="pt-1.5 pb-3">
        <div className="flex items-center gap-1 py-1">
          <div className="flex justify-center items-center h-8 w-8 border rounded-full bg-[#F2F2F2] border-[#4CBEC5]">
            <div className="w-5 h-5">
              <SvgMarket />
            </div>
          </div>
          <div className="text-[#7E8096] font-medium">{content.seller}</div>
        </div>
        <div className="font-medium text-[#4CBEC5] text-base leading-relaxed tracking-tight">{content.title}</div>
        <div className="text-[#7E8096] text-sm">{content.message}</div>
        <div className="flex text-xs text-[#7E8096] leading-relaxed">
          <p className="font-bold">{content.date}</p>
          <p>- {content.hour}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
