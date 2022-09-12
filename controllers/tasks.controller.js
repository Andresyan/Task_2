const { Task } = require("../models/task.model");
const { User } = require("../models/user.model");

const createTask = async (req, res) => {
  try {
    const { title, userId, startDate, limitDate } = req.body;

    const newTask = await Task.create({ title, userId, startDate, limitDate });

    res.status(201).json({
      status: "success",
      data: { newTask },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: [{ model: User, attributes: ["id", "name", "email"] }],
    });

    res.status(200).json({
      status: "success",
      data: { tasks },
    });
  } catch (error) {
    console.log(error);
  }
};

const getTaskByStatus = async (req, res) => {
  try {
    const { task } = req;

    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    var time = "";
    const { finishDate } = req.body;
    const { task } = req;
    const { limitDate } = task;

    if (limitDate.getTime() > Date.parse(finishDate)) {
      time = "completed";
    } else {
      time = "late";
    }

    await task.update({ finishDate, status: time });
    res.status(200).json({
      status: "success",
      data: { task },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { task } = req;

    await task.update({ status: "cancelled" });

    res.status(200).json({ status: "successfully cancelled" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskByStatus,
  updateTask,
  deleteTask,
};
