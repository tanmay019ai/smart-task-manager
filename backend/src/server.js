require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");
const startTaskScheduler = require("./cron/taskScheduler");
const startReminderScheduler = require("./cron/reminderScheduler");

connectDB();
startTaskScheduler();
startReminderScheduler(); // 👈 ADD THIS

connectDB();
startTaskScheduler(); // 👈 now it exists

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});