const Task = require("../models/Task");

// ================= CREATE TASK =================
const createTask = async (req, res) => {
  try {
    const { title, priority, dueDate } = req.body;

    if (!title || !priority || !dueDate) {
      return res.status(400).json({
        message: "Title, priority and due date are required",
      });
    }

    const task = await Task.create({
      title,
      priority,
      dueDate: new Date(dueDate),
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("CREATE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ================= GET TASKS =================
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    console.error("GET TASKS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ================= UPDATE TASK =================
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, priority, dueDate } = req.body;

    const task = await Task.findByIdAndUpdate(
      id,
      {
        title,
        priority,
        dueDate: new Date(dueDate),
      },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    console.error("UPDATE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ================= DELETE TASK =================
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("DELETE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ================= COMPLETE TASK =================
const completeTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndUpdate(
      id,
      { status: "COMPLETED" },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    console.error("COMPLETE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ================= EXPORTS =================
module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  completeTask,
};
