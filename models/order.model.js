const { db, DataTypes } = require("../util/database.util");

const Order = db.define("order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  addresseeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carrierId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  approvedById: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receivedById: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carRegistration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  zone: {
    type: DataTypes.STRING
    ,allowNull: false,
  },
  material: {
    type: DataTypes.STRING
    ,allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER
    ,allowNull: false,
  },
   owner: {
    type: DataTypes.STRING
    ,allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
});

module.exports = { Order };
