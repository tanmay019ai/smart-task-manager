const cron = require("node-cron");
const Task = require("../models/Task");

const startReminderScheduler = () => {
  // runs every minute
  cron.schedule("* * * * *", async () => {
    try {
      const now = new Date();
      const reminderTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour ahead

      const tasks = await Task.find({
        status: "PENDING",
        reminderSent: false,
        dueDate: { $lte: reminderTime, $gt: now },
      });

      for (const task of tasks) {
        // 🔔 REMINDER ACTION
        console.log(
          `🔔 REMINDER: Task "${task.title}" is due at ${task.dueDate}`
        );

        task.reminderSent = true;
        await task.save();
      }
    } catch (err) {
      console.error("Reminder cron error:", err.message);
    }
  });

  console.log("🔔 Reminder scheduler started (1 min interval)");
};

module.exports = startReminderScheduler;
