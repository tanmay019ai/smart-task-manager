const cron = require("node-cron");
const Task = require("../models/Task");

const startTaskScheduler = () => {
  // Runs every 5 minutes
  cron.schedule("*/5 * * * *", async () => {
    try {
      const now = new Date();

      const result = await Task.updateMany(
        {
          status: "PENDING",
          dueDate: { $lt: now },
        },
        {
          $set: { status: "OVERDUE" },
        }
      );

      if (result.modifiedCount > 0) {
        console.log(`⏰ ${result.modifiedCount} task(s) marked OVERDUE`);
      }
    } catch (error) {
      console.error("Cron error:", error.message);
    }
  });

  console.log("🕒 Task scheduler started (every 5 minutes)");
};

module.exports = startTaskScheduler;
