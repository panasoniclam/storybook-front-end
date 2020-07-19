import React from "react";
import {Col, Menu, Row} from "antd";

import TotalViews from "../Widgets/TotalViews";
import ReportChart from "./ReportChart";
import {ActiveTaskList, cardReadData, chatData, hotalData, NotificationListData} from "./data";
import TaskList from "./TaskList";
import CardReadMore from "./CardReadMore";
import ShopingCard from "./ShopingCard";
import CardMessageCall from "./CardMessageCall";
import CardProjectDetail from "./CardProjectDetail";
import CardChat from "./CardChat";
import CardFavourite from "./CardFavourite";
import ActiveTasks from "./ActiveTasks";
import Notifications from "./Notifications";
import CustomerList from "./CustomerList";
import EmailCampaign from "./EmailCampaign";
import Ecommerce from "./Ecommerce";
import TaskReader from "./TaskReader";
import Widget from "components/Widget/index";

const options = (
  <Menu>
    <Menu.Item key="1">Recent</Menu.Item>
    <Menu.Item key="2">Popular</Menu.Item>
  </Menu>
);

const SaaS = () => {
  return (
    <Row>
      <Col lg={24} md={24} sm={24} xs={24}>
        <ReportChart/>
      </Col>

      <Col lg={24} md={24} xs={24}>
        <TotalViews/>
      </Col>


      <Col xl={9} lg={24} md={24} sm={24} xs={24}>
        <TaskList/>
      </Col>

      <Col xl={8} lg={12} md={12} sm={12} xs={24}>
        <CardReadMore data={cardReadData}/>
      </Col>

      <Col xl={7} lg={12} md={12} sm={12} xs={24}>
        <ShopingCard/>
        <CardMessageCall/>
      </Col>

      <Col xl={8} lg={12} md={12} sm={12} xs={24}>
        <CardProjectDetail/>
      </Col>

      <Col xl={8} lg={12} md={12} sm={12} xs={24}>
        {hotalData.map((data, index) => <CardFavourite key={index} data={data}/>)}
      </Col>

      <Col xl={8} lg={12} md={12} sm={12} xs={24}>
        <Widget styleName="gx-card-eq-height">
          {chatData.map((data, index) => <CardChat key={index} data={data}/>)}
        </Widget>
      </Col>

      <Col xl={8} lg={12} md={12} sm={12} xs={24}>
        <Widget styleName="gx-card-eq-height">
          <h6 className="gx-text-center gx-text-uppercase">Email Campaign</h6>
          <EmailCampaign/>
        </Widget>
      </Col>

      <Col xl={8} lg={12} md={12} sm={12} xs={24}>
        <Ecommerce/>
      </Col>

      <Col xl={8} lg={12} md={12} sm={12} xs={24}>
        <TaskReader/>
      </Col>
      <Col xl={16} lg={24} xs={24}>
        <Widget styleName="gx-card-eq-height">
          <Notifications data={NotificationListData}/>
        </Widget>
      </Col>

      <Col xl={8} lg={24} xs={24}>
        <Widget styleName="gx-card-eq-height" title="Active Tasks">
          <div className="gx-act-task">
            {ActiveTaskList.map((data, index) => <ActiveTasks key={index} data={data}/>)}
          </div>
        </Widget>
      </Col>

      <Col lg={24} md={24} sm={24} xs={24}>
        <Widget styleName="gx-card-full">
          <CustomerList/>
        </Widget>
      </Col>
    </Row>
  );
};

export default SaaS;
