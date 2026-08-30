import { FC, useState } from "react";
import { useBasketContext } from "../../helpers/contexts/BasketContext";
import { SvgFastCargo, SvgTrashCan } from "../../helpers/svgs/product";
import { SvgFilledStar, SvgStar } from "../../helpers/svgs/sellerSvg";

const items: any = [
  {
    id: 1,
    name: "Classic Lemon Cologne",
    brand: "Nordwell",
    image: "/images/photos/product-10.svg",
    price: 23.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 2,
    name: "TRMS Multimeter",
    brand: "MultiCheck Instruments",
    image: "/images/photos/product-3.svg",
    price: 53.5,
    shipping: 0,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 3,
    name: "SenseIt Temp Sensor",
    brand: "Module ±0.5°C",
    image: "/images/photos/product-11.svg",
    price: 35.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: false,
  },
  {
    id: 4,
    name: "SafeGuard 3-Ply Black",
    brand: "Dust Mask FFP2 Ear Loops 50 pcs",
    image: "/images/photos/product-4.svg",
    price: 45.5,
    shipping: 1,
    advertCount: 250,
    isFavorite: true,
  },
];

const Stars = ({ star }: { star: number }) => (
  <span className="flex items-center gap-0.5" aria-label={`Rated ${star} out of 5`}>
    {Array(star)
      .fill(0)
      .map((_: any, i: number) => (
        <span key={`filled-${i}`} className="w-3.5 h-3.5 text-amber-400">
          <SvgFilledStar />
        </span>
      ))}
    {Array(5 - star)
      .fill(0)
      .map((_: any, i: number) => (
        <span key={`empty-${i}`} className="w-3.5 h-3.5 text-line">
          <SvgStar />
        </span>
      ))}
  </span>
);

const SellerCard: FC<any> = ({ svg, title, star, starPoint, advertisementCount, date, stock, price, item }) => {
  return (
    <div className="flex flex-col xl:grid grid-cols-5 w-full bg-surface rounded-card shadow-card border border-line hover:border-brand-300 hover:shadow-pop transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none px-4 xl:px-6 py-4 gap-3 xl:gap-0">
      <div className="flex xl:col-span-2 pb-2 xl:pb-0 border-b xl:border-b-0 xl:border-r border-line items-center">
        <div
          className="w-max h-max rounded-full border border-line bg-canvas p-3 flex items-center justify-center mr-3 text-brand-600"
          aria-hidden="true"
        >
          {svg}
        </div>
        <div className="relative flex flex-col justify-center">
          <div className="font-display font-semibold text-base text-ink relative">
            {title}
            <Info star={star} title={title} svg={svg} starPoint={starPoint} advertisementCount={advertisementCount} />
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <Stars star={star} />
            <span className="font-display text-sm font-bold text-ink">{starPoint}</span>
            <span className="text-xs text-ink-soft">{advertisementCount} Listings</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 col-span-3 pt-2 xl:pt-0 xl:flex-nowrap xl:justify-around">
        <div className="grid grid-cols-3 xl:grid-cols-3 items-center gap-x-4 xl:gap-x-8 xl:gap-y-2">
          <div className="flex flex-col xl:items-start gap-1.5">
            <span className="text-[11px] uppercase tracking-wide text-ink-soft">Expires</span>
            <span className="bg-canvas rounded-pill px-3 py-1 text-xs text-ink-soft font-medium w-max">{date}</span>
          </div>
          <div className="flex flex-col xl:items-start gap-1.5">
            <span className="text-[11px] uppercase tracking-wide text-ink-soft">Stock</span>
            <span className="bg-canvas rounded-pill px-3 py-1 text-xs text-ink-soft font-medium w-max">{stock}</span>
          </div>
          <div className="flex flex-col xl:items-start gap-1">
            <span className="text-[11px] uppercase tracking-wide text-ink-soft">Price</span>
            <span className="font-display text-xl xl:text-3xl font-bold text-ink leading-none">{price} $</span>
            {item.shipping === 0 && (
              <span className="text-xs text-ink-soft">Free shipping</span>
            )}
          </div>
        </div>
        <BasketConnector item={item} />
      </div>
    </div>
  );
};

const stepperButtonClass =
  "flex items-center justify-center w-9 h-9 rounded-pill border border-line text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:opacity-40";

const BasketConnector: FC<any> = ({ item }) => {
  const [isBasketActive, setIsBasketActive] = useState<boolean>(false);
  const { addItem, containsItemId, removeItemById } = useBasketContext();

  const itemQuantity = containsItemId(item);

  if (!isBasketActive) {
    return (
      <div className="flex items-center justify-center h-full xl:w-40 shrink-0">
        <button
          type="button"
          onClick={() => setIsBasketActive(true)}
          aria-label={`Add ${item.name} to cart`}
          className="flex gap-2 items-center justify-center w-full max-w-40 rounded-pill py-2.5 px-4 bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white text-sm font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
        >
          <span className="w-4 h-4" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <circle cx="9" cy="21" r="1.6" />
              <circle cx="19" cy="21" r="1.6" />
              <path d="M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L22 7H6" />
            </svg>
          </span>
          Add to Cart
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full xl:w-40 shrink-0">
      <div className="flex items-center justify-center gap-1.5 border border-line rounded-pill p-1 bg-surface">
        {itemQuantity < 1 ? (
          <button
            type="button"
            aria-label="Close quantity selector"
            className={stepperButtonClass}
            onClick={() => setIsBasketActive(false)}
          >
            <span className="w-3.5 h-3.5">
              <SvgTrashCan />
            </span>
          </button>
        ) : (
          <button
            type="button"
            aria-label="Decrease quantity"
            className={stepperButtonClass}
            onClick={() => removeItemById(item)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M5 12h14" />
            </svg>
          </button>
        )}
        <output
          aria-live="polite"
          className="min-w-8 text-center bg-canvas rounded-pill py-1 text-sm font-semibold font-display text-ink-soft"
        >
          {itemQuantity}
        </output>
        <button
          type="button"
          aria-label="Increase quantity"
          className={stepperButtonClass}
          onClick={() =>
            addItem({
              id: item.id,
              name: item.name,
              brand: item.brand,
              image: item.image,
              price: item.price,
              shipping: item.shipping,
            })
          }
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const perkRowClass = "flex items-center gap-2 text-sm font-medium";

const Info: FC<any> = ({ star, title, svg, starPoint, advertisementCount }) => (
  <div className="xl:grid hidden absolute left-[55%] -top-8 z-20 w-[30rem] bg-surface rounded-card shadow-pop border border-line p-4 info">
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-max h-max bg-canvas rounded-full border border-line p-3 flex items-center justify-center text-brand-600">
        {svg}
      </div>
      <div className="flex flex-col justify-center border-r border-line pr-4">
        <div className="font-display font-semibold text-base text-ink">{title}</div>
        <div className="flex items-center gap-1.5 mt-1">
          <Stars star={star} />
          <span className="font-display text-sm font-bold text-ink">{starPoint}</span>
        </div>
        <div className="text-xs text-ink-soft mt-0.5">{advertisementCount} Listings</div>
      </div>
      <p className="text-xs leading-4 text-ink-soft">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.
      </p>
    </div>
    <div className="mt-3 pt-3 border-t border-line grid grid-cols-2 gap-y-2">
      <div className={perkRowClass}>
        <span className="w-5 h-5 mr-1 text-amber-500" aria-hidden="true">
          <SvgFastCargo />
        </span>
        <span className="text-amber-500 tracking-tight whitespace-nowrap">Same-Day Shipping Until 15:55</span>
      </div>
      <div className={perkRowClass}>
        <span className="w-5 h-5 mr-1 text-success" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <rect x="1" y="5" width="14" height="12" rx="1.5" />
            <path d="M15 9h4l3 3v5h-7z" />
            <circle cx="6" cy="19" r="1.6" />
            <circle cx="18" cy="19" r="1.6" />
          </svg>
        </span>
        <span className="text-success">Free Shipping Over $500</span>
      </div>
      <div className={perkRowClass}>
        <span className="w-5 h-5 mr-1 text-brand-600" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
            <path d="M21 8.5 12 3 3 8.5" />
            <path d="M3.5 8.5h17V19a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19Z" />
            <path d="M9.5 20.5v-6h5v6" />
          </svg>
        </span>
        <span className="text-ink-soft">Min. $100</span>
      </div>
      <div className="flex items-center justify-end">
        <span className="bg-canvas rounded-pill px-3 py-1 text-xs text-ink-soft">Secure payment</span>
      </div>
    </div>
  </div>
);

export default SellerCard;
