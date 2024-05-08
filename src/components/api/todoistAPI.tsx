import { Project, Task, TodoistApi } from "@doist/todoist-api-typescript";
import React, { useEffect } from "react";

const api = new TodoistApi(process.env.REACT_APP_TODOIST_API_KEY || "");

const TodoistComponent: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Create a new project (board)
        const newProject: Project = await api.addProject({
          name: "",
        });

        // Add tasks to the board
        const task1: Task = await api.addTask({
          content: "",
          dueString: "",
          dueLang: "en",
          priority: 5,
        });

        const task2: Task = await api.addTask({
          content: "",
          dueString: "",
          dueLang: "en",
          priority: 2,
        });

        console.log("New Board Created:", newProject);
        console.log("Tasks Added:", task1, task2);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return <div>Todoist Component</div>;
};

export default TodoistComponent;
