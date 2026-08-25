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
        className={`bg-ink/60 backdrop-blur-sm fixed top-0 bottom-0 left-0 right-0 transition-opacity duration-300 ease-in-out z-20 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => {
          setFade(false);
          setTimeout(() => setOpenModal(() => false), 300);
        }}
      ></div>
      <div className="flex items-center justify-center w-full h-full">
        <div
          className={`z-20 mx-auto flex max-h-[90vh] w-[92%] flex-col items-center justify-center gap-4 overflow-y-auto rounded-card bg-surface p-5 shadow-modal transition-all duration-300 ease-in-out xl:w-full xl:max-w-xl xl:p-8 ${
            fade ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <button type="button"
            onClick={() => setOpenModal(false)}
            className="w-full rounded-pill border border-success py-2 text-lg font-medium text-successDark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
          >
            Update Listing
          </button>

          <div className="flex w-[90%] xl:w-full">
            <div className="xl:w-full xl:flex xl:justify-center xl:items-center">
              <Image src="/images/photos/product-3.svg" width={120} height={100} alt="image" />
            </div>
            <div className="flex flex-col w-full space-y-5">
              <div className="mb-4 whitespace-nowrap px-2 text-sm text-ink-soft xl:flex xl:w-96 xl:px-4">
                <strong>TorqueMax Wood Screws </strong> 4×40 (500 Count)
              </div>
              <div className="justify-end hidden space-x-4 xl:flex">
                <select aria-label="Barcode" className="peer relative w-full appearance-none rounded-pill border border-line bg-canvas px-4 py-2 font-medium text-ink outline-none transition-colors duration-200 focus:border-brand-400 xl:pr-10">
                  <option>8690742310639</option>
                </select>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 26.883 15.423"
                  className="pointer-events-none absolute bottom-[69.5%] right-[9%] h-4 w-4 rotate-180 text-brand-500 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0"
                >
                  <path
                    d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                    transform="translate(-1630.656 -746.402)"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 xl:hidden w-[90%] xl:w-full xl:px-">
            <select aria-label="Barcode" className="peer relative w-full appearance-none rounded-pill border border-line bg-surface px-4 py-2 font-medium text-ink outline-none transition-colors duration-200 focus:border-brand-400">
              <option>8690742310639</option>
            </select>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 26.883 15.423"
              className="pointer-events-none absolute right-[12%] top-[25%] h-4 w-4 rotate-180 text-brand-500 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0"
            >
              <path
                d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                transform="translate(-1630.656 -746.402)"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="grid xl:grid-cols-3 gap-4 w-[90%] xl:w-full">
            <div className="relative col-span-1">
              <select aria-label="Expiry date" className="peer w-full appearance-none rounded-pill border border-line bg-canvas p-2.5 px-4 text-xs outline-none transition-colors duration-200 focus:border-brand-400 xl:p-3 xl:text-sm">
                <option>Expiry Date</option>
              </select>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 26.883 15.423"
                className="pointer-events-none absolute right-8 top-3.5 h-4 w-4 rotate-180 text-brand-500 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0"
              >
                <path
                  d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                  transform="translate(-1630.656 -746.402)"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="col-span-1">
              <InputAddvert
                placeholder="Stock"
                type="number"
                separate="rounded-pill border border-line bg-canvas px-4 placeholder:text-xs xl:placeholder:text-sm placeholder:text-ink-muted drop-shadow-input-shadow "
              />
            </div>
            <div className="relative col-span-1 ">
              <select aria-label="Currency" className="peer w-full appearance-none rounded-pill border border-line bg-canvas p-2.5 px-4 text-xs outline-none transition-colors duration-200 focus:border-brand-400 xl:p-3 xl:text-sm">
                <option>Currency</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 26.883 15.423"
                className="pointer-events-none absolute right-2 top-3 h-4 w-4 rotate-180 text-brand-500 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0"
              >
                <path
                  d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                  transform="translate(-1630.656 -746.402)"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 w-[90%] xl:w-full">
            <div className="col-span-3 xl:col-span-1">
              <InputAddvert
                placeholder="Price"
                type="number"
                separate="rounded-pill border border-line bg-canvas px-4 placeholder:text-xs xl:placeholder:text-sm placeholder:text-ink-muted"
              />
            </div>
            <div className="col-span-3 xl:col-span-1">
              <InputAddvert
                placeholder="My Purchase Price"
                type="number"
                separate="rounded-pill border border-line bg-canvas px-4 placeholder:text-xs xl:placeholder:text-sm placeholder:text-ink-muted"
              />
            </div>
            <div className="col-span-3 xl:col-span-1">
              <InputAddvert
                placeholder="Max Sale Quantity"
                type="number"
                separate="rounded-pill border border-line bg-canvas px-4 placeholder:text-xs xl:placeholder:text-sm placeholder:text-ink-muted"
              />
            </div>

            <div className="flex col-span-3 ">
              <textarea
                placeholder="Listing Description"
                rows={4}
                cols={6}
                className="flex cursor-pointer w-full px-4 py-2 border outline-none rounded-3xl placeholder:text-xs xl:placeholder:text-sm placeholder:text-ink-muted"
              ></textarea>
            </div>

            <label
              className="col-span-1 flex w-full cursor-pointer items-center gap-3 rounded-pill border border-dangerTint bg-dangerTint px-4 py-2.5 text-sm font-medium text-dangerDark transition-colors duration-200 focus-within:ring-2 focus-within:ring-brand-400/30 xl:w-max"
              htmlFor="20"
            >
              <input type="checkbox" id="20" name="" className="sr-only peer" />
              <div className="h-5 w-5 shrink-0 rounded-md border border-danger peer-checked:bg-danger peer-checked:[&]:text-transparent"></div>
              <p className="flex items-center text-sm whitespace-nowrap xl:flex-none">Feature Listing</p>
            </label>
          </div>
          <div className="flex xl:justify-end gap-4 w-[90%] xl:w-full mt-5 xl:mt-0">
            <button type="button"
              onClick={() => {
                setOpenModal(false);
              }}
              className="cursor-pointer rounded-pill bg-success px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-successDark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
            >
              Update Listing
            </button>
            <button type="button"
              onClick={() => {
                setOpenModal(false);
              }}
              className="cursor-pointer rounded-pill border border-line px-4 py-2.5 font-medium text-sm text-ink-soft transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-canvas focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
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
