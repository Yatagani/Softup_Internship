import React from "react";
import TaskItem from "./TaskItem";
import "./Tasks.css";

const Tasks = (props) => {

  let taskContent = <p>No tasks found</p>;

  if (props.items.length > 0) {
    taskContent = props.items.map((task) => (
      <TaskItem
        key={task.id}
        id={task.id}
        description={task.description}
        status={task.status}
        onRemove={props.onRemoveTask}
      />
    ));
  }

  return <div className="tasks">{taskContent}</div>;
};

export default Tasks;
