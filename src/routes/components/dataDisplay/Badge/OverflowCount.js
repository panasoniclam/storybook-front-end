import React from "react";
import {Badge, Card} from "antd";

const OverflowCount = () => {
  return (
    <Card className="gx-card" title="Overflow Count">
      <Badge className="gx-mt-3" count={99}>
        <a href="javascript:void(0);" className="head-example"/>
      </Badge>
      <Badge className="gx-mt-3" count={100}>
        <a href="javascript:void(0);" className="head-example"/>
      </Badge>
      <Badge className="gx-mt-3" count={99} overflowCount={10}>
        <a href="javascript:void(0);" className="head-example"/>
      </Badge>
      <Badge className="gx-mt-3" count={1000} overflowCount={999}>
        <a href="javascript:void(0);" className="head-example"/>
      </Badge>
    </Card>
  );
};

export default OverflowCount;
