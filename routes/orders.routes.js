const express = require("express");
const { body, validationResult  } = require("express-validator");

const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders.controller");

//const {orderExists,statusOrderExists,} = require("../middlewares/orders.middlewares");
//const {createOrderValidators,} = require("../middlewares/validators.middlewares");

const ordersRouter = express.Router();

ordersRouter.post("/", createOrder);

ordersRouter.get("/", getAllOrders);

ordersRouter.get("/:id", getOrderById);

ordersRouter.patch("/:id", updateOrder);

ordersRouter.delete("/:id", deleteOrder);

module.exports = { ordersRouter };
