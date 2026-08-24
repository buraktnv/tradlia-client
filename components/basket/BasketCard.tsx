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
    <div className="bg-white xl:bg-[#F4F5F7] rounded-xl xl:rounded-3xl px-3 mx-3 xl:mx-0 xl:px-8 py-4 border border-[#00b2b27e] grid gap-5">
      <div className="flex justify-between xl:items-center">
        <div className="flex items-center w-full gap-2 xl:w-max">
          <div className="p-2 bg-white rounded-full border border-[#00B1B2CC]">
            <SellerLogo logo={content.logo} />
          </div>
          <div className="font-bold text-[#7E8096] text-sm">{content.firm}</div>
        </div>
        <div className="flex flex-col gap-3 text-[12px] w-full leading-3 xl:text-sm font-medium xl:items-center xl:flex-row xl:w-max">
          {content.shippingCampaign && (
            <>
              <div className="text-[#86BC25] flex grow gap-1 items-center">
                <div className="xl:w-6 xl:h-6 w-[21px] h-[16px]">
                  <SvgCargoCar />
                </div>
                Free Shipping Over ${content.shippingCampaign}
              </div>
              <div className="w-[2px] h-6 bg-[#AFD3D2] rounded-full hidden xl:block"></div>
            </>
          )}
          {content.shippingCampaign2 && (
            <>
              <div className="text-[#FF792E] flex gap-1 items-center">
                <div className="xl:w-6 w-[20px] h-[19px] xl:h-6">
                  <SvgCargoBox />
                </div>
                {content.shippingCampaign2}
              </div>
              <div className="w-[2px] h-6 bg-[#AFD3D2] rounded-full hidden xl:block"></div>
            </>
          )}
          {content.minTotalPrice && (
            <>
              <div className="text-[#4CBEC5] flex gap-1 items-center">
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
      <div className="bg-[#DADADACC] w-full h-[1px]"></div>
      <div className="grid grid-cols-12 gap-3 xl:grid-cols-3 xl:gap-8">
        <button
          type="button"
          onClick={() => onRemoveSeller(content.id)}
          className="flex items-center col-span-6 gap-2 cursor-pointer xl:col-span-1"
        >
          <div className="w-5 h-5">
            <SvgTrashCan />
          </div>
          <p className="font-medium text-[#7E8096] text-[12px] xl:text-sm">Remove Seller from Cart</p>
        </button>
        <button
          type="button"
          onClick={() => onCompleteSeller(content.id)}
          className="rounded-full order-last col-start-3 xl:col-start-auto cursor-pointer col-span-8 xl:col-span-1 xl:order-none bg-[#4CBEC5] text-white text-[12px] xl:text-sm py-2.5 xl:py-2 font-medium"
        >
          Complete Only This Purchase
        </button>
        <div className="font-medium text-[#7E8096] flex gap-3 text-[12px] xl:text-sm xl:items-center justify-center xl:pl-12 col-span-6 xl:col-span-1">
          Total: <p className="font-bold xl:text-lg">{content.total.toFixed(2).replace(".", ",")} $</p>
        </div>
      </div>
    </div>
  );
};

const ShippingArea: FC<any> = ({ content, onSelectShipping }) => {
  return (
    <div className="grid xl:grid-cols-2">
      <div className="flex flex-col justify-around h-full">
        <div className="bg-[#CCCFDD] rounded-full xl:w-4/5 h-4">
          <div
            className={`bg-gradient-to-r h-full rounded-full ${
              content.shippingCampaign > content.total
                ? "w-4/5 from-[#FFBE00] to-[#FF7B03]"
                : "w-full from-[#A2C617] to-[#3AAA35]"
            }`}
          ></div>
        </div>
        <div className="text-[#7E8096] font-medium text-[12px] leading-3 py-2 xl:py-0 xl:text-sm">
          Add More Products at the Same Shipping Cost!
        </div>
      </div>
      <div className="grid items-center w-full grid-cols-2 gap-2 text-sm">
        <label htmlFor={`shipping-domestic-${content.id}`} className="flex gap-1 xl:gap-2 cursor-pointer">
          <div className="border rounded-[5px] border-[#F59C00] w-[1.3rem] h-[1.3rem] flex items-center justify-center mt-1">
            <input
              type="radio"
              name={"shipping" + content.id}
              id={`shipping-domestic-${content.id}`}
              className="hidden peer"
              checked={content.shippingOption !== "express"}
              onChange={() => onSelectShipping("domestic")}
            />
            <div className="w-[0.9rem] h-[0.9rem] rounded-[4px] peer-checked:bg-[#F59C00]"></div>
          </div>
          <div className="grid gap-1 py-1">
            <div className="font-bold text-[#7E8096] flex gap-1 xl:text-sm text-[10px] leading-[10px] whitespace-nowrap">
              Domestic Shipping:
              <div className="text-[#F59C00]">
                {content.domesticShipping ? (
                  content.domesticShipping
                ) : (
                  <div className="text-[#86BC25] font-bold tracking-tight">Free Shipping</div>
                )}
              </div>
            </div>
            <div className="font-medium text-[#F59C00] xl:text-sm text-[10px] leading-[10px]">Contracted</div>
          </div>
        </label>
        <div>
          <label htmlFor={`shipping-express-${content.id}`} className="flex gap-1 xl:gap-2 cursor-pointer">
            <div className="border rounded-[5px] border-[#F59C00] w-[1.3rem] h-[1.3rem] flex items-center justify-center mt-1">
              <input
                type="radio"
                name={"shipping" + content.id}
                id={`shipping-express-${content.id}`}
                className="hidden peer"
                checked={content.shippingOption === "express"}
                onChange={() => onSelectShipping("express")}
              />
              <div className="w-[0.9rem] h-[0.9rem] rounded-[4px] peer-checked:bg-[#F59C00]"></div>
            </div>
            <div className="grid gap-1 py-1">
              <div className="font-bold text-[#7E8096] flex gap-1 xl:text-sm text-[10px] leading-[10px] whitespace-nowrap">
                Express Shipping:
                <div className="text-[#F59C00]">
                  {content.expressShipping ? (
                    content.expressShipping
                  ) : (
                    <div className="text-[#86BC25] font-bold tracking-tight">Free Shipping</div>
                  )}
                </div>
              </div>
              <div className="font-medium text-[#F59C00] xl:text-sm text-[10px] leading-[10px]">Contracted</div>
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
        condition ? "bg-[#86BC25]" : "bg-[#E5F3F3]"
      } border border-[#00B1B265] flex xl:flex-row flex-col gap-2 xl:items-center justify-between py-2.5 px-3 xl:px-5 rounded-2xl w-full`}
    >
      <div className="flex items-center justify-between gap-1 xl:justify-center xl:gap-8">
        <div
          className={`${
            condition ? "text-white border-white" : "text-[#7E8096]"
          } border border-[#00B1B265] text-[12px] px-3 xl:px-4 py-2 rounded-full xl:text-sm xl:rounded-lg`}
        >
          Seller Special
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-7 h-6 ${condition ? "text-white" : "text-[#76B82A]"}`}>
            <SvgCargoCar />
          </div>
          <div
            className={`font-medium text-[#7E8096] text-[12px] xl:text-sm ${
              condition ? "text-white border-white" : "text-[#7E8096]"
            }`}
          >
            Shipping Over ${content.shippingCampaign}
            <b className={`${condition ? "text-white" : "text-[#76B82A]"}`}> Free!</b>
          </div>
        </div>
      </div>
      <div className="text-[#76B82A] font-medium bg-white py-1 px-3 flex items-center justify-between gap-1 xl:px-4 rounded-full xl:rounded-xl  text-[12px] xl:text-sm border border-[#00B1B265]">
        {!condition ? (
          <>
            For campaign <span className="font-bold">{content.shippingCampaign - content.total} $ add products</span>
          </>
        ) : (
          <>
            Campaign Applied
            <button
              type="button"
              onClick={onRemoveCampaign}
              className="border border-[#76B82ACC] text-[#7E8096] py-1 cursor-pointer font-medium px-4 ml-6 rounded-full xl:rounded-md"
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
      className={`grid h-full xl:h-32 grid-cols-5 gap-4 px-3 mx-3 xl:mx-0 xl:px-7 py-5 bg-white border border-gray-200 rounded-2xl xl:rounded-[1.5rem] relative ${
        content.purchasable ? "bg-white" : "bg-[#FB295A15]"
      }`}
    >
      <div className="flex items-center col-span-2 row-span-2 xl:gap-2 xl:row-span-1 xl:col-span-1">
        <label
          htmlFor={content.id}
          className="absolute top-0 flex items-center justify-center h-full -left-2.5 xl:static"
        >
          <div className="border rounded-[5px] border-[#4CBEC5] bg-white w-6 h-6 flex items-center justify-center">
            <input type="checkbox" name="" id={content.id} className="hidden peer" disabled={!content.purchasable} />
            <div className="w-4 h-4 rounded-[4px] peer-checked:bg-[#4CBEC5]"></div>
          </div>
        </label>
        <div className="w-full h-full pl-2 py-1.5 flex justify-center">
          <div className="relative w-full xl:w-[70%] h-full">
            <Image className="object-contain" src={content.image} fill sizes="100vw" alt={content.name} />
          </div>
        </div>
      </div>
      <div className="flex col-span-3 gap-2 text-sm xl:col-span-1 xl:block">
        <p className="text-[#4CBEC5] font-medium text-sm">Product</p>
        <div>
          <p className="font-bold text-[#7E8096] whitespace-pre-line xl:leading-snug xl:text-sm text-[12px] leading-[18px]">
            {content.name}
          </p>
          <p className="text-[#7E8096] text-[12px] leading-[18px] xl:text-sm">{content.brand}</p>
        </div>
        {!content.purchasable && (
          <div className="font-medium text-[#FB295A] text-sm hidden xl:block">{content.warning}</div>
        )}
      </div>
      <div className="flex flex-col col-span-2 col-start-3 xl:justify-between xl:flex-row xl:col-span-1 xl:col-start-auto">
        <div className="flex gap-3 xl:flex-col">
          <p className="text-[#4CBEC5] font-medium text-sm">Expiry</p>
          <div className="text-[#7E8096] xl:font-medium text-[12px] leading-[18px] xl:text-sm">{content.miad}</div>
        </div>
        <div className="flex gap-3 xl:flex-col">
          <p className="text-[#4CBEC5] font-medium text-sm">Price</p>
          <div className="text-[#7E8096] xl:font-medium text-[12px] leading-[18px] xl:text-sm">{content.price}</div>
        </div>
      </div>
      <div className="flex items-center justify-around col-span-5 col-start-1 gap-10 xl:gap-4 xl:col-span-2 xl:justify-evenly">
        <div className="flex items-center gap-5 pl-4 xl:pl-0 xl:gap-3 xl:flex-col">
          <div className="w-5 h-5">
            {content.isFavorite ? (
              <div className="flex w-full h-full cursor-pointer" onClick={() => onChange({ isFavorite: false })}>
                <SvgFavorite />
              </div>
            ) : (
              <div className="flex w-full h-full cursor-pointer" onClick={() => onChange({ isFavorite: true })}>
                <SvgEmptyStar />
              </div>
            )}
          </div>
          <div className="w-5 h-5 cursor-pointer" onClick={onRemove}>
            <SvgTrashCan />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <div className="bg-[#F4F5F9] rounded-full flex border border-[#00B1B2CC] p-0.5 xl:p-1">
              <button
                type="button"
                onClick={() => changeCount(content.count - 1)}
                aria-label="Decrease quantity"
                className="flex items-center justify-center px-1.5 bg-white rounded-l-full cursor-pointer"
              >
                <div className="xl:w-3 w-2 h-1 xl:h-3 text-[#4CBEC5]">
                  <SvgMinus />
                </div>
              </button>
              <input
                type="number"
                name=""
                id=""
                min={1}
                value={content.count}
                onChange={(e) => changeCount(Number(e.target.value) || 1)}
                className="xl:w-9 w-7 bg-[#F4F5F9] text-sm text-center text-[#7E8096] outline-none"
              />
              <button
                type="button"
                onClick={() => changeCount(content.count + 1)}
                aria-label="Increase quantity"
                className="flex items-center justify-center px-1.5 bg-white rounded-r-full cursor-pointer"
              >
                <div className="xl:w-3 w-2 h-2 xl:h-3 text-[#4CBEC5]">
                  <SvgPlus />
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center text-[#7E8096] text-sm font-bold text-center w-20 xl:w-24 whitespace-nowrap">
            <p>{(content.price * content.count).toFixed(2).replace(".", ",")} $</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
