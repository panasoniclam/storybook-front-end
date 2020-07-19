import React from "react";
import {Button, Checkbox} from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}


const ActiveTasks = ({data}) => {
  const {taskName, dueDate} = data;
  return (
    <div className="gx-act-task-cell">
      <div className="gx-act-task-content"><Checkbox onChange={onChange}>{taskName}</Checkbox></div>
      <div className="gx-act-task-btn-view">
        <Button size="small" className="gx-btn-light">{dueDate}</Button>
      </div>
    </div>
  );
};

export default ActiveTasks;
