import React from "react";
import {Breadcrumb, Card, Icon} from "antd";

const WithIcon = ({onClick}) => {
  return (
    <Card className="gx-card" title="WithIcon">
      <Breadcrumb>
        <Breadcrumb.Item href="javascript:void(0);"  onClick={onClick}>
          <Icon type="home"/>
        </Breadcrumb.Item>
        <Breadcrumb.Item href="javascript:void(0);" onClick={onClick}>
          <Icon type="user"/>
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item  >
          Application
        </Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
};

export default WithIcon;
