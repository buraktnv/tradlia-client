import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { SvgFavorite } from "../../../helpers/svgs/basketSvg";
import { SvgBigger } from "../../../helpers/svgs/homeSvg";
import RemoveConfirmModal from "./RemoveConfirmModal";

// Product copied from cart and modified

const SingleCard: FC<any> = ({ content, deleteCard }) => {
  const [modal, setModal] = useState<boolean>(false);

  const deleteFavorites = () => {
    deleteCard(content);
  };
  return (
    <>
      {modal && <RemoveConfirmModal setModal={setModal} deleteFavorites={deleteFavorites} />}
      <div className="relative grid grid-cols-11 group gap-3 rounded-card border border-line bg-surface px-6 py-3 shadow-card transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none w-full hover:border-brand-300 sm:grid-cols-12">
        <div className="flex items-center justify-center w-full h-full col-span-2">
          <Image className="object-contain" src={content?.image} width={120} height={100} alt={content.brand} />
        </div>
        <div className="col-span-3 flex w-full flex-col justify-center border-r border-line sm:col-span-4">
          <div className="flex flex-col text-ink-muted">
            <h5 className="font-medium text-ink">{content.name}</h5>
            <h3 className="">{content.brand}</h3>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-2">
          <div className="font-display text-xl font-bold tabular-nums text-ink">
            {`${content.price.toFixed(2)}`.replace(".", ",")} $ <br />
            <p className="text-xs font-normal tabular-nums text-ink-muted">
              starting from <strong> {content.advertCount} listings</strong>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full col-span-3 px-6 bottom-3">
          <Link href="/category" className="flex w-full items-center justify-center rounded-pill border border-line py-2 text-sm font-medium text-ink-soft opacity-0 transition-opacity duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:opacity-100 hover:border-brand-300 hover:text-brand-600 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400">
            All Listings
            <div className="h-4 w-8 fill-current text-brand-600">
              <SvgBigger />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          {content.shipping === 0 ? (
            <Image src="/images/main/fourthSection/cargoCar.svg" width={48} height={48} alt="Cargo Car" />
          ) : (
            ""
          )}
          <div className="w-6 h-6 cursor-pointer" onClick={() => setModal(true)}>
            <SvgFavorite />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
