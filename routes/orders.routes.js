const express = require("express");
const { body, validationResult  } = require("express-validator");

const {
  createOrder,
  getAllOrders,
  getOrderByStatus,
  updateOrder,
  deleteOrder,
} = require("../controllers/orders.controller");

//const {orderExists,statusOrderExists,} = require("../middlewares/orders.middlewares");
//const {createOrderValidators,} = require("../middlewares/validators.middlewares");

const ordersRouter = express.Router();

ordersRouter.post("/", createOrder);

ordersRouter.get("/", getAllOrders);

ordersRouter.get("/:status", getOrderByStatus);

ordersRouter.patch("/:id", updateOrder);

ordersRouter.delete("/:id", deleteOrder);

module.exports = { ordersRouter };
