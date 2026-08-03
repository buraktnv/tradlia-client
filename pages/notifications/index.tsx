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
];

const Notifications: NextPage = () => {
  return (
    <div className="container mx-auto xl:my-[1.5rem] my-[2rem] xl:px-[10rem]">
      <div className="flex flex-col gap-2 px-6 xl:items-start xl:w-full xl:px-0 xl:py-2 xl:pb-8">
        <div className="flex space-x-1 px-7">
          <SvgNotification />
          <h1 className="text-[#4CBEC5] font-medium ">Notifications</h1>
        </div>
        <div className="flex flex-col space-y-2 text-xs w-full font-medium text-[#7E8096]">
          {notificationsData.map((el) => (
            <div
              key={el.id}
              className={`flex flex-col-reverse xl:flex-row px-6 py-2 border ${
                el.type === "daily" && "border-[#9FA2B765]"
              } ${el.type === "order" ? "border-[#f59b0059]" : "border-[#00b2b23f]"} rounded-3xl justify-between`}
            >
              <p>{el.text}</p>
              <span className="font-normal text-[#4CBEC5] xl:text-[#7E8096]">{el.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
