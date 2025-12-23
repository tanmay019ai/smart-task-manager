import React, { useState } from 'react';

export default function CreateTaskModal({ initial = {}, onSave, onClose }) {
  const [title, setTitle] = useState(initial.title || '');
  const [description, setDescription] = useState(initial.description || '');
  const [dueDate, setDueDate] = useState(initial.dueDate ? initial.dueDate.split('T')[0] : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...initial, title, description, dueDate });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-96">
        <h3 className="font-bold mb-2">{initial._id ? 'Edit Task' : 'Create Task'}</h3>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input className="border px-2 py-1 w-full" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
          <textarea className="border px-2 py-1 w-full" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
          <input type="date" className="border px-2 py-1 w-full" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} />
          <div className="flex justify-end gap-2">
            <button type="button" className="px-3 py-1" onClick={onClose}>Cancel</button>
            <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
