import React, { FC } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import useMediaQuery from "../../../helpers/hooks/useMediaQuery";

const CustomizedXAxisTick: FC<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={-5}
        y={5}
        dy={0}
        textAnchor="end"
        transform="rotate(-90)"
        className="fill-[#7E8096] text-sm tracking-wide"
      >
        {payload.value.replace("2022", "22")}
      </text>
    </g>
  );
};
const CustomizedYAxisTick: FC<any> = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-5} y={-10} dy={16} textAnchor="end" className="fill-[#7E8096] text-sm tracking-wide">
        {payload.value}
      </text>
    </g>
  );
};

const CustomTooltip: FC<any> = ({ active, label, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#7E8096] rounded-xl text-white p-2 text-sm relative">
        <div className="absolute w-full h-full"></div>
        <p className="relative pb-0.5 text-sm font- bold">
          {label} <span className="absolute bottom-0 left-0 w-5 h-[2px] bg-white"></span>
        </p>
        <p className="text-sm leading-snug">Total Sales Amount</p>
        <p className="text-base font-bold leading-tight">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const ChartChard: FC<any> = ({ data, strokeColor }) => {
  const mobile = !useMediaQuery("(min-width: 768)");
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={mobile ? 1.3 : 2}>
      <LineChart
        data={data}
        className="font-medium text-[#7E8096]"
        margin={{
          top: 5,
          right: 10,
          left: 5,
          bottom: 85,
        }}
      >
        <CartesianGrid strokeDasharray="2" horizontal={true} />
        <XAxis tickSize={5} ticks={data.map((el: any) => el.name)} dataKey="name" tick={<CustomizedXAxisTick />} />
        <YAxis tickCount={9} type="number" tick={<CustomizedYAxisTick />} />
        <Tooltip content={<CustomTooltip />} />
        <Line type="monotone" dataKey="Total Sales Amount" stroke={strokeColor} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartChard;
