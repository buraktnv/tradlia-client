import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { SvgEmptyStar, SvgFavorite } from "../../../helpers/svgs/basketSvg";
import { SvgBigger } from "../../../helpers/svgs/homeSvg";
import RemoveConfirmModal from "./RemoveConfirmModal";
import type { SingleCardProps } from "../../../types/product";

// Product copied from cart and modified

const SingleCard: FC<SingleCardProps> = ({ content, deleteCard, favoriteCard }) => {
  const [modal, setModal] = useState<boolean>(false);

  const deleteFavorites = () => {
    deleteCard?.(content);
  };
  return (
    <>
      {modal && <RemoveConfirmModal setModal={setModal} deleteFavorites={deleteFavorites} />}
      <div
        className={`relative flex group flex-col justify-between h-[240px] rounded-card border px-4 py-4 shadow-card transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none w-full hover:border-brand-300 hover:pb-12 focus-within:border-brand-300 xl:h-[360px] xl:hover:pb-16 ${
          content.backgroundColor ? `${content.backgroundColor}` : "bg-surface"
        } border-line`}
      >
        <div className="flex flex-col text-[11px] xl:text-base">
          <div className="flex flex-col text-ink-muted">
            <h5 className="font-medium text-ink">{content.name}</h5>
            <h3>{content.brand}</h3>
          </div>
        </div>
        <div className="w-full h-full p-1 transition-all duration-300 ease-in-out xl:p-6 xl:group-hover:p-2">
          <div className="relative w-full h-full">
            <Image className="object-contain" src={content?.image} fill sizes="100vw" alt={content.brand} />
          </div>
        </div>
        <div className="z-0 flex items-end justify-between">
          <div className="font-display text-sm leading-4 tabular-nums xl:leading-normal xl:text-xl font-bold text-ink">
            {`${content.price.toFixed(2)}`.replace(".", ",")} $ <br />
            {content.advertCount > 0 && (
              <p className="text-[9px] leading-[7px] tabular-nums xl:text-xs font-normal text-ink-muted whitespace-nowrap">
                starting from <strong> {content.advertCount} listings</strong>
              </p>
            )}
          </div>
          <div className="flex items-end justify-end gap-[3px] xl:gap-1.5">
            {content.shipping === 0 ? (
              <div className="relative w-6 h-8 xl:w-10 xl:h-10">
                <Image
                  src="/images/main/fourthSection/cargoCar.svg"
                  className="object-contain"
                  fill sizes="100vw"
                  alt="Cargo Car"
                />
              </div>
            ) : (
              ""
            )}
            <div className="cursor-pointer xl:w-5 xl:h-5 w-[14px] h-[14px]">
              {content.isFavorite ? (
                <div className="flex w-full h-full" onClick={() => setModal(true)}>
                  <SvgFavorite />
                </div>
              ) : (
                <div
                  className="flex w-full h-full"
                  onClick={() => {
                    favoriteCard?.(content);
                  }}
                >
                  <SvgEmptyStar />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute left-0 grid items-center invisible w-full px-4 mt-1 transition-all duration-150 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bottom-3 group-hover:visible">
          <Link href="/category" className="inline-flex items-center justify-center gap-2 rounded-pill border bg-surface border-line px-4 py-1.5 text-[11px] leading-3 xl:text-sm text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 xl:py-2">
            All Listings
            <div className="h-3 w-4 fill-current xl:h-4 xl:w-8 text-brand-600">
              <SvgBigger />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
