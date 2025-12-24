const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    reminderSent: {
  type: Boolean,
  default: false,
},

    priority: {
      type: String,
      enum: ["HIGH", "MEDIUM", "LOW"],
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "COMPLETED", "OVERDUE"],
      default: "PENDING",
    },

    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt & updatedAt
  }
);

module.exports = mongoose.model("Task", taskSchema);
