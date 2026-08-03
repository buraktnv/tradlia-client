import { FC, useEffect, useState } from "react";
import { SvgFilledStar, SvgSad, SvgSmile, SvgStar, SvgStore, SvgStraight } from "../../../../helpers/svgs/boughtSvg";

const RateProduct: FC<any> = ({ setModal3 }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-[9999] w-full h-full">
      <div
        className={`bg-[#000000be] fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out z-20 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setModal3(() => false), 300);
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`bg-white flex flex-col gap-3 xl:gap-5 rounded-3xl px-5 w-full mx-5 xl:mx-0 xl:w-4/12 xl:px-12 py-5 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <button type="button"
            onClick={() => setModal3(false)}
            className=" text-[#F59C00] text-lg font-medium border border-[#f59b0045] rounded-full w-full h-10 flex items-center justify-center gap-1"
          >
            Rate <strong> Seller</strong>
          </button>
          <div className="flex flex-col justify-center w-full space-y-3">
            <div className="flex items-center gap-3">
              <div className="xl:w-16 h-10 w-10 xl:h-16 p-1.5 xl:p-3 text-[#7E8096] bg-[#F4F5F9] rounded-full border border-[#00B1B280]">
                <SvgStore />
              </div>
              <p className="text-xl text-[#7E8096] font-medium">ShopMart</p>
            </div>
            <div className="flex flex-col self-end w-[65%]">
              <div className="flex text-2xl self-end font-bold text-[#F59C00]">4.3</div>
              <div className="flex justify-end w-full gap-3 xl:gap-4">
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-[#F59C00]">
                  <SvgFilledStar />
                </div>
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-[#F59C00]">
                  <SvgFilledStar />
                </div>
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-[#F59C00]">
                  <SvgFilledStar />
                </div>
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-[#F59C00]">
                  <SvgFilledStar />
                </div>
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-[#F59C00]">
                  <SvgStar />
                </div>
              </div>
              <div className="flex self-end text-xs py-2 text-[#7E8096]">32 listings</div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center text-[12px] leading-3 text-[#7E8096] whitespace-nowrap">
                Product was as described in the listing
              </div>
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
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center text-[12px] leading-3 text-[#7E8096] whitespace-nowrap">
                Store took care with product packaging
              </div>
              <div className="flex items-center gap-1">
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
            <div className="flex items-center justify-between gap-1">
              <div className="flex items-center text-[12px] leading-3 text-[#7E8096] whitespace-nowrap">
                I'm satisfied with the store's communication
              </div>
              <div className="flex items-center gap-1">
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
              rows={5}
              cols={6}
              className="flex w-full text-[12px] leading-3 px-4 py-2 xl:text-sm border border-[#cccccca2] outline-none rounded-xl xl:rounded-3xl"
            ></textarea>
            <label className="flex items-center pt-3 rounded-full gap-2 text-[#7E8096]" htmlFor="62">
              <input type="checkbox" id="62" name="" className="hidden peer" />
              <div className="w-5 h-5 rounded-md peer-checked:bg-[#F59C00] text-transparent border border-[#cccccca2]"></div>
              <p className="text-[12px] leading-3 whitespace-nowrap xl:text-sm">
                I allow my name to be shown in reviews
              </p>
            </label>
          </div>
          <button type="button"
            onClick={() => setModal3(false)}
            className=" text-white text-base xl:text-lg font-medium bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] rounded-full w-full h-10 flex items-center justify-center"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateProduct;
