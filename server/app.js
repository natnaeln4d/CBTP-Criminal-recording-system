const express = require("express");
const sequelize = require("./configs/dbConfig");

// third party imports
const session = require("express-session");
const SessionStore = require("connect-session-sequelize")(session.Store);

const officerRoutes = require("./routes/officer");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const superAdminRoutes = require("./routes/superAdmin");

const sessionStorage = new SessionStore({
  db: sequelize,
  expiration: 4 * 3600 * 1000,
  checkExpirationInterval: 1000 * 600,
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    saveUninitialized: false,
    resave: true,
    secret: "myadminsecret",
    store: sessionStorage,

    cookie: {
      maxAge: 1000 * 60 * 120,
    },
  })
);

//Headers to fix CORS Errors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/officer", officerRoutes);
app.use("/admin", adminRoutes);
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
