import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();
import {v4 as uuid} from "uuid";

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "first task",
      description: "some task",
    },
  ]);

  const createTask = (title, description) => {
    setTasks([...tasks, { title, description, id: uuid() }]);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>{children}</TaskContext.Provider>
  );
};
