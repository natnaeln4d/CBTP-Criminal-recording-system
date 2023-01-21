const express = require("express");
const sequelize = require("./configs/dbConfig");
require("dotenv").config();
const app = express();

app.use("/", (req, res, next) => {
  res.send("what!");
});
const PORT = process.env.PORT || 5000;

sequelize
  .sync({ alter: true })
  // .sync({ force: true })
  .then()
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server running at por ${PORT} `);
});
