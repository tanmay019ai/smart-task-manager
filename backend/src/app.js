const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/tasks.routes");

const app = express();

// ✅ PROPER CORS CONFIG
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ROUTES
app.use("/api/tasks", taskRoutes);

// HEALTH CHECK
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend OK" });
});

module.exports = app;
