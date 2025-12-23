const Task = require('../models/Task');
const priorityService = require('../services/priority.service');

exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const user = req.userId;
    const newTask = new Task({ title, description, dueDate, user });
    newTask.priority = priorityService.determinePriority(newTask);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const user = req.userId;
    const tasks = await Task.find({ user }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (String(task.user) !== String(req.userId)) return res.status(403).json({ message: 'Forbidden' });
    Object.assign(task, updates);
    task.priority = priorityService.determinePriority(task);
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (String(task.user) !== String(req.userId)) return res.status(403).json({ message: 'Forbidden' });
    await task.remove();
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
