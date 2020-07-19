import React from "react";
import {Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";
import Metrics from "components/Metrics";

const data = [
  {name: 'Page A', pv: 600, amt: 2400},
  {name: 'Page B', pv: 3398, amt: 2210},
  {name: 'Page C', pv: 1200, amt: 2290},
  {name: 'Page D', pv: 4908, amt: 2000},
  {name: 'Page D', pv: 2908, amt: 2000},
];

const CardChart = () => {

  return (
    <Metrics styleName="gx-card-eq-height gx-text-center">
      <h2>$52,837</h2>
      <p className="gx-text-light">Total Sales</p>
      <ResponsiveContainer width="100%" height={40}>
        <LineChart data={data}
                   margin={{top: 5, right: 5, left: 5, bottom: 5}}>
          <Tooltip/>
          <Line type="monotone" dataKey="pv" stroke="#FF7C89"/>
        </LineChart>
      </ResponsiveContainer>
    </Metrics>
  );
};

export default CardChart;
