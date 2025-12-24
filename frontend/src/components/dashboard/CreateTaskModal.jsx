import { useState } from "react";

const CreateTaskModal = ({ onClose, addTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
const [dueDate, setDueDate] = useState("");
const handleCreate = async () => {
  if (!title || !dueDate) return;

  await addTask({
    title,
    priority,
    dueDate, // 👈 SEND TO BACKEND
  });

  onClose();
};


  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
          Create Task
        </h2>

        <div className="space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Title"
            className="w-full px-4 py-2 rounded-lg
            bg-slate-100 dark:bg-slate-700
            text-slate-900 dark:text-white"
          />
          <input
  type="datetime-local"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
  className="w-full px-4 py-2 rounded-lg
  bg-slate-100 dark:bg-slate-700
  text-slate-900 dark:text-white"
/>


          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 rounded-lg
            bg-slate-100 dark:bg-slate-700
            text-slate-900 dark:text-white"
          >
            <option>HIGH</option>
            <option>MEDIUM</option>
            <option>LOW</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-300 dark:bg-slate-600 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-green-500 text-black rounded-lg font-semibold"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
