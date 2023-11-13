const { Task } = require("./task.model");
const { User } = require("./user.model");
const { Order } = require("./order.model");

const initModels = () => {
  // User <---> M Task
  User.hasMany(Task, { foreignKey: "userId" });
  Task.belongsTo(User);

  //User <---> M Order
  User.hasMany(Order, {foreignKey: "userId" });
  Order.belongsTo(User);
};

module.exports = { initModels };
