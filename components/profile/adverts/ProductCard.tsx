import Image from "next/image";
import { FC } from "react";
import {
  SvgBanner,
  SvgBanner1,
  SvgBannerWrite,
  SvgBannerWrite1,
  SvgImg3,
  SvgLine,
} from "../../../helpers/svgs/adverts";
import useMediaQuery from "../../../helpers/hooks/useMediaQuery";

const ProductCard: FC<any> = ({ content, setOpenModal, listType }) => {
  const mobile = !useMediaQuery("(min-width: 768px)");

  if (listType === 0) {
    return (
      <div className="grid xl:grid-cols-7 gap-2 border border-[#DADADA] rounded-3xl xl:rounded-[1.5rem] px-6 py- text-sm relative h-52 xl:h-32 bg-white">
        <div className="flex gap-1 xl:justify-around xl:gap-0 ">
          <label
            htmlFor={content.id}
            className="absolute top-0 flex items-center justify-center h-full -left-2.5 xl:static"
          >
            <div className="border rounded-[7px] border-[#CCCCCC96] bg-white w-6 h-6 xl:w-5 xl:h-5 flex items-center xl:self-start xl:my-[56px] justify-center">
              <input type="checkbox" name="" id={content.id} className="hidden peer" />
              <div className="w-5 h-5 rounded-[7px] peer-checked:bg-[#4CBEC5]"></div>
            </div>
          </label>
          <div>
            <div className="relative flex w-24 h-24 mt-8 xl:mt-6 ml-2 xl:ml-0">
              <Image className="object-contain" src={content?.image} fill sizes="100vw" alt={content.brand} />
              <div className="relative hidden left-96 top-0.5 xl:flex">
                <SvgLine />
              </div>
            </div>
            <div className="flex justify-center mt-3 xl:hidden">
              <button type="button"
                onClick={() => {
                  setOpenModal(true);
                }}
                className="flex items-center"
              >
                <SvgImg3 />
                <div className="ml-2 leading-4 ">
                  <p className="text-[#86bc25] font-medium">Detailed</p>
                  <p className="text-[#86bc25] font-medium">Update</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col py-10 xl:py-12 xl:static left-48 bottom-20 xl:top-2 xl:justify-around xl:mt-3 xl:col-span-2 xl:mx-3 xl:h-28">
          <div className="text-[#7E8096] xl:py-0 xl:mt-1 xl:mr-12 ">
            <h3 className="text-[#4CBEC5] font-medium hidden xl:block">Product</h3>
            <div>
              <h4 className="font-bold">{content?.name}</h4> {content?.brand}
            </div>
            <div className="xl:text-[#4CBEC5] text-xs xl:flex hidden">
              <span className="font-semibold">{content?.info}</span> and up &nbsp;{" "}
              <span className="font-semibold"> 250 listings</span>
            </div>
          </div>
        </div>

        <div className="absolute flex flex-col xl:static left-48 top-24 xl:flex-row xl:col-span-4 xl:gap-16 xl:ml-4 xl:-my-5 ">
          <div className="flex items-center xl:flex-col xl:justify-around xl:items-start xl:py-12">
            <h3 className="text-[#4CBEC5] font-medium">Expiry Date</h3>
            <p className="text-[#4CBEC5] font-medium block xl:hidden px-1">:</p>
            <p className="text-[#7E8096] font-medium xl:py-1.5 ">{content?.miad}</p>
          </div>
          <div className="flex items-center xl:flex-col xl:justify-around xl:py-12 xl:w-1/5">
            <h3 className="text-[#4CBEC5] font-medium">Quantity</h3>
            <p className="text-[#4CBEC5] font-medium block xl:hidden px-1">:</p>
            <div className="flex xl:justify-center">
              <input
                className="text-[#7E8096] outline-none font-medium xl:border rounded-full xl:text-center xl:w-2/3 py-1 xl:py-1.5 xl:inline-block border-[#00B1B2] bg-transparent xl:bg-[#F4F5F7]"
                type="number"
                defaultValue={content?.quantity}
              />
            </div>
          </div>
          <div className="flex items-center xl:flex-col xl:justify-around xl:py-12 xl:w-1/5">
            <h3 className="text-[#4CBEC5] font-medium ">Price</h3>
            <p className="text-[#4CBEC5] font-medium block xl:hidden px-1">:</p>
            <div className="flex xl:justify-center">
              <input
                className="text-[#7E8096] outline-none font-medium xl:border rounded-full xl:text-center xl:w-3/4 xl:px-4 xl:py-1.5 xl:inline-block border-[#00B1B2] bg-transparent xl:bg-[#F4F5F7]"
                type="number"
                defaultValue={content?.price}
              />
            </div>
          </div>
          <div className="text-[#7E8096] text-xs xl:pt-2 xl:hidden">
            <span className="">{content?.info}</span> and up <br></br> <strong> 250 listings</strong>
          </div>
          <div className="flex xl:justify-center">
            <div className="flex-col justify-center hidden xl:flex">
              <button type="button"
                onClick={() => {
                  setOpenModal(true);
                }}
                className="flex flex-col items-center"
              >
                <p className="text-[#86bc25] font-medium  ">Detailed</p>
                <p className="text-[#86bc25] font-medium ">Update</p>
                <SvgImg3 />
              </button>
            </div>
            {content.red === true && content.green === true && (
              <div className="absolute right-[71%] xl:right-0 xl:w-max xl:h-max xl:left-[25%] xl:top-[2px] bottom-[171%] scale-110 xl:scale-125 xl:bottom-0">
                <div className="ml-10 xl:ml-9 ">
                  <div className="absolute ">
                    <SvgBanner />
                  </div>
                  <div className="relative flex flex-col xl:w-max xl:h-max top-1 left-3">
                    <SvgBannerWrite1 />
                  </div>
                </div>
                <div className="absolute top-0">
                  <div className="absolute fill-red">
                    <SvgBanner1 />
                  </div>
                  <div className="relative flex flex-col xl:w-max xl:h-max top-1 left-3">
                    <SvgBannerWrite />
                  </div>
                </div>
              </div>
            )}
            {content.red === false && content.green === true && (
              <div className="absolute right-[60%] xl:right-0 xl:w-max xl:h-max xl:left-[25%] scale-110 xl:scale-125 xl:top-[2px] bottom-[171%] xl:bottom-0">
                <div className="ml-10 xl:ml-9 ">
                  <div className="absolute">
                    <SvgBanner />
                  </div>
                  <div className="relative flex flex-col top-1 left-3">
                    <SvgBannerWrite1 />
                  </div>
                </div>
              </div>
            )}
            {content.red === true && content.green === false && (
              <div className="absolute right-[93%] xl:right-0 xl:w-max xl:h-max xl:left-[25%] xl:top-[2px] scale-110 xl:scale-125 bottom-[171%] xl:bottom-0">
                <div className="ml-10 xl:ml-9 ">
                  <div className="absolute ">
                    <SvgBanner1 />
                  </div>
                  <div className="relative flex flex-col top-1 left-3">
                    <SvgBannerWrite />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (mobile) {
    return (
      <div className="grid grid-cols-2 gap-2 border border-[#DADADA] rounded-3xl text-sm p-2 relative bg-white">
        <div className="absolute flex items-center justify-center">
          <label
            htmlFor={content.id}
            className="absolute top-0 flex items-center justify-center h-full -left-2.5 xl:static"
          >
            <div className="border rounded-[7px] border-[#CCCCCC96] bg-white w-6 h-6 xl:w-5 xl:h-5 flex items-center justify-center">
              <input type="checkbox" name="" id={content.id} className="hidden peer" />
              <div className="w-5 h-5 rounded-[7px] peer-checked:bg-[#4CBEC5]"></div>
            </div>
          </label>
        </div>
        <div className="flex flex-col items-center justify-center col-span-1">
          <div className="relative flex w-24 h-24">
            <Image className="object-contain" src={content?.image} fill sizes="100vw" alt={content.brand} />
          </div>
          <div className="flex justify-center mt-3 xl:hidden">
            <button type="button"
              onClick={() => {
                setOpenModal(true);
              }}
              className="flex items-center"
            >
              <SvgImg3 />
              <div className="ml-2 leading-4 ">
                <p className="text-[#86bc25] font-medium">Detailed</p>
                <p className="text-[#86bc25] font-medium">Update</p>
              </div>
            </button>
          </div>
        </div>
        <div className="relative flex flex-col items-start col-span-1 justify-evenly text-start">
          <div className="col-span-2 -mt-2">
            {content.red === true && content.green === true && (
              <div className="xl:right-0 xl:w-max xl:h-max xl:left-[25%] xl:top-[2px] bottom-[171%] scale-110 xl:scale-125 xl:bottom-0">
                <div className="ml-12 ">
                  <div className="absolute ">
                    <SvgBanner />
                  </div>
                  <div className="relative flex flex-col xl:w-max xl:h-max top-1 left-3">
                    <SvgBannerWrite1 />
                  </div>
                </div>
                <div className="absolute top-0">
                  <div className="absolute fill-red">
                    <SvgBanner1 />
                  </div>
                  <div className="relative flex flex-col xl:w-max xl:h-max top-1 left-3">
                    <SvgBannerWrite />
                  </div>
                </div>
              </div>
            )}
            {content.red === false && content.green === true && (
              <div className="xl:right-0 xl:w-max xl:h-max xl:left-[25%] scale-110 xl:scale-125 xl:top-[2px] bottom-[171%] xl:bottom-0">
                <div className="ml-12 ">
                  <div className="absolute">
                    <SvgBanner />
                  </div>
                  <div className="relative flex flex-col top-1 left-3">
                    <SvgBannerWrite1 />
                  </div>
                </div>
              </div>
            )}
            {content.red === true && content.green === false && (
              <div className="xl:right-0 xl:w-max xl:h-max xl:left-[25%] xl:top-[2px] scale-110 xl:scale-125 bottom-[171%] xl:bottom-0">
                <div className="ml-12 ">
                  <div className="absolute ">
                    <SvgBanner1 />
                  </div>
                  <div className="relative flex flex-col top-1 left-3">
                    <SvgBannerWrite />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex col-span-3 gap-2 mt-5">
            <h3 className="text-[#4CBEC5] font-medium hidden xl:block">Product:</h3>
            <div className="text-[#7E8096]">
              <h4 className="font-bold">{content?.name}</h4> {content?.brand}
              <div className="xl:text-[#4CBEC5] text-xs xl:flex hidden">
                <span className="font-semibold">{content?.info}</span> and up &nbsp;{" "}
                <span className="font-semibold"> 250 listings</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-1">
            <div className="flex items-center">
              <h3 className="text-[#4CBEC5] font-medium whitespace-nowrap">
                Expiry Date: <span className="text-[#7E8096]">{content?.miad}</span>
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-1">
            <div className="flex items-center xl:flex-col xl:justify-around">
              <h3 className="text-[#4CBEC5] font-medium">
                Quantity <span className="text-[#7E8096] font-medium">{content?.quantity}</span>
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-center col-span-1">
            <div className="flex items-center xl:flex-col xl:justify-around">
              <h3 className="text-[#4CBEC5] font-medium">
                Price <span className="text-[#7E8096] font-medium">{content?.price}</span>
              </h3>
            </div>
          </div>
          <div className="text-[#7E8096] text-xs xl:pt-2 xl:hidden">
            <span className="">{content?.info}</span> and up <br></br> <strong> 250 listings</strong>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-11 gap-2 border border-[#DADADA] rounded-3xl text-sm p-2 relative bg-white">
      <div className="flex items-center justify-center col-span-1">
        <label
          htmlFor={content.id}
          className="absolute top-0 flex items-center justify-center h-full -left-2.5 xl:static"
        >
          <div className="border rounded-[7px] border-[#CCCCCC96] bg-white w-6 h-6 xl:w-5 xl:h-5 flex items-center justify-center">
            <input type="checkbox" name="" id={content.id} className="hidden peer" />
            <div className="w-5 h-5 rounded-[7px] peer-checked:bg-[#4CBEC5]"></div>
          </div>
        </label>
      </div>
      <div className="col-span-1">
        <div className="relative flex w-16 h-16">
          <Image className="object-contain" src={content?.image} fill sizes="100vw" alt={content.brand} />
        </div>
        <div className="flex justify-center mt-3 xl:hidden">
          <button type="button"
            onClick={() => {
              setOpenModal(true);
            }}
            className="flex items-center"
          >
            <SvgImg3 />
            <div className="ml-2 leading-4 ">
              <p className="text-[#86bc25] font-medium">Detailed</p>
              <p className="text-[#86bc25] font-medium">Update</p>
            </div>
          </button>
        </div>
      </div>
      <div className="flex col-span-3 gap-2 ">
        <h3 className="text-[#4CBEC5] font-medium hidden xl:block">Product:</h3>
        <div className="text-[#7E8096]">
          <h4 className="font-bold">{content?.name}</h4> {content?.brand}
          <div className="xl:text-[#4CBEC5] text-xs xl:flex hidden">
            <span className="font-semibold">{content?.info}</span> and up &nbsp;{" "}
            <span className="font-semibold"> 250 listings</span>
          </div>
        </div>
      </div>
      <div className="relative col-span-1 -mt-2">
        {content.red === true && content.green === true && (
          <div className="absolute right-[67%] xl:right-12 xl:w-max xl:h-max xl:top-[2px] bottom-[171%] scale-110 xl:scale-125 xl:bottom-0">
            <div className="ml-12 xl:ml-9 ">
              <div className="absolute ">
                <SvgBanner />
              </div>
              <div className="relative flex flex-col xl:w-max xl:h-max top-1 left-3">
                <SvgBannerWrite1 />
              </div>
            </div>
            <div className="absolute top-0">
              <div className="absolute fill-red">
                <SvgBanner1 />
              </div>
              <div className="relative flex flex-col xl:w-max xl:h-max top-1 left-3">
                <SvgBannerWrite />
              </div>
            </div>
          </div>
        )}
        {content.red === false && content.green === true && (
          <div className="absolute right-[60%] xl:right-12 xl:w-max xl:h-max scale-110 xl:scale-125 xl:top-[2px] bottom-[171%] xl:bottom-0">
            <div className="ml-12 xl:ml-9 ">
              <div className="absolute">
                <SvgBanner />
              </div>
              <div className="relative flex flex-col top-1 left-3">
                <SvgBannerWrite1 />
              </div>
            </div>
          </div>
        )}
        {content.red === true && content.green === false && (
          <div className="absolute right-[94%] xl:right-[105%] xl:w-max xl:h-max xl:top-[2px] scale-110 xl:scale-125 bottom-[171%] xl:bottom-0">
            <div className="ml-12 xl:ml-9 ">
              <div className="absolute ">
                <SvgBanner1 />
              </div>
              <div className="relative flex flex-col top-1 left-3">
                <SvgBannerWrite />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center col-span-4 gap-8">
      <div className="flex items-center justify-center col-span-1 ">
        <div className="flex items-center">
          <h3 className="text-[#4CBEC5] font-medium whitespace-nowrap">
            Expiry Date: <span className="text-[#7E8096]">{content?.miad}</span>
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-1">
        <div className="flex items-center xl:flex-col xl:justify-around">
          <h3 className="text-[#4CBEC5] font-medium">
            Quantity <span className="text-[#7E8096] font-medium">{content?.quantity}</span>
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-1">
        <div className="flex items-center xl:flex-col xl:justify-around">
          <h3 className="text-[#4CBEC5] font-medium">
            Price <span className="text-[#7E8096] font-medium">{content?.price}</span>
          </h3>
        </div>
      </div>
      </div>
      <div className="flex items-center justify-center col-span-1">
        <div className="items-center justify-center hidden xl:flex">
          <SvgImg3 />
          <button type="button"
            onClick={() => {
              setOpenModal(true);
            }}
            className="flex flex-col"
          >
            <p className="text-[#86bc25] font-medium xl:ml-1">Detailed</p>
            <p className="text-[#86bc25] font-medium xl:ml-1">Update</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
