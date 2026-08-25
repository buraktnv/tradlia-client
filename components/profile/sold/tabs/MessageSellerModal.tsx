import { FC } from "react";
import { SvgStore } from "../../../../helpers/svgs/soldSvg";
import PortalModal from "../../../shared/PortalModal";

import OrderDropdown from "./OrderDropdown";

const MessageSellerModal: FC<any> = ({ setModal1 }) => {
  return (
    <PortalModal open onClose={() => setModal1(false)} panelClassName="px-6 xl:px-10 py-5">
      <div className="flex flex-col gap-5">
        <div className="flex rounded-pill border border-line bg-brand-50 px-16 py-1 text-center font-medium text-brand-700">
          Send Message <p className="pl-2 font-bold">to Seller</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 p-3 text-ink-muted rounded-full border border-line bg-canvas">
            <SvgStore />
          </div>
          <p className="text-lg text-ink-muted font-medium">GreenLeaf Co</p>
        </div>
        <OrderDropdown />

        <textarea
          name="message"
          id="message"
          cols={20}
          rows={5}
          placeholder={"Your Message"}
          className="border rounded-[1.3rem] p-4  outline-none text-ink-muted"
        ></textarea>
        <button type="button"
          onClick={() => setModal1(false)}
          className="w-full bg-brand-400 text-white rounded-full py-2 font-bold text-lg"
        >
          Send
        </button>
      </div>
    </PortalModal>
  );
};

export default MessageSellerModal;
