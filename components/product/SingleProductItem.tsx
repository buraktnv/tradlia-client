import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { SvgBigger, SvgEmptyStar, SvgFavorite } from "../../helpers/svgs/product";
import RemoveConfirmModal from "../profile/favourites/RemoveConfirmModal";

const SingleProductItem: FC<any> = ({ content, unfavoriteCard, favoriteCard }) => {
  const [modal, setModal] = useState<boolean>(false);
  const deleteFavorites = () => {
    unfavoriteCard(content);
  };

  const makeFavorite = () => {
    favoriteCard(content);
    setModal(true);
    setTimeout(() => setModal(false), 50);
  };

  return (
    <>
      {modal && <RemoveConfirmModal setModal={setModal} deleteFavorites={deleteFavorites} />}
      <div className="flex relative group flex-col group justify-between h-72 xl:h-[360px] bg-[#F4F5F9] border border-[#dadada65] hover:border-[#4bbfc59c] hover:shadow-lg py-4 px-4 rounded-3xl w-full transition-all ease-in-out duration-300 hover:pb-14 xl:hover:pb-16">
        <div className="flex flex-col">
          <div className="flex flex-col text-[#7E8096]">
            <h5 className="text-xs xl:text-base">{content.brand}</h5>
            <h3 className="text-sm font-bold xl:text-base">{content.name}</h3>
          </div>
        </div>
        <div className="flex w-full h-full p-3">
          <div className="relative h-full w-60">
            <Image className="object-contain" src={content.image} fill sizes="100vw" alt="product" />
          </div>
        </div>
        <div className="flex items-center justify-between bg-[#F4F5F9]">
          <div className="text-md xl:text-xl font-bold text-[#6F7081] w-full">
            {`${content.price.toFixed(2)}`.replace(".", ",")} $ <br />
          </div>
          <div className="flex items-end justify-end gap-1.5">
            {content.shipping === 0 ? (
              <div className="relative w-10 h-10 xl:w-[42px] xl:h-[48px]">
                <Image src="/images/main/fourthSection/cargoCar.svg" fill sizes="100vw" alt="Cargo Car" />
              </div>
            ) : (
              ""
            )}
            <div className="w-4 h-4 cursor-pointer xl:w-5 xl:h-5">
              {content.isFavorite ? (
                <div className="flex w-full h-full" onClick={() => setModal(true)}>
                  <SvgFavorite />
                </div>
              ) : (
                <div
                  className="flex justify-end w-full h-full"
                  onClick={() => {
                    makeFavorite();
                  }}
                >
                  <SvgEmptyStar />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute left-0 grid items-center invisible w-full px-4 mt-1 transition-all duration-300 ease-in-out opacity-0 bottom-3 group-hover:visible group-hover:opacity-100">
          <Link
            href={"/product"}
            className="select-none cursor-pointer flex items-center gap-2 justify-center px-4 py-2 border bg-transparent border-[#f59b009c] rounded-full text-sm text-[#F59C00] font-medium">
            Go to Listing
                          <div className="w-8 h-4 text-[#F59C00]">
              <SvgBigger />
            </div>

          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleProductItem;
