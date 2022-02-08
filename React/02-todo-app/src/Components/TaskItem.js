import React, { useState } from "react";
import "./TaskItem.css";

const TaskItem = (props) => {
  const [isDone, setIsDone] = useState(props.status);
  // const [deletedTask, setDeletedTask] = useState("");

  const isDoneHandler = () => {
    console.log("Props.status", props.status);
    console.log("isDone", isDone);

    if (isDone) {
      setIsDone(false);
    } else {
      setIsDone(true);
    }
  };

  const removeHandler = () => {
    console.log("Delete button clicked!");
    console.log("Id of deleted task", props.id)
    props.onRemove(props.id)
  };

  return (
    <div className="task-item">
      {console.log("rendered again")}
      <div style={{ textDecoration: isDone ? "line-through" : "" }}>
        {props.description}
      </div>
      <div>
        <button className="button-done" onClick={isDoneHandler}>
          V
        </button>
        <button className="button-remove" onClick={removeHandler}>
          X
          {/* {props.children} */}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
