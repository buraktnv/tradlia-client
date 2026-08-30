/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { SvgStar } from "../../helpers/svgs/product";

const TABS = [
  { id: "Description", label: "Product Description" },
  { id: "Comments", label: "Reviews" },
  { id: "Payments", label: "Credit/Installment Options" },
];

const initialsOf = (name: string) => name.replace(/[^a-zA-Z]/g, "").slice(0, 2).toUpperCase();

const BottomBar: FC<any> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<any>("Comments");
  return (
    <>
      <div
        role="tablist"
        aria-label="Product information sections"
        className="grid grid-cols-3 gap-1 w-full mt-12 bg-canvas rounded-pill border border-line p-1"
      >
        {TABS.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer select-none text-center whitespace-pre-line xl:whitespace-normal rounded-pill py-2 text-sm xl:text-base font-medium font-display transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                active ? "bg-surface shadow-card text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              {tab.label}
              {tab.id === "Comments" && <span className="ml-1">({content.commentCount})</span>}
            </button>
          );
        })}
      </div>
      <div className="w-full bg-surface rounded-card shadow-card border border-line p-5 px-5 xl:p-8 mt-3">
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

const RatingBar: FC<any> = ({ star, count, total, widthClass }) => (
  <div className="flex items-center gap-2 text-sm">
    <span className="flex items-center gap-0.5 w-8 shrink-0" aria-label={`${star} star`}>
      <span className="w-4 h-4 text-amber-400">
        <SvgStar />
      </span>
      <span className="font-medium text-ink-soft">{star}</span>
    </span>
    <span className="w-full bg-line h-1.5 rounded-pill overflow-hidden">
      <span className={`block h-1.5 bg-amber-400 rounded-pill ${widthClass}`}></span>
    </span>
    <span className="w-10 text-right text-xs text-ink-muted">{count}</span>
  </div>
);

const Comments: FC<any> = ({ content }) => {
  return (
    <div className="xl:p-2">
      <div className="flex flex-col gap-2 pb-6">
        <h3 className="font-display font-semibold text-base text-ink">
          {content.name} <span className="font-normal text-ink-muted">{content.brand}</span>
        </h3>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 col-span-1 xl:col-span-3 gap-4">
          <div className="relative h-28 sm:h-auto">
            <Image src={content.image} fill sizes="(max-width: 1280px) 90vw, 20vw" alt="" className="object-contain" />
          </div>
          <div className="sm:col-span-2 flex flex-col justify-center gap-2.5">
            {[5, 4, 3, 2, 1].map((star) => (
              <RatingBar
                key={star}
                star={star}
                count={content.votes[star]}
                widthClass={{ 5: "w-4/5", 4: "w-3/6", 3: "w-2/6", 2: "w-1/6", 1: "w-1/12" }[star] ?? "w-0"}
              />
            ))}
          </div>
        </div>
        <div className="col-span-1 xl:col-span-2 flex sm:flex-row flex-col items-center justify-center gap-4 xl:gap-6">
          <div className="flex flex-col items-center order-1">
            <div className="font-display text-3xl font-bold text-ink leading-tight">{content.votesRate}</div>
            <div className="flex justify-center gap-1 mt-1" aria-label={`Rated ${content.votesRate} out of 5`}>
              {Array(Math.round(content.votesRate))
                .fill(0)
                .map((_: any, i: number) => (
                  <span key={`filled-${i}`} className="w-4 h-4 text-amber-400">
                    <SvgStar />
                  </span>
                ))}
              {Array(5 - Math.round(content.votesRate))
                .fill(0)
                .map((_: any, i: number) => (
                  <span key={`empty-${i}`} className="w-4 h-4 text-line">
                    <SvgStar />
                  </span>
                ))}
            </div>
            <p className="text-xs text-ink-muted text-center pt-3 max-w-48">
              You must have purchased this product to leave a review.
            </p>
          </div>
          <button
            type="button"
            className="rounded-pill py-3 px-6 border border-line text-sm font-semibold text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Write a Review
          </button>
        </div>
      </div>
      <div>
        {content.comments.map((comment: any) => (
          <Comment content={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};

const Description: FC<any> = ({ content }) => {
  return (
    <div className="xl:p-2">
      <div className="pb-4">
        <Image src={content.image} alt="" width={150} height={120} />
      </div>
      <h3 className="font-display font-semibold text-base text-ink pb-4">
        {content.name} <span className="font-normal text-ink-muted">{content.brand}</span>
      </h3>
      <div className="whitespace-pre-line text-sm xl:text-base text-ink-soft leading-relaxed">{content.description}</div>
    </div>
  );
};

const PaymentCard: FC<any> = ({ content }) => {
  return (
    <div className="bg-canvas rounded-card p-4 h-max">
      <div className="flex items-end justify-center h-16 mb-3">{content.icon}</div>
      <table className="text-sm text-ink-soft w-full">
        <thead>
          <tr className="text-[11px] uppercase tracking-wide text-ink-muted">
            <th scope="col" className="px-2 py-2 border-r border-line font-medium">Installment</th>
            <th scope="col" className="px-2 py-2 border-r border-line font-medium">Monthly</th>
            <th scope="col" className="px-2 py-2 font-medium">Total</th>
          </tr>
        </thead>
        <tbody>
          {[2, 3, 4, 5, 6].map((n) => (
            <tr key={n} className="border-t border-line text-center">
              <td className="py-2 border-r border-line font-medium text-ink">{n}</td>
              <td className="py-2 border-r border-line">{content[n][0]}</td>
              <td className="py-2">{content[n][1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Comment: FC<any> = ({ content }) => {
  return (
    <article className="relative flex gap-3 border-t border-line my-5 pt-5">
      <div
        className="flex items-center justify-center shrink-0 w-9 h-9 rounded-full bg-brand-100 text-brand-700 font-display font-semibold text-xs"
        aria-hidden="true"
      >
        {initialsOf(content.sender)}
      </div>
      <div className="min-w-0 pr-16 xl:pr-24">
        <div className="flex gap-0.5 mb-1.5" aria-label={`Rated ${Math.round(content.star)} out of 5`}>
          {Array(Math.round(content.star))
            .fill(0)
            .map((_: any, i: number) => (
              <span key={`filled-${i}`} className="w-4 h-4 text-amber-400">
                <SvgStar />
              </span>
            ))}
          {Array(5 - Math.round(content.star))
            .fill(0)
            .map((_: any, i: number) => (
              <span key={`empty-${i}`} className="w-4 h-4 text-line">
                <SvgStar />
              </span>
            ))}
        </div>
        <p className="text-sm text-ink-soft leading-relaxed">{content.message}</p>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1.5">
          <span className="text-sm font-semibold text-ink">{content.sender}</span>
          <span className="pulse-dot bg-success inline-block" aria-hidden="true" />
          <span className="text-xs text-success font-medium">Verified purchase</span>
          <span className="text-xs text-ink-muted">{content.date}</span>
        </div>
      </div>
      <div className="absolute right-0 top-5 flex flex-col sm:flex-row gap-2 sm:gap-3">
        <button
          type="button"
          aria-label={`Like review by ${content.sender}, ${content.like} likes`}
          className="flex items-center gap-1 text-xs text-ink-muted font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-pill"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
            <path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
          {content.like}
        </button>
        <button
          type="button"
          aria-label={`Dislike review by ${content.sender}, ${content.dislike} dislikes`}
          className="flex items-center gap-1 text-xs text-ink-muted font-medium transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-pill"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 rotate-180" aria-hidden="true">
            <path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
          {content.dislike}
        </button>
      </div>
    </article>
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
    <div className="xl:p-2">
      <div className="hidden gap-3 xl:grid xl:grid-cols-3">
        {content.map((paymentOption: any) => (
          <PaymentCard content={paymentOption} key={paymentOption.id} />
        ))}
      </div>
      <div
        className={`xl:hidden flex py-4 mx-auto w-full overflow-y-hidden overflow-x-auto gap-x-4 snap-mandatory scroll-smooth snap-x`}
        ref={slideDiv}
        onScroll={scrollEvent}
      >
        {content.map((paymentOption: any, index: number) => (
          <div key={paymentOption.id} className={"px-[9%] basis-full min-w-max"} id={String("iteme" + (index + 1))}>
            <PaymentCard content={paymentOption} />
          </div>
        ))}
      </div>
      <div className="relative flex justify-center w-full gap-2 py-2 pb-6 xl:hidden">
        {[1, 2, 3].map((n) => {
          const id = `iteme${n}`;
          return (
            <button
              key={id}
              type="button"
              aria-label={`Go to installment option ${n}`}
              aria-current={activeItem === id || undefined}
              onClick={() => scrollToElement(id)}
              className={`rounded-full px-4 py-1 border transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                activeItem === id ? "bg-brand-500 border-brand-500" : "bg-transparent border-line hover:border-brand-300"
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
