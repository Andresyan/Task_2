const { Task } = require("../models/task.model");

const taskExists = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({ where: { id, status: "active" } });

    if (!task) {
      return res.status(404).json({
        status: "error",
        message: "Task not found or status is not active",
      });
    }

    req.task = task;
    next();
  } catch (error) {
    console.log(error);
  }
};

const statusTaskExists = async (req, res, next) => {
  try {
    const { status } = req.params;

    const task = await Task.findOne({ where: { status } });

    if (!task) {
      return res.status(404).json({
        status: "error",
        message: "Status not found",
      });
    }

    req.task = task;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  taskExists,
  statusTaskExists,
};
