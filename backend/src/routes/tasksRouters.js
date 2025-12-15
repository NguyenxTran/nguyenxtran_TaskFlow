import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/tasksControllers.js";

// const express = require('express');           
// const router = express.Router();
// const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/tasksControllers');

const router = express.Router();

router.get("/", getAllTasks);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
// module.exports = router;

