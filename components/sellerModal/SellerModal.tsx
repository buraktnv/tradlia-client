import { FC } from "react";
import { SvgStorefront } from "../../helpers/svgs/sellerSvg";
import PortalModal from "../shared/PortalModal";
import OrderDropdown from "../profile/bought/tabs/OrderDropdown";

const SellerModal: FC<any> = ({ setModal }) => {
  return (
    <PortalModal open onClose={() => setModal(false)} panelClassName="px-5 xl:px-8 py-6">
      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-col gap-1">
          <h2 className="font-display text-lg font-semibold text-ink">Send Message to Seller</h2>
          <p className="text-sm text-ink-muted">Your message goes directly to the seller&rsquo;s inbox.</p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className="w-14 h-14 p-3.5 text-brand-600 bg-canvas rounded-full border border-line flex items-center justify-center"
            aria-hidden="true"
          >
            <SvgStorefront />
          </div>
          <p className="font-display text-base font-semibold text-ink">Tradlia</p>
        </div>
        <OrderDropdown />

        <textarea
          name="message"
          id="message"
          cols={20}
          rows={5}
          placeholder={"Your Message"}
          aria-label="Your message"
          className="w-full border border-line bg-surface rounded-card p-4 outline-none text-sm text-ink placeholder:text-ink-muted transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        ></textarea>
        <button
          type="button"
          onClick={() => setModal(false)}
          className="w-full rounded-pill py-3 bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
        >
          Send
        </button>
      </div>
    </PortalModal>
  );
};

export default SellerModal;
