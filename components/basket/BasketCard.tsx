import Image from "next/image";
import React, { FC } from "react";
import {
  SvgCargoBox,
  SvgCargoCar,
  SvgEczaMax,
  SvgEmptyStar,
  SvgFavorite,
  SvgMediTome,
  SvgMinus,
  SvgPlus,
  SvgTrashCan,
} from "../../helpers/svgs/basketSvg";

const SellerLogo: FC<{ logo: string }> = ({ logo }) => (
  <div className="h-8 w-8">{logo === "pharma" ? <SvgEczaMax /> : <SvgMediTome />}</div>
);

const stepperButtonClass =
  "flex items-center justify-center w-9 h-9 xl:w-7 xl:h-7 bg-surface rounded-pill cursor-pointer border border-line hover:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none";

const BasketCard: FC<any> = ({ content, onChange, onRemoveSeller, onCompleteSeller, onRemoveCampaign }) => {
  const updateProduct = (productId: number, patch: any) => {
    const next = {
      ...content,
      productCards: content.productCards.map((p: any) => (p.id === productId ? { ...p, ...patch } : p)),
    };
    onChange(next);
  };

  const removeProduct = (productId: number) => {
    const remaining = content.productCards.filter((p: any) => p.id !== productId);
    if (remaining.length === 0) {
      onRemoveSeller(content.id);
      return;
    }
    onChange({ ...content, productCards: remaining });
  };

  const selectShipping = (option: string) => {
    onChange({ ...content, shippingOption: option });
  };

  return (
    <div className="bg-surface rounded-card px-3 mx-3 xl:mx-0 xl:px-8 py-4 border border-line shadow-card grid gap-5">
      <div className="flex justify-between xl:items-center">
        <div className="flex items-center w-full gap-2 xl:w-max">
          <div className="p-2 bg-canvas rounded-pill border border-line">
            <SellerLogo logo={content.logo} />
          </div>
          <div className="font-display font-semibold text-ink text-sm">{content.firm}</div>
        </div>
        <div className="flex flex-col gap-3 text-[12px] w-full leading-snug xl:text-sm font-medium xl:items-center xl:flex-row xl:w-max">
          {content.shippingCampaign && (
            <>
              <div className="text-success flex grow gap-1 items-center">
                <div className="xl:w-6 xl:h-6 w-[21px] h-[16px]">
                  <SvgCargoCar />
                </div>
                Free Shipping Over ${content.shippingCampaign}
              </div>
              <div className="w-[2px] h-6 bg-line rounded-pill hidden xl:block"></div>
            </>
          )}
          {content.shippingCampaign2 && (
            <>
              <div className="text-amberDark flex gap-1 items-center">
                <div className="xl:w-6 w-[20px] h-[19px] xl:h-6">
                  <SvgCargoBox />
                </div>
                {content.shippingCampaign2}
              </div>
              <div className="w-[2px] h-6 bg-line rounded-pill hidden xl:block"></div>
            </>
          )}
          {content.minTotalPrice && (
            <>
              <div className="text-brand-600 flex gap-1 items-center">
                <div className="xl:w-6 w-[20px] h-[19px] xl:h-6">
                  <SvgCargoBox />
                </div>
                Min {content.minTotalPrice} $
              </div>
            </>
          )}
        </div>
      </div>
      <div className="grid gap-3">
        {content.productCards.map((el: any) => (
          <ProductCard
            key={el.id}
            content={el}
            onChange={(patch: any) => updateProduct(el.id, patch)}
            onRemove={() => removeProduct(el.id)}
          />
        ))}
      </div>
      {content.shippingCampaign ? (
        <ShippingCampaignCard content={content} onRemoveCampaign={() => onRemoveCampaign(content.id)} />
      ) : (
        ""
      )}
      <ShippingArea content={content} onSelectShipping={selectShipping} />
      <div className="bg-line w-full h-[1px]"></div>
      <div className="grid grid-cols-12 gap-3 xl:grid-cols-3 xl:gap-8">
        <button
          type="button"
          onClick={() => onRemoveSeller(content.id)}
          className="group flex items-center col-span-6 gap-2 cursor-pointer xl:col-span-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-pill"
        >
          <div className="w-5 h-5 text-ink-muted transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:text-danger">
            <SvgTrashCan />
          </div>
          <p className="font-medium text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:text-danger text-[12px] xl:text-sm">
            Remove Seller from Cart
          </p>
        </button>
        <button
          type="button"
          onClick={() => onCompleteSeller(content.id)}
          className="rounded-pill order-last col-start-3 xl:col-start-auto cursor-pointer col-span-8 xl:col-span-1 xl:order-none bg-brand-400 hover:bg-brand-500 active:bg-brand-600 text-white text-[12px] xl:text-sm py-2.5 xl:py-2 font-semibold transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
        >
          Complete Only This Purchase
        </button>
        <div className="font-medium text-ink-soft flex gap-3 items-baseline text-[12px] xl:text-sm xl:items-center justify-center xl:pl-12 col-span-6 xl:col-span-1">
          Total:
          <span className="font-display font-bold text-ink tabular-nums xl:text-lg">
            {content.total.toFixed(2).replace(".", ",")} $
          </span>
        </div>
      </div>
    </div>
  );
};

const ShippingArea: FC<any> = ({ content, onSelectShipping }) => {
  const campaignReached = content.shippingCampaign > content.total;
  return (
    <div className="grid xl:grid-cols-2">
      <div className="flex flex-col justify-around h-full">
        <div
          role="progressbar"
          aria-label="Free shipping progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={campaignReached ? 80 : 100}
          className="bg-line rounded-pill xl:w-4/5 h-4 overflow-hidden"
        >
          <div
            className={`bg-gradient-to-r h-full rounded-pill transition-[width] duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none ${
              campaignReached ? "w-4/5 from-amber-400 to-amber-500" : "w-full from-success to-successDark"
            }`}
          ></div>
        </div>
        <div className="text-ink-soft font-medium text-[12px] leading-snug py-2 xl:py-0 xl:text-sm">
          Add More Products at the Same Shipping Cost!
        </div>
      </div>
      <div className="grid items-center w-full grid-cols-2 gap-2 text-sm">
        <label htmlFor={`shipping-domestic-${content.id}`} className="flex gap-1 xl:gap-2 cursor-pointer">
          <div className="border rounded-md border-amber-500 w-[1.3rem] h-[1.3rem] flex items-center justify-center mt-1 bg-surface">
            <input
              type="radio"
              name={"shipping" + content.id}
              id={`shipping-domestic-${content.id}`}
              className="sr-only peer"
              checked={content.shippingOption !== "express"}
              onChange={() => onSelectShipping("domestic")}
            />
            <div className="w-[0.9rem] h-[0.9rem] rounded-sm peer-checked:bg-amber-500 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400"></div>
          </div>
          <div className="grid gap-1 py-1">
            <div className="font-semibold text-ink-soft flex gap-1 xl:text-sm text-[10px] leading-[10px] whitespace-nowrap">
              Domestic Shipping:
              <span className="text-amberDark tabular-nums">
                {content.domesticShipping ? (
                  content.domesticShipping
                ) : (
                  <span className="text-success font-semibold tracking-tight">Free Shipping</span>
                )}
              </span>
            </div>
            <div className="font-medium text-amberDark xl:text-sm text-[10px] leading-[10px]">Contracted</div>
          </div>
        </label>
        <div>
          <label htmlFor={`shipping-express-${content.id}`} className="flex gap-1 xl:gap-2 cursor-pointer">
            <div className="border rounded-md border-amber-500 w-[1.3rem] h-[1.3rem] flex items-center justify-center mt-1 bg-surface">
              <input
                type="radio"
                name={"shipping" + content.id}
                id={`shipping-express-${content.id}`}
                className="sr-only peer"
                checked={content.shippingOption === "express"}
                onChange={() => onSelectShipping("express")}
              />
              <div className="w-[0.9rem] h-[0.9rem] rounded-sm peer-checked:bg-amber-500 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400"></div>
            </div>
            <div className="grid gap-1 py-1">
              <div className="font-semibold text-ink-soft flex gap-1 xl:text-sm text-[10px] leading-[10px] whitespace-nowrap">
                Express Shipping:
                <span className="text-amberDark tabular-nums">
                  {content.expressShipping ? (
                    content.expressShipping
                  ) : (
                    <span className="text-success font-semibold tracking-tight">Free Shipping</span>
                  )}
                </span>
              </div>
              <div className="font-medium text-amberDark xl:text-sm text-[10px] leading-[10px]">Contracted</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

const ShippingCampaignCard: FC<any> = ({ content, onRemoveCampaign }) => {
  const condition = content.shippingCampaign - content.total < 0;
  return (
    <div
      className={`${
        condition ? "bg-successTint border-success/40" : "bg-brand-50 border-brand-200"
      } border flex xl:flex-row flex-col gap-2 xl:items-center justify-between py-2.5 px-3 xl:px-5 rounded-card w-full`}
    >
      <div className="flex items-center justify-between gap-1 xl:justify-center xl:gap-8">
        <div
          className={`${
            condition ? "border-success/50 text-successDark" : "border-brand-300 text-brand-700"
          } border text-[12px] px-3 xl:px-4 py-2 rounded-pill xl:text-sm xl:rounded-md font-medium`}
        >
          Seller Special
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-7 h-6 ${condition ? "text-successDark" : "text-brand-600"}`}>
            <SvgCargoCar />
          </div>
          <div className="font-medium text-ink-soft text-[12px] xl:text-sm">
            Shipping Over ${content.shippingCampaign}
            <b className={`${condition ? "text-successDark" : "text-brand-700"}`}> Free!</b>
          </div>
        </div>
      </div>
      <div
        className={`${
          condition ? "bg-surface border-success/40 text-ink-soft" : "bg-surface border-brand-200 text-ink-soft"
        } font-medium py-1 px-3 flex items-center justify-between gap-1 xl:px-4 rounded-pill xl:rounded-lg text-[12px] xl:text-sm border`}
      >
        {!condition ? (
          <>
            For campaign{" "}
            <span className="font-semibold text-brand-700 tabular-nums">
              {(content.shippingCampaign - content.total).toFixed(2)} $ add products
            </span>
          </>
        ) : (
          <>
            Campaign Applied
            <button
              type="button"
              onClick={onRemoveCampaign}
              className="border border-line text-ink-soft hover:border-danger/40 hover:text-dangerDark py-1 cursor-pointer font-medium px-4 ml-6 rounded-pill xl:rounded-md transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              Remove
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const ProductCard: FC<any> = ({ content, onChange, onRemove }) => {
  const changeCount = (count: number) => {
    onChange({ count: Math.max(1, count) });
  };

  return (
    <div
      className={`grid h-full xl:h-32 grid-cols-5 gap-4 px-3 mx-3 xl:mx-0 xl:px-7 py-5 border border-line rounded-card relative ${
        content.purchasable ? "bg-canvas" : "bg-dangerTint border-danger/20"
      }`}
    >
      <div className="flex items-center col-span-2 row-span-2 xl:gap-2 xl:row-span-1 xl:col-span-1">
        <label
          htmlFor={content.id}
          className="absolute top-0 flex items-center justify-center h-full -left-2.5 xl:static"
        >
          <div className="border rounded-md border-brand-400 bg-surface w-6 h-6 flex items-center justify-center">
            <input
              type="checkbox"
              name={`select-${content.id}`}
              id={content.id}
              aria-label={`Select ${content.name.replace("\n", " ")}`}
              className="sr-only peer"
              disabled={!content.purchasable}
            />
            <div className="w-4 h-4 rounded-sm peer-checked:bg-brand-400 peer-focus-visible:ring-2 peer-focus-visible:ring-brand-400"></div>
          </div>
        </label>
        <div className="w-full h-full pl-2 py-1.5 flex justify-center">
          <div className="relative w-full xl:w-[70%] h-full">
            <Image className="object-contain" src={content.image} fill sizes="100vw" alt={content.name} />
          </div>
        </div>
      </div>
      <div className="flex col-span-3 gap-2 text-sm xl:col-span-1 xl:block">
        <p className="uppercase tracking-wide text-ink-soft font-medium text-[11px]">Product</p>
        <div>
          <p className="font-semibold text-ink whitespace-pre-line xl:leading-snug xl:text-sm text-[12px] leading-[18px]">
            {content.name}
          </p>
          <p className="text-ink-soft text-[12px] leading-[18px] xl:text-sm">{content.brand}</p>
        </div>
        {!content.purchasable && (
          <div className="inline-flex self-start items-center gap-1.5 rounded-pill bg-dangerTint px-2.5 py-1 text-xs font-medium text-dangerDark xl:hidden">
            {content.warning}
          </div>
        )}
        {!content.purchasable && (
          <div className="font-medium text-dangerDark text-sm hidden xl:block">{content.warning}</div>
        )}
      </div>
      <div className="flex flex-col col-span-2 col-start-3 xl:justify-between xl:flex-row xl:col-span-1 xl:col-start-auto">
        <div className="flex gap-3 xl:flex-col">
          <p className="uppercase tracking-wide text-ink-soft font-medium text-[11px]">Expiry</p>
          <div className="text-ink-soft xl:font-medium text-[12px] leading-[18px] xl:text-sm">{content.miad}</div>
        </div>
        <div className="flex gap-3 xl:flex-col">
          <p className="uppercase tracking-wide text-ink-soft font-medium text-[11px]">Price</p>
          <div className="text-ink-soft xl:font-medium text-[12px] leading-[18px] xl:text-sm tabular-nums">
            {content.price}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around col-span-5 col-start-1 gap-10 xl:gap-4 xl:col-span-2 xl:justify-evenly">
        <div className="flex items-center gap-5 pl-4 xl:pl-0 xl:gap-3 xl:flex-col">
          <button
            type="button"
            aria-label={content.isFavorite ? "Remove from favourites" : "Add to favourites"}
            className="flex items-center justify-center w-9 h-9 -m-2 p-2 box-content focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-pill"
            onClick={() => onChange({ isFavorite: !content.isFavorite })}
          >
            <div className="flex w-full h-full">
              {content.isFavorite ? <SvgFavorite /> : <SvgEmptyStar />}
            </div>
          </button>
          <button
            type="button"
            aria-label="Remove item"
            className="flex items-center justify-center w-9 h-9 -m-2 p-2 box-content text-ink-muted hover:text-danger focus-visible:text-danger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded-pill transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none"
            onClick={onRemove}
          >
            <div className="w-full h-full">
              <SvgTrashCan />
            </div>
          </button>
        </div>
        <div className="flex min-w-0 items-center gap-3">
          <div className="min-w-0">
            <div className="bg-canvas rounded-pill flex border border-line hover:border-brand-300 p-0.5 xl:p-1 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
              <button
                type="button"
                onClick={() => changeCount(content.count - 1)}
                aria-label="Decrease quantity"
                className={stepperButtonClass}
              >
                <div className="xl:w-3 w-2 h-1 xl:h-3 text-brand-600">
                  <SvgMinus />
                </div>
              </button>
              <output
                aria-live="polite"
                className="xl:w-9 w-7 bg-transparent text-sm text-center text-ink-soft outline-none tabular-nums font-display font-semibold"
              >
                {content.count}
              </output>
              <button
                type="button"
                onClick={() => changeCount(content.count + 1)}
                aria-label="Increase quantity"
                className={stepperButtonClass}
              >
                <div className="xl:w-3 w-2 h-2 xl:h-3 text-brand-600">
                  <SvgPlus />
                </div>
              </button>
            </div>
          </div>
          <div className="flex min-w-0 shrink items-center justify-center text-ink-soft text-sm font-display font-bold text-center w-20 xl:w-24 whitespace-nowrap tabular-nums">
            <p>{(content.price * content.count).toFixed(2).replace(".", ",")} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
