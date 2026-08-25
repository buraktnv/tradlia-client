import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DateDropdown from "../../components/profile/feedback/DateDropdown";
import FilterDropdown from "../../components/profile/feedback/FilterDropdown";
import SellerModal from "../../components/sellerModal/SellerModal";
import AllComments from "../../components/sellerModal/AllComments";
import Sidebar from "../../components/seller/Sidebar";
import {
  SvgBanner,
  SvgBanner1,
  SvgBannerWrite,
  SvgBannerWrite1,
  SvgBascet,
  SvgBasket2,
  SvgBox,
  SvgButton1,
  SvgButton2,
  SvgButton3,
  SvgButton4,
  SvgCar,
  SvgClock,
  SvgMng,
  SvgFilter,
  SvgSearch2,
  SvgStarEmpty,
  SvgStarFilled,
  SvgStorefront,
  SvgLine,
} from "../../helpers/svgs/sellerSvg";
import { SvgTrashCan } from "../../helpers/svgs/product";
import { useBasketContext } from "../../helpers/contexts/BasketContext";
import { SvgSearch } from "../../helpers/svgs/product";

const ProductList: any = [
  {
    id: 10,
    image: "/images/photos/product-14.svg",
    name: "Merfill Micro Universal",
    brand: "Light-Cured Composite (A3 color/4g)",
    miad: "No Expiry",
    quantity: "15",
    price: "377,23",
    total: "$719.90",
    red: true,
    green: true,
    show: false,
    amount: null,
  },
  {
    id: 11,
    image: "/images/photos/product-15.svg",
    name: "Orthometric Precision Tweezer",
    brand: "Tweezer Organizer",
    miad: "No Expiry",
    quantity: "8",
    price: "787,26",
    total: "$1325.00",
    red: true,
    green: false,
    show: true,
    amount: 2,
  },
  {
    id: 12,
    image: "/images/photos/product-16.svg",
    name: "MicroBond Glass Adhesive",
    brand: "Adhesive 15 Gm Powder + 10 ml Liquid",
    miad: "No Expiry",
    quantity: "15",
    price: "360,83",
    total: "$1325.00",
    red: false,
    green: false,
    show: false,
    amount: 1,
  },
  {
    id: 13,
    image: "/images/photos/product-14.svg",
    name: "Merfill Micro Universal",
    brand: "Light-Cured Composite (A3 color/4g)",
    miad: "No Expiry",
    quantity: "15",
    price: "377,23",
    total: "$1325.00",
    red: true,
    green: true,
    show: false,
    amount: null,
  },
  {
    id: 14,
    image: "/images/photos/product-15.svg",
    name: "Orthometric Precision Tweezer",
    brand: "Tweezer Organizer",
    miad: "No Expiry",
    quantity: "8",
    price: "787,26",
    total: "$1325.00",
    red: true,
    green: false,
    show: false,
    amount: null,
  },
  {
    id: 15,
    image: "/images/photos/product-16.svg",
    name: "MicroBond Glass Adhesive",
    brand: "Adhesive 15 Gm Powder + 10 ml Liquid",
    miad: "No Expiry",
    quantity: "15",
    price: "360,83",
    total: "$1325.00",
    red: false,
    green: false,
    show: false,
    amount: null,
  },
];

const filterList = [
  { id: 0, title: "All", active: true },
  { id: 1, title: "Answered", active: false },
  { id: 2, title: "Not Answered", active: false },
  { id: 3, title: "1 Star", active: false },
  { id: 4, title: "2 Stars", active: false },
  { id: 5, title: "3 Stars", active: false },
  { id: 6, title: "4 Stars", active: false },
  { id: 7, title: "5 Stars", active: false },
];

const statChipClass = "bg-canvas rounded-pill px-3 py-1 text-xs text-ink-soft";

const Seller: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [modal1, setModal1] = useState<boolean>(false);

  const [sidebar, setSidebar] = useState<boolean>(false);

  if (sidebar) {
    return (
      <div className="px-3 z-[9999] min-h-[150vh] absolute inset-0 bg-canvas py-5">
        <Sidebar />
        <button
          type="button"
          className="w-full rounded-pill py-3 bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 sm:mt-4"
          onClick={() => setSidebar(false)}
        >
          Show Results
        </button>
      </div>
    );
  }

  return (
    <div className="container grid mx-auto snap-none pt-4 pb-8">
      {modal1 && <AllComments setModal1={setModal1} />}
      {modal && <SellerModal setModal={setModal} />}

      <nav aria-label="Breadcrumb" className="col-span-4 xl:col-span-5 mx-3 xl:mx-0 mb-1">
        <ol className="flex items-center gap-2 text-xs">
          <li>
            <Link href="/" className="text-ink-muted hover:text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-ink-muted">/</li>
          <li>
            <Link href="/category" className="text-ink-muted hover:text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
              Marketplace
            </Link>
          </li>
          <li aria-hidden="true" className="text-ink-muted">/</li>
          <li aria-current="page" className="font-medium text-ink-soft">Tradlia</li>
        </ol>
      </nav>

      <div className="grid w-full grid-cols-4 xl:grid-cols-5 col-span-4 xl:col-span-5 gap-3 mt-2">
        <div className="flex col-span-4 xl:col-span-5 justify-around bg-surface rounded-card shadow-card border border-line py-4 px-3 xl:px-6">
          <div className="flex flex-col w-full gap-4 xl:flex-row xl:items-center xl:justify-around">
            <div className="flex">
              <div className="relative w-20 h-20 m-3 shrink-0">
                <span
                  className="absolute inset-0 flex items-center justify-center p-6 rounded-full bg-canvas border border-line text-brand-600"
                  aria-hidden="true"
                >
                  <SvgStorefront />
                </span>
                <span
                  className="absolute -right-1 top-14 w-8 h-8 p-2 rounded-full bg-amber-400 text-white"
                  aria-hidden="true"
                >
                  <SvgBascet />
                </span>
              </div>
              <div className="flex flex-col items-start justify-center pl-2">
                <h1 className="font-display text-xl font-bold text-ink">Tradlia</h1>
                <div className="flex items-center mt-1.5 space-x-0.5" aria-label="Rated 4.1 out of 5">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={`filled-${i}`} className="w-4 h-4 text-amber-400">
                      <SvgStarFilled />
                    </span>
                  ))}
                  <span className="w-4 h-4 text-line">
                    <SvgStarEmpty />
                  </span>
                  <span className="pl-1.5 font-display font-bold text-ink">4,1</span>
                </div>
                <span className={`${statChipClass} mt-2 w-max`}>53 Listings</span>
              </div>
            </div>
            <div className="items-center hidden xl:flex">
              <SvgMng />
            </div>
            <div className="xl:hidden flex-col gap-y-3 px-1 py-2 border-t border-line">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 text-amber-500" aria-hidden="true"><SvgClock /></span>
                <p className="text-sm font-medium text-amber-500">Same-Day Shipping Until 15:55</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 text-success" aria-hidden="true"><SvgCar /></span>
                <p className="text-sm font-medium text-success">Free Shipping over $500</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 text-brand-600" aria-hidden="true"><SvgBox /></span>
                <p className="text-sm font-medium text-brand-600">Min. $100</p>
              </div>
            </div>
            <div className="xl:flex xl:flex-col grid grid-cols-2 items-center w-full xl:w-auto px-1 xl:px-0 gap-3 gap-y-6">
              <p className="hidden xl:block text-sm text-ink-soft leading-relaxed max-w-64">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.
              </p>
              <div className="flex w-full col-span-2 flex-col sm:flex-row xl:flex-col gap-2">
                <button
                  type="button"
                  onClick={() => setModal1(true)}
                  className="rounded-pill py-2.5 w-full border border-line text-sm font-semibold text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  All Reviews
                </button>
                <button
                  type="button"
                  onClick={() => setModal(true)}
                  className="rounded-pill py-2.5 w-full bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white text-sm font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                >
                  Ask Store a Question
                </button>
              </div>
            </div>
            <div className="hidden xl:flex flex-col gap-y-3 px-5 border-l border-line">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 text-amber-500" aria-hidden="true"><SvgClock /></span>
                <p className="text-sm font-medium text-amber-500">Same-Day Shipping Until 15:55</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 text-success" aria-hidden="true"><SvgCar /></span>
                <p className="text-sm font-medium text-success">Free Shipping over $500</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 text-brand-600" aria-hidden="true"><SvgBox /></span>
                <p className="text-sm font-medium text-brand-600">Min. $100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <Sidebar />
        </div>
        <OnlineAdverts setSidebar={setSidebar} />
      </div>
    </div>
  );
};

const labelClass = "text-[11px] uppercase tracking-wide font-medium text-ink-muted";

const OnlineAdverts: FC<any> = ({ setSidebar }) => {
  return (
    <div className="col-span-4 mx-3 xl:mx-0">
      <div className="xl:h-[3rem] flex xl:flex-row flex-col gap-3 justify-between xl:pl-6 mb-[0.5rem] xl:mb-[1rem] w-full">
        <div className="flex items-center justify-around xl:justify-start xl:gap-12 border border-line rounded-card py-1.5 px-2 xl:border-0 xl:p-0">
          <div className="flex xl:mx-6">
            <FilterDropdown filterList={filterList} />
          </div>
          <div className="flex xl:mx-6">
            <DateDropdown />
          </div>
          <button
            type="button"
            className="xl:hidden flex items-center gap-1.5 rounded-pill border border-line bg-surface px-3 py-1.5 text-[11px] leading-3 text-ink-soft cursor-pointer select-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            onClick={() => setSidebar(true)}
          >
            <span className="w-4 h-4" aria-hidden="true">
              <SvgFilter />
            </span>
            Filters
          </button>
        </div>
        <div className="lg:flex hidden relative w-full lg:w-80">
          <input
            type="search"
            id="search"
            placeholder="Search"
            aria-label="Search store listings"
            className="w-full outline-none bg-surface border border-line rounded-pill placeholder:text-ink-muted text-ink px-5 pr-10 py-2 text-sm transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          />
          <span className="absolute w-4 h-4 right-4 top-2.5 text-ink-muted" aria-hidden="true">
            <SvgSearch />
          </span>
        </div>
      </div>
      <div className="flex relative xl:hidden mb-[0.75rem]">
        <input
          type="search"
          id="search-mobile"
          placeholder="Search"
          aria-label="Search store listings"
          className="w-full outline-0 bg-surface border border-line rounded-pill placeholder:text-ink-muted text-ink placeholder:text-sm px-4 pr-10 py-2 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          required
        />
        <span className="text-ink-muted" aria-hidden="true">
          <SvgSearch2 />
        </span>
      </div>
      <p className="text-xs xl:text-sm text-ink-muted font-medium my-3">{ProductList.length} Listings Displayed</p>
      <div className="grid w-full gap-3 xl:gap-2 mt-1">
        {ProductList.map((el: any) => <ProductCard content={el} key={el.id} />)}
      </div>
    </div>
  );
};

const ProductCard: FC<any> = ({ content }) => {
  return (
    <article className="grid xl:grid-cols-7 gap-2 bg-surface rounded-card shadow-card border border-line hover:border-brand-300 hover:shadow-pop transition-all duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none px-4 xl:px-6 py-3 w-full relative xl:h-[10rem]">
      <div className="relative flex gap-1 xl:static xl:self-start">
        {content.red === true && content.green === true && (
          <div className="absolute -top-4 -left-5 z-10" aria-hidden="true">
            <div className="relative">
              <SvgBanner />
              <span className="absolute inset-0 flex items-center justify-center">
                <SvgBannerWrite1 />
              </span>
            </div>
            <div className="absolute top-3 left-3">
              <div className="relative">
                <SvgBanner1 />
                <span className="absolute inset-0 flex items-center justify-center">
                  <SvgBannerWrite />
                </span>
              </div>
            </div>
          </div>
        )}
        {content.red === false && content.green === true && (
          <div className="absolute -top-4 -left-5 z-10" aria-hidden="true">
            <div className="relative">
              <SvgBanner />
              <span className="absolute inset-0 flex items-center justify-center">
                <SvgBannerWrite1 />
              </span>
            </div>
          </div>
        )}
        {content.red === true && content.green === false && (
          <div className="absolute -top-4 -left-5 z-10" aria-hidden="true">
            <div className="relative">
              <SvgBanner1 />
              <span className="absolute inset-0 flex items-center justify-center">
                <SvgBannerWrite />
              </span>
            </div>
          </div>
        )}
        <div>
          <div className="relative flex w-28 h-16 mt-6 xl:w-20 xl:h-20 xl:mb-2 xl:mr-2 bg-canvas rounded-card">
            <Image className="object-contain" src={content?.image} fill sizes="(max-width: 1280px) 30vw, 10vw" alt={content.brand} />
          </div>
          <div className="flex justify-center mt-4 xl:hidden">
            {content.amount == null ? (
              <div className="flex items-center justify-center w-full">
                <button
                  type="button"
                  className="flex justify-center gap-1 items-center py-2 rounded-pill bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white w-32 text-sm font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                >
                  <span className="w-4 h-4" aria-hidden="true">
                    <SvgBasket2 />
                  </span>
                  Add to Cart
                </button>
              </div>
            ) : content.amount !== 1 ? (
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-around rounded-pill border border-line p-1 w-36 bg-surface">
                  <StepperButton ariaLabel="Decrease quantity">
                    <SvgButton1 />
                  </StepperButton>
                  <span className="text-ink-soft font-semibold font-display text-sm bg-canvas rounded-pill py-1 px-5">
                    {content.amount}
                  </span>
                  <StepperButton ariaLabel="Increase quantity">
                    <SvgButton2 />
                  </StepperButton>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-around rounded-pill border border-line p-1 w-36 bg-surface">
                  <StepperButton ariaLabel="Remove item">
                    <SvgButton3 />
                  </StepperButton>
                  <span className="text-ink-soft font-semibold font-display text-sm bg-canvas rounded-pill py-1 px-5">
                    {content.amount}
                  </span>
                  <StepperButton ariaLabel="Increase quantity">
                    <SvgButton4 />
                  </StepperButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col py-6 xl:py-2 xl:static ml-32 xl:ml-0 xl:col-span-2 xl:mr-7 min-w-0">
        <h3 className={`${labelClass} hidden xl:block`}>Product</h3>
        <div className="text-sm text-ink-soft py-1.5 min-w-0">
          <h4 className="font-semibold text-ink truncate">{content?.name}</h4>
          <span className="truncate block">{content?.brand}</span>
        </div>
        <div className="hidden absolute left-[450px] bottom-[25px] lg:flex text-line" aria-hidden="true">
          <SvgLine />
        </div>
      </div>

      <div className="flex flex-wrap xl:static mt-24 xl:mt-0 xl:flex-row xl:col-span-4 xl:gap-10 xl:ml-2 mb-4 gap-x-8 gap-y-2">
        <div className="flex items-baseline xl:flex-col gap-2 xl:gap-1.5">
          <h3 className={labelClass}>Expiry</h3>
          <p className="text-sm font-medium text-ink-soft">{content?.miad}</p>
        </div>
        <div className="flex items-baseline xl:flex-col gap-2 xl:gap-1.5 xl:w-1/5">
          <h3 className={labelClass}>Quantity</h3>
          <input
            className="text-ink-soft outline-none font-medium text-sm bg-transparent border border-line rounded-pill px-3 py-1 w-20 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            type="number"
            defaultValue={content?.quantity}
            aria-label={`Quantity of ${content?.name}`}
          />
        </div>
        <div className="flex items-baseline xl:flex-col gap-2 xl:gap-1.5 xl:w-1/5">
          <h3 className={labelClass}>Price</h3>
          <p className="font-display font-bold text-lg text-ink">{content?.price} $</p>
        </div>
        <div className="self-start hidden xl:flex xl:pt-6">
          <BasketConnector item={content} />
        </div>
      </div>
    </article>
  );
};

const StepperButton: FC<any> = ({ children, ariaLabel }) => (
  <button
    type="button"
    aria-label={ariaLabel}
    className="flex items-center justify-center w-8 h-8 rounded-pill border border-line text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:opacity-40"
  >
    <span className="w-3 h-3 flex items-center justify-center">{children}</span>
  </button>
);

const BasketConnector: FC<any> = ({ item }) => {
  const [isBasketActive, setIsBasketActive] = useState<boolean>(false);
  const { addItem, containsItemId, removeItemById } = useBasketContext();

  const itemQuantity = containsItemId(item);

  if (!isBasketActive) {
    return (
      <div className="flex items-center justify-center h-full xl:w-40">
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
    <div className="flex items-center justify-center h-full xl:w-40">
      <div className="flex items-center justify-center gap-1.5 border border-line rounded-pill p-1 bg-surface">
        {itemQuantity < 1 ? (
          <button
            type="button"
            aria-label="Close quantity selector"
            onClick={() => setIsBasketActive(false)}
            className="flex items-center justify-center w-9 h-9 rounded-pill border border-line text-danger transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:opacity-40"
          >
            <span className="w-4 h-4">
              <SvgTrashCan />
            </span>
          </button>
        ) : (
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => removeItemById(item)}
            className="flex items-center justify-center w-9 h-9 rounded-pill border border-line text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:opacity-40"
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
          className="flex items-center justify-center w-9 h-9 rounded-pill border border-line text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 disabled:opacity-40"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5" aria-hidden="true">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Seller;
