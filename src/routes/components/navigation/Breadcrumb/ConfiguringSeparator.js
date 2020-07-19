import React from "react";
import {Breadcrumb, Card} from "antd";

const ConfiguringSeparator = () => {
    return (
      <Card className="gx-card" title="Separator">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="javascript:void(0);">Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="javascript:void(0);">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Card>
    );
  }
;

export default ConfiguringSeparator;
