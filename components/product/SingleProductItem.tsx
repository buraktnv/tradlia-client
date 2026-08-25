import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
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
      <article className="group relative flex flex-col justify-between h-72 xl:h-[360px] w-full bg-surface rounded-card shadow-card border border-line hover:border-brand-300 hover:shadow-pop transition-[border-color,box-shadow,padding] duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none py-4 px-4 hover:pb-16">
        <div className="flex flex-col gap-0.5">
          <p className="text-xs text-ink-soft truncate">{content.brand}</p>
          <h3 className="text-sm font-semibold xl:text-base text-ink line-clamp-1">{content.name}</h3>
        </div>
        <div className="flex w-full h-full p-3">
          <div className="relative h-full w-full">
            <Image
              className="object-contain transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:scale-[1.04]"
              src={content.image}
              fill
              sizes="(max-width: 1280px) 50vw, 25vw"
              alt={content.name}
            />
          </div>
        </div>
        <div className="flex items-end justify-between gap-2">
          <div className="font-display text-lg xl:text-xl font-bold text-ink">
            {`${content.price.toFixed(2)}`.replace(".", ",")} $
          </div>
          <div className="flex items-center gap-3 pb-0.5">
            {content.shipping === 0 && (
              <span className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 rounded-pill px-2 py-0.5 text-[11px] font-medium whitespace-nowrap">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="5" width="14" height="12" rx="1.5" />
                  <path d="M15 9h4l3 3v5h-7z" />
                  <circle cx="6" cy="19" r="1.6" />
                  <circle cx="18" cy="19" r="1.6" />
                </svg>
                Free shipping
              </span>
            )}
            <button
              type="button"
              onClick={() => (content.isFavorite ? setModal(true) : makeFavorite())}
              aria-label={content.isFavorite ? `Remove ${content.name} from favourites` : `Add ${content.name} to favourites`}
              aria-pressed={content.isFavorite}
              className={`flex items-center justify-center w-8 h-8 rounded-pill border transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
                content.isFavorite
                  ? "border-danger/40 text-danger"
                  : "border-line text-ink-soft hover:border-brand-300 hover:text-brand-600"
              }`}
            >
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill={content.isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute left-0 grid items-center invisible w-full px-4 opacity-0 bottom-3 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-[opacity,visibility] duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
          <Link
            href={"/product"}
            className="select-none flex items-center gap-2 justify-center px-4 py-2 rounded-pill border border-line bg-surface text-sm font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Go to Listing
            <span className="w-4 h-4" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </Link>
        </div>
      </article>
    </>
  );
};

export default SingleProductItem;
