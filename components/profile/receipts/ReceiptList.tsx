import { FC } from "react";
import { SvgShowMore } from "../../../helpers/svgs/receiptSvg";

const ReceiptList: FC = () => {
  return (
    <div className="px-3 xl:px-[1.5rem] py-3 xl:py-[3rem] xl:bg-[#F4F5F7] rounded-2xl text-sm mt-3 xl:mt-[1.5rem]">
      <div className="grid gap-8 xl:gap-4 xl:grid-cols-3">
        <div className="grid grid-cols-3 gap-2 xl:pr-8 xl:pl-4 xl:block">
          <div className="grid gap-2 col-span-3 text-sm text-[#7E8096] xl:pr-8 xl:pl-4 px-2">
            <h3 className="font-bold text-[15px] leading-[17px]">Shipping Invoices</h3>
            <p className="h-full text-xs xl:text-sm xl:h-28">
              You can download the monthly e-invoices issued for the shipping fees you have paid from this section.
            </p>
          </div>
          <label
            htmlFor="shipping-invoices"
            className="relative flex items-center col-span-2 justify-between bg-white rounded-full shadow-md w-full border border-[#00b2b265] "
          >
            <select
              name="shipping-invoices"
              id="shipping-invoices"
              className="peer px-4 py-2 xl:py-3.5 font-medium text-[#7E8096] drop-shadow-input-shadow xl:text-[#A0A2AF] text-[13px] xl:text-sm bg-transparent rounded-full outline-none appearance-none xl:pr-14 w-full cursor-pointer"
            >
              <option value="April 2022">April 2022</option>
            </select>
            <div className="peer-focus:rotate-0 transition rotate-180 transform ease-in-out duration-300 absolute w-4 h-4 xl:right-6 xl:top-4 right-5 top-3  text-[#4CBEC5] z-10">
              <SvgShowMore />
            </div>
          </label>

          <button type="button" className="transition ease-in-out duration-150 drop-shadow-input-shadow px-6 py-2 xl:py-3.5 rounded-full bg-transparent font-bold xl:text-[#7E8096] xl:border border-[#00b2b265] xl:my-4 xl:mx-4 hover:text-white bg-gradient-to-r text-white  hover:bg-gradient-to-r xl:bg-none from-[#FFBE00] to-[#FF7B03] hover:border-transparent">
            Download
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 xl:pr-8 xl:pl-4 xl:block">
          <div className="grid gap-2 col-span-3 text-sm text-[#7E8096] xl:pr-8 xl:pl-4 px-2">
            <h3 className="font-bold text-[15px] leading-[17px]">Service Fee Invoices</h3>
            <p className="h-full text-xs xl:text-sm xl:h-28">
              You can download the monthly service fee e-invoices issued for your product sales from this section.
            </p>
          </div>
          <label
            htmlFor="service-invoices"
            className="relative flex items-center col-span-2 justify-between bg-white rounded-full shadow-md w-full border border-[#00b2b265] "
          >
            <select
              name="service-invoices"
              id="service-invoices"
              className="peer px-4 py-2 xl:py-3.5 font-medium drop-shadow-input-shadow text-[#7E8096] xl:text-[#A0A2AF] text-[13px] xl:text-sm bg-transparent rounded-full outline-none appearance-none pr-14 w-full h-full cursor-pointer"
            >
              <option value="May 2022">May 2022</option>
            </select>
            <div className="peer-focus:rotate-0 transition rotate-180 transform ease-in-out duration-300 absolute w-4 h-4 xl:right-6 xl:top-4 right-5 top-3  text-[#4CBEC5] z-10">
              <SvgShowMore />
            </div>
          </label>
          <button type="button" className="transition ease-in-out duration-150 drop-shadow-input-shadow px-6 py-2 xl:py-3.5 rounded-full bg-transparent font-bold xl:text-[#7E8096] xl:border border-[#00b2b265] xl:my-4 xl:mx-4 xl:bg-none hover:text-white bg-gradient-to-r text-white  hover:bg-gradient-to-r from-[#FFBE00] to-[#FF7B03] hover:border-transparent">
            Download
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 xl:pr-8 xl:pl-4 xl:block">
          <div className="grid gap-2 col-span-3 text-sm text-[#7E8096] xl:pr-8 xl:pl-4 px-2">
            <h3 className="font-bold text-[15px] leading-[17px]">Shipping Deduction Invoices</h3>
            <p className="h-full text-xs xl:text-sm xl:h-28">
              The shipping costs of campaigns you run using the Tradlia code are deducted from your receivable amount.
              You can download the monthly e-invoices for these deductions from this section.
            </p>
          </div>
          <label
            htmlFor="deduction-invoices"
            className="relative flex items-center col-span-2 justify-between bg-white rounded-full shadow-md w-full border border-[#00b2b265]"
          >
            <select
              name="deduction-invoices"
              id="deduction-invoices"
              className="peer px-4 py-2 xl:py-3.5 font-medium text-[#7E8096] xl:text-[#A0A2AF] text-[13px] xl:text-sm leading-3 bg-transparent rounded-full outline-none appearance-none pr-14 w-full h-full cursor-pointer drop-shadow-input-shadow"
            >
              <option value="August 2022">August 2022</option>
            </select>
            <div className="peer-focus:rotate-0 transition rotate-180 transform ease-in-out duration-300 absolute w-4 h-4 xl:right-6 xl:top-4 right-5 top-3  text-[#4CBEC5] z-10">
              <SvgShowMore />
            </div>
          </label>

          <button type="button" className="transition ease-in-out duration-150 drop-shadow-input-shadow px-6 py-2 xl:py-3.5 rounded-full bg-transparent font-bold xl:text-[#7E8096] xl:border border-[#00b2b265] xl:my-4 xl:mx-4 hover:text-white bg-gradient-to-r text-white  hover:bg-gradient-to-r xl:bg-none from-[#FFBE00] to-[#FF7B03] hover:border-transparent">
            Download
          </button>
        </div>
      </div>

      <div className="grid xl:flex gap-4 mt-8 xl:mt-[1rem] xl:flex-row-reverse xl:my-0">
        <div className="xl:col-start-4 xl:px-[110px]">
          <button type="button" className="bg-[#4CBEC5] text-white xl:px-10 py-2 xl:py-3.5 w-full rounded-full shadow-md font-bold xl:font-normal text-sm drop-shadow-input-shadow">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptList;
