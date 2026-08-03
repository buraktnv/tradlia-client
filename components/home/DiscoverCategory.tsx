import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { SvgM } from "../../helpers/svgs/homeSvg";

const DiscoverCategory: FC<any> = () => {
  return (
    <div className="relative items-center hidden w-full pt-8 pb-16 xl:mt-12 xl:flex">
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="relative flex w-full h-full">
          <Image src="/images/main/homepage/bgDiscoverCategory.svg" alt="" fill sizes="100vw" />
        </div>
      </div>
      <div className="container grid w-full grid-cols-2 gap-8 mx-auto xl:grid-cols-4">
        <Link href={"/category"}>
          <div className="relative flex flex-col w-full h-56 cursor-pointer select-none xl:h-full group">
            <div className="pt-4 pb-2 pl-10 text-xl text-white">Medical</div>
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
                  src="/images/main/homepage/product-17.svg"
                  alt=""
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
        <Link href={"/category"}>
          <div className="relative flex flex-col w-full h-full cursor-pointer select-none group">
            <div className="pt-4 pb-2 pl-10 text-xl text-white">Health</div>
            <div className="relative w-full h-full p-6 pr-28">
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div className="relative w-full h-full rounded-[3.2rem] shadow-xl bg-gradient-to-r to-[#FF7B03] from-[#FFBE00]"></div>
              </div>
              <div className="absolute w-[50%] h-[50%] right-3 top-8">
                <SvgM />
              </div>
              <div className="relative top-0 left-0 w-full h-56 transition-all duration-200 ease-in-out transform group-hover:scale-105">
                <Image className="object-contain" src="/images/main/homepage/product-18.svg" alt="" fill sizes="100vw" />
              </div>
            </div>
            <div className="absolute text-xl font-bold -bottom-4 right-10">
              <p className="px-3 py-1 bg-[#5327A8] text-white rounded-full text-center">Shop</p>
              <p className="px-3 py-1 bg-[#4CBEC5] text-white rounded-full text-center">Discover</p>
            </div>
          </div>
        </Link>
        <Link href={"/category"}>
          <div className="relative flex flex-col w-full h-full cursor-pointer select-none group">
            <div className="pt-4 pb-2 pl-10 text-xl text-white">Supplements</div>
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
                  src="/images/main/homepage/product-19.svg"
                  alt=""
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
        <Link href={"/category"}>
          <div className="relative flex flex-col w-full h-full cursor-pointer select-none group">
            <div className="pt-4 pb-2 pl-10 text-xl text-white">Personal Care</div>
            <div className="relative w-full h-full p-6 pr-28">
              <div className="absolute top-0 bottom-0 left-0 right-0">
                <div className="relative w-full h-full rounded-[3.2rem] shadow-xl bg-gradient-to-r from-[#00A29D] to-[#66C1BF]"></div>
              </div>
              <div className="absolute w-[50%] h-[50%] right-3 top-8">
                <SvgM />
              </div>
              <div className="relative top-0 left-0 w-full h-56 transition-all duration-200 ease-in-out transform group-hover:scale-105">
                <Image className="object-contain" src="/images/main/homepage/product-20.svg" alt="" fill sizes="100vw" />
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
