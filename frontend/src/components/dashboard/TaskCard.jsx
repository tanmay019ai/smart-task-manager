const priorityColor = {
  HIGH: "bg-red-500",
  MEDIUM: "bg-yellow-400",
  LOW: "bg-green-500",
};

const statusStyle = {
  PENDING: "text-blue-500",
  COMPLETED: "text-green-500",
  OVERDUE: "text-red-500",
};

const TaskCard = ({ task, updateTaskStatus }) => {
  return (
    <div
      className={`p-5 rounded-xl shadow flex justify-between items-center
      bg-white dark:bg-slate-800
      ${task.status === "OVERDUE" ? "border-2 border-red-500" : ""}`}
    >
      <div>
        <h3
          className={`font-semibold
          ${task.status === "COMPLETED"
            ? "line-through text-slate-400"
            : "text-slate-900 dark:text-white"}`}
        >
          {task.title}
        </h3>

        <p className={`text-sm ${statusStyle[task.status]}`}>
          {task.status}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={`px-3 py-1 rounded-full text-black text-sm font-medium
          ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>

        {task.status === "PENDING" && (
          <button
            onClick={() => updateTaskStatus(task.id, "COMPLETED")}
            className="px-3 py-1 rounded-lg bg-green-500 text-black text-sm"
          >
            ✓ Done
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
