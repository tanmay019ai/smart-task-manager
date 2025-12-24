import { useState } from "react";
import TaskCard from "./TaskCard";
import CreateTaskModal from "./CreateTaskModal";

const TaskList = ({ tasks, addTask, updateTaskStatus }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
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

      <div className="grid gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            updateTaskStatus={updateTaskStatus}
          />
        ))}
      </div>

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
