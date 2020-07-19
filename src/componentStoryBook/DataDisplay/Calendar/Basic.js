import React from "react";
import {Calendar, Card} from "antd";

const Basic = () => {
  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return (
    <Card title="gx-card Basic">
      <Calendar className="gx-com-calendar" onPanelChange={onPanelChange}/>
    </Card>
  );
};

export default Basic;
