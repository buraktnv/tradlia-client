import React, { FC } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

/** 7706 → "7.7K", 123456 → "123.5K" — keeps long numbers inside the Y axis band. */
const abbreviateTick = (value: number): string => {
  if (value >= 1000) {
    const thousands = value / 1000;
    return `${thousands % 1 === 0 ? thousands : thousands.toFixed(1)}K`;
  }
  return String(value);
};

const CustomTooltip: FC<any> = ({ active, label, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative rounded-xl bg-[#7E8096] p-2 text-sm text-white">
        <p className="relative pb-0.5 text-sm font-bold">
          {label} <span className="absolute bottom-0 left-0 h-[2px] w-5 bg-white"></span>
        </p>
        <p className="text-sm leading-snug">Total Sales Amount</p>
        <p className="text-base font-bold leading-tight">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const ChartChard: FC<any> = ({ data, strokeColor }) => {
  const dataMax =
    data.length > 0 ? Math.max(...data.map((el: any) => el["Total Sales Amount"] ?? 0)) : 0;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="2" horizontal={true} vertical={false} stroke="#E5E7EB" />
        <XAxis
          dataKey="name"
          interval="preserveStartEnd"
          tickFormatter={(value: string) => value.replace(".2022", "")}
          tick={{ fill: "#7E8096", fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis
          type="number"
          width={64}
          domain={[0, dataMax * 1.1]}
          tickCount={6}
          tickFormatter={abbreviateTick}
          tick={{ fill: "#7E8096", fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="Total Sales Amount"
          stroke={strokeColor}
          strokeWidth={2}
          dot={{ r: 3, fill: strokeColor, strokeWidth: 0 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartChard;
