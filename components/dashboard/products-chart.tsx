'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type ChartData = {
  week: string;
  products: number;
};

export default function ProductsChart({ data }: { data: ChartData[] }) {
  return (
    <div className='h-48 w-full'>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          responsive
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' stroke='#555' />
          <XAxis
            dataKey='week'
            stroke='#777'
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke='#777'
            fontSize={12}
            tickLine={false}
            axisLine={false}
            allowDecimals={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid #555',
              borderRadius: '8px',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
              fontSize: '13px',
            }} 
          />
          <Area
            type='monotone'
            dataKey='products'
            stroke='#8884d8'
            strokeWidth={2}
            fill='#8884d8'
            // dot={{ fill: '#8884d8', stroke: '#8884d8', strokeWidth: 1 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
