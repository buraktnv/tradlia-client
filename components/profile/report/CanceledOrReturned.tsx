import React, { FC } from "react";
import { SvgCanceledOrReturned, SvgConfirmedSales, SvgDidntShipped } from "../../../helpers/svgs/reportSvg";
import ChartChard from "./ChartChard";
import { InputDate, InputSelect } from "./Pieces";

const data = [
  {
    name: "10.05.2022",
    "Total Sales Amount": 1045.44,
  },
  {
    name: "13.05.2022",
    "Total Sales Amount": 1041.57,
  },
  {
    name: "15.05.2022",
    "Total Sales Amount": 744.55,
  },
  {
    name: "18.05.2022",
    "Total Sales Amount": 1653.94,
  },
  {
    name: "20.05.2022",
    "Total Sales Amount": 836.34,
  },
  {
    name: "21.05.2022",
    "Total Sales Amount": 1890.7,
  },
  {
    name: "22.05.2022",
    "Total Sales Amount": 993.84,
  },
  {
    name: "25.05.2022",
    "Total Sales Amount": 7706.24,
  },
  {
    name: "28.05.2022",
    "Total Sales Amount": 6864,
  },
  {
    name: "29.05.2022",
    "Total Sales Amount": 7268,
  },
  {
    name: "30.05.2022",
    "Total Sales Amount": 3268,
  },
];

const CanceledOrReturned: FC<any> = () => {
  return (
    <div>
      <div className="py-2 mt-4 bg-white xl:py-0">
        <div className="xl:h-[3rem] items-center grid grid-cols-6 xl:grid-cols-12 xl:border border-[#00B1B265] xl:bg-[#F4F5F7] rounded-full xl:my-[1.5rem] my-3 py-1 px-3 xl:gap-4">
          <div className="col-span-2 xl:col-span-2 xl:col-start-6 xl:px-1">
            <InputSelect textColor="text-[#E8336E]">
              <option>Last 30 days</option>
            </InputSelect>
          </div>
          <div className="flex items-center col-span-4 xl:col-start-8 xl:px-0 xl:col-span-5">
            <div className="flex items-center w-full bg-white rounded-full border-[#c6c6c627] gap-2 xl:shadow-md">
              <InputDate content={{ date: "30.04.2022" }} textColor="text-[#E8336E]" />
              <div className="w-[1px] h-6 bg-[#E8336E80] after:content-['|'] text-transparent rounded-full"></div>
              <InputDate content={{ date: "30.05.2022" }} textColor="text-[#E8336E]" />
              <button type="button" className="hidden xl:block font-bold text-sm py-2 px-5 bg-[#E8336E] text-white rounded-full">
                Apply
              </button>
            </div>
          </div>
          <div className="col-span-7 xl:hidden">
            <button type="button" className="w-full mt-1 font-bold text-sm py-2 px-5 bg-[#E8336E] text-white rounded-full">
              Apply
            </button>
          </div>
        </div>
        <div className="flex xl:w-full">
          <ChartChard data={data} strokeColor={"#E8336E"} />
        </div>
        <div className="flex w-full h-full px-4">
          <table className="w-full h-full text-[#7E8096] p-2 xl:p-16">
            <thead className="text-left">
              <tr className="border-b border-[#cccccca1]">
                <th className="py-3 font-bold xl:pl-32">
                  <span className="w-3 h-3 bg-[#E8336E] inline-block rounded mr-3"></span>Date
                </th>
                <th className="py-3 font-bold xl:pl-32">
                  <span className="w-3 h-3 bg-[#E8336E] inline-block rounded mr-3"></span>Sales Quantity
                </th>
                <th className="py-3 font-bold xl:pl-32">
                  <span className="w-3 h-3 bg-[#E8336E] inline-block rounded mr-3"></span>Sales Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {DataConfirmedSales.tableData &&
                DataConfirmedSales.tableData.map((el: any) => <TableRow content={el} key={el.id} />)}
            </tbody>
          </table>
        </div>
        <div className="bg-[#E8336E] rounded-full text-white grid grid-cols-3 px-4 my-5 mx-4 xl:mx-0">
          <div className="flex items-center col-span-1 col-start-2 gap-3 py-3 xl:col-start-3 xl:pl-20">
            Total: <p className="text-xl font-bold whitespace-nowrap">{DataConfirmedSales.total} $</p>
          </div>
        </div>
      </div>
      <div className="flex px-4 xl:px-0">
        <div className="flex flex-col xl:flex-row items-center justify-between bg-white border border-[#CCCCCCcc] rounded-2xl my-5 w-full">
          <div className="grid items-center w-full h-full grid-cols-3 px-8">
            <div className="flex w-full h-full p-4">
              <div className="w-full h-full text-[#EA5B0C]">
                <SvgConfirmedSales />
              </div>
            </div>
            <div className="col-span-2 text-[#7E8096] pl-4 xl:pl-0">
              <p className="font-bold">Confirmed Sales</p>
              <p className="text-xl font-bold text-[#EA5B0C]">{DataConfirmedSales.confirmedPurchase} $</p>
              <p className="font-medium">{DataConfirmedSales.confirmedPurchaseQuantity} pcs</p>
            </div>
          </div>
          <div className="bg-[#cccccccc] h-20 w-px hidden xl:block"></div>
          <div className="block w-full px-8 xl:hidden">
            <span className="bg-[#4CBEC5] h-px w-full block xl:hidden"></span>
          </div>
          <div className="grid items-center w-full h-full grid-cols-3 px-8">
            <div className="flex w-full h-full p-4">
              <div className="w-full h-full text-[#4CBEC5]">
                <SvgDidntShipped />
              </div>
            </div>
            <div className="col-span-2 text-[#7E8096] pl-4 xl:pl-0">
              <p className="font-bold">Unshipped</p>
              <p className="text-xl font-bold text-[#4CBEC5]">{DataConfirmedSales.didntShipped} $</p>
              <p className="font-medium">{DataConfirmedSales.didntShippedQuantity} pcs</p>
            </div>
          </div>
          <div className="bg-[#cccccccc] h-20 w-px hidden xl:block"></div>
          <div className="block w-full px-8 xl:hidden">
            <span className="bg-[#4CBEC5] h-px w-full block xl:hidden"></span>
          </div>

          <div className="grid items-center w-full h-full grid-cols-3 px-8">
            <div className="flex w-full h-full p-4">
              <div className="w-full h-full text-[#E8336E]">
                <SvgCanceledOrReturned />
              </div>
            </div>
            <div className="col-span-2 text-[#7E8096] pl-4 xl:pl-0">
              <p className="font-bold">Cancelled and Returned</p>
              <p className="text-xl font-bold text-[#E8336E]">{DataConfirmedSales.canceledOrReturned} $</p>
              <p className="font-medium">{DataConfirmedSales.canceledOrReturnedQuantity} pcs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataConfirmedSales = {
  total: "21.535.60",
  confirmedPurchase: "188,133,13",
  confirmedPurchaseQuantity: 473,
  didntShipped: "877.87",
  didntShippedQuantity: 4,
  canceledOrReturned: "253,53",
  canceledOrReturnedQuantity: 2,
  tableData: [
    {
      id: 0,
      date: "12.05.2022",
      quantity: "1",
      total: 1045.44,
    },
    {
      id: 1,
      date: "13.05.2022",
      quantity: "10",
      total: 1041.57,
    },
    {
      id: 2,
      date: "15.05.2022",
      quantity: "8",
      total: 744.55,
    },
    {
      date: "18.05.2022",
      quantity: "2",
      total: 1653.94,
    },
    {
      id: 3,
      date: "20.05.2022",
      quantity: "4",
      total: 836.34,
    },
    {
      id: 4,
      date: "21.05.2022",
      quantity: "6",
      total: 1890.7,
    },
    {
      id: 5,
      date: "22.05.2022",
      quantity: "1",
      total: 993.84,
    },
    {
      id: 6,
      date: "25.05.2022",
      quantity: "2",
      total: 7706.24,
    },
    {
      id: 7,
      date: "28.05.2022",
      quantity: "7",
      total: 6864,
    },
  ],
};

const TableRow: FC<any> = ({ content }) => {
  return (
    <tr className="border-b border-[#CCCCCCa1]">
      <td className="py-[0.5rem] xl:pl-32">{content.date}</td>
      <td className="py-[0.5rem] font-medium xl:pl-32">{content.quantity} Products</td>
      <td className="py-[0.5rem] font-bold xl:pl-32">{content.total} $</td>
    </tr>
  );
};

export default CanceledOrReturned;
