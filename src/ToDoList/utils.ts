import { TaskType } from "./Task";
const STORAGE_NAME = "todoApp";

export const getTasksFromStorage = () => {
  const data = localStorage.getItem(STORAGE_NAME);
  try {
    const parsedTasks = data ? (JSON.parse(data) as TaskType[]) : [];
    return parsedTasks;
  } catch {
    return [];
  }
};

export const saveToStorage = <T>(payload: T) => {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(payload));
};
