import { FC } from "react";
import { SvgStore } from "../../../../helpers/svgs/boughtSvg";
import PortalModal from "../../../shared/PortalModal";

import OrderDropdown from "./OrderDropdown";

const MessageSellerModal: FC<any> = ({ setModal1 }) => {
  return (
    <PortalModal open onClose={() => setModal1(false)} panelClassName="px-6 xl:px-12 py-6">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center py-1 h-10 rounded-pill border border-line bg-brand-50 text-brand-700 text-center text-base font-medium">
          Send <p className="pl-2 font-bold">Message to Seller</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="xl:w-16 h-8 w-8 xl:h-16 p-1.5 xl:p-3 text-ink-muted bg-canvas rounded-full border border-line">
            <SvgStore />
          </div>
          <p className="text-xl text-ink-muted font-medium">ShopMart</p>
        </div>
        <OrderDropdown />

        <textarea
          name="message"
          id="message"
          cols={20}
          rows={6}
          placeholder={"Your Message"}
          className="border rounded-[1.3rem] p-4  outline-none text-ink-muted text-[12px] leading-3 xl:text-sm"
        ></textarea>
        <button type="button"
          onClick={() => setModal1(false)}
          className="w-full bg-brand-400 text-white rounded-full flex items-center justify-center h-10 font-bold text-lg"
        >
          Send
        </button>
      </div>
    </PortalModal>
  );
};

export default MessageSellerModal;
