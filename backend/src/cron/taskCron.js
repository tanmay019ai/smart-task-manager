const cron = require('node-cron');
const connectDB = require('../config/db');
const Task = require('../models/Task');
const priorityService = require('../services/priority.service');

// Run hourly: refresh priorities and log tasks due soon
const run = () => {
  connectDB().then(() => {
    cron.schedule('0 * * * *', async () => {
      try {
        const tasks = await Task.find({ completed: false });
        for (const t of tasks) {
          const newPriority = priorityService.determinePriority(t);
          if (t.priority !== newPriority) {
            t.priority = newPriority;
            await t.save();
          }
        }
        const soon = await Task.find({ dueDate: { $lte: new Date(Date.now() + 24 * 60 * 60 * 1000) }, completed: false });
        if (soon.length) console.log(`Tasks due within 24h: ${soon.length}`);
      } catch (err) {
        console.error('Cron job error', err);
      }
    });
  }).catch(err => console.error('Cron DB connect failed', err));
};

module.exports = { run };
