const { Order } = require("../models/order.model");
const { User } = require("../models/user.model");

const createOrder = async (req, res) => {
  try {
    const { addresseeId, carrierId, approvedById, userId, receivedById, carRegistration, zone, material, quantity, owner } = req.body;

    const newOrder = await Order.create({ addresseeId, carrierId, approvedById, userId, receivedById, carRegistration, zone, material, quantity, owner });

    res.status(201).json({
      status: "success",
      data: { newOrder },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [{ model: User, attributes: ["id", "name", "lastName", "dni", "occupation"] }],
    });

    res.status(200).json({
      status: "success",
      data: { orders },
    });
  } catch (error) {
    console.log(error);
  }
};

const getOrderByStatus = async (req, res) => {
  try {
     const { order } = req;
     const orders = await Order.findOne({
        where: {id: order.id},
    });
    
    res.status(200).json({
      status: "success",
      data: { orders },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { material, quantity, owner } = req.body;
    const { order } = req;
    
    await order.update({ material, quantity, owner });
    res.status(200).json({
      status: "success",
      data: { order },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { order } = req;

    await order.update({ status: "cancelled" });

    res.status(200).json({ status: "successfully cancelled" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderByStatus,
  updateOrder,
  deleteOrder,
};
