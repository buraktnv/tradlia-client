import React, { FC } from "react";

const Notification: FC<any> = () => {
  const notification = "Some Listings in Your Cart Have Updated Information";
  return (
    <div className="px-3 mx-3 xl:mx-0 xl:text-sm text-[12px] leading-3 xl:px-8 h-10 flex items-center xl:py-3 font-medium xl:font-bold border border-[#E8336E80] xl:border-[#00B1B280] bg-white rounded-full text-[#FB295A]">
      {notification}
    </div>
  );
};

export default Notification;
