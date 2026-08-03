import Image from "next/image";
import { FC, useState } from "react";

const SidebarCard: FC<any> = ({ content }) => {
  const [activeImage, setActiveImage] = useState<any>(content.mainImage);
  return (
    <div className="flex flex-col gap-4 px-4 py-2 bg-white xl:bg-[#F7F7FA] rounded-[1.3rem] mx-3 xl:mx-0">
      <div className="text-[#7E8096] text-[17px] leading-5 xl:text-base">
        <div className="font-bold">{content.name}</div>
        <div>{content.brand}</div>
      </div>
      <div className="relative w-32 h-32 xl:w-full xl:h-36 mx-28 xl:mx-0">
        <Image className="object-contain" src={activeImage} fill sizes="100vw" alt="sidebarImage" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div
          className="bg-white border-2 border-[#00B1B280] rounded-md p-0.5 hover:border-[#00B1B2] cursor-pointer select-none"
          onClick={() => setActiveImage(() => content.slider1)}
        >
          <div className="relative w-full h-12 xl:h-8">
            <Image className="object-contain" src={content.slider1} fill sizes="100vw" alt="" />
          </div>
        </div>
        <div
          className="bg-white border-2 border-[#00B1B280] rounded-md p-0.5 hover:border-[#00B1B2] cursor-pointer select-none"
          onClick={() => setActiveImage(() => content.slider2)}
        >
          <div className="relative w-full h-12 xl:h-8">
            <Image className="object-contain" src={content.slider2} fill sizes="100vw" alt="" />
          </div>
        </div>
        <div
          className="bg-white border-2 border-[#00B1B280] rounded-md p-0.5 hover:border-[#00B1B2] cursor-pointer select-none"
          onClick={() => setActiveImage(() => content.slider3)}
        >
          <div className="relative w-full h-12 xl:h-8">
            <Image className="object-contain" src={content.slider3} fill sizes="100vw" alt="" />
          </div>
        </div>
        <div
          className="bg-white border-2 border-[#00B1B280] rounded-md p-0.5 hover:border-[#00B1B2] cursor-pointer select-none"
          onClick={() => setActiveImage(() => content.slider4)}
        >
          <div className="relative w-full h-12 xl:h-8">
            <Image className="object-contain" src={content.slider4} fill sizes="100vw" alt="" />
          </div>
        </div>
      </div>
      <div className="text-[#FB295A] font-medium cursor-pointer text-sm xl:text-base">Report an Error</div>
    </div>
  );
};

export default SidebarCard;
