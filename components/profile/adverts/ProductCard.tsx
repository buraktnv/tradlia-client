import Image from "next/image";
import { FC } from "react";
import { SvgImg3 } from "../../../helpers/svgs/adverts";
import useMediaQuery from "../../../helpers/hooks/useMediaQuery";
import type { AdvertProductCardProps } from "../../../types/product";

const ProductCard: FC<AdvertProductCardProps> = ({ content, setOpenModal, listType }) => {
  const mobile = !useMediaQuery("(min-width: 768px)");
  const contentId = String(content.id);

  // Reusable pieces
  const badges = (
    <div className="flex flex-wrap gap-1">
      {content.green && (
        <span className="px-2 py-0.5 text-[10px] font-bold text-white bg-[#66C1BF] rounded">
          FEATURED
        </span>
      )}
      {content.red && (
        <span className="px-2 py-0.5 text-[10px] font-bold text-white bg-[#FF516B] rounded">
          BEST PRICE
        </span>
      )}
    </div>
  );

  const updateButton = (
    <button
      type="button"
      onClick={() => setOpenModal(true)}
      className="flex flex-col items-center text-[#86bc25] hover:opacity-80 transition-opacity"
    >
      <SvgImg3 />
      <span className="text-xs font-medium leading-tight mt-0.5">Detailed Update</span>
    </button>
  );

  const checkbox = (
    <label htmlFor={contentId} className="flex items-center cursor-pointer flex-shrink-0">
      <div className="border rounded-[7px] border-[#CCCCCC96] bg-white w-5 h-5 flex items-center justify-center">
        <input type="checkbox" id={contentId} className="hidden peer" />
        <div className="w-4 h-4 rounded-[5px] peer-checked:bg-[#4CBEC5]"></div>
      </div>
    </label>
  );

  // --- Mobile card ---
  if (mobile) {
    return (
      <div className="relative border border-[#DADADA] rounded-2xl p-3 bg-white">
        <div className="flex gap-3">
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            {checkbox}
            <div className="relative w-20 h-20">
              <Image
                className="object-contain"
                src={content.image}
                fill
                sizes="80px"
                alt={content.brand}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1.5 min-w-0">
            {badges}
            <div>
              <h4 className="font-bold text-sm text-[#333]">{content.name}</h4>
              <p className="text-xs text-[#7E8096]">{content.brand}</p>
              <p className="text-xs text-[#4CBEC5] mt-0.5">
                <span className="font-semibold">{content.info}</span> and up, 250 listings
              </p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <span>
                <span className="text-[#4CBEC5] font-medium">Expiry:</span>{" "}
                <span className="text-[#7E8096]">{content.miad}</span>
              </span>
              <span>
                <span className="text-[#4CBEC5] font-medium">Qty:</span>{" "}
                <span className="text-[#7E8096]">{content.quantity}</span>
              </span>
              <span>
                <span className="text-[#4CBEC5] font-medium">Price:</span>{" "}
                <span className="text-[#7E8096]">${content.price}</span>
              </span>
            </div>
            <div className="mt-1">{updateButton}</div>
          </div>
        </div>
      </div>
    );
  }

  // --- Grid view (listType === 1, compact card) ---
  if (listType === 1) {
    return (
      <div className="flex flex-col border border-[#DADADA] rounded-2xl p-3 bg-white gap-2 h-full">
        <div className="flex items-center justify-between">
          {checkbox}
          {badges}
        </div>
        <div className="relative w-full h-24">
          <Image
            className="object-contain"
            src={content.image}
            fill
            sizes="120px"
            alt={content.brand}
          />
        </div>
        <div>
          <h4 className="font-bold text-sm text-[#333]">{content.name}</h4>
          <p className="text-xs text-[#7E8096]">{content.brand}</p>
        </div>
        <div className="text-xs text-[#7E8096]">
          Expiry: <span className="font-medium">{content.miad}</span>
        </div>
        <div className="flex justify-between text-xs text-[#7E8096]">
          <span>
            Qty: <span className="font-medium">{content.quantity}</span>
          </span>
          <span>
            Price: <span className="font-medium">${content.price}</span>
          </span>
        </div>
        <div className="self-center">{updateButton}</div>
      </div>
    );
  }

  // --- Desktop list view (default) ---
  return (
    <div className="flex items-center gap-4 border border-[#DADADA] rounded-2xl px-4 py-3 bg-white">
      {/* Checkbox + image */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {checkbox}
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image
            className="object-contain"
            src={content.image}
            fill
            sizes="64px"
            alt={content.brand}
          />
        </div>
      </div>

      {/* Product info */}
      <div className="flex-1 min-w-0">
        {badges}
        <h4 className="font-bold text-sm text-[#333] truncate">{content.name}</h4>
        <p className="text-xs text-[#7E8096] truncate">{content.brand}</p>
        <p className="text-xs text-[#4CBEC5] mt-0.5">
          <span className="font-semibold">{content.info}</span> and up, 250 listings
        </p>
      </div>

      {/* Expiry date */}
      <div className="flex flex-col items-center w-24 flex-shrink-0">
        <h3 className="text-[#4CBEC5] font-medium text-xs">Expiry Date</h3>
        <p className="text-[#7E8096] font-medium text-sm mt-1">{content.miad}</p>
      </div>

      {/* Quantity */}
      <div className="flex flex-col items-center w-24 flex-shrink-0">
        <h3 className="text-[#4CBEC5] font-medium text-xs">Quantity</h3>
        <input
          className="text-[#7E8096] outline-none font-medium text-center w-full border rounded-full py-1 mt-1 border-[#00B1B2] bg-[#F4F5F7]"
          type="number"
          defaultValue={content.quantity}
        />
      </div>

      {/* Price */}
      <div className="flex flex-col items-center w-28 flex-shrink-0">
        <h3 className="text-[#4CBEC5] font-medium text-xs">Price</h3>
        <input
          className="text-[#7E8096] outline-none font-medium text-center w-full border rounded-full py-1 px-2 mt-1 border-[#00B1B2] bg-[#F4F5F7]"
          type="number"
          defaultValue={content.price}
        />
      </div>

      {/* Update button */}
      <div className="flex-shrink-0">{updateButton}</div>
    </div>
  );
};

export default ProductCard;
