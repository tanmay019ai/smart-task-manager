const express = require("express");
const {
  createTask,
  getTasks,
  completeTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.controller");

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.patch("/:id/complete", completeTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
