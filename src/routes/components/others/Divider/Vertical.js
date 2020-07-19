import React from "react";
import {Card, Divider} from "antd";

const Vertical = () => {
  return (
    <Card className="gx-card" title="Vertical">
      Text
      <Divider type="vertical"/>
      <a href="javascript:void(0);">Link</a>
      <Divider type="vertical"/>
      <a href="javascript:void(0);">Link</a>
    </Card>
  );
};

export default Vertical;
