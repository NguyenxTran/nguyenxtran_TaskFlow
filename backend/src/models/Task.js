import mongoose from "mongoose";
// const mongoose = require('mongoose');

// const taskSchema = new mongoose.Schema(
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "complete"],
      default: "active",
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt automatically included
  }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;

// const Task = mongoose.model("Task", taskSchema);
// module.exports = Task;


