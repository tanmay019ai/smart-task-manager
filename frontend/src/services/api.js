import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchTasks = () => API.get("/tasks");

export const createTask = (taskData) =>
  API.post("/tasks", taskData);

export const completeTask = (id) =>
  API.patch(`/tasks/${id}/complete`);
export const removeTask = (id) =>
  API.delete(`/tasks/${id}`);