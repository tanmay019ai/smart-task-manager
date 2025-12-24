import { useState } from "react";
import TaskCard from "./TaskCard";
import CreateTaskModal from "./CreateTaskModal";

const filters = ["ALL", "PENDING", "COMPLETED", "OVERDUE"];

const TaskList = ({ tasks, addTask, markCompleted, deleteTask }) => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [open, setOpen] = useState(false);

  const filteredTasks =
    activeFilter === "ALL"
      ? tasks
      : tasks.filter((task) => task.status === activeFilter);

  return (
    <div className="space-y-4">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Tasks
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold"
        >
          + Create Task
        </button>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-1 rounded-full text-sm font-medium
              ${
                activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* TASK LIST */}
      <div className="grid gap-4">
        {filteredTasks.length === 0 ? (
          <p className="text-slate-500 dark:text-slate-400">
            No tasks found.
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              markCompleted={markCompleted}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>

      {/* CREATE MODAL */}
      {open && (
        <CreateTaskModal
          onClose={() => setOpen(false)}
          addTask={addTask}
        />
      )}
    </div>
  );
};

export default TaskList;
