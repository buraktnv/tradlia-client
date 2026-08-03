import Image from "next/image";
import { FC, useEffect, useState } from "react";
import InputAddvert from "../commonComponents/InputAddvert";

const UpdateProduct: FC<any> = ({ setOpenModal }) => {
  const [fade, setFade] = useState<boolean>(false);
  useEffect(() => {
    setFade(true);
  }, []);
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 w-full h-full md:fixed">
      <div
        className={`bg-[#000000be] fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out z-20 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setOpenModal(() => false), 300);
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`bg-[#F2F2F2] xl:bg-[#ffff] flex flex-col items-center w- justify-center gap-3 rounded-3xl py-6 xl:px-8 z-20 transition-all duration-300 ease-in-out ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <button type="button"
            onClick={() => setOpenModal(false)}
            className=" text-[#86BC25] text-lg border border-[#86BC25] rounded-full w-[90%] xl:w-full py-1 xl:py-2 xl:pr-11"
          >
            Update Listing
          </button>

          <div className="flex w-[90%] xl:w-full">
            <div className="xl:w-full xl:flex xl:justify-center xl:items-center">
              <Image src="/images/photos/StrepNaz Herbal.svg" width={120} height={100} alt="image" />
            </div>
            <div className="flex flex-col w-full space-y-5">
              <div className="text-[#7E8096] xl:flex xl:w-96 px-3 xl:px-7  mb-6 whitespace-nowrap xl:mb-6">
                <strong>StrepNaz Orange & </strong> Echinacea 24 Lozenges
              </div>
              <div className="justify-end hidden space-x-4 xl:flex">
                <select className="peer relative appearance-none xl:bg-[#FCFCFC] w-[96%] py-2 text-[#7E8096] text-lg font-semibold px-4 xl:px-[13px] outline-none rounded-full border border-[#00B1B265] drop-shadow-input-shadow">
                  <option>8690742310639</option>
                </select>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 26.883 15.423"
                  className="peer-focus:rotate-0 transform transition ease-in-out duration-300 rotate-180 absolute w-4 h-4 bottom-[69.5%] right-[9%] "
                >
                  <path
                    d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                    transform="translate(-1630.656 -746.402)"
                    fill="#00B1B2"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 xl:hidden w-[90%] xl:w-full xl:px-">
            <select className="peer relative appearance-none w-full  py-2 text-[#7E8096] font-medium px-4 outline-none rounded-full border border-[#00B1B265] ">
              <option>8690742310639</option>
            </select>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 26.883 15.423"
              className="peer-focus:rotate-0 transform transition ease-in-out duration-300 rotate-180 absolute w-4 h-4 top-[25%] right-[12%] "
            >
              <path
                d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                transform="translate(-1630.656 -746.402)"
                fill="#00B1B2"
              />
            </svg>
          </div>
          <div className="grid xl:grid-cols-3 gap-4 w-[90%] xl:w-full">
            <div className="relative col-span-1">
              <select className="peer xl:bg-[#FCFCFC] appearance-none w-full lock p-2.5 xl:p-3 px-4 outline-none font-normal xl:text-sm xl:text-[#A0A2AF] text-xs text-[#707070] border rounded-full drop-shadow-input-shadow">
                <option>Expiry Date</option>
              </select>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 26.883 15.423"
                className="peer-focus:rotate-0 transform transition ease-in-out duration-300 rotate-180 absolute w-4 h-4 right-8 top-3.5 "
              >
                <path
                  d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                  transform="translate(-1630.656 -746.402)"
                  fill="#a0a2af"
                />
              </svg>
            </div>
            <div className="col-span-1">
              <InputAddvert
                placeholder="Stock"
                type="number"
                separate="rounded-full px-4 placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#707070] xl:placeholder:text-[#A0A2AF] xl:placeholder:bg-[#FCFCFC] drop-shadow-input-shadow "
              />
            </div>
            <div className="relative col-span-1 ">
              <select className="peer appearance-none w-full lock p-2.5 xl:p-3 px-4 outline-none font-normal xl:text-sm xl:text-[#A0A2AF] text-xs text-[#707070]  rounded-full drop-shadow-input-shadow border">
                <option>Currency</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 26.883 15.423"
                className="absolute w-4 h-4 mt-1 mr-4 transition duration-300 ease-in-out transform rotate-180 peer-focus:rotate-0 right-2 top-3"
              >
                <path
                  d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                  transform="translate(-1630.656 -746.402)"
                  fill="#a0a2af"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 w-[90%] xl:w-full">
            <div className="col-span-3 xl:col-span-1">
              <InputAddvert
                placeholder="Price"
                type="number"
                separate="rounded-full px-4 placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#707070] xl:placeholder:text-[#A0A2AF]"
              />
            </div>
            <div className="col-span-3 xl:col-span-1">
              <InputAddvert
                placeholder="My Purchase Price"
                type="number"
                separate="rounded-full px-4 placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#707070] xl:placeholder:text-[#A0A2AF]"
              />
            </div>
            <div className="col-span-3 xl:col-span-1">
              <InputAddvert
                placeholder="Max Sale Quantity"
                type="number"
                separate="rounded-full px-4 placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#707070] xl:placeholder:text-[#A0A2AF]"
              />
            </div>

            <div className="flex col-span-3 ">
              <textarea
                placeholder="Listing Description"
                rows={4}
                cols={6}
                className="flex cursor-pointer w-full px-4 py-2 border outline-none rounded-3xl placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#707070] xl:placeholder:text-[#A0A2AF]"
              ></textarea>
            </div>

            <label
              className="flex cursor-pointer xl:justify-center pl-3 xl:pl-0 col-span-1 border border-[#FB295A] py-2 xl:py-3 rounded-full gap-4 xl:gap-2 text-[#707070] xl:text-[#A0A2AF] w-[325%] xl:w-[120%]"
              htmlFor="20"
            >
              <input type="checkbox" id="20" name="" className="hidden peer" />
              <div className="w-6 h-6 rounded-lg peer-checked:bg-[#FB295A] text-transparent peer-checked:text-white border border-[#FB295A]"></div>
              <p className="flex items-center text-sm whitespace-nowrap xl:flex-none">Feature Listing</p>
            </label>
          </div>
          <div className="flex xl:justify-end gap-4 w-[90%] xl:w-full mt-5 xl:mt-0">
            <button type="button"
              onClick={() => {
                setOpenModal(false);
              }}
              className="bg-[#86BC25] cursor-pointer py-2 xl:py-3 px-8 xl:px-6 rounded-full text-sm font-medium text-white"
            >
              Update Listing
            </button>
            <button type="button"
              onClick={() => {
                setOpenModal(false);
              }}
              className="border cursor-pointer border-[#86BC25] xl:py-3 px-16 xl:px-4 rounded-full font-medium text-sm text-[#7E8096]"
            >
              Unpublish Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateProduct;
