const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("CRRS", "root", "Mysql@root90", {
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
