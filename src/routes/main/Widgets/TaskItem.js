import React from "react";
import {Avatar, Divider} from "antd";

const TaskItem = ({data}) => {
  const {title, priority, pColor, image, userName, time} = data;
  return (
    <div className="gx-task-list">
      <Divider/>
      <div className="ant-row-flex ant-row-flex-space-between">
        <div className="gx-task-list-item-left">
          <h4>{title}</h4>
        </div>
        <div className="gx-task-list-item-right gx-text-light">
          <ul className="gx-list-inline-lg">
            <li><i className="icon icon-edit"/></li>
            <li><i className="icon icon-trash"/></li>
          </ul>
        </div>
      </div>
      <div className="gx-task-list-item ant-row-flex ant-row-flex-space-between">
        <div className="gx-task-list-item-left">
          <Avatar className="gx-mr-2" size="small" src={image}/>
          {userName}
          <p className={`gx-pt-2 gx-fs-sm gx-mb-0 gx-text-${pColor}`}>
            <i className="icon icon-circle gx-fs-xs gx-mr-1"/> {priority}</p>
        </div>
        <div className="gx-task-list-item-right gx-text-light gx-fs-sm gx-pt-1">
          {time}
        </div>
      </div>

    </div>
  );
};

export default TaskItem;
