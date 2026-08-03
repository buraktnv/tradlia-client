import { FC, useEffect, useState } from "react";
import { SvgStore } from "../../../../helpers/svgs/boughtSvg";

import OrderDropdown from "./OrderDropdown";

const MessageSellerModal: FC<any> = ({ setModal1 }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute top-0 left-0 z-[9999] w-full h-full md:fixed">
      <div
        className={`bg-[#000000be] fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out z-20 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setModal1(() => false), 300);
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`bg-white flex flex-col gap-5 rounded-3xl px-6 w-full mx-5 xl:mx-0 xl:w-4/12 xl:px-12 py-6 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="flex items-center justify-center py-1 h-10 text-[#4CBEC5] border border-[#00b2b280] rounded-full text-center text-md">
            Send <p className="pl-2 font-bold">Message to Seller</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="xl:w-16 h-8 w-8 xl:h-16 p-1.5 xl:p-3 text-[#7E8096] bg-[#F4F5F9] rounded-full border border-[#00B1B280]">
              <SvgStore />
            </div>
            <p className="text-xl text-[#7E8096] font-medium">ShopMart</p>
          </div>
          <OrderDropdown />

          <textarea
            name="message"
            id="message"
            cols={20}
            rows={6}
            placeholder={"Your Message"}
            className="border rounded-[1.3rem] p-4  outline-none text-[#7E8096] text-[12px] leading-3 xl:text-sm"
          ></textarea>
          <button type="button"
            onClick={() => setModal1(false)}
            className="w-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white rounded-full flex items-center justify-center h-10 font-bold text-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSellerModal;
