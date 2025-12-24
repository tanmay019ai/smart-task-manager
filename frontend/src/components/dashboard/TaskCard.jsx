import { formatDate, timeRemaining } from "../../util/date.js";

const TaskCard = ({ task, markCompleted, deleteTask }) => {
  return (
    <div
      className={`p-5 rounded-xl shadow bg-white dark:bg-slate-800
      flex justify-between items-start
      ${
        task.status === "OVERDUE"
          ? "border-2 border-red-500 bg-red-50 dark:bg-red-900/20"
          : ""
      }`}
    >
      {/* LEFT */}
      <div className="space-y-1">
        <h3
          className={`font-semibold text-lg
          ${
            task.status === "COMPLETED"
              ? "line-through text-slate-400"
              : "text-slate-900 dark:text-white"
          }`}
        >
          {task.title}
        </h3>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Due:{" "}
          <span className="font-medium">
            {formatDate(task.dueDate)}
          </span>
        </p>

        <p
          className={`text-sm font-semibold
          ${
            task.status === "OVERDUE"
              ? "text-red-600"
              : task.status === "COMPLETED"
              ? "text-green-500"
              : "text-blue-500"
          }`}
        >
          {task.status} • {timeRemaining(task.dueDate)}
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end gap-2">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-200 dark:bg-slate-700">
          {task.priority}
        </span>

        {/* ACTION BUTTONS */}
        <div className="flex gap-2">
          {task.status === "PENDING" && (
            <button
              onClick={() => markCompleted(task._id)}
              className="px-3 py-1 rounded-lg bg-green-500 text-black text-sm"
            >
              ✓ Done
            </button>
          )}

          <button
            onClick={() => {
              if (window.confirm("Delete this task permanently?")) {
                deleteTask(task._id);
              }
            }}
            className="px-3 py-1 rounded-lg bg-red-500 text-white text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
