import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import type { SingleCardContent } from "../../types/product";

interface ProductCardBaseProps {
  content: SingleCardContent;
  deleteCard?: (item: SingleCardContent) => void;
  favoriteCard?: (item: SingleCardContent) => void;
}

const priceFormat = (value: number) => `${value.toFixed(2)}`.replace(".", ",");

/** Canonical catalog product card — extend this, don't fork it. */
export const ProductCardBase: FC<ProductCardBaseProps> = ({ content, deleteCard, favoriteCard }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(content.isFavorite);
  const lowStock = content.stockStatus === "low";
  const hasDiscount = Boolean(content.discountLabel) || (content.oldPrice !== undefined && content.oldPrice > content.price);
  const discountLabel =
    content.discountLabel ??
    (content.oldPrice !== undefined && content.oldPrice > content.price
      ? `-${Math.round(((content.oldPrice - content.price) / content.oldPrice) * 100)}%`
      : undefined);

  const toggleFavorite = () => {
    const next = !isFavorite;
    setIsFavorite(next);
    if (next) {
      favoriteCard?.(content);
    } else {
      deleteCard?.(content);
    }
  };

  const productHref = `/product?id=${content.id}`;

  return (
    <article className="group relative flex flex-col h-full bg-surface rounded-card shadow-card border border-line hover:border-brand-300 hover:shadow-pop transition-shadow duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
      <div className="relative aspect-square w-full bg-canvas rounded-t-card overflow-hidden">
        <Link
          href={productHref}
          aria-label={`View ${content.name}`}
          className="absolute inset-0 rounded-t-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-inset"
        >
          <span className="sr-only">{content.name}</span>
        </Link>
        <Image
          className="object-contain p-6 pointer-events-none transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
          src={content.image}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 20vw"
          alt={content.name}
        />
        {hasDiscount && (
          <span className="absolute top-3 left-3 bg-amber-400 text-ink rounded-pill px-2 py-0.5 text-xs font-semibold font-display">
            {discountLabel}
          </span>
        )}
        <div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 focus-within:opacity-100 focus-within:translate-y-0 transition-[opacity,transform] duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
          <Link
            href="/category"
            aria-label={`Quick view ${content.name}`}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-line text-ink-soft shadow-card transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.5" y2="16.5" />
            </svg>
          </Link>
        </div>
        <button
          type="button"
          onClick={toggleFavorite}
          aria-label={isFavorite ? `Remove ${content.name} from favourites` : `Add ${content.name} to favourites`}
          aria-pressed={isFavorite}
          className={`absolute bottom-2 right-2 flex items-center justify-center w-8 h-8 rounded-full bg-surface border border-line shadow-card transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 ${
            isFavorite ? "text-danger border-danger/40" : "text-ink-muted hover:text-danger hover:border-danger/40"
          }`}
        >
          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col flex-1 gap-1.5 p-4">
        <h3 className="text-sm font-medium leading-snug text-ink line-clamp-2">
          <Link
            href={productHref}
            className="rounded-card transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            {content.name}
          </Link>
        </h3>
        <p className="text-xs text-ink-soft truncate">{content.brand}</p>

        <p className="flex items-center gap-1.5 mt-auto pt-1">
          {content.stockStatus !== "out" ? (
            <>
              <span className={`pulse-dot inline-block ${lowStock ? "bg-amber-500" : "bg-success"}`} aria-hidden="true" />
              <span className="text-xs text-ink-soft">{lowStock ? "Low stock" : "In stock"}</span>
            </>
          ) : (
            <span className="text-xs text-ink-soft">Out of stock</span>
          )}
        </p>

        <div className="flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold text-ink">{priceFormat(content.price)} $</span>
          {hasDiscount && (
            <span className="text-sm text-ink-soft line-through">{priceFormat(content.oldPrice ?? content.price)} $</span>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 pt-0.5">
          {content.shipping === 0 && (
            <span className="inline-flex items-center gap-1 bg-brand-50 text-brand-700 rounded-pill px-2 py-0.5 text-xs font-medium">
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="5" width="14" height="12" rx="1.5" />
                <path d="M15 9h4l3 3v5h-7z" />
                <circle cx="6" cy="19" r="1.6" />
                <circle cx="18" cy="19" r="1.6" />
              </svg>
              Free shipping
            </span>
          )}
          {content.advertCount > 0 && (
            <span className="ml-auto whitespace-nowrap text-[11px] text-ink-soft">
              from <strong className="font-semibold text-ink">{content.advertCount} listings</strong>
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCardBase;
