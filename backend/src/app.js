const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const taskRoutes = require('./routes/task.routes');
const taskCron = require('./cron/taskCron');

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());

// health
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend connected successfully' });
});

// mount API routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// connect DB
connectDB();

// start cron jobs (safe guard)
try {
  taskCron.run();
} catch (err) {
  console.warn('Cron start failed:', err && err.message ? err.message : err);
}

module.exports = app;
