import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface IFilterItem {
  id: number;
  text1: string;
  icon: string;
}

const jsonFilterList: IFilterItem[] = [
  { id: 1, text1: "Best Sellers", icon: "/images/filter-best-sellers.svg" },
  { id: 2, text1: "Best Category", icon: "/images/filter-best-category.svg" },
  { id: 3, text1: "SafetyMart", icon: "/images/filter-safetymart.svg" },
  { id: 4, text1: "SupplyHub", icon: "/images/filter-supplyhub.svg" },
  { id: 5, text1: "TradeDirect", icon: "/images/filter-tradedirect.svg" },
  { id: 6, text1: "WholesaleX", icon: "/images/filter-wholesalex.svg" },
  { id: 7, text1: "GreenLine", icon: "/images/filter-greenline.svg" },
  { id: 8, text1: "PackPro", icon: "/images/filter-packpro.svg" },
  { id: 9, text1: "ToolWorks", icon: "/images/filter-toolworks.svg" },
  { id: 10, text1: "PartsHub", icon: "/images/filter-partshub.svg" },
];

const FilterSelection: FC<any> = () => {
  return (
    <div className="bg-surface border-b border-line">
      <div className="container mx-auto">
        <nav aria-label="Quick catalog filters" className="flex w-full gap-1 py-3 overflow-x-auto xl:justify-center xl:gap-5 xl:pt-28 xl:pb-5">
          {jsonFilterList.map((el) => (
            <SingleFilterItem key={el.id} content={el} />
          ))}
        </nav>
      </div>
    </div>
  );
};

const SingleFilterItem: FC<{ content: IFilterItem }> = ({ content }) => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/category")}
      className="group flex flex-col items-center justify-start shrink-0 basis-1/5 min-w-[20%] xl:basis-auto xl:min-w-fit cursor-pointer rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
    >
      <span
        className={`relative flex items-center justify-center h-16 w-16 xl:h-20 xl:w-20 p-3 bg-surface border border-line shadow-card group-hover:border-brand-300 group-hover:shadow-pop transition-all duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-focus-visible:border-brand-300 rounded-pill`}
      >
        <span className="relative w-full h-full transition-transform duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:scale-110">
          <Image src={content.icon} fill sizes="80px" alt="" aria-hidden="true" />
        </span>
      </span>
      <span className="mt-2 mb-1 font-display text-[10px] xl:text-xs font-semibold uppercase tracking-wider text-ink-muted text-center leading-3 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none group-hover:text-brand-700 group-focus-visible:text-brand-700">
        {content.text1}
      </span>
    </button>
  );
};

export default FilterSelection;
