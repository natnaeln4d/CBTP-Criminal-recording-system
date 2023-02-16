const sequelize = require("../configs/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const Auth = sequelize.define(
  "Authentication",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Auth;
