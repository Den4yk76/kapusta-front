import React from 'react';
import data from '../../data.json';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

/* const info = data; */

export default function Chart({ expenseData }) {
  console.log(expenseData);
  return (
    <ResponsiveContainer width={666} height={422}>
      <BarChart
        /* layout="vertical" */
        data={expenseData}
        width={300}
        height={100}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Bar
          dataKey="value"
          fill="#FFDAC0"
          /* focusable="true"
          lightingColor="#1245f5" */
        />

        <Cell width={5} />
        <XAxis dataKey="description" fontSize={12} />
        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickFormatter={number => `${number} UAH`}
          fontSize={12}
        />
        <Tooltip />
        <LabelList dataKey="description" /*  content={value} */ />
        <CartesianGrid opacity={0.4} vertical={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}
