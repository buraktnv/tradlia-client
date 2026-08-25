import { FC } from "react";
import { SvgShowMore } from "../../../helpers/svgs/receiptSvg";
import { exportCsv } from "../../../helpers/exportCsv";
import useLocalStorage from "../../../helpers/hooks/useLocalStorage";

const firmInfoDefault = {
  name: "Northwind Traders",
  taxID: "TX-184634082",
  taxOffice: "Central Tax Office",
  TCNo: "ID-900023656",
  address: "123 Commerce St, Suite 37, New York, NY 10001",
  email: "contact@northwind.example.com",
};

const ReceiptList: FC = () => {
  const [months, setMonths] = useLocalStorage("receipt-list-months", {
    shipping: "April 2022",
    service: "May 2022",
    deduction: "August 2022",
  });
  const [firmInfo, setFirmInfo] = useLocalStorage("firm-receipt-info", firmInfoDefault);

  const download = (invoice: string, month: string, amount: string) => {
    exportCsv(`${invoice}-${month}`, ["Invoice", "Period", "Amount", "Status"], [
      [invoice, month, amount, "Paid"],
    ]);
  };

  const saveChanges = () => {
    setFirmInfo(firmInfo);
    setMonths({ ...months });
  };

  return (
    <div className="px-3 xl:px-[1.5rem] py-3 xl:py-[3rem] rounded-card border border-line bg-surface shadow-card xl:p-6 text-sm mt-3 xl:mt-[1.5rem]">
      <div className="grid gap-8 xl:gap-4 xl:grid-cols-3">
        <div className="grid grid-cols-3 gap-2 xl:pr-8 xl:pl-4 xl:block">
          <div className="grid gap-2 col-span-3 text-sm text-ink-muted xl:pr-8 xl:pl-4 px-2">
            <h3 className="font-bold text-[15px] leading-[17px]">Shipping Invoices</h3>
            <p className="h-full text-xs xl:text-sm xl:h-28">
              You can download the monthly e-invoices issued for the shipping fees you have paid from this section.
            </p>
          </div>
          <label
            htmlFor="shipping-invoices"
            className="relative flex items-center col-span-2 justify-between bg-white rounded-full shadow-md w-full border border-line "
          >
            <select
              name="shipping-invoices"
              id="shipping-invoices"
              value={months.shipping}
              onChange={(e) => setMonths((pre: any) => ({ ...pre, shipping: e.target.value }))}
              className="peer h-full w-full cursor-pointer appearance-none rounded-pill bg-transparent px-4 py-2 pr-14 text-[13px] leading-snug outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-400/30 xl:py-3.5 xl:text-sm"
            >
              <option value="April 2022">April 2022</option>
            </select>
            <div className="absolute right-4 top-3 z-10 h-3 w-3 rotate-180 fill-current text-brand-500 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0 xl:right-6 xl:top-4 xl:h-4 xl:w-4">
              <SvgShowMore />
            </div>
          </label>

          <button type="button" onClick={() => download("Shipping Invoice", months.shipping, "24.90 $")} className="transition ease-in-out duration-150 drop-shadow-input-shadow px-6 py-2 xl:py-3.5 rounded-full bg-transparent font-bold xl:text-ink-muted border border-line xl:my-4 xl:mx-4 hover:text-white  from-brand-400 to-brand-500 hover:border-transparent">
            Download
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 xl:pr-8 xl:pl-4 xl:block">
          <div className="grid gap-2 col-span-3 text-sm text-ink-muted xl:pr-8 xl:pl-4 px-2">
            <h3 className="font-bold text-[15px] leading-[17px]">Service Fee Invoices</h3>
            <p className="h-full text-xs xl:text-sm xl:h-28">
              You can download the monthly service fee e-invoices issued for your product sales from this section.
            </p>
          </div>
          <label
            htmlFor="service-invoices"
            className="relative flex items-center col-span-2 justify-between bg-white rounded-full shadow-md w-full border border-line "
          >
            <select
              name="service-invoices"
              id="service-invoices"
              value={months.service}
              onChange={(e) => setMonths((pre: any) => ({ ...pre, service: e.target.value }))}
              className="peer h-full w-full cursor-pointer appearance-none rounded-pill bg-transparent px-4 py-2 pr-14 text-[13px] leading-snug outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-400/30 xl:py-3.5 xl:text-sm"
            >
              <option value="May 2022">May 2022</option>
            </select>
            <div className="absolute right-4 top-3 z-10 h-3 w-3 rotate-180 fill-current text-brand-500 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0 xl:right-6 xl:top-4 xl:h-4 xl:w-4">
              <SvgShowMore />
            </div>
          </label>
          <button type="button" onClick={() => download("Service Fee Invoice", months.service, "12.50 $")} className="transition ease-in-out duration-150 drop-shadow-input-shadow px-6 py-2 xl:py-3.5 rounded-full bg-transparent font-bold xl:text-ink-muted border border-line xl:my-4 xl:mx-4 xl:bg-none hover:text-white bg-gradient-to-r text-white  hover:bg-amber-500 hover:border-transparent">
            Download
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2 xl:pr-8 xl:pl-4 xl:block">
          <div className="grid gap-2 col-span-3 text-sm text-ink-muted xl:pr-8 xl:pl-4 px-2">
            <h3 className="font-bold text-[15px] leading-[17px]">Shipping Deduction Invoices</h3>
            <p className="h-full text-xs xl:text-sm xl:h-28">
              The shipping costs of campaigns you run using the Tradlia code are deducted from your receivable amount.
              You can download the monthly e-invoices for these deductions from this section.
            </p>
          </div>
          <label
            htmlFor="deduction-invoices"
            className="relative flex items-center col-span-2 justify-between bg-white rounded-full shadow-md w-full border border-line"
          >
            <select
              name="deduction-invoices"
              id="deduction-invoices"
              value={months.deduction}
              onChange={(e) => setMonths((pre: any) => ({ ...pre, deduction: e.target.value }))}
              className="peer h-full w-full cursor-pointer appearance-none rounded-pill bg-transparent px-4 py-2 pr-14 text-[13px] leading-snug outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-brand-400/30 xl:py-3.5 xl:text-sm"
            >
              <option value="August 2022">August 2022</option>
            </select>
            <div className="absolute right-4 top-3 z-10 h-3 w-3 rotate-180 fill-current text-brand-500 transition duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none peer-focus:rotate-0 xl:right-6 xl:top-4 xl:h-4 xl:w-4">
              <SvgShowMore />
            </div>
          </label>

          <button type="button" onClick={() => download("Shipping Deduction Invoice", months.deduction, "8.75 $")} className="transition ease-in-out duration-150 drop-shadow-input-shadow px-6 py-2 xl:py-3.5 rounded-full bg-transparent font-bold xl:text-ink-muted border border-line xl:my-4 xl:mx-4 hover:text-white  from-brand-400 to-brand-500 hover:border-transparent">
            Download
          </button>
        </div>
      </div>

      <div className="grid xl:flex gap-4 mt-8 xl:mt-[1rem] xl:flex-row-reverse xl:my-0">
        <div className="xl:col-start-4 xl:px-[110px]">
          <button type="button" onClick={saveChanges} className="w-full rounded-pill bg-brand-400 py-2.5 text-sm font-semibold text-white shadow-card transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1 xl:w-max xl:px-12 xl:py-3.5">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptList;
