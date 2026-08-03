import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { SvgFilledStar, SvgLike, SvgStar } from "../../../../helpers/svgs/soldSvg";


const RateSeller: FC<any> = ({ setModal, content }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full">
      <div
        className={`bg-[#000000be] fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out z-20 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setModal(() => false), 300);
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`bg-white p-7 flex flex-col items-center justify-center gap-5 rounded-3xl py-6 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <button type="button"
            onClick={() => setModal(false)}
            className=" text-[#86BC25] text-lg font-medium border border-[#86BC2565] rounded-full w-full py-2"
          >
            Rate <strong>Product</strong>
          </button>

          <div className="flex flex-col justify-center w-full space-y-3">
            <div className="flex justify-center gap-5">
              <div className="w-16 h-16 text-[#86BC25] self-center cursor-pointer">
                <SvgLike />
              </div>

              <div className="flex flex-col text-[#7E8096] text-md px-12 self-center">
                <Image src={content?.image} width={100} height={80} alt={content.brand} />
                <div className="">
                  <p className="font-bold">{content.name} </p>
                  {content.brand}
                </div>
              </div>
            </div>
            <div className="flex flex-col self-center items-center justify-center w-[65%]">
              <div className="flex text-2xl self-end font-bold text-[#86BC25]">4.1</div>
              <div className="flex justify-center w-full gap-4">
                <div className="w-7 h-7 text-[#86BC25]">
                  <SvgFilledStar />
                </div>
                <div className="w-7 h-7 text-[#86BC25]">
                  <SvgFilledStar />
                </div>
                <div className="w-7 h-7 text-[#86BC25]">
                  <SvgFilledStar />
                </div>
                <div className="w-7 h-7 text-[#86BC25]">
                  <SvgFilledStar />
                </div>
                <div className="w-7 h-7 text-[#86BC25]">
                  <SvgStar />
                </div>
              </div>
              <div className="flex self-end text-xs py-2 text-[#7E8096]">32 listings</div>
            </div>
          </div>

          <div className="flex flex-col w-full ">
            <textarea
              placeholder="Your Review"
              rows={4}
              cols={6}
              className="flex w-full px-4 py-2 border outline-none rounded-3xl"
            ></textarea>
            <label className="flex justify-center py-3 rounded-full gap-2 text-[#7E8096]" htmlFor="61">
              <input type="checkbox" id="61" name="" className="hidden peer" />
              <div className="w-5 h-5 rounded-md peer-checked:bg-[#86BC25] text-transparent border border-[#CCCCCC]"></div>
              <p className=" whitespace-nowrap">I allow my name to appear in the review</p>
            </label>
          </div>
          <button type="button"
            onClick={() => setModal(false)}
            className=" text-white text-lg font-medium bg-gradient-to-r from-[#AFCA19] to-[#52AE33] rounded-full w-full py-2"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};


export default RateSeller;
