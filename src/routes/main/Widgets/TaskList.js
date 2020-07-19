import React from "react";
import {Card} from "antd";

import TaskItem from "./TaskItem";
import {taskData} from "./data";

const TaskList = () => {
  return (
    <Card className="gx-card-eq-height">
      <h1 className="gx-text-center">Task List</h1>
      {taskData.map((data, index) => <TaskItem key={index} data={data}/>)}
    </Card>
  );
};

export default TaskList;
