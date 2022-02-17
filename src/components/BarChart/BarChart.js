import React from 'react';
import s from '../BarChart/BarChart.module.css';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

export default function Chart({ data }) {
  console.log(data);

  return (
    <ResponsiveContainer className={s.chartbar} width="100%" height={422}>
      <BarChart data={data}>
        <Bar dataKey="amount" fill="#FFDAC0" barSize={38}></Bar>

        <Cell width={5} />
        <XAxis dataKey="category" type="category" fontSize={10} />
        <YAxis
          dataKey="amount"
          type="number"
          axisLine={false}
          tickLine={false}
          tickFormatter={number => `${number} UAH`}
          fontSize={10}
        />
        <Tooltip cursor={{ fill: '#FF751D', opacity: 0.7 }} />
        <LabelList dataKey="category" />
        <CartesianGrid opacity={0.4} vertical={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}
