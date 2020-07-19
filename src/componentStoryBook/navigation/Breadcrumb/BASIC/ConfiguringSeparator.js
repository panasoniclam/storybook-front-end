import React from "react";
import {Breadcrumb, Card} from "antd";

const ConfiguringSeparator = ({onClick}) => {
    return (
      <Card className="gx-card" title="Separator">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="javascript:void(0);" onClick={onClick}>Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="javascript:void(0);" onClick={onClick}>Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Card>
    );
  }
;

export default ConfiguringSeparator;
