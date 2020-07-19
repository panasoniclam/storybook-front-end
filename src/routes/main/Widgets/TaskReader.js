import React from "react";
import {Avatar, Card, Col, Progress, Row} from "antd";
import Widget from "components/Widget/index";

const TaskReader = () => {
  return (
    <Widget styleName="gx-text-center gx-card-eq-height">
    <Avatar className="gx-size-100 gx-mb-3" src='http://via.placeholder.com/150x150'/>

      <h4>Christina Johnson</h4>
      <p>@christnajjohn</p>
      <Progress className="gx-mb-5" percent={70} status="active"/>
      <Row>
        <Col span={12}>
          <h3>177</h3>
          <p>Tasks Completed</p>
        </Col>
        <Col span={12}>
          <h3>236</h3>
          <p>Tasks Assigned</p>
        </Col>
      </Row>
    </Widget>
  );
};

export default TaskReader;
