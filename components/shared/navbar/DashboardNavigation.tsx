import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { jsonCategoryList } from "../../home/jsonCategoryList";
import { categories } from "../../../helpers/categories";
import { categoryUrl } from "../../../helpers/urls";
import { SvgArrow, SvgHome, SvgPlus } from "../../../helpers/svgs/navbarSvg";

const DashboardNavigation: FC<any> = ({ setIsDashboardShown }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const router = useRouter();
  const selectedJsonCategory = jsonCategoryList.find((el) => el.id === selectedCategory);
  const selectedCategoryItem = categories.find((c) => c.icon === selectedJsonCategory?.icon);
  return (
    <>
      <div className="absolute z-[999] inset-0 bg-canvas h-screen w-screen">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between flex-1 w-full h-full overflow-y-auto grow items-between">
            {!selectedCategory ? (
              <div className="flex flex-col w-full px-12 mt-2">
                <div aria-hidden="true" className="flex items-center w-full py-2 my-1">
                  <p className="font-display text-xs uppercase tracking-wider text-ink-muted">All Categories</p>
                </div>
                {jsonCategoryList.map((el) => (
                  <button type="button"
                    className="group flex items-center w-full py-2 my-2 rounded-card text-left transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
                    key={el.id}
                    onClick={() => setSelectedCategory(el.id)}
                  >
                    <span className="w-8 h-8 text-ink-soft group-hover:text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
                      <el.icon />
                    </span>
                    <span className="text-left font-medium mx-2 text-ink-soft group-hover:text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">
                      {el.text1} {el.text2}
                    </span>
                    <span className="ml-auto h-3 w-3 font-medium text-ink-muted">
                      <SvgPlus />
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col w-full px-12 mt-2">
                <button type="button"
                  aria-label="Back to categories"
                  className="flex items-center justify-start w-full py-2 my-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 rounded-card"
                  onClick={() => setSelectedCategory(0)}
                >
                  <span className="font-semibold text-brand-600 transform rotate-180">
                    <SvgArrow />
                  </span>
                </button>
                <div className="flex items-center w-full py-2 my-2 rounded-card">
                  {jsonCategoryList
                    .filter((el) => el.id === selectedCategory)
                    .map((el) => (
                      <span className="w-8 h-8 text-brand-600" key={el.id}>
                        <el.icon />
                      </span>
                    ))}

                  <span className="text-left mx-2 font-medium font-display text-ink">
                    {jsonCategoryList.filter((el) => el.id === selectedCategory)[0]?.text1}{" "}
                    {jsonCategoryList.filter((el) => el.id === selectedCategory)[0]?.text2}
                  </span>
                </div>
                {selectedCategoryItem?.subCategories.map((sub) => (
                  <button
                    type="button"
                    className="group flex items-center w-full py-1 my-1 rounded-card text-left transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
                    key={sub.id}
                    onClick={() => {
                      router.push(categoryUrl(selectedCategoryItem.id, sub.id));
                      setIsDashboardShown(false);
                    }}
                  >
                    <span className="invisible w-8"></span>
                    <span className="text-left mx-2 font-base text-ink-soft group-hover:text-brand-600 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none">{sub.name}</span>
                    <span className="ml-auto h-3 w-3 font-medium text-ink-muted ">
                      <SvgPlus />
                    </span>
                  </button>
                ))}
              </div>
            )}
            <div className="flex flex-col items-center justify-center h-full mt-4 rightSide">
              <button type="button"
                aria-label="Close menu"
                className="bg-brand-600 py-[71px] mb-5 rounded-tl-3xl px-[15px] transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                onClick={() => setIsDashboardShown(false)}
              >
                <span className="w-6 h-6 text-surface">
                  <SvgHome />
                </span>
              </button>
              <button type="button"
                aria-label="Close menu"
                className="relative bg-ink py-40 rounded-tl-3xl rounded-bl-3xl px-[25px] -mt-10 text-brand-300 transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                onClick={() => setIsDashboardShown(false)}
              >
                <span className="w-5 h-5 absolute right-2.5 top-36">
                  <SvgArrow />
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-start h-24 p-4 px-12 pt-6 bg-surface border-t border-line grow-0 img">
            <Link href="/" onClick={() => setIsDashboardShown(false)} aria-label="Tradlia home">

              <Image
                src={"/images/navbar/tradlia.svg"}
                className="cursor-pointer select-none object-contain"
                height={40}
                width={120}
                loading="eager"
                alt="tradlia"
              />

            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavigation;
