import React from "react";
import {Badge, Card} from "antd";

const Basic = ({count}) => {
  return (
    <Card className="gx-card" title="Basic">
      <Badge count={count } >
        <a href="javascript:void(0);" className="head-example"/>
      </Badge>
      <br/>
        <Badge count={0} showZero>
        <a href="javascript:void(0);" className="head-example"/>
      </Badge>    
    </Card>
  );
};

export default Basic;
