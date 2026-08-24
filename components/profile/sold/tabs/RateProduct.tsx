import { FC } from "react";
import { SvgFilledStar, SvgSad, SvgSmile, SvgStar, SvgStore, SvgStraight } from "../../../../helpers/svgs/soldSvg";
import PortalModal from "../../../shared/PortalModal";

const RateProduct: FC<any> = ({ setModal3 }) => {
  return (
    <PortalModal open onClose={() => setModal3(false)} panelClassName="px-6 xl:px-10 py-6">
      <div className="flex flex-col items-center justify-center gap-5">
        <button type="button"
          onClick={() => setModal3(false)}
          className=" text-[#F59C00] text-lg font-medium border border-[#f59b0045] rounded-full w-full py-2"
        >
          Rate <strong>Seller</strong>
        </button>

        <div className="flex flex-col justify-center w-full space-y-3">
          <div className="flex gap-5">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 p-3 text-[#7E8096] bg-[#F4F5F9] rounded-full border border-[#00b2b23f]">
                <SvgStore />
              </div>
              <p className="text-xl text-[#7E8096] font-semibold">GreenLeaf Co</p>
            </div>
          </div>
          <div className="flex flex-col self-end w-[65%]">
            <div className="flex text-2xl self-end font-bold text-[#F59C00]">4.3</div>
            <div className="flex justify-center w-full gap-4">
              <div className="w-7 h-7 text-[#F59C00]">
                <SvgFilledStar />
              </div>
              <div className="w-7 h-7 text-[#F59C00]">
                <SvgFilledStar />
              </div>
              <div className="w-7 h-7 text-[#F59C00]">
                <SvgFilledStar />
              </div>
              <div className="w-7 h-7 text-[#F59C00]">
                <SvgFilledStar />
              </div>
              <div className="w-7 h-7 text-[#F59C00]">
                <SvgStar />
              </div>
            </div>
            <div className="flex self-end text-xs py-2 text-[#7E8096]">32 listings</div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="flex gap-1 justify-between items-center">
            <div className="flex items-center text-xm text-[#7E8096]">The product matched its description </div>
            <div className="flex gap-1 ">
              <button type="button">
                <span className="">
                  <SvgSmile />
                </span>
              </button>
              <button type="button">
                <span className="">
                  <SvgStraight />
                </span>
              </button>
              <button type="button">
                <span className="">
                  <SvgSad />
                </span>
              </button>
            </div>
          </div>
          <div className="flex gap-1 justify-between items-center">
            <div className="flex items-center text-sm text-[#7E8096]">The store packaged the product with care</div>
            <div className="flex gap-1 items-center">
              <button type="button">
                <span className="">
                  <SvgSmile />
                </span>
              </button>
              <button type="button">
                <span className="">
                  <SvgStraight />
                </span>
              </button>
              <button type="button">
                <span className="">
                  <SvgSad />
                </span>
              </button>
            </div>
          </div>
          <div className="flex gap-1 justify-between items-center">
            <div className="flex items-center text-sm text-[#7E8096]">I am satisfied with the store's communication</div>
            <div className="flex gap-1 items-center">
              <button type="button">
                <span className="">
                  <SvgSmile />
                </span>
              </button>
              <button type="button">
                <span className="">
                  <SvgStraight />
                </span>
              </button>
              <button type="button">
                <span className="">
                  <SvgSad />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <textarea
            placeholder="Your Review"
            rows={4}
            cols={6}
            className="flex w-full px-4 py-2 border border-[#cccccca2] outline-none rounded-3xl"
          ></textarea>
          <label className="flex justify-center py-3 rounded-full gap-2 text-[#7E8096]" htmlFor="62">
            <input type="checkbox" id="62" name="" className="hidden peer" />
            <div className="w-5 h-5 rounded-md peer-checked:bg-[#F59C00] text-transparent border border-[#cccccca2]"></div>
            <p className=" whitespace-nowrap">I allow my name to appear in the review</p>
          </label>
        </div>
        <button type="button"
          onClick={() => setModal3(false)}
          className=" text-white text-lg font-medium bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] rounded-full w-full py-2"
        >
          Send
        </button>
      </div>
    </PortalModal>
  );
};

export default RateProduct;
