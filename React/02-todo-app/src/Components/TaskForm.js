import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [isValid, setIsValid] = useState(true);

  const taskChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent page reload, which is set by default when using Forms in browser
    if (enteredTask.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const taskData = {
      description: enteredTask,
    };

    // console.log(taskData);
    props.onSaveTaskData(taskData);
    setEnteredTask("");
  };

  return (
    <div className="task-form">
      <form onSubmit={submitHandler}>
        <div>
          <label>Add Todo</label>
          <input
            type="text"
            placeholder="Add new todo"
            value={enteredTask}
            onChange={taskChangeHandler}
            style={{
              borderColor: !isValid ? 'red' : '#ccc',
              background: !isValid ? 'salmon' : 'transparent'
            }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
