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

export default function Chart() {
  return (
    <ResponsiveContainer className={s.chartbar} width={666} height={422}>
      <BarChart
        /* layout="vertical" */
        data={data}
        width={300}
        height={100}
        padding={15}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Bar
          dataKey="sum"
          fill={['#FFDAC0' '#000' '#fff']}
          /* focusable="true"
          lightingColor="#1245f5" */
        >
          {data.map((entry, index) => (
            <Cell fill={entry.years === 'Current' ? '#290a0a' : '#005599'} />
          ))}
        </Bar>

        <Cell width={5} />
        <XAxis dataKey="description" fontSize={12} />
        <YAxis
          dataKey="sum"
          axisLine={false}
          tickLine={false}
          tickFormatter={number => `${number} UAH`}
          fontSize={10}
        />
        <Tooltip />
        <LabelList dataKey="description" /*  content={value} */ />
        <CartesianGrid opacity={0.4} vertical={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}
