import { FC } from "react";
import { SvgStore } from "../../../../helpers/svgs/boughtSvg";
import PortalModal from "../../../shared/PortalModal";

import OrderDropdown from "./OrderDropdown";

const MessageSellerModal: FC<any> = ({ setModal1 }) => {
  return (
    <PortalModal open onClose={() => setModal1(false)} panelClassName="px-6 xl:px-12 py-6">
      <div className="flex flex-col gap-5">
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
    </PortalModal>
  );
};

export default MessageSellerModal;
