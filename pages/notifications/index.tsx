import { NextPage } from "next";
import { SvgNotification } from "../../helpers/svgs/notificationSvg";

const notificationsData = [
  {
    id: 1,
    text: "Jujube Goat Milk Follow-on Formula 400g listing was removed because stock reached zero",
    time: "Today - 11:00",
    type: "daily",
  },
  {
    id: 2,
    text: "You Have a New Order",
    time: "28 May 2022 - 22:15",
    type: "order",
  },
  {
    id: 3,
    text: "CardiaPharma has shipped your order",
    time: "Today - 11:00",
    type: "routine",
  },
  {
    id: 4,
    text: "You Have a New Order",
    time: "14 May 2022 - 13:40",
    type: "order",
  },
  {
    id: 5,
    text: "Durumedi has shipped your order",
    time: "01 May 2022 - 17:12",
    type: "routine",
  },
  {
    id: 6,
    text: "onurbrooks confirmed the payment transfer for the order.",
    time: "Today - 11:00",
    type: "daily",
  },
  {
    id: 7,
    text: "Jujube Goat Milk Follow-on Formula 400g listing was removed because stock reached zero",
    time: "Today - 11:00",
    type: "daily",
  },
  {
    id: 8,
    text: "You Have a New Order",
    time: "28 May 2022 - 22:15",
    type: "order",
  },
  {
    id: 9,
    text: "CardiaPharma has shipped your order",
    time: "Today - 11:00",
    type: "routine",
  },
  {
    id: 10,
    text: "You Have a New Order",
    time: "14 May 2022 - 13:40",
    type: "order",
  },
  {
    id: 11,
    text: "Durumedi has shipped your order",
    time: "01 May 2022 - 17:12",
    type: "routine",
  },
];

const Notifications: NextPage = () => {
  return (
    <div className="mx-auto container my-8 xl:my-6 xl:px-[10rem]">
      <div className="flex w-full flex-col gap-3 xl:items-start">
        <div className="flex items-center gap-2.5 px-4 xl:px-0">
          <span className="h-5 w-5 fill-current text-brand-500" aria-hidden="true">
            <SvgNotification />
          </span>
          <h1 className="font-display text-lg font-bold text-ink">Notifications</h1>
        </div>
        <ul className="flex w-full flex-col gap-2 px-4 font-medium text-ink-soft xl:px-0">
          {notificationsData.map((el) => (
            <li
              key={el.id}
              className={`flex flex-col-reverse justify-between rounded-card border bg-surface px-5 py-3 text-sm shadow-card transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-50/40 sm:flex-row sm:items-center ${
                el.type === "daily"
                  ? "border-line border-l-4 border-l-danger"
                  : el.type === "order"
                    ? "border-line border-l-4 border-l-amber-400"
                    : "border-line border-l-4 border-l-brand-400"
              }`}
            >
              <p>{el.text}</p>
              <span className="mt-1 shrink-0 tabular-nums text-xs font-normal text-ink-muted sm:ml-6 sm:mt-0">
                {el.time}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
