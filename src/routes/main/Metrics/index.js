import React from "react";
import {Col, Row} from "antd";
import Metrics from "components/Metrics";

import {circleData, datas} from "./data";
import SalesItem from "./SalesItem";
import CardChart from "./CardChart";
import TotalSales from "./TotalSales";


const Metric = () => {
  return (
    <Row>

      <Col lg={24} md={24} sm={24} xs={24}>
        <Metrics title="Total Sales & Tasks">
          <Row>
            {circleData.map((data, index) => <Col key={index} md={8} sm={12} xs={24}> <SalesItem data={data}/>
            </Col>)}
          </Row>
        </Metrics>
      </Col>

      <Col lg={8} md={12} sm={12} xs={24}>
        <CardChart/>
      </Col>
      {datas.map((data, index) =>
        <Col lg={8} md={12} sm={12} xs={24} key={index}>
          <TotalSales data={data}/>
        </Col>
      )}
    </Row>
  );
};

export default Metric;
