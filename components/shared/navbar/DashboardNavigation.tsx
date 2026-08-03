import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { jsonCategoryList } from "../../home/jsonCategoryList";
import { SvgArrow, SvgHome, SvgPlus } from "../../../helpers/svgs/navbarSvg";

const subCategoryList = [
  { id: 1, isActive: false, name: "Glass Ionomers" },
  { id: 2, isActive: true, name: "Accessories" },
  { id: 3, isActive: false, name: "Glasses & Face Masks" },
  { id: 4, isActive: false, name: "Anesthesia" },
  { id: 5, isActive: false, name: "Caps" },
  { id: 6, isActive: false, name: "Whitening" },
  { id: 7, isActive: false, name: "Surgical" },
  { id: 8, isActive: false, name: "Scaling & Prophylaxis" },
  { id: 9, isActive: false, name: "Pediatric & Prophylaxis" },
  { id: 10, isActive: false, name: "Disinfection & Sterilization" },
  { id: 11, isActive: false, name: "Dental Unit & Accessories" },
  { id: 12, isActive: false, name: "Air Water Syringes" },
];

const DashboardNavigation: FC<any> = ({ setIsDashboardShown }) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  return (
    <>
      <div className="absolute z-[999] inset-0 bg-gray-200 h-screen w-screen">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between flex-1 w-full h-full overflow-y-auto grow items-between">
            {!selectedCategory ? (
              <div className="flex flex-col w-full px-12 mt-2">
                <button type="button" className="flex items-center justify-start invisible w-full py-2 my-1">
                  <span className="font-semibold text-[#4CBEC5] transform rotate-180">
                    <SvgArrow />
                  </span>
                </button>
                {jsonCategoryList.map((el) => (
                  <button type="button"
                    className="flex items-center w-full py-2 my-2"
                    key={el.id}
                    onClick={() => setSelectedCategory(el.id)}
                  >
                    <span className="w-8 h-8">
                      <el.icon />
                    </span>
                    <span className="text-left font-medium mx-2 text-[#7E8096]">
                      {el.text1} {el.text2}
                    </span>
                    <span className="ml-auto h-3 w-3 font-medium text-[#7E8096]">
                      <SvgPlus />
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col w-full px-12 mt-2">
                <button type="button"
                  className="flex items-center justify-start w-full py-2 my-1"
                  onClick={() => setSelectedCategory(0)}
                >
                  <span className="font-semibold text-[#4CBEC5] transform rotate-180">
                    <SvgArrow />
                  </span>
                </button>
                <button type="button" className="flex items-center w-full py-2 my-2">
                  {jsonCategoryList
                    .filter((el) => el.id === selectedCategory)
                    .map((el) => (
                      <span className="w-8 h-8" key={el.id}>
                        <el.icon />
                      </span>
                    ))}

                  <span className="text-left mx-2 font-medium text-[#7E8096]">
                    {jsonCategoryList.filter((el) => el.id === selectedCategory)[0]?.text1}{" "}
                    {jsonCategoryList.filter((el) => el.id === selectedCategory)[0]?.text2}
                  </span>
                </button>
                {subCategoryList.map((el) => (
                  <button type="button" className="flex items-center w-full py-1 my-1" key={el.id}>
                    <span className="invisible w-8"></span>
                    <span className="text-left mx-2 font-base text-[#7E8096]">{el.name}</span>
                    <span className="ml-auto h-3 w-3 font-medium text-[#7E8096] ">
                      <SvgPlus />
                    </span>
                  </button>
                ))}
              </div>
            )}
            <div className="flex flex-col items-center justify-center h-full mt-4 rightSide">
              <button type="button"
                className="bg-[#00A29D] py-[71px] mb-5 rounded-tl-3xl px-[15px]"
                onClick={() => setIsDashboardShown(false)}
              >
                <span className="w-6 h-6 text-[#5327A8]">
                  <SvgHome />
                </span>
              </button>
              <button type="button"
                className="relative bg-[#5327A8] py-40 rounded-tl-3xl rounded-bl-3xl px-[25px] -mt-10 text-[#00A29D]"
                onClick={() => setIsDashboardShown(false)}
              >
                <span className="w-5 h-5 absolute right-2.5 top-36">
                  <SvgArrow />
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-start h-24 p-4 px-12 pt-6 bg-white grow-0 img">
            <Link href="/" onClick={() => setIsDashboardShown(false)}>

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
