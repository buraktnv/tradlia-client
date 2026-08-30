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
        <button
          type="button"
          aria-label={`Notifications, ${notificationCount} unread`}
          className="relative flex w-[26px] h-[26px] items-center justify-center text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-full cursor-pointer"
        >
          <SvgNotifications />
          <span className="pulse-dot absolute top-0 -right-1 bg-danger" aria-hidden="true" />
          <span role="status" className="sr-only">
            Notifications, {notificationCount} unread
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
                <SvgNotifications />
              </div>
              <p className="font-display font-semibold text-ink">Notifications</p>
            </div>
            <div className="flex flex-col w-full divide-y divide-line">
              {notificationList && notificationList.map((el) => <NotificationItem key={el.id} content={el} />)}
            </div>
            <div className="flex justify-center w-full py-1 pt-2">
              <Link
                href={"/notifications"}
                className="cursor-pointer select-none block text-sm text-center bg-brand-600 rounded-pill text-white px-2 py-2 w-full font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
              >
                Show All Notifications
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
    <div className="pt-2 pb-3 px-1">
      <div className="font-display text-sm font-semibold leading-relaxed tracking-tight text-ink">{content.title}</div>
      <div className="text-ink-soft leading-snug text-xs mt-0.5">{content.message}</div>
    </div>
  );
};

export default Notification;
