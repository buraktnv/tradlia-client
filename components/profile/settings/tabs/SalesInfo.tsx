import React, { FC } from "react";
import InputAddvert from "../../commonComponents/InputAddvert";

const SalesInfo: FC = () => {
  return (
    <div className="rounded-card border border-line bg-surface shadow-card rounded-3xl w-full h-full text-sm xl:p-[2rem]">
      <div className="flex flex-col xl:gap-[1.5rem] gap-6 leading-4">
        <div className="relative grid items-center w-full xl:w-full xl:mx-0 xl:grid-cols-2 ">
          <div className="space-y-1">
            <label htmlFor="1" className="font-medium  text-ink-muted ml-3.5 xl:ml-10">
              Bank Name*
            </label>
            <div className="relative w-full group">
              <select
                id="1"
                className="peer appearance-none w-full xl:pr-0 xl:w-full h-full bg-white group-hover:text-brand-600 xl:px-3 px-[17px] py-3 xl:pl-10 outline-none font-medium xl:font-semibold text-ink-muted xl:text-ink-muted rounded-full drop-shadow-input-shadow xl:py-3.5"
              >
                <option>First National Bank</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 26.883 15.423"
                fill="currentColor"
                className="peer-focus:rotate-0 transform transition ease-in-out duration-300 rotate-180 absolute right-4 xl:top-3.5 xl:right-2 top-3 w-4 h-4 mr-4  group-hover:fill-brand-500"
              >
                <path
                  id="Path_1096"
                  data-name="Path 1096"
                  d="M1631.237,761.246a1.984,1.984,0,0,0,2.8,0l10.058-10.058,6.125,6.125,3.933,3.933a1.982,1.982,0,0,0,2.8-2.8l-11.46-11.459a1.981,1.981,0,0,0-2.8,0l-11.46,11.459A1.983,1.983,0,0,0,1631.237,761.246Z"
                  transform="translate(-1630.656 -746.402)"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="grid items-center w-full grid-cols-1 xl:grid-cols-2 xl:mx-0">
          <div className="grid space-y-1 xl:block">
            <label className=" font-medium text-ink-muted ml-3.5 xl:ml-10">Branch Name*</label>

            <InputAddvert
              placeholder="New York"
              type="search"
              separate="py-2.5 xl:pr-0 xl:w-full xl:pl-10 placeholder:font-medium xl:placeholder:font-semibold rounded-full font-semibold px-5 xl:px-0 "
            />
          </div>
        </div>
        <div className="grid items-center w-full grid-cols-1 xl:grid-cols-2 xl:mx-0">
          <div className="space-y-1">
            <label className="font-medium  text-ink-muted ml-3.5 xl:ml-10">Bank Account Name*</label>

            <InputAddvert
              placeholder="James Anderson"
              type="search"
              separate="w-full py-2.5 xl:pr-0 xl:w-full xl:pl-10 placeholder:font-medium xl:placeholder:font-semibold rounded-full font-semibold px-5 xl:px-0"
            />
          </div>
        </div>
        <div className="grid items-center w-full grid-cols-1 xl:grid-cols-2 xl:mx-0">
          <div className="space-y-1">
            <label className=" font-medium text-ink-muted ml-3.5 xl:ml-10">IBAN*</label>

            <InputAddvert
              placeholder="US12 3456 7890 1234 5678 90"
              type="search"
              separate="w-full py-2.5 px-5 xl:px-0 xl:pr-0 xl:w-full xl:pl-10 placeholder:font-medium xl:placeholder:font-semibold rounded-full font-semibold"
            />
          </div>
        </div>
        <div className="flex justify-center sm:justify-start sm:flex-none">
          <button type="button" className="font-medium xl:font-bold px-8 xl:px-11 py-3 rounded-full bg-brand-400 text-white text-sm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesInfo;
