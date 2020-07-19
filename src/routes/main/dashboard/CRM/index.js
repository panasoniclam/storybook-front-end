import React from "react";
import {Card, Col, Row} from "antd";
import {Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip} from "recharts";

import Metrics from "components/Metrics";
import TaskList from "./TaskList";
import SiteVisit from "./SiteVisit";
import RecentActivity from "./RecentActivity";
import TicketList from "./TicketList";
import TaskByStatus from "./TaskByStatus";
import TicketByDepartment from "./TicketByDepartment";
import WelComeCard from "./WelComeCard";
import Overview from "./Overview";
import SiteAudience from "./SiteAudience";
import {totalRevenueData, totalSaleData} from "./data";


const CRM = () => {
  return (
    <Row>
      <Col span={24}>
        <Card >
          <Row>
            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
              <WelComeCard/>
            </Col>

            <Col xl={6} lg={12} md={12} sm={12} xs={24} className="gx-audi-col">
              <SiteAudience/>
            </Col>

            <Col xl={12} lg={24} md={24} sm={24} xs={24} className="gx-visit-col">
              <SiteVisit/>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col xl={8} lg={8} md={8} sm={24} xs={24}>
        <Metrics title="TOTOAL SALES" styleName="gx-card-eq-height">
          <Row>
            <Col xl={10} lg={24} md={10} sm={24} xs={24}>
              <h1 className="gx-mb-1 gx-font-weight-semi-bold gx-dash-h1">3792</h1>
              <p className="gx-mb-md-0 gx-text-light gx-fs-sm gx-font-weight-semi-bold">Orders this year</p>
            </Col>
            <Col xl={14} lg={24} md={14} sm={24} xs={24}>
              <ResponsiveContainer width="100%" height={50}>
                <LineChart data={totalSaleData}
                           margin={{top: 0, right: 3, left: 3, bottom: 0}}>
                  <Tooltip/>
                  <Line type="monotone" dataKey="pv" stroke="#FF7C89"/>
                </LineChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Metrics>
      </Col>
      <Col xl={8} lg={8} md={8} sm={24} xs={24}>
        <Metrics title="TOTAL REVENUE" styleName="gx-card-eq-height">
          <Row>
            <Col xl={11} lg={24} md={10} sm={24} xs={24}>
              <h1 className="gx-mb-1 gx-font-weight-semi-bold gx-dash-h1">$216,759</h1>
              <p className="gx-mb-md-0 gx-text-light gx-fs-sm gx-font-weight-semi-bold">YTD revenue</p>
            </Col>
            <Col xl={13} lg={24} md={14} sm={24} xs={24}>

              <ResponsiveContainer width="100%" height={50}>
                <BarChart data={totalRevenueData}
                          margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                  <Tooltip/>
                  <Bar dataKey="uv" fill="#ff6283"/>
                </BarChart>
              </ResponsiveContainer>
            </Col>
          </Row>
        </Metrics>
      </Col>
      <Col xl={8} lg={8} md={8} sm={24} xs={24}>
        <Metrics title="GROWTH" styleName="gx-card-eq-height">
          <Row>
            <Col xl={18} lg={24} md={18} sm={24} xs={24}>
              <h1 className="gx-mb-1 gx-font-weight-normal gx-dash-h1"><span
                className="gx-text-green gx-font-weight-semi-bold">+8.8% </span> <span
                className="gx-text-light gx-px-1">|</span> +$24,372</h1>
              <p className="gx-mb-md-0 gx-text-light gx-fs-sm gx-font-weight-semi-bold">Compare to past year</p>
            </Col>
            <Col xl={6} lg={24} md={6} sm={24} xs={24}>
              <i className="icon icon-growth gx-text-green gx-fs-xl" style={{fontSize: 36}}/>
            </Col>
          </Row>
        </Metrics>
      </Col>
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
        <TaskList/>
      </Col>
      <Col xl={12} lg={12} md={24} sm={24} xs={24}>
        <RecentActivity/>
      </Col>
      <Col xl={10} lg={24} md={24} sm={24} xs={24}>
        <TicketList/>
      </Col>
      <Col xl={6} lg={12} md={12} sm={24} xs={24}>
        <TaskByStatus/>
      </Col>
      <Col xl={8} lg={12} md={12} sm={24} xs={24}>
        <TicketByDepartment/>
      </Col>

      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        <Overview/>
      </Col>

    </Row>
  );
};

export default CRM;
