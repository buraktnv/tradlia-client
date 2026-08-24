import Link from "next/link";
import React, { FC, useState } from "react";
import { SvgModalPiece, SvgNotifications } from "../../../helpers/svgs/navbarSvg";

const notificationList: any[] = [
  {
    id: 0,
    title: "Today - 11:00",
    message: "Jujube Goat Milk Follow-on Formula 400g listing was removed because stock reached zero.",
  },
  {
    id: 1,
    title: "Today - 10:00",
    message: "Jujube Goat Milk Follow-on Formula 400g listing was removed because stock reached zero.",
  },
  {
    id: 2,
    title: "18.06.2022 - 12:00",
    message: "Jujube Goat Milk Follow-on Formula 400g listing was removed because stock reached zero.",
  },
  {
    id: 3,
    title: "17.06.2022 - 15:00",
    message: "Jujube Goat Milk Follow-on Formula 400g listing was removed because stock reached zero.",
  },
];

const Notification: FC<any> = () => {
  const [notificationCount] = useState<number>(notificationList.length);
  return (
    <div className="group">
      <div className="relative">
        <div className="w-[26px] h-[26px] relative cursor-pointer">
          <SvgNotifications />
          <div className="absolute -right-1 justify-center px-1 text-xs text-center text-white bg-gradient-to-r from-[#FF516B] to-[#FF0045] rounded-full -bottom-2">
            {notificationCount}
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
          <div className="absolute top-0 right-0 border border-[#00b2b27e] py-2 px-3 bg-white z-[51] rounded-l-xl rounded-b-2xl w-56">
            <div className="flex items-center justify-center gap-2 px-4 pt-2 pb-3">
              <div className="w-[26px] h-[26px]">
                <SvgNotifications />
              </div>
              <p className="font-medium text-[#4CBEC5]">Notifications</p>
            </div>
            <div className="flex flex-col w-full">
              {notificationList && notificationList.map((el) => <NotificationItem key={el.id} content={el} />)}
            </div>
            <div className="flex justify-center w-full py-1">
              <Link href={"/notifications"}>
                <button type="button" className="cursor-pointer select-none text-sm bg-gradient-to-r from-[#FF516B] to-[#FF0045] rounded-full text-white px-2 py-2 w-full font-bold">
                  Show All Notifications
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotificationItem: FC<any> = ({ content }) => {
  return (
    <div>
      <div className="w-full h-[1px] bg-[#4CBEC5]/75"></div>
      <div className="pt-1.5 pb-3">
        <div className="font-medium text-[#4CBEC5] text-base leading-relaxed tracking-tight">{content.title}</div>
        <div className="text-[#7E8096] leading-snug text-[0.8rem]">{content.message}</div>
      </div>
    </div>
  );
};



export default Notification;
