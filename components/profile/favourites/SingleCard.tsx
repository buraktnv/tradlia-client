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
        className={`flex relative group flex-col group justify-between h-[240px] xl:h-[360px] border drop-shadow-lg xl:drop-shadow-none border-[#dadada65] hover:border-[#4CBEC5]/60 hover:shadow-lg py-4 px-4 rounded-3xl w-full transition-all ease-in-out duration-300 hover:pb-12 xl:hover:pb-16 ${
          content.backgroundColor ? `${content.backgroundColor}` : "bg-white"
        }`}
      >
        <div className="flex flex-col text-[11px] xl:text-base">
          <div className="flex flex-col text-[#7E8096]">
            <h5 className="font-bold">{content.name}</h5>
            <h3>{content.brand}</h3>
          </div>
        </div>
        <div className="w-full h-full p-1 transition-all duration-300 ease-in-out xl:p-6 xl:group-hover:p-2">
          <div className="relative w-full h-full">
            <Image className="object-contain" src={content?.image} fill sizes="100vw" alt={content.brand} />
          </div>
        </div>
        <div className="z-0 flex items-end justify-between">
          <div className="text-sm leading-4 xl:leading-normal xl:text-xl font-bold text-[#6F7081]">
            {`${content.price.toFixed(2)}`.replace(".", ",")} $ <br />
            {content.advertCount > 0 && (
              <p className="text-[9px] leading-[7px] xl:text-xs font-normal text-[#7E8096] whitespace-nowrap">
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
          <Link href="/category" className="flex items-center gap-2 justify-center px-4 py-1.5 xl:py-2 border bg-transparent border-[#f59b009c] rounded-full text-[11px] leading-3 xl:text-sm text-[#F59C00] font-medium">
            All Listings
            <div className="xl:w-8 w-4 h-3 xl:h-4 text-[#F59C00]">
              <SvgBigger />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
