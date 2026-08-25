import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { SvgFilledStar, SvgLike, SvgStar } from "../../../../helpers/svgs/boughtSvg";

const RateSeller: FC<any> = ({ setModal, content }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="fixed inset-0 top-0 bottom-0 left-0 right-0 z-[9999]">
      <div
        className={`bg-ink/60 backdrop-blur-sm fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out z-20 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setModal(() => false), 300);
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`bg-white flex flex-col gap-3 xl:gap-5 rounded-3xl px-5 w-full mx-5 xl:mx-0 xl:w-4/12 xl:px-12 py-5 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <button type="button"
            onClick={() => setModal(false)}
            className=" text-successDark text-lg gap-1 font-medium border border-success/40 rounded-full w-full h-10 flex items-center justify-center"
          >
            Rate <strong>Product</strong>
          </button>

          <div className="flex flex-col justify-center w-full space-y-3">
            <div className="flex justify-around gap-5 px-8">
              <div className="xl:w-16 h-12 w-12 xl:h-16 text-successDark self-center cursor-pointer">
                <SvgLike />
              </div>

              <div className="flex justify-center flex-col text-ink-muted text-sm leading-4 xl:px-12 self-center">
                <Image className="object-contain" src={content?.image} width={100} height={80} alt={content.brand} />
                <div className="flex flex-col items-center">
                  <p className="font-bold">{content.name} </p>
                  {content.brand}
                </div>
              </div>
            </div>
            <div className="flex flex-col self-center items-center justify-center w-[65%]">
              <div className="flex text-xl xl:text-2xl self-end font-bold text-successDark">4.1</div>
              <div className="flex justify-end w-full gap-4">
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-successDark">
                  <SvgFilledStar />
                </div>
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-successDark">
                  <SvgFilledStar />
                </div>
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-successDark">
                  <SvgFilledStar />
                </div>
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-successDark">
                  <SvgFilledStar />
                </div>
                <div className="xl:w-7 w-5 h-5 xl:h-7 text-successDark">
                  <SvgStar />
                </div>
              </div>
              <div className="flex self-end text-xs py-2 text-ink-muted">32 listings</div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <textarea
              placeholder="Your Review"
              rows={5}
              cols={6}
              className="flex w-full px-4 py-2 border outline-none rounded-xl xl:rounded-2xl xl:text-sm text-[12px] leading-3"
            ></textarea>
            <label className="flex items-center py-3 rounded-full gap-2 text-ink-muted" htmlFor="61">
              <input type="checkbox" id="61" name="" className="hidden peer" />
              <div className="w-5 h-5 rounded-md peer-checked:bg-success text-transparent border border-line"></div>
              <p className="text-[12px] leading-3 xl:text-sm whitespace-nowrap">
                I allow my name to be shown in reviews
              </p>
            </label>
          </div>
          <button type="button"
            onClick={() => setModal(false)}
            className=" text-white text-sm xl:text-lg font-medium bg-success rounded-full w-full h-10 flex items-center justify-center"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateSeller;
