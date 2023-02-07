const express = require("express");
const sequelize = require("./configs/dbConfig");

const officerRoutes = require("./routes/officer");
const authRoutes = require("./routes/auth");
const superAdminRoutes = require("./routes/superAdmin");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/officer", officerRoutes);
app.use("/superAdmin", superAdminRoutes);
app.use("/", authRoutes);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("this ");
//   })
//   .catch(() => {
//     console.log("err");
//   });

const PORT = process.env.PORT || 5000;

sequelize
  .sync()
  // .sync({ force: true })
  .then()
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`server running at port ${PORT} `);
});
