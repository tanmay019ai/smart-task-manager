import React from 'react';

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <div className="border rounded p-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">{task.title}</h3>
        <span className={`px-2 py-1 rounded text-sm ${task.priority === 'high' ? 'bg-red-200' : task.priority === 'medium' ? 'bg-yellow-200' : 'bg-green-200'}`}>
          {task.priority}
        </span>
      </div>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="mt-2 flex gap-2">
        <button className="text-blue-600" onClick={() => onEdit(task)}>Edit</button>
        <button className="text-red-600" onClick={() => onDelete(task)}>Delete</button>
      </div>
    </div>
  );
}
