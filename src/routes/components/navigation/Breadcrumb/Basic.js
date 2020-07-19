import React from "react";
import {Breadcrumb, Card} from "antd";

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item><a href="javascript:void(0);">Application Center</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href="javascript:void(0);">Application List</a></Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
};

export default Basic;
