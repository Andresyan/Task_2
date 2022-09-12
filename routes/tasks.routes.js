const express = require("express");
const { body, validationResult } = require("express-validator");

const {
  createTask,
  getAllTasks,
  getTaskByStatus,
  updateTask,
  deleteTask,
} = require("../controllers/tasks.controller");

const {
  taskExists,
  statusTaskExists,
} = require("../middlewares/tasks.middlewares");
const {
  createTaskValidators,
} = require("../middlewares/validators.middlewares");

const tasksRouter = express.Router();

tasksRouter.post("/", createTaskValidators, createTask);

tasksRouter.get("/", getAllTasks);

tasksRouter.get("/:status", statusTaskExists, getTaskByStatus);

tasksRouter.patch("/:id", taskExists, updateTask);

tasksRouter.delete("/:id", taskExists, deleteTask);

module.exports = { tasksRouter };
