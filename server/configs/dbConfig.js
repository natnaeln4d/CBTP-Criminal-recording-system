const { Sequelize } = require("sequelize");
require("dotenv").config();

console.log(process.env.DBUSER);
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;