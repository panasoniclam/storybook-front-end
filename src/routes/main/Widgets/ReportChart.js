import React from "react";
import {Area, AreaChart, Legend, ResponsiveContainer} from "recharts";
import Widget from "components/Widget/index";

const data = [
  {name: 'Page A', uv: 2800, pv: 2700},
  {name: 'Page B', uv: 2200, pv: 2900},
  {name: 'Page C', uv: 3000, pv: 2400},
  {name: 'Page D', uv: 2080, pv: 3408},
  {name: 'Page H', uv: 2890, pv: 2960},
];

const ReportChart = () => {
  return (
    <Widget styleName="gx-card-full" title="Status Report">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}
                   margin={{top: 10, right: 0, left: 0, bottom: 0}}>
          <Legend verticalAlign="top" align="left" height={36} iconType="circle"/>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#FF6F8F" stopOpacity={0.99}/>
              <stop offset="95%" stopColor="#FF8D7C" stopOpacity={0.99}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="1" y2="0">
              <stop offset="5%" stopColor="#4D95F3" stopOpacity={0.9}/>
              <stop offset="95%" stopColor="#7F44F5" stopOpacity={0.9}/>
            </linearGradient>
          </defs>
          <Area type='monotone' dataKey='pv' stackId="2" stroke='#4D95F3' fill="url(#colorPv)" fillOpacity={1}/>
          <Area type='monotone' dataKey='uv' stackId="1" stroke='#FF6F8F' fill="url(#colorUv)" fillOpacity={1}/>
        </AreaChart>
      </ResponsiveContainer>
    </Widget>
  );
};

export default ReportChart;
