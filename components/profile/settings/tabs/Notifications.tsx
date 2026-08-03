import React, { FC } from "react";

const Notifications: FC<any> = () => {
  return (
    <div className="grid gap-6">
      <div className="xl:bg-[#F4F5F7] xl:px-[2rem] rounded-2xl grid gap-2 xl:gap-[1.5rem] xl:py-[3rem] xl:pt-[2.5rem]">
        <div className="font-bold text-[#E94190] pl-6">Email Notifications</div>
        <div className="grid xl:grid-cols-3">
          <Card
            content={{
              id: 0,
              text: "I want to be notified about \nimportant campaigns via email.",
            }}
          />
        </div>
      </div>
      <div className="xl:bg-[#F4F5F7] rounded-2xl grid gap-[1.5rem] xl:px-[2rem] xl:py-[3rem]">
        <div className="grid grid-cols-3 gap-6">
          <div className="w-full">
            <div className="w-[180%] xl:w-full font-bold text-[#E94190] pb-2 xl:pb-[1.5rem] pl-6">SMS Notifications</div>
            <div className="flex flex-col w-full pb-[0.375rem]">
              <label
                htmlFor="mobile-phone"
                className="w-[180%] xl:w-full xl:font-medium text-[#A0A2AF] pl-6 text-sm pb-1"
              >
                Mobile Phone*
              </label>
              <input
                type="text"
                name=""
                id="mobile-phone"
                placeholder="+1 (555) 012-3456"
                className="w-[323%] sm:w-[313%] xl:w-full px-6 py-3 rounded-full text-sm xl:font-bold xl:border xl:border-[#c6c6c665]  placeholder:text-[#A0A2AF] outline-none text-[#A0A2AF] focus:ring-1 drop-shadow-input-shadow"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-4 xl:grid-cols-3 xl:gap-6">
          <Card
            content={{
              id: 1,
              text: "I want to be notified by SMS when I receive a new message.",
            }}
          />
          <Card
            content={{
              id: 2,
              text: "I want to be notified about important campaigns via SMS.",
            }}
          />
          <Card
            content={{
              id: 3,
              text: "I want to be notified by SMS if my order is updated by the seller due to insufficient stock.",
            }}
          />
          <Card
            content={{
              id: 4,
              text: "I want to be notified by SMS if my order is cancelled.",
            }}
          />
          <Card
            content={{
              id: 5,
              text: "I want to be notified by SMS when my order is shipped.",
            }}
          />
          <Card
            content={{
              id: 6,
              text: "I want to be notified by SMS when I receive a new message.",
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center xl:flex-none xl:items-start xl:justify-start xl:px-8">
        <button type="button" className="font-medium xl:font-bold px-6 xl:px-10 py-3 rounded-full bg-[#E94190] text-white text-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
};

const Card: FC<any> = ({ content }) => {
  return (
    <div className="text-[#A0A2AF] bg-white rounded-2xl pr-4 py-6 drop-shadow-input-shadow font-thin xl:font-normal text-sm relative h-full xl:border xl:border-[#c6c6c665]">
      <label htmlFor={content.id} className="block h-full select-none">
        <div className="px-3 whitespace-pre-line xl:pl-8 xl:pr-16">{content.text}</div>
        <div className="flex items-end justify-end px-6">
          <input type="checkbox" id={content.id} className="hidden peer" />
          <div className="absolute flex justify-center items-center right-2 bottom-9 sm:right-3 sm:bottom-6 w-5 h-5 rounded-md peer-checked:bg-[#E94190] text-transparent peer-checked:text-white mt-2 border border-[#E94190]">
            <div className="w-2.5 h-2.5 ">
              <SvgCheckMark />
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

const SvgCheckMark = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 23.205 17.662">
    <path
      id="Path_106"
      data-name="Path 106"
      d="M1453.122,6131.862a3.426,3.426,0,0,1-2.35-1.009c-1.852-1.776-3.69-3.615-5.463-5.466a3.2,3.2,0,0,1-.043-4.717,3.161,3.161,0,0,1,2.266-.968,3.662,3.662,0,0,1,2.458,1.02c.611.554,1.214,1.154,1.792,1.786.366.4.708.828,1.071,1.279l.143.178,2.332-2.347c2.129-2.145,4.149-4.178,6.181-6.2a3.884,3.884,0,0,1,2.709-1.219,3.165,3.165,0,0,1,2.356,1.068,3.213,3.213,0,0,1-.086,4.511c-3.6,3.671-7.336,7.406-11.093,11.1a3.21,3.21,0,0,1-2.273.981Z"
      transform="translate(-1444.251 -6114.2)"
      fill="currentColor"
    />
  </svg>
);

export default Notifications;
