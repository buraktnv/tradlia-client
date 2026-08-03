import { FC, useEffect, useState } from "react";
import { SvgStore } from "../../../../helpers/svgs/soldSvg";

import OrderDropdown from "./OrderDropdown";

const MessageSellerModal: FC<any> = ({ setModal1 }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute top-0 left-0 z-10 w-full h-full md:fixed">
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
          className={`bg-white flex flex-col gap-5 rounded-3xl px-10 py-5 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="flex px-16 py-1 text-[#4CBEC5] border border-[#00b2b280] rounded-full text-center text-md">
            Send Message <p className="pl-2 font-bold">to Seller</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 p-3 text-[#7E8096] bg-[#F4F5F9] rounded-full border border-[#00B1B2]">
              <SvgStore />
            </div>
            <p className="text-lg text-[#7E8096] font-medium">GreenLeaf Co</p>
          </div>
          <OrderDropdown />

          <textarea
            name="message"
            id="message"
            cols={20}
            rows={5}
            placeholder={"Your Message"}
            className="border rounded-[1.3rem] p-4  outline-none text-[#7E8096]"
          ></textarea>
          <button type="button"
            onClick={() => setModal1(false)}
            className="w-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white rounded-full py-2 font-bold text-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSellerModal;
