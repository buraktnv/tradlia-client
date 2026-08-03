import { FC } from "react";
import { SmileFace, SvgEmptyStar, SvgStar } from "../../../helpers/svgs/feedbackSvg";

const SingleFeedback: FC<any> = ({ content }) => {
  return (
    <div>
      <div className="grid grid-cols-1 px-4 py-2 mx-3 bg-white border xl:px-4 xl:gap-3 xl:grid-cols-7 rounded-3xl xl:bg-transparent xl:mx-0">
        <div className="xl:col-span-2 flex xl:flex-col justify-between xl:justify-center gap-1 xl:gap-3 xl:border-r border-b xl:border-b-0 border-[#CCCCCC65] xl:p-0 py-2 xl:mx-4 xl:my-4 w-full">
          <div className="flex flex-col gap-2 py-1 xl:gap-3">
            <div className="flex items-center h-full gap-2">
              <span className="xl:w-6 xl:h-6 w-4 h-4 text-[#8dbe22]">
                <SmileFace />
              </span>
              <p className="text-[#7E8096] xl:text-sm text-[10.5px] leading-3 whitespace-nowrap -tracking-wide">
                The product was as described
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="xl:w-6 xl:h-6 w-4 h-4 text-[#8dbe22]">
                <SmileFace />
              </div>
              <p className="text-[#7E8096] xl:text-sm text-[10.5px] leading-3 whitespace-nowrap -tracking-wide">
                The store took care in product packaging
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="xl:w-6 xl:h-6 w-4 h-4 text-[#8dbe22]">
                <SmileFace />
              </span>
              <p className="text-[#7E8096] xl:text-sm text-[10.5px] leading-3 whitespace-nowrap -tracking-wide">
                I am satisfied with the store's communication
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-between xl:justify-start xl:gap-2 xl:flex-row">
            <div className="flex flex-col-reverse items-center justify-between xl:justify-start xl:gap-2 xl:flex-row">
              <div className="text-[#F9B000] flex gap-1">
                {Array(Math.floor(content.vote))
                  .fill(0)
                  .map((x, index) => {
                    return (
                      <div key={index} className="w-4 h-4 xl:w-5 xl:h-5">
                        <SvgStar />
                      </div>
                    );
                  })}
                {Array(5 - Math.floor(content.vote))
                  .fill(0)
                  .map((x, index) => (
                    <div key={index} className="w-4 h-4 xl:w-5 xl:h-5">
                      <SvgEmptyStar key={index} />
                    </div>
                  ))}
              </div>
              <p className="font-bold text-[#F9B000] leading-4 text-base xl:text-xl text-right xl:text-start w-full xl:w-fit">
                {String(content.vote).replace(".", ",")}
              </p>
            </div>
            <p className="text-xs xl:hidden text-[#7E8096]">
              <b>{content.date.split("-")[0]}</b> - {content.date.split("-")[1]}
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col col-span-4 gap-2 pt-1 xl:pt-2 xl:gap-4 xl:px-4 xl:my-4 ${
            !content.answer && "xl:justify-between"
          }`}
        >
          <div>
            <p className="text-[#4CBEC5] font-bold text-sm xl:text-base py-1 xl:py-2">{content.name}</p>
            <div className="text-[#7E8096] text-xs xl:text-sm bg-[#F4F5F7] border rounded-r-2xl rounded-b-2xl xl:w-max px-2 xl:px-3 py-2 xl:mr-4">
              {content.feedback}
            </div>
          </div>
          <div className="flex items-end text-xs xl:pr-4 xl:text-sm">
            {content.answer ? (
              <p className="text-[#7E8096] bg-[#E4F5F7] w-max ml-auto px-4 py-2 rounded-l-2xl rounded-b-2xl">
                {content.answer}
              </p>
            ) : (
              <input
                type="text"
                className="w-full outline-none placeholder:text-[#7E8096] text-[#7E8096] border rounded-full px-6 py-2 xl:py-2 mt-2 xl:h-10"
                placeholder="Your Answer"
              />
            )}
          </div>
        </div>
        <div className="flex justify-between gap-20 py-2 xl:my-2 xl:px-0 xl:gap-0 xl:flex-col">
          <div className="text-[#7E8096] text-sm text-center hidden xl:block">{content.date}</div>
          <button type="button" className="border border-[#fb295a98] text-xs xl:text-sm font-bold xl:font-normal -tracking-wide text-[#FB295A] py-2 xl:py-2 rounded-full w-full xl:h-10">
            Order Details
          </button>

          {content.answer ? (
            <button type="button" className="border bg-gradient-to-r from-[#66BEBC] to-[#009F9A] text-white text-xs xl:text-sm font-bold xl:font-normal px-4 py-2 rounded-full w-full xl:h-10">
              Edit
            </button>
          ) : (
            <button type="button" className="bg-gradient-to-r from-[#FFBE00] text-xs xl:text-sm to-[#FF7B03] text-white px-3 py-2 rounded-full font-bold xl:font-normal w-full xl:h-10">
              Send
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleFeedback;
