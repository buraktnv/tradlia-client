/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { SvgDislikeComment, SvgEmptyStar, SvgLikeComment, SvgStar } from "../../helpers/svgs/product";

const BottomBar: FC<any> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<any>("Comments");
  return (
    <>
      <div className="w-full rounded-[2rem] bg-[#4CBEC5] grid grid-cols-3 text-white mt-12 border border-[#4CBEC5] font-bold text-sm xl:text-base">
        <div
          className={`cursor-pointer text-center select-none flex items-center justify-center xl:h-[3rem] px-2 rounded-full py-2 transition duration-300 ease-in-out ${
            activeTab == "Description" ? "bg-white text-[#4CBEC5]" : "hover:bg-white hover:text-[#4CBEC5]"
          }`}
          onClick={() => setActiveTab("Description")}
        >
          Product Description
        </div>
        <div
          className={`cursor-pointer select-none text-center xl:flex xl:h-[3rem] items-center justify-center rounded-full py-2 transition duration-300 ease-in-out ${
            activeTab == "Comments" ? "bg-white text-[#4CBEC5]" : "hover:bg-white hover:text-[#4CBEC5]"
          }`}
          onClick={() => setActiveTab("Comments")}
        >
          Reviews <div className="items-center justify-center block xl:flex">({content.commentCount})</div>
        </div>
        <div
          className={`cursor-pointer select-none whitespace-pre-line xl:h-[3rem] xl:whitespace-normal text-center rounded-full py-2 transition duration-300 ease-in-out ${
            activeTab == "Payments" ? "bg-white text-[#4CBEC5]" : "hover:bg-white hover:text-[#4CBEC5]"
          }`}
          onClick={() => setActiveTab("Payments")}
        >
          Credit/Installment {"\n"} Options
        </div>
      </div>
      <div className="xl:w-full border-[#00B1B280] border rounded-[2rem] p-6 px-8 xl:bg-transparent bg-white">
        {activeTab === "Comments" ? (
          <Comments content={content} />
        ) : activeTab === "Payments" ? (
          <Payments content={content.payment} />
        ) : (
          <Description content={content} />
        )}
      </div>
    </>
  );
};

const Comments: FC<any> = ({ content }) => {
  return (
    <div className="xl:p-[1.5rem]">
      <div>
        <div className="flex gap-1 text-[#4CBEC5] text-base pb-5">
          <div className="font-bold">{content.name}</div>
          <div>{content.brand}</div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-5">
          <div className="grid grid-cols-3 col-span-3 ">
            <div className="">
              <Image src={content.image} width={140} height={100} alt="" />
            </div>
            <div className="col-span-2 px-4">
              <div className="flex items-center gap-2 font-bold text-[#7E8096]">
                <div className="w-5 h-5 text-[#F9B000]">
                  <SvgStar />
                </div>
                5
                <div className="w-full bg-[#CCCFDD] h-1 rounded-full">
                  <div className={`h-1 bg-[#F9B000] w-4/5 rounded-full`}></div>
                </div>
                <div className="w-8 text-sm font-normal text-left">{content.votes[5]}</div>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#7E8096]">
                <div className="w-5 h-5 text-[#F9B000]">
                  <SvgStar />
                </div>
                4
                <div className="w-full bg-[#CCCFDD] h-1 rounded-full">
                  <div className={`h-1 bg-[#F9B000] w-3/6 rounded-full`}></div>
                </div>
                <div className="w-8 text-sm font-normal text-left">{content.votes[4]}</div>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#7E8096]">
                <div className="w-5 h-5 text-[#F9B000]">
                  <SvgStar />
                </div>
                3
                <div className="w-full bg-[#CCCFDD] h-1 rounded-full">
                  <div className={`h-1 bg-[#F9B000] w-2/6 rounded-full`}></div>
                </div>
                <div className="w-8 text-sm font-normal text-left">{content.votes[3]}</div>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#7E8096]">
                <div className="w-5 h-5 text-[#F9B000]">
                  <SvgStar />
                </div>
                2
                <div className="w-full bg-[#CCCFDD] h-1 rounded-full">
                  <div className={`h-1 bg-[#F9B000] w-1/6 rounded-full`}></div>
                </div>
                <div className="w-8 text-sm font-normal text-left">{content.votes[2]}</div>
              </div>
              <div className="flex items-center gap-2 font-bold text-[#7E8096]">
                <div className="w-5 h-5 text-[#F9B000]">
                  <SvgStar />
                </div>
                1
                <div className="w-full bg-[#CCCFDD] h-1 rounded-full">
                  <div className={`h-1 bg-[#F9B000] w-1/12 rounded-full`}></div>
                </div>
                <div className="w-8 text-sm font-normal text-left">{content.votes[1]}</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2">
            <div className="flex flex-col justify-end order-2 py-1 xl:order-1">
              <div className="text-2xl font-bold text-[#4CBEC5] w-full text-center">{content.votesRate}</div>
              <div className="flex justify-center gap-3">
                {Array(Math.round(content.votesRate))
                  .fill(0)
                  .map((_: any, i: number) => (
                    <div key={`filled-${i}`} className="w-4 h-4 text-[#F9B000]">
                      <SvgStar />
                    </div>
                  ))}
                {Array(5 - Math.round(content.votesRate))
                  .fill(0)
                  .map((_: any, i: number) => (
                    <div key={`empty-${i}`} className="w-4 h-4 text-[#F9B000]">
                      <SvgEmptyStar />
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col justify-end order-1 px-4 xl:order-2">
              <div className="text-[#7E8096] text-center w-full text-sm px-4 pb-4 hidden xl:block">
                You must have purchased this product to leave a review.
              </div>
              <button type="button" className="bg-[#F9B000] text-white rounded-full font-medium py-2 xl:py-1">Write a Review</button>
            </div>
          </div>
        </div>
        <div className="text-[#7E8096] text-center w-full text-sm px-4 pt-1 xl:hidden block">
          You must have purchased this product to leave a review.
        </div>
      </div>
      <div>
        {content.comments.map((content: any) => (
          <Comment content={content} key={content.id} />
        ))}
      </div>
    </div>
  );
};

const Description: FC<any> = ({ content }) => {
  return (
    <div className="xl:p-[1.5rem]">
      <div className="flex gap-1 text-[#4CBEC5] text-sm leading-4 xl:text-base pb-5 pt-2 xl:hidden">
        <div className="font-bold ">{content.name}</div>
        <div>{content.brand}</div>
      </div>
      <div className="mx-5 xl:mx-0">
        <div>
          <Image src={content.image} alt="" width={150} height={120} />
        </div>
      </div>
      <div className="xl:flex gap-1 text-[#4CBEC5] text-sm leading-4 xl:text-base pb-5 pt-2 hidden">
        <div className="font-bold ">{content.name}</div>
        <div>{content.brand}</div>
      </div>
      <div className="whitespace-pre-line text-[#7E8096] text-sm leading-4 xl:text-base">{content.description}</div>
    </div>
  );
};

const PaymentCard: FC<any> = ({ content }) => {
  return (
    <div className="grid xl:bg-[#F7F7FA] rounded-2xl p-4">
      <div className="flex items-end justify-center">
        <div className="h-16 col-span-3 w-36">{content.icon}</div>
      </div>
      <table className="text-[#7E8096] ">
        <thead>
          <tr>
            <th className="px-2 py-2 border-r">Installment</th>
            <th className="px-2 py-2 border-r">Installment Amount</th>
            <th className="px-2 py-2">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center border-t">
            <td className="py-2 border-r">2</td>
            <td className="py-2 border-r">{content[2][0]}</td>
            <td className="py-2">{content[2][1]}</td>
          </tr>
          <tr className="text-center border-t">
            <td className="py-2 border-r">3</td>
            <td className="py-2 border-r">{content[3][0]}</td>
            <td className="py-2">{content[3][1]}</td>
          </tr>
          <tr className="text-center border-t">
            <td className="py-2 border-r">4</td>
            <td className="py-2 border-r">{content[4][0]}</td>
            <td className="py-2">{content[4][1]}</td>
          </tr>
          <tr className="text-center border-t">
            <td className="py-2 border-r">5</td>
            <td className="py-2 border-r">{content[5][0]}</td>
            <td className="py-2">{content[5][1]}</td>
          </tr>
          <tr className="text-center border-t">
            <td className="py-2 border-r">6</td>
            <td className="py-2 border-r">{content[6][0]}</td>
            <td className="py-2">{content[6][1]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Comment: FC<any> = ({ content }) => {
  return (
    <div className="relative">
      <div className="h-[1px] w-full bg-[#ccccccb4] my-5"></div>
      <div className="flex gap-1">
        {Array(Math.round(content.star))
          .fill(0)
          .map((_: any, i: number) => (
            <div key={`filled-${i}`} className="w-4 h-4 text-[#F9B000]">
              <SvgStar />
            </div>
          ))}
        {Array(5 - Math.round(content.star))
          .fill(0)
          .map((_: any, i: number) => (
            <div key={`empty-${i}`} className="w-4 h-4 text-[#F9B000]">
              <SvgEmptyStar />
            </div>
          ))}
      </div>
      <div className="text-[#7E8096]">{content.message}</div>
      <div className="flex text-[#7E8096] gap-2 items-center">
        <div className="font-bold"> {content.sender} </div>
        <div className="h-5 my-1 w-[1px] bg-[#F59C00]"></div>
        <div>{content.date}</div>
      </div>
      <div className="absolute flex gap-3 right-3 bottom-1">
        <div className="flex items-center gap-1 text-sm text-[#7E8096] font-medium cursor-pointer select-none">
          <div className="w-4 h-4">
            <SvgLikeComment />
          </div>
          {content.like}
        </div>
        <div className="flex items-center gap-1 text-sm text-[#7E8096] font-medium cursor-pointer select-none">
          <div className="w-4 h-4">
            <SvgDislikeComment />
          </div>
          {content.dislike}
        </div>
      </div>
    </div>
  );
};
const Payments: FC<any> = ({ content }) => {
  const slideDiv = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<string>("iteme1");

  const scrollEvent = (e: any) => {
    const offset1 = document.getElementById("iteme1")!.offsetLeft - 12;
    const offset2 = document.getElementById("iteme2")!.offsetLeft - 12;
    const offset3 = document.getElementById("iteme3")!.offsetLeft - 12;

    const tar: HTMLDivElement = e.target;
    //console.dir(tar.scrollLeft);
    if (tar.scrollLeft > offset1 && tar.scrollLeft < offset2) activeItem !== "iteme1" && setActiveItem("iteme1");
    else if (tar.scrollLeft >= offset2 && tar.scrollLeft < offset3) activeItem !== "iteme2" && setActiveItem("iteme2");
    else if (tar.scrollLeft >= offset3) activeItem !== "iteme3" && setActiveItem("iteme3");
  };

  useEffect(() => {
    scrollToElement("iteme1");
  }, []);

  const scrollToElement = (item: string) => {
    slideDiv?.current?.scrollTo({
      left: document.getElementById(item)?.offsetLeft,
      behavior: "smooth",
    });
    setActiveItem(item);
  };
  return (
    <div className="xl:p-[1.5rem]">
      <div className="hidden gap-3 xl:grid xl:grid-cols-3">
        {content.map((content: any) => (
          <PaymentCard content={content} key={content.id} />
        ))}
      </div>
      <div
        className={`xl:hidden flex py-8 mx-auto w-full overflow-y-hidden overflow-x-auto gap-x-4 xl:gap-x-8 snap-mandatory scroll-smooth snap-x`}
        ref={slideDiv}
        onScroll={scrollEvent}
      >
        {content.map((content: any, index: string) => (
          <div key={content.id} className={"px-[9%] basis-full min-w-max"} id={String("iteme" + (index + 1))}>
            <PaymentCard content={content} />
          </div>
        ))}
      </div>
      <div className="relative flex justify-center w-full gap-2 py-2 pb-8 xl:hidden">
        <button type="button"
          onClick={() => scrollToElement("iteme1")}
          className={`rounded-full px-4 py-1 border border-[#4CBEC5] ${activeItem === "iteme1" && "bg-[#4CBEC5]"}`}
        ></button>
        <button type="button"
          onClick={() => scrollToElement("iteme2")}
          className={`rounded-full px-4 py-1 border border-[#4CBEC5] ${activeItem === "iteme2" && "bg-[#4CBEC5]"}`}
        ></button>
        <button type="button"
          onClick={() => scrollToElement("iteme3")}
          className={`rounded-full px-4 py-1 border border-[#4CBEC5] ${activeItem === "iteme3" && "bg-[#4CBEC5]"}`}
        ></button>
      </div>
    </div>
  );
};

export default BottomBar;
