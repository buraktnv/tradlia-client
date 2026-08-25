import React, { FC } from "react";

const Notification: FC<any> = () => {
  const notification = "Some Listings in Your Cart Have Updated Information";
  return (
    <div className="px-3 mx-3 xl:mx-0 xl:text-sm text-[12px] leading-snug xl:px-4 min-h-10 flex items-center gap-2.5 xl:py-2.5 py-3 font-medium border border-brand-200 bg-brand-50 rounded-pill text-brand-700">
      <span className="pulse-dot inline-block h-2 w-2 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
      <span>{notification}</span>
    </div>
  );
};

export default Notification;
