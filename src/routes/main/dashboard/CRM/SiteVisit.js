import React from "react";
import {Area, AreaChart, ResponsiveContainer, Tooltip} from "recharts";
import {siteVisit} from "./data";

const SiteVisit = () => (
  <div className="gx-site-dash gx-pr-lg-5">
    <h6 className="gx-text-uppercase gx-mb-2 gx-mb-lg-4">Site Visit</h6>
    <ResponsiveContainer width="100%" height={140}>
      <AreaChart data={siteVisit}
                 margin={{top: 10, right: 0, left: -20, bottom: 0}}>
        <Tooltip/>
        <Area type='monotone' dataKey='uv' stroke='#4b9af3' fill='#4b9af3'/>
        <Area type='monotone' dataKey='pv' stroke='#ff9800' fill='#ff9800'/>
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default SiteVisit;

