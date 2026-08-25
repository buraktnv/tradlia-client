import Image from "next/image";
import { FC } from "react";
import { SvgFilledStar, SvgLike, SvgStar } from "../../../../helpers/svgs/soldSvg";
import PortalModal from "../../../shared/PortalModal";


const RateSeller: FC<any> = ({ setModal, content }) => {
  return (
    <PortalModal open onClose={() => setModal(false)} panelClassName="px-6 xl:px-10 py-6">
      <div className="flex flex-col items-center justify-center gap-5">
        <button type="button"
          onClick={() => setModal(false)}
          className=" text-successDark text-lg font-medium border border-success/40 rounded-full w-full py-2"
        >
          Rate <strong>Product</strong>
        </button>

        <div className="flex flex-col justify-center w-full space-y-3">
          <div className="flex justify-center gap-5">
            <div className="w-16 h-16 text-successDark self-center cursor-pointer">
              <SvgLike />
            </div>

            <div className="flex flex-col text-ink-muted text-md px-12 self-center">
              <Image src={content?.image} width={100} height={80} alt={content.brand} />
              <div className="">
                <p className="font-bold">{content.name} </p>
                {content.brand}
              </div>
            </div>
          </div>
          <div className="flex flex-col self-center items-center justify-center w-[65%]">
            <div className="flex text-2xl self-end font-bold text-successDark">4.1</div>
            <div className="flex justify-center w-full gap-4">
              <div className="w-7 h-7 text-successDark">
                <SvgFilledStar />
              </div>
              <div className="w-7 h-7 text-successDark">
                <SvgFilledStar />
              </div>
              <div className="w-7 h-7 text-successDark">
                <SvgFilledStar />
              </div>
              <div className="w-7 h-7 text-successDark">
                <SvgFilledStar />
              </div>
              <div className="w-7 h-7 text-successDark">
                <SvgStar />
              </div>
            </div>
            <div className="flex self-end text-xs py-2 text-ink-muted">32 listings</div>
          </div>
        </div>

        <div className="flex flex-col w-full ">
          <textarea
            placeholder="Your Review"
            rows={4}
            cols={6}
            className="flex w-full px-4 py-2 border outline-none rounded-3xl"
          ></textarea>
          <label className="flex justify-center py-3 rounded-full gap-2 text-ink-muted" htmlFor="61">
            <input type="checkbox" id="61" name="" className="hidden peer" />
            <div className="w-5 h-5 rounded-md peer-checked:bg-success text-transparent border border-line"></div>
            <p className=" whitespace-nowrap">I allow my name to appear in the review</p>
          </label>
        </div>
        <button type="button"
          onClick={() => setModal(false)}
          className=" text-white text-lg font-medium bg-success rounded-full w-full py-2"
        >
          Send
        </button>
      </div>
    </PortalModal>
  );
};


export default RateSeller;
