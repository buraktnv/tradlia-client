import React, { FC, useState } from "react";
import { SvgCanceledOrReturned, SvgConfirmedSales, SvgDidntShipped } from "../../../helpers/svgs/reportSvg";
import ChartChard from "./ChartChard";
import { InputDate, InputSelect } from "./Pieces";

const data = [
  { name: "10.05.2022", "Total Sales Amount": 1045.44 },
  { name: "13.05.2022", "Total Sales Amount": 1041.57 },
  { name: "15.05.2022", "Total Sales Amount": 744.55 },
  { name: "18.05.2022", "Total Sales Amount": 1653.94 },
  { name: "20.05.2022", "Total Sales Amount": 836.34 },
  { name: "21.05.2022", "Total Sales Amount": 1890.7 },
  { name: "22.05.2022", "Total Sales Amount": 993.84 },
  { name: "25.05.2022", "Total Sales Amount": 7706.24 },
  { name: "28.05.2022", "Total Sales Amount": 6864 },
  { name: "29.05.2022", "Total Sales Amount": 7268 },
  { name: "30.05.2022", "Total Sales Amount": 3268 },
];

const toInputDate = (d: string) => d.split(".").reverse().join("-");
const fromInputDate = (d: string) => d.split("-").reverse().join(".");

const CanceledOrReturned: FC<any> = () => {
  const [range, setRange] = useState<string>("Last 30 days");
  const [startDate, setStartDate] = useState<string>("30.04.2022");
  const [endDate, setEndDate] = useState<string>("30.05.2022");
  const [chartData, setChartData] = useState<any[]>(data);
  const [tableData, setTableData] = useState<any[]>(DataConfirmedSales.tableData);

  const handleRange = (value: string) => {
    setRange(value);
    if (value === "Last 7 days") {
      setStartDate("24.05.2022");
      setEndDate("30.05.2022");
    } else if (value === "Last 90 days") {
      setStartDate("01.03.2022");
      setEndDate("30.05.2022");
    } else {
      setStartDate("30.04.2022");
      setEndDate("30.05.2022");
    }
  };

  const applyFilter = () => {
    const chart = data.filter((el: any) => toInputDate(el.name) >= toInputDate(startDate) && toInputDate(el.name) <= toInputDate(endDate));
    const table = DataConfirmedSales.tableData.filter((el: any) => el.date >= startDate && el.date <= endDate);
    setChartData(chart.length > 0 ? chart : data);
    setTableData(table);
  };

  return (
    <div>
      <div className="mt-4 flex flex-col gap-3 rounded-card border border-line bg-surface px-4 py-3 shadow-card lg:flex-row lg:items-center lg:justify-between xl:my-[1.5rem]">
        <div className="w-full lg:w-52">
          <InputSelect textColor="text-ink-muted" value={range} onChange={(e: any) => handleRange(e.target.value)}>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </InputSelect>
        </div>
        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 rounded-pill border border-line bg-surface px-2 shadow-card">
            <InputDate
              textColor="text-ink-muted"
              value={toInputDate(startDate)}
              onChange={(e: any) => setStartDate(fromInputDate(e.target.value))}
            />
            <div className="h-6 w-px rounded-full bg-line"></div>
            <InputDate
              textColor="text-ink-muted"
              value={toInputDate(endDate)}
              onChange={(e: any) => setEndDate(fromInputDate(e.target.value))}
            />
          </div>
          <button
            type="button"
            onClick={applyFilter}
            className="whitespace-nowrap rounded-pill bg-brand-400 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-1"
          >
            Apply
          </button>
        </div>
      </div>
      <div className="mt-4 h-72 w-full rounded-card border border-line bg-surface p-2 shadow-card md:h-80 md:p-4">
        <ChartChard data={chartData} />
      </div>
      <div className="mt-4 w-full overflow-hidden rounded-card border border-line bg-surface shadow-card">
        <table className="w-full text-left text-sm text-ink-soft">
          <thead className="bg-canvas text-xs uppercase tracking-wider text-ink-muted font-medium">
            <tr className="border-b border-line">
              <th className="py-3 pl-4 font-bold xl:pl-8">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-400" aria-hidden="true"></span>Date
              </th>
              <th className="py-3 pl-4 font-bold xl:pl-8">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-400" aria-hidden="true"></span>Sales Quantity
              </th>
              <th className="py-3 pl-4 font-bold xl:pl-8">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-400" aria-hidden="true"></span>Sales Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((el: any, i: number) => <TableRow content={el} key={i} />)
            ) : (
              <tr>
                <td colSpan={3} className="py-10 text-center text-sm text-ink-muted">
                  No records for the selected period.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="flex items-center justify-end mt-4">
          <div className="flex items-center gap-3 rounded-pill bg-ink px-6 py-3 text-white">
            <span className="text-sm text-white/70">Total</span>
            <p className="font-display text-xl font-bold whitespace-nowrap tabular-nums">{DataConfirmedSales.total} $</p>
          </div>
        </div>
      </div>
      <div className="grid w-full gap-3 py-5 lg:flex lg:flex-row">
        <StatCard
          icon={<SvgConfirmedSales />}
          iconClass="text-brand-600"
          title="Confirmed Sales"
          value={`${DataConfirmedSales.confirmedPurchase} $`}
          sub={`${DataConfirmedSales.confirmedPurchaseQuantity} pcs`}
        />
        <StatCard
          icon={<SvgDidntShipped />}
          iconClass="text-amber-500"
          title="Unshipped"
          value={`${DataConfirmedSales.didntShipped} $`}
          sub={`${DataConfirmedSales.didntShippedQuantity} pcs`}
        />
        <StatCard
          icon={<SvgCanceledOrReturned />}
          iconClass="text-danger"
          title="Cancelled and Returned"
          value={`${DataConfirmedSales.canceledOrReturned} $`}
          sub={`${DataConfirmedSales.canceledOrReturnedQuantity} pcs`}
        />
      </div>
    </div>
  );
};

const StatCard: FC<{ icon: any; iconClass: string; title: string; value: string; sub: string }> = ({
  icon,
  iconClass,
  title,
  value,
  sub,
}) => (
  <div className="flex w-full items-center gap-4 rounded-card border border-line bg-surface p-5 shadow-card">
    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-card bg-canvas p-3 ${iconClass}`}>{icon}</div>
    <div className="min-w-0 text-ink-soft">
      <p className="font-display text-xs uppercase tracking-wider text-ink-muted">{title}</p>
      <p className="truncate font-display text-xl font-bold tabular-nums text-ink">{value}</p>
      <p className="font-medium tabular-nums">{sub}</p>
    </div>
  </div>
);

const DataConfirmedSales = {
  total: "21.535.60",
  confirmedPurchase: "188,133,13",
  confirmedPurchaseQuantity: 473,
  didntShipped: "877.87",
  didntShippedQuantity: 4,
  canceledOrReturned: "253,53",
  canceledOrReturnedQuantity: 2,
  tableData: [
    { id: 0, date: "12.05.2022", quantity: "1", total: 1045.44 },
    { id: 1, date: "13.05.2022", quantity: "10", total: 1041.57 },
    { id: 2, date: "15.05.2022", quantity: "8", total: 744.55 },
    { date: "18.05.2022", quantity: "2", total: 1653.94 },
    { id: 3, date: "20.05.2022", quantity: "4", total: 836.34 },
    { id: 4, date: "21.05.2022", quantity: "6", total: 1890.7 },
    { id: 5, date: "22.05.2022", quantity: "1", total: 993.84 },
    { id: 6, date: "25.05.2022", quantity: "2", total: 7706.24 },
    { id: 7, date: "28.05.2022", quantity: "7", total: 6864 },
  ],
};

const TableRow: FC<any> = ({ content }) => {
  return (
    <tr className="border-b border-line transition-colors duration-200 ease-[var(--ease-out-soft)] motion-reduce:transition-none last:border-0 hover:bg-brand-50/40">
      <td className="py-3 pl-4 tabular-nums xl:pl-6">{content.date}</td>
      <td className="py-3 pl-4 font-medium tabular-nums xl:pl-6">{content.quantity} Products</td>
      <td className="py-3 pl-4 font-semibold tabular-nums text-ink xl:pl-6">{content.total} $</td>
    </tr>
  );
};

export default CanceledOrReturned;
