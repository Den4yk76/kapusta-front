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
  Legend,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

export default function ChartMobile({ data }) {
  console.log(data);

  return (
    <ResponsiveContainer className={s.chartbarMobile} width="100%" height={570}>
      <BarChart layout="vertical" data={data}>
        <Bar dataKey="amount" fill="#FFDAC0" barSize={15}></Bar>

        <Cell width={5} />
        <XAxis
          type="number"
          dataKey="amount"
          fontSize={10}
          tickFormatter={number => `${number} UAH`}
        />
        <YAxis
          dataKey="category"
          type="category"
          axisLine={false}
          tickLine={false}
          fontSize={10}
        />
        <Tooltip />
        <LabelList dataKey="category" />
        <CartesianGrid opacity={0.4} vertical={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}
