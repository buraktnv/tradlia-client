import { FC, useState } from "react";
import { SvgNewAdd } from "../../../helpers/svgs/adverts";
import InputAddvert from "../commonComponents/InputAddvert";
import FileDropzone from "../_shared/FileDropzone";

const AddNewAdvert: FC = () => {
  const [ibSalePriceActive, setIbSalePriceActive] = useState<boolean>(false);
  const [ibBuyPriceActive, setIbBuyPriceActive] = useState<boolean>(false);

  return (
    <>
      <div className="flex xl:bg-[#F4F5F7] xl:rounded-3xl w-full h-full border-t-2 xl:border-none xl:mb-[3rem]">
        <div className="flex flex-col my-6 xl:my-[3rem] xl:mx-[2rem] space-y-7 xl:space-y-6">
          <div className="relative w-full">
            <input
              type="search"
              id="search"
              className=" bg-white placeholder:font-normal block drop-shadow-brand py-3 p-3 px-6 xl:px-0 xl:pl-10 w-full xl:font-medium text-[13px] xl:text-sm text-[#7E8096] xl:text-[#A0A2AF] rounded-full outline-none "
              placeholder="Enter Product Name or Barcode"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 30.921 30.807"
              className=" absolute right-[5%] top-3 w-4 h-5 xl:w-5 xl:h-5 "
            >
              <path
                id="Path_1095"
                data-name="Path 1095"
                d="M2736.929,620.224l-6.214-6.215a13.386,13.386,0,1,0-2.682,2.715l6.2,6.2a1.907,1.907,0,0,0,2.7,0h0A1.908,1.908,0,0,0,2736.929,620.224Zm-16.979-4.236a9.93,9.93,0,1,1,9.93-9.93A9.93,9.93,0,0,1,2719.95,615.988Z"
                transform="translate(-2706.567 -592.675)"
                fill="#4cbec5"
              />
            </svg>
          </div>

          <div className="grid grid-cols-10 gap-4 ">
            <div className="col-span-10 xl:col-span-2">
              <InputAddvert
                placeholder="Barcode"
                type="text"
                separate="bg-[#F2F2F2] xl:bg-[#F4F5F7] drop-shadow-brand px-6 xl:px-0 py-3 p-3 xl:pl-10  text-[13px] xl:text-sm rounded-full"
              />
            </div>
            <div className="relative col-span-10 xl:col-span-2">
              <select className="focus:bg-white border border-[#c6c6c66b] peer drop-shadow-brand appearance-none w-full bg-[#F2F2F2] xl:bg-[#F4F5F7] hover:bg-white block py-3  p-3 px-6 xl:px-0 xl:pl-10 outline-none font-normal text-[13px] xl:text-sm text-[#7E8096] xl:text-[#A0A2AF] rounded-full">
                <option>Expiry Date</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 26.883 15.423"
                className="text-[#a0a2af] peer-focus:text-[#4cbec5] absolute w-4 h-4 rotate-180 right-8 top-3 xl:top-4"
              >
                <path
                  d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                  transform="translate(-1630.656 -746.402)"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="col-span-10 xl:col-span-1">
              <InputAddvert
                placeholder="Stock"
                type="number"
                separate="bg-[#F2F2F2] xl:bg-[#F4F5F7] drop-shadow-brand rounded-full py-3 px-6 xl:px-0 xl:text-center text-[13px] xl:text-sm"
              />
            </div>
            <div className="col-span-10 xl:col-span-5">
              <div className="grid grid-cols-3 xl:relative xl:grid-cols-none group">
                <input
                  type="number"
                  onChange={(el) => (el.target.value ? setIbSalePriceActive(true) : setIbSalePriceActive(false))}
                  className={`appearance-none group-hover:bg-white focus:bg-white bg-[#F2F2F2] xl:bg-[#F4F5F7] py-3 px-6 xl:px-0 xl:pl-11 text-[13px] xl:text-sm rounded-full col-span-3 p-2 xl:p-3 w-full placeholder:font-normal placeholder:text-[#7E8096] xl:placeholder:xl:text-[#A0A2AF] text-sm text-[#7E8096] xl:text-[#A0A2AF] outline-none border border-[#c6c6c66b] drop-shadow-input-shadow`}
                  placeholder="Enter Tradlia Sale Price"
                  required
                />
                <div className="px-4 col-start-2 xl:col-start-1 xl:px-0 sm:col-end-4 ml-4 xl:ml-6 w-full xl:w-auto xl:col-end-6 col-span-2 xl:absolute left-[62%] bottom-[0%] mt-3 xl:mt-0 space-x-2 z-10 flex xl:justify-center items-center text-sm text-[#7E8096] xl:text-[#A0A2AF]">
                  <span className={`text-xs ${ibSalePriceActive && "text-[#00B1B2]"}`}>
                    <p className="whitespace-nowrap">on this product</p>
                    <p>Your Profit Margin</p>
                  </span>
                  <InputAddvert
                    placeholder="00,00"
                    type="number"
                    separate={`bg-[#F2F2F2] w-full xl:w-full ${
                      ibSalePriceActive && `!placeholder-[#00B1B2]`
                    } xl:bg-[#F4F5F7] py-3 xl:border text-center rounded-full`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 xl:col-span-1">
              <InputAddvert
                placeholder="Max Sale Quantity"
                type="number"
                separate="bg-[#F2F2F2] xl:bg-[#F4F5F7] py-3 px-6 xl:px-0 xl:pl-11 rounded-full text-[13px] xl:text-sm drop-shadow-brand"
              />
            </div>
            <div className="relative col-span-4 xl:col-span-1 group">
              <select className="peer border border-[#c6c6c66b] focus:bg-white drop-shadow-brand appearance-none w-full h-full py-3 bg-[#F2F2F2] xl:bg-[#F4F5F7] hover:bg-white block p-3 px-6 xl:px-0 xl:pl-10 outline-none font-normal text-[13px] xl:text-sm text-[#7E8096] xl:text-[#A0A2AF] rounded-full group-focus:text-[#A0A2AF]">
                <option>Currency</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 26.883 15.423"
                className="text-[#a0a2af] peer-focus:text-[#4cbec5] absolute w-4 h-4 rotate-180 right-8 top-3 xl:top-4"
              >
                <path
                  d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                  transform="translate(-1630.656 -746.402)"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="col-span-4 xl:col-span-2 ">
              <div className="grid grid-cols-3 xl:relative xl:grid-cols-none group">
                <input
                  type="number"
                  onChange={(el) => (el.target.value ? setIbBuyPriceActive(true) : setIbBuyPriceActive(false))}
                  className={`appearance-none group-hover:bg-white focus:bg-white bg-[#F2F2F2] xl:bg-[#F4F5F7] py-3 px-6 xl:px-0 xl:pl-11 text-[13px] xl:text-sm rounded-full col-span-3 p-2 xl:p-3 w-full placeholder:font-normal placeholder:text-[#7E8096] xl:placeholder:xl:text-[#A0A2AF] text-sm text-[#7E8096] xl:text-[#A0A2AF] outline-none border border-[#c6c6c66b] drop-shadow-input-shadow`}
                  placeholder="Enter Purchase Price"
                  required
                />
                <div className="px-4 xl:px-0 col-start-2 xl:col-start-1 sm:col-end-4 ml-4 xl:ml-6 w-full xl:w-auto xl:col-end-6 col-span-2 xl:absolute left-[62%] bottom-[0%] mt-3 xl:mt-0 space-x-2 z-10 flex xl:justify-center items-center text-sm text-[#7E8096] xl:text-[#A0A2AF]">
                  <span className={`text-xs ${ibBuyPriceActive && "text-[#00B1B2]"}`}>
                    <p className="whitespace-nowrap">on this product</p>
                    <p>Your Profit Margin</p>
                  </span>
                  <InputAddvert
                    placeholder="00,00"
                    type="number"
                    separate={`bg-[#F2F2F2] xl:w-full ${
                      ibBuyPriceActive && `!placeholder-[#00B1B2]`
                    } xl:bg-[#F4F5F7] py-3 xl:border text-center rounded-full`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div className="col-span-2 xl:col-span-1">
              <textarea
                className="resize-none xl:border xl:border-[#c6c6c66b] drop-shadow-brand appearance-none p-2 xl:p-3 w-full hover:bg-white placeholder:font-normal placeholder:text-[#7E8096] xl:placeholder:xl:text-[#A0A2AF] text-sm text-[#7E8096] xl:text-[#A0A2AF] focus:bg-white outline-none bg-[#F2F2F2] xl:bg-[#F4F5F7] px-6 xl:px-0 xl:pl-11 pb-14 text-[13px] xl:text-sm rounded-3xl"
                name="taname"
                placeholder="Listing Description"
                wrap="soft"
                rows={3}
              ></textarea>
            </div>
          </div>
          <div className=" flex rounded-full w-max px-6 xl:px-8 bg-[#707070] justify-center items-center self-center xl:self-start xl:justify-start hover:bg-gradient-to-r from-[#FFBE00] to-[#FF7B03]">
            <button type="button" className="flex items-center space-x-2 drop-shadow-brand">
              <span className="py-3 xl:py-3">
                <SvgNewAdd />
              </span>
              <p className=" text-[#fff] text-sm font-medium py-2.5 xl:py-3 ">
                <span className=" xl:hidden">New </span>Add Listing
              </p>
            </button>
          </div>
        </div>
      </div>
      <Card />
    </>
  );
};

const Card: FC<any> = () => {
  return (
    <div className="relative grid xl:grid-cols-5 xl:bg-[#F4F5F7] gap-4 xl:px-[2rem] py-6 xl:py-[3rem] rounded-3xl xl:h-full ">
      <div className="col-span-4 ">
        <div className="grid grid-cols-4 gap-5 xl:gap-8">
          <InputAddvert
            placeholder="Product Name"
            type="text"
            separate="py-3 p-3 pl-6 xl:pl-11 rounded-full col-span-4 xl:col-span-2 drop-shadow-brand"
          />
          <InputAddvert
            placeholder="Listing Description"
            type="text"
            separate=" py-3 p-3 pl-6 xl:pl-11 rounded-full col-span-4 xl:col-span-2 h-max drop-shadow-brand"
          />
          <InputAddvert
            placeholder="Barcode"
            type="text"
            separate="py-3 p-3 pl-6 xl:pl-11 rounded-full h-max col-span-2 xl:col-span-1 drop-shadow-brand"
          />
          <InputAddvert
            placeholder="Expiry Date"
            type="text"
            separate="py-3 p-3 pl-6 xl:pl-11 rounded-full h-max col-span-2 xl:col-span-1 drop-shadow-brand"
          />
          <InputAddvert
            placeholder="Price"
            type="text"
            separate="py-3 p-3 pl-6 xl:pl-11 rounded-full h-max col-span-2 xl:col-span-1 drop-shadow-brand"
          />
          <div className="relative col-span-2 xl:col-span-1 ">
            <select className="peer xl:border xl:border-[#c6c6c66b] drop-shadow-brand focus:bg-white appearance-none w-full h-full py-3 hover:bg-white block p-3 px-6 xl:px-0 xl:pl-10 outline-none font-normal text-[13px] xl:text-sm text-[#7E8096] xl:text-[#A0A2AF] rounded-full group-focus:text-[#A0A2AF]">
              <option>Currency</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 26.883 15.423"
              className="text-[#a0a2af] peer-focus:text-[#4cbec5] absolute w-4 h-4 rotate-180 right-8 top-3 xl:top-4"
            >
              <path
                d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                transform="translate(-1630.656 -746.402)"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="col-span-2 xl:col-span-1 drop-shadow-brand">
            <InputAddvert placeholder="Stock" type="text" separate="py-3 p-3 pl-6 xl:pl-11 rounded-full h-max" />
          </div>
          <InputAddvert
            placeholder="Dimensions"
            type="text"
            separate="py-3 p-3 pl-6 xl:pl-11 rounded-full h-max col-span-2 xl:col-span-1 drop-shadow-brand"
          />
          <InputAddvert
            placeholder="Brand"
            type="text"
            separate="py-3 p-3 pl-6 xl:pl-11 rounded-full h-max col-span-2 xl:col-span-1 drop-shadow-brand"
          />
          <InputAddvert
            placeholder="Max Sale Quantity"
            type="text"
            separate="py-3 p-3 pl-6 xl:pl-11 rounded-full h-max col-span-2 xl:col-span-1 drop-shadow-brand"
          />
        </div>
      </div>
      <div className="gap-2 ml-8 xl:w-full xl:ml-0 drop-shadow-brand">
        <FileDropzone />
      </div>
      <div className="absolute xl:flex-row flex-col top-[85%] left-[12%] sm:left-[28%]  xl:top-[76.5%] xl:left-6 flex items-center col-span-4 mt-2 gap-3 h-max ">
        <button type="button" className="bg-gradient-to-r from-[#66C1BF] to-[#00A29D] rounded-full text-white font-bold  drop-shadow-brand px-12 lg  py-2 xl:py-3">
          <div className="w-max">Send for Approval</div>
        </button>
        <div className="flex flex-col text-sm text-center xl:text-start w-max xl:w-full">
          <p className="text-[#4CBEC5]">You are adding a product not on Tradlia</p>
          <p className="text-[#4CBEC5] font-medium">Average approval time is 3-4 business days</p>
        </div>
      </div>
    </div>
  );
};

export default AddNewAdvert;
