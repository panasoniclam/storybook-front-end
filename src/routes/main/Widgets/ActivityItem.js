import React from "react";
import {Avatar} from "antd";

const ActivityItem = ({data}) => {
  const {avatar, title, time} = data;
  return (
    <div className="gx-task-list">
      <Avatar src={avatar} alt=""/>

    </div>
  );
};

export default ActivityItem;
