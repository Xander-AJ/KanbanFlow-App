import { TodoistApi, Project, Item } from "@doist/todoist-api-typescript";
import React, { useEffect } from "react";

const api = new TodoistApi(process.env.REACT_APP_TODOIST_API_KEY || "");

const TodoistComponent: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Create a new project (board)
        const newProject: Project = await api.projects.add({
          name: "My New Board",
          color: 5,
        });

        // Add tasks to the board
        const task1: Item = await api.items.add({
          content: "Task 1",
          project_id: newProject.id,
        });
        const task2: Item = await api.items.add({
          content: "Task 2",
          project_id: newProject.id,
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
