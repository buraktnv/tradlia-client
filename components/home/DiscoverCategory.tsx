import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { SvgM } from "../../helpers/svgs/homeSvg";

const DiscoverCategory: FC<any> = () => {
  return (
    <div className="relative items-center hidden w-full pt-8 pb-16 xl:mt-12 xl:flex">
      <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden bg-gradient-to-b from-[#E0F2F1] via-[#F0FAF9] to-[#E8F1FB]">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#4CBEC5]/25 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full bg-[#5327A8]/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-40 h-40 rounded-full bg-white/40 blur-2xl"></div>
      </div>
      <div className="container grid w-full grid-cols-2 gap-8 mx-auto xl:grid-cols-4">
        <Link href={"/category?cat=medical"}>
          <div className="relative flex flex-col w-full h-56 cursor-pointer select-none xl:h-full group">
            <div className="pt-4 pb-2 pl-10 text-xl text-[#5327A8]">Medical</div>
            <div className="relative w-full h-full p-6 pr-28">
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div className="relative w-full h-full rounded-[3.2rem] shadow-xl">
                  <Image src="/images/main/homepage/discoverbg.svg" alt="" fill sizes="100vw" />
                </div>
              </div>
              <div className="absolute w-[50%] h-[50%] right-3 top-8">
                <SvgM />
              </div>
              <div className="relative top-0 left-0 w-full h-full transition-all duration-200 ease-in-out transform group-hover:scale-105">
                <Image
                  className="object-contain"
                  src="/images/main/homepage/medical-category.svg"
                  alt="Medical Supplies"
                  fill sizes="100vw"
                />
              </div>
            </div>
            <div className="absolute text-xl font-bold -bottom-4 right-10 ">
              <p className="px-3 py-1 bg-[#5327A8] text-white rounded-full text-center">Shop</p>
              <p className="px-3 py-1 bg-[#4CBEC5] text-white rounded-full text-center">Discover</p>
            </div>
          </div>
        </Link>
        <Link href={"/category?cat=health"}>
          <div className="relative flex flex-col w-full h-full cursor-pointer select-none group">
            <div className="pt-4 pb-2 pl-10 text-xl text-[#5327A8]">Health</div>
            <div className="relative w-full h-full p-6 pr-28">
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div className="relative w-full h-full rounded-[3.2rem] shadow-xl bg-gradient-to-r to-[#FF7B03] from-[#FFBE00]"></div>
              </div>
              <div className="absolute w-[50%] h-[50%] right-3 top-8">
                <SvgM />
              </div>
              <div className="relative top-0 left-0 w-full h-56 transition-all duration-200 ease-in-out transform group-hover:scale-105">
                <Image className="object-contain" src="/images/main/homepage/health-category.svg" alt="Health & Wellness" fill sizes="100vw" />
              </div>
            </div>
            <div className="absolute text-xl font-bold -bottom-4 right-10">
              <p className="px-3 py-1 bg-[#5327A8] text-white rounded-full text-center">Shop</p>
              <p className="px-3 py-1 bg-[#4CBEC5] text-white rounded-full text-center">Discover</p>
            </div>
          </div>
        </Link>
        <Link href={"/category?cat=supplements"}>
          <div className="relative flex flex-col w-full h-full cursor-pointer select-none group">
            <div className="pt-4 pb-2 pl-10 text-xl text-[#5327A8]">Supplements</div>
            <div className="relative w-full h-full p-6 pr-28">
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div className="relative w-full h-full rounded-[3.2rem] shadow-xl bg-gradient-to-r to-[#FF0045] from-[#FF516B]"></div>
              </div>
              <div className="absolute w-[50%] h-[50%] right-3 top-8">
                <SvgM />
              </div>
              <div className="relative top-0 left-0 w-full h-56 transition-all duration-200 ease-in-out transform group-hover:scale-105">
                <Image
                  className="object-contain"
                  src="/images/main/homepage/supplements-category.svg"
                  alt="Supplements"
                  fill sizes="100vw"
                />
              </div>
            </div>
            <div className="absolute text-xl font-bold -bottom-4 right-10 ">
              <p className="px-3 py-1 bg-[#5327A8] text-white rounded-full text-center">Shop</p>
              <p className="px-3 py-1 bg-[#4CBEC5] text-white rounded-full text-center">Discover</p>
            </div>
          </div>
        </Link>
        <Link href={"/category?cat=personal-care"}>
          <div className="relative flex flex-col w-full h-full cursor-pointer select-none group">
            <div className="pt-4 pb-2 pl-10 text-xl text-[#5327A8]">Personal Care</div>
            <div className="relative w-full h-full p-6 pr-28">
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div className="relative w-full h-full rounded-[3.2rem] shadow-xl bg-gradient-to-r from-[#00A29D] to-[#66C1BF]"></div>
              </div>
              <div className="absolute w-[50%] h-[50%] right-3 top-8">
                <SvgM />
              </div>
              <div className="relative top-0 left-0 w-full h-56 transition-all duration-200 ease-in-out transform group-hover:scale-105">
                <Image className="object-contain" src="/images/main/homepage/personal-care-category.svg" alt="Personal Care" fill sizes="100vw" />
              </div>
            </div>
            <div className="absolute text-xl font-bold -bottom-4 right-10 ">
              <p className="px-3 py-1 bg-[#5327A8] text-white rounded-full text-center">Shop</p>
              <p className="px-3 py-1 bg-[#4CBEC5] text-white rounded-full text-center">Discover</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverCategory;