const express = require("express");
const { body, validationResult } = require("express-validator");

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/users.controller");

const { userExists } = require("../middlewares/users.middlewares");
const {
  createUserValidators,
} = require("../middlewares/validators.middlewares");

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);

usersRouter.post("/", createUserValidators, createUser);

usersRouter.patch("/:id", userExists, updateUser);

usersRouter.delete("/:id", userExists, deleteUser);

usersRouter.get("/:id", userExists, getUserById);

module.exports = { usersRouter };
