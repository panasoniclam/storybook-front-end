import React from "react";
import {Badge, Card} from "antd";

const Basic = () => {
  return (
    <Card className="gx-card" title="Basic">
      <Badge count={5}>
        <a href="javascript:void(0);" className="head-example"/>
      </Badge>
      <Badge count={0} showZero>
        <a href="javascript:void(0);" className="head-example"/>
      </Badge>
    </Card>
  );
};

export default Basic;
