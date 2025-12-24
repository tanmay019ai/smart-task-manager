import { useEffect, useState, useRef } from "react";
import Header from "../components/dashboard/Header";
import Stats from "../components/dashboard/Stats";
import TaskList from "../components/dashboard/TaskList";
import {
  fetchTasks,
  createTask,
  completeTask,
  removeTask,
} from "../services/api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const intervalRef = useRef(null);

  const loadTasks = async () => {
    try {
      const res = await fetchTasks();
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to load tasks", err);
    }
  };

  const addTask = async (task) => {
    try {
      await createTask(task);
      loadTasks();
    } catch (err) {
      console.error("Failed to create task", err);
    }
  };

  const markCompleted = async (id) => {
    try {
      await completeTask(id);
      loadTasks();
    } catch (err) {
      console.error("Failed to complete task", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await removeTask(id);
      loadTasks();
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  useEffect(() => {
    loadTasks();
    intervalRef.current = setInterval(loadTasks, 10000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <Stats tasks={tasks} />
        <TaskList
          tasks={tasks}
          addTask={addTask}
          markCompleted={markCompleted}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default Dashboard;
