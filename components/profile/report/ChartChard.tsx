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

const SERIES = "#1F8B92";
const GRID = "#E3EBEE";

const CustomTooltip: FC<any> = ({ active, label, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-card bg-surface px-3 py-2 text-sm shadow-pop"
        style={{ border: `1px solid ${GRID}` }}
      >
        <p className="pb-0.5 font-display font-bold text-ink">{label}</p>
        <p className="text-xs leading-snug text-ink-muted">Total Sales Amount</p>
        <p className="text-base font-bold leading-tight tabular-nums text-brand-600">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const tooltipContentStyle = {
  background: "#FFFFFF",
  borderRadius: "14px",
  border: `1px solid ${GRID}`,
  boxShadow: "0 10px 24px rgba(22,35,43,0.14)",
  padding: "10px 14px",
};

const ChartChard: FC<any> = ({ data }) => {
  const dataMax =
    data.length > 0 ? Math.max(...data.map((el: any) => el["Total Sales Amount"] ?? 0)) : 0;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 16, left: 0, bottom: 4 }}>
        <CartesianGrid strokeDasharray="2" horizontal={true} vertical={false} stroke={GRID} />
        <XAxis
          dataKey="name"
          interval="preserveStartEnd"
          tickFormatter={(value: string) => value.replace(".2022", "")}
          tick={{ fill: "#8FA0AA", fontSize: 12 }}
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
          tick={{ fill: "#8FA0AA", fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          tickMargin={4}
        />
        <Tooltip content={<CustomTooltip />} contentStyle={tooltipContentStyle} cursor={{ stroke: GRID }} />
        <Line
          type="monotone"
          dataKey="Total Sales Amount"
          stroke={SERIES}
          strokeWidth={2}
          dot={{ r: 3, fill: SERIES, strokeWidth: 0 }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartChard;
