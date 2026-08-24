import { FC } from "react";
import { SvgTooth } from "../../helpers/svgs/sellerSvg";
import PortalModal from "../shared/PortalModal";
import OrderDropdown from "../profile/bought/tabs/OrderDropdown";

const SellerModal: FC<any> = ({ setModal }) => {
  return (
    <PortalModal open onClose={() => setModal(false)} panelClassName="px-5 xl:px-10 py-5">
      <div className="flex flex-col w-full gap-5">
        <div className="flex px-16 py-1 text-[#4CBEC5] border border-[#00b2b280] rounded-full text-center text-md">
          Send <p className="pl-2 font-bold">Message to Seller</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 p-3 text-[#00a29d9a] bg-[#F4F5F9] rounded-full border border-[#00b2b280]">
            <SvgTooth />
          </div>
          <p className="text-lg text-[#7E8096] font-medium">Tradlia</p>
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
          onClick={() => setModal(false)}
          className="w-full bg-gradient-to-r from-[#66C1BF] to-[#00A29D] text-white rounded-full py-2 font-bold text-lg"
        >
          Send
        </button>
      </div>
    </PortalModal>
  );
};

export default SellerModal;
