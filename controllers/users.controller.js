const { User } = require("../models/user.model");
const { Order } = require("../models/order.model");
const { Op } = require("sequelize");

const createUser = async (req, res) => {
  try {
    const { name, lastName, dni, occupation } = req.body;

    const newUser = await User.create({ name, lastName, dni, occupation });

    res.status(201).json({
      status: "success",
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const { name_and_lastName_like } = req.query;

    const whereClause = {
      status: "active",
    };

    if (name_and_lastName_like) {
      whereClause[Op.or] = [
        {
          name: {
            [Op.iLike]: `%${name_and_lastName_like}%`,
          },
        },
        {
          lastName: {
            [Op.iLike]: `%${name_and_lastName_like}%`,
          },
        },
        {
          [Op.and]: [
            {
              name: {
                [Op.iLike]: `%${name_and_lastName_like.split(' ')[0]}%`,
              },
            },
            {
              lastName: {
                [Op.iLike]: `%${name_and_lastName_like.split(' ')[1]}%`,
              },
            },
          ],
        },
      ];
    }

    const users = await User.findAll({
      where: whereClause,
      include: [{ model: Order }],
    });

    res.status(200).json({
      status: "success",
      data: { users },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, lastName, occupation } = req.body;
    const { user } = req;

    await user.update({ name, lastName, occupation });
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user } = req;

    await user.update({ status: "deleted" });

    res.status(200).json({ status: "successfully removed" });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { user } = req;

    const users = await User.findOne({
      where: { id: user.id },
    });
    res.status(200).json({
      status: 'success',
      data: { users },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};

