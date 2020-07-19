import React from "react";
import {Badge, Card} from "antd";

const Clickable = () => {
  return (
    <Card className="gx-card" title="Clickable">
      <a href="javascript:void(0);">
        <Badge count={5}>
          <span className="head-example"/>
        </Badge>
      </a>
    </Card>
  );
};

export default Clickable;
