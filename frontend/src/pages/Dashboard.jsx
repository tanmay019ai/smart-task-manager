import { useState } from "react";
import Header from "../components/dashboard/Header";
import Stats from "../components/dashboard/Stats";
import TaskList from "../components/dashboard/TaskList";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish frontend UI",
      priority: "HIGH",
      status: "PENDING",
    },
  ]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        <Stats tasks={tasks} />
        <TaskList
          tasks={tasks}
          addTask={addTask}
          updateTaskStatus={updateTaskStatus}
        />
      </div>
    </div>
  );
};

export default Dashboard;
