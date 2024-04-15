"use client"

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    vsit: 3000,
    click: 1398,
  },
  {
    name: 'Tue',
    vsit: 2000,
    click: 3800,
  },
  {
    name: 'Wed',
    vsit: 2780,
    click: 3908,
  },
  {
    name: 'Thu',
    vsit: 1890,
    click: 4800,
  },
  {
    name: 'Fri',
    vsit: 2390,
    click: 3800,
  },
  {
    name: 'Sat',
    vsit: 3490,
    click: 4300,
  },
];

const Chart = () => {
  return (
    <div className='h-[450px]'>
      <h2>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart