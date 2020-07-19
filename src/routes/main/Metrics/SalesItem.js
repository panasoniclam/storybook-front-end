import React from "react";
import {Badge, Progress} from "antd";

const SalesItem = ({data}) => {
  const {number, headerText, bName, bNumber, percents, badgeColor} = data;
  return (
    <div className="gx-progress-task gx-mb-2">
      <div className="gx-progress-task-list">
        <Progress type="circle" percent={percents}/>
        <div className="gx-progress-task-content">
          <h3>{number}</h3>
          <p className="gx-text-light">{headerText}</p>
        </div>
      </div>
      <div className="gx-progress-task-list">
        <p className="gx-mb-0 gx-mr-3 gx-font-weight-medium">{bName}</p>
        <Badge count={bNumber} style={{backgroundColor: badgeColor}}/>
      </div>
    </div>
  );
};

export default SalesItem;
