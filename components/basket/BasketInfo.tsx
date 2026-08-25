import React, { FC } from "react";

const BasketInfo: FC<any> = ({ setActivePage, basketData }) => {
  const sellers: any[] = basketData ?? [];
  const pieces = sellers.reduce(
    (sum, seller) => sum + seller.productCards.reduce((a: number, p: any) => a + p.count, 0),
    0
  );
  const firms = sellers.length;
  const shipping = sellers.reduce(
    (sum, seller) =>
      sum + (seller.shippingOption === "express" ? seller.expressShipping : seller.domesticShipping),
    0
  );
  const productsPrice = sellers.reduce(
    (sum, seller) => sum + seller.productCards.reduce((a: number, p: any) => a + p.price * p.count, 0),
    0
  );
  const total = shipping + productsPrice;
  const fmt = (value: number) => `${value.toFixed(2)} $`;
  const hasItems = pieces > 0;

  const checkoutButtonClass =
    "w-full rounded-pill py-3 bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white font-semibold disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1";

  return (
    <>
      {/* Cart summary */}
      <div className="hidden xl:grid gap-5 bg-surface rounded-card shadow-card p-6 sticky top-6 border border-line">
        <div>
          <p className="font-display text-xs uppercase tracking-wider text-ink-muted">Cart Summary</p>
          <p className="mt-1 text-sm font-semibold text-ink">
            Selected Products in Cart ({pieces})
          </p>
          <p className="text-xs text-ink-muted">
            Selected {pieces} products from {firms} sellers
          </p>
        </div>
        <div className="grid gap-2 border-t border-line pt-4">
          <div className="flex justify-between text-sm text-ink-soft tabular-nums">
            <p>Products</p>
            <p>{fmt(productsPrice)}</p>
          </div>
          <div className="flex justify-between text-sm text-ink-soft tabular-nums">
            <p>Shipping</p>
            <p>{fmt(shipping)}</p>
          </div>
        </div>
        <div className="flex items-baseline justify-between border-t border-line pt-4">
          <p className="font-display text-sm font-semibold text-ink">Total</p>
          <p className="font-display text-xl font-bold text-ink tabular-nums">{fmt(total)}</p>
        </div>
        <button
          type="button"
          aria-label="Complete purchase"
          disabled={!hasItems}
          className={checkoutButtonClass}
          onClick={() => setActivePage(() => "payment")}
        >
          Complete Purchase
        </button>
      </div>

      <div className="fixed xl:hidden bottom-0 pb-[100px] left-0 right-0 bg-surface rounded-t-card px-4 pt-3 z-40 border-t border-x border-line shadow-pop">
        <div className="grid justify-between grid-cols-2 items-center gap-3">
          <div className="col-span-1 flex flex-col">
            <span className="text-xs text-ink-muted">Total</span>
            <span className="font-display text-lg font-bold text-ink tabular-nums">{fmt(total)}</span>
          </div>
          <div className="flex justify-end col-span-1">
            <button
              type="button"
              aria-label="Complete purchase"
              disabled={!hasItems}
              className="rounded-pill px-5 py-2.5 text-sm font-semibold whitespace-nowrap bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              onClick={() => setActivePage(() => "payment")}
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketInfo;
