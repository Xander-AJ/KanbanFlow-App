import { v4 as uuidv4 } from "uuid";
import { Columns, TaskT } from "../types";
import db from "../db.json"; // Assuming db.json contains the task data

// Assuming db.json has a structure like this:
// {
//   "backlog": [...],
//   "pending": [...],
//   "todo": [...],
//   "doing": [...],
//   "done": [...]
// }

const mapTasks = (tasks: any[]): TaskT[] => {
    return tasks.map(task => {
        // Ensure that all properties of the task are in the desired order
        return {
            id: uuidv4(),
            title: task.title,
            description: task.description,
            priority: task.priority,
            deadline: task.deadline,
            image: task.image,
            alt: task.alt,
            tags: task.tags
        };
    });
};

export const Board: Columns = {
    backlog: {
        name: "Backlog",
        items: mapTasks(db.backlog)
    },
    pending: {
        name: "Pending",
        items: mapTasks(db.pending)
    },
    todo: {
        name: "To Do",
        items: mapTasks(db.todo)
    },
    doing: {
        name: "Doing",
        items: mapTasks(db.doing)
    },
    done: {
        name: "Done",
        items: mapTasks(db.done)
    }
};
