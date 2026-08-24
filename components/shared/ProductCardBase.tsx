import Image from "next/image";
import { FC } from "react";
import type { HomeProductItem } from "../../types/product";

interface ProductCardBaseProps {
  item: HomeProductItem;
  onFavoriteToggle: (item: HomeProductItem) => void;
}

export const ProductCardBase: FC<ProductCardBaseProps> = ({ item, onFavoriteToggle }) => {
  return (
    <div
      className={`flex relative group flex-col group justify-between h-[240px] xl:h-[360px] border drop-shadow-lg xl:drop-shadow-none border-[#dadada65] hover:border-[#4CBEC5]/60 hover:shadow-lg py-4 px-4 rounded-3xl w-full transition-all ease-in-out duration-300 hover:pb-12 xl:hover:pb-16 ${
        item.backgroundColor ? `${item.backgroundColor}` : "bg-white"
      }`}
    >
      <div className="flex flex-col text-[11px] xl:text-base">
        <div className="flex flex-col text-[#7E8096]">
          <h5 className="font-bold">{item.name}</h5>
          <h3>{item.brand}</h3>
        </div>
      </div>
      <div className="w-full h-full p-1 transition-all duration-300 ease-in-out xl:p-6 xl:group-hover:p-2">
        <div className="relative w-full h-full">
          <Image className="object-contain" src={item.image} fill sizes="100vw" alt={item.brand} />
        </div>
      </div>
      <div className="z-0 flex items-end justify-between">
        <div className="text-sm leading-4 xl:leading-normal xl:text-xl font-bold text-[#6F7081]">
          {`${item.price.toFixed(2)}`.replace(".", ",")} $ <br />
          {item.advertCount > 0 && (
            <p className="text-[9px] leading-[7px] xl:text-xs font-normal text-[#7E8096] whitespace-nowrap">
              starting from <strong> {item.advertCount} listings</strong>
            </p>
          )}
        </div>
        <div className="flex items-end justify-end gap-[3px] xl:gap-1.5">
          {item.shipping === 0 ? (
            <div className="relative w-6 h-8 xl:w-10 xl:h-10">
              <Image
                src="/images/main/fourthSection/cargoCar.svg"
                className="object-contain"
                fill sizes="100vw"
                alt="Cargo Car"
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};