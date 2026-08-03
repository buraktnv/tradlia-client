import { FC, useLayoutEffect, useState } from "react";
import Image from "next/image";

interface SliderImage {
  id: number;
  text1: string;
  text2: string;
  img1: string;
  url: string;
}
const photos: SliderImage[] = [
  {
    id: 1,
    text1: "All Your \nFurry Friend's",
    text2: "Every \nNeed",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/photos/slider-pet-1.svg",
  },
  {
    id: 2,
    text1: "All Your \nFurry Friend's2",
    text2: "Every \nNeed2",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/main/homepage/slider-bar-2.svg",
  },
  {
    id: 3,
    text1: "All Your \nFurry Friend's3",
    text2: "Every \nNeed3",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/main/homepage/slider-bar-3.svg",
  },
  {
    id: 4,
    text1: "All Your \nFurry Friend's4",
    text2: "Every \nNeed4",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/main/homepage/slider-bar-4.svg",
  },
  {
    id: 5,
    text1: "All Your \nFurry Friend's5",
    text2: "Every \nNeed5",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/main/homepage/slider-bar-5.svg",
  },
  {
    id: 6,
    text1: "All Your \nFurry Friend's6",
    text2: "Every \nNeed6",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/main/homepage/slider-bar-6.svg",
  },
  {
    id: 7,
    text1: "All Your \nFurry Friend's7",
    text2: "Every \nNeed7",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/main/homepage/slider-bar-7.svg",
  },
  {
    id: 8,
    text1: "All Your \nFurry Friend's8",
    text2: "Every \nNeed8",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/main/homepage/slider-bar-8.svg",
  },
  {
    id: 9,
    text1: "All Your \nFurry Friend's9",
    text2: "Every \nNeed9",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/main/homepage/slider-bar-9.svg",
  },
  {
    id: 10,
    text1: "All Your \nFurry Friend's10",
    text2: "Every \nNeed10",
    img1: "/images/main/homepage/pet-slider.svg",
    url: "/images/main/homepage/slider-bar-10.svg",
  },
];

const Slider: FC = () => {
  const [activeImage, setActiveImage] = useState<SliderImage>(photos[0]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  useLayoutEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    timer = setTimeout(() => {
      if (activeImage.id !== 10) setActiveImage(photos[activeImage.id]);
      else setActiveImage(photos[0]);
    }, 4000);

    return () => {
      timer && clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage]);

  const changeElement = (item: number) => {
    setActiveImage(photos.filter((el) => el.id === Number(item))[0]);
  };

  const onTouchStart = (e: any) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      if (activeImage.id !== 10) setActiveImage(photos[activeImage.id]);
      else setActiveImage(photos[0]);
    }
    if (isRightSwipe) {
      if (activeImage.id !== 1) setActiveImage(photos[Number(activeImage.id) - Number(2)]);
      else setActiveImage(photos[9]);
    }
  };

  return (
    <>
      <div className="relative flex flex-col px-5 bg-white xl:px-3">
        <div className="bg-[#F4F5F9] absolute w-[100%] h-[60%] left-0 bottom-0"></div>
        <div
          className="container relative mx-auto mb-6 xl:mb-0"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute flex w-full h-full rounded-full">
            <div className="relative w-full h-full xl:h-[400px] drop-shadow-md">
              <Image src="/images/main/homepage/photoBg.svg" alt="bg" fill sizes="100vw" className="rounded-3xl" />
            </div>
          </div>
          <div className="flex xl:w-full rounded-[1rem] xl:rounded-[2rem] h-[200px] w-[341px] xl:h-[400px]">
            <div className="z-10 xl:p-2 xl:m-1 m-1 w-1/2 xl:w-[35%]">
              <div className="h-full xl:w-full flex flex-col justify-between xl:justify-center xl:rounded-[2.5rem] rounded-[1.3rem] pl-1 pr-3 py-4 xl:p-0 bg-white">
                <div className="xl:text-4xl leading-5 text-[19px] font-light xl:tracking-normal tracking-tighter text-[#7E8096] mx-3 xl:ml-14">
                  <p className="whitespace-pre">{activeImage.text1}</p>

                  <div className="xl:text-5xl text-[22px] font-bold text-[#4CBEC5]">
                    <span className="whitespace-pre">{activeImage.text2}</span>
                  </div>
                  <div className="hidden px-10 xl:flex">
                    <Image src="/images/main/secondSection/heartBeat.svg" alt="Heart Beat" height={36} width={36} />
                  </div>
                </div>
                <div className="m-1 mx-3 xl:ml-14">
                  <button type="button" className="xl:px-8 px-2 py-1 xl:py-2 text-[10px] xl:text-xl cursor-pointer mt-2 font-light drop-shadow-lg text-white bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] rounded-3xl">
                    Start Shopping
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-around py-4 pr-3 bg-transparent xl:pr-0 xl:items-center xl:pl-36 grow">
              <div className="absolute top-12 left-[25%] xl:left-[20%] z-10 xl:-top-8">
                <div className="xl:w-[500px] w-[164px] h-[120px] xl:h-[420px]">
                  <Image
                    className="object-contain"
                    src="/images/main/homepage/pet-slider.svg"
                    fill sizes="100vw"
                    alt=""
                  />
                </div>
              </div>
              <div className="h-full">
                <div className="relative w-32 h-32 xl:w-[400px] xl:h-[320px]">
                  <Image className="object-contain" src={activeImage.url} fill sizes="100vw" alt="activeImage" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container hidden mx-auto xl:block">
          <div className="flex justify-around px-[2.5rem] py-6 mx-auto space-x-6 overflow-x-auto">
            {photos.map((el) => (
              <button type="button" key={el.id} className={`p-2 relative group cursor-pointer`} onClick={() => setActiveImage(el)}>
                <div
                  className={`absolute top-0 left-0 w-full h-full transform transition-all duration-300 ease-in-out group ${
                    activeImage.url === el.url ? "block" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <Image src="/images/main/homepage/png-1-2.svg" alt="" fill sizes="100vw" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-40">
                  <Image src="/images/main/homepage/png-1.svg" alt="" fill sizes="100vw" className="rounded-[1.7rem]" />
                </div>
                <div className="relative flex w-20 p-2 h-14">
                  <Image className="object-contain" src={el.url} fill sizes="100vw" alt="" />
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="container block mx-auto xl:hidden">
          <div className="relative flex justify-center w-full gap-2 py-2 pb-8">
            <button type="button"
              onClick={() => changeElement(1)}
              className={`rounded-full p-1 border border-[#4CBEC5] cursor-pointer ${
                activeImage.id === 1 && "bg-[#4CBEC5]"
              }`}
            ></button>
            <button type="button"
              onClick={() => changeElement(2)}
              className={`rounded-full p-1 border border-[#4CBEC5] cursor-pointer ${
                activeImage.id === 2 && "bg-[#4CBEC5]"
              }`}
            ></button>
            <button type="button"
              onClick={() => changeElement(3)}
              className={`rounded-full p-1 border border-[#4CBEC5] cursor-pointer ${
                activeImage.id === 3 && "bg-[#4CBEC5]"
              }`}
            ></button>
            <button type="button"
              onClick={() => changeElement(4)}
              className={`rounded-full p-1 border border-[#4CBEC5] cursor-pointer ${
                activeImage.id === 4 && "bg-[#4CBEC5]"
              }`}
            ></button>
            <button type="button"
              onClick={() => changeElement(5)}
              className={`rounded-full p-1 border border-[#4CBEC5] cursor-pointer ${
                activeImage.id === 5 && "bg-[#4CBEC5]"
              }`}
            ></button>
            <button type="button"
              onClick={() => changeElement(6)}
              className={`rounded-full p-1 border border-[#4CBEC5] cursor-pointer ${
                activeImage.id === 6 && "bg-[#4CBEC5]"
              }`}
            ></button>
            <button type="button"
              onClick={() => changeElement(7)}
              className={`rounded-full p-1 border border-[#4CBEC5] cursor-pointer ${
                activeImage.id === 7 && "bg-[#4CBEC5]"
              }`}
            ></button>
            <button type="button"
              onClick={() => changeElement(8)}
              className={`rounded-full p-1 border border-[#4CBEC5] cursor-pointer ${
                activeImage.id === 8 && "bg-[#4CBEC5]"
              }`}
            ></button>
            <button type="button"
              onClick={() => changeElement(9)}
              className={`rounded-full p-1 border border-[#4CBEC5] ${activeImage.id === 9 && "bg-[#4CBEC5]"}`}
            ></button>
            <button type="button"
              onClick={() => changeElement(10)}
              className={`rounded-full p-1 border border-[#4CBEC5] ${activeImage.id === 10 && "bg-[#4CBEC5]"}`}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
