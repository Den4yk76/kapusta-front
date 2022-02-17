import React from 'react';
import s from '../BarChart/BarChart.module.css';
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

export default function Chart({ data }) {
  console.log(data);

  return (
    <ResponsiveContainer className={s.chartbar} width="100%" height={422}>
      <BarChart
        /* layout="vertical" */
        data={data}
        /* width={300}
        height={100}
        padding={15} */
      >
        <Bar
          dataKey="amount"
          fill="#FFDAC0"
          barSize={38}
          /* focusable="true"
          lightingColor="#1245f5" */
        ></Bar>

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
        <LabelList dataKey="category" /*  content={value} */ />
        <CartesianGrid opacity={0.4} vertical={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}
