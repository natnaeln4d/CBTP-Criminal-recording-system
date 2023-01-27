const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/dbConfig");

const SuperAdmin = sequelize.define(
  "criminal",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    crimeType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    crimeDiscription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // dateOfSentence: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    yearOfSentence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Criminal;
