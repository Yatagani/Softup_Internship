import React, { useState } from "react";
import Tasks from "./Components/Tasks";
import TaskForm from "./Components/TaskForm";

const DUMMY_TASKS = [
  {
    id: "id_1",
    description: "First Task",
    status: false,
  },
  {
    id: "id_2",
    description: "Second Task",
    status: true,
  },
  {
    id: "id_3",
    description: "Third Task",
    status: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const saveTaskDataHandler = (enteredTaskData) => {
    const taskData__ = {
      ...enteredTaskData,
      id: Math.random().toString(),
      status: false,
    };

    console.log(taskData__);
    setTasks((prevTasks) => {
      return [taskData__, ...prevTasks];
    });
  };

  const removeTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}> Todo List</h2>
      <TaskForm onSaveTaskData={saveTaskDataHandler} />
      <Tasks items={tasks} onRemoveTask={removeTaskHandler} />
    </div>
  );
};

export default App;
