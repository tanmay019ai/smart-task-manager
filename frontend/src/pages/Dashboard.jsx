import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';
import TaskCard from '../components/task/TaskCard';
import CreateTaskModal from '../components/task/CreateTaskModal';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const res = await getTasks();
    setTasks(res || []);
  };

  useEffect(()=>{ load(); }, []);

  const handleSave = async (data) => {
    if (data._id) {
      await updateTask(data._id, data);
    } else {
      await createTask(data);
    }
    setShowModal(false);
    setEditing(null);
    load();
  };

  const handleDelete = async (task) => {
    if (!confirm('Delete task?')) return;
    await deleteTask(task._id);
    load();
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={()=>setShowModal(true)}>New Task</button>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {tasks.map(t => (
          <TaskCard key={t._id} task={t} onEdit={(task)=>{setEditing(task); setShowModal(true)}} onDelete={handleDelete} />
        ))}
      </div>
      {showModal && <CreateTaskModal initial={editing||{}} onSave={handleSave} onClose={()=>{setShowModal(false); setEditing(null);}} />}
    </div>
  );
}
