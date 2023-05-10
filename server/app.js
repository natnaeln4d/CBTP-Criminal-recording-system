const express = require("express");
const sequelize = require("./configs/dbConfig");
var cors = require("cors");
const rateLimit = require('express-rate-limit')

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
// const corsOptions = {
//   origin: 'http://127.0.0.1:3000/'
// };
// app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   session({
//     saveUninitialized: false,
//     resave: true,
//     secret: "myadminsecret",
//     store: sessionStorage,

//     cookie: {
//       maxAge: 1000 * 60 * 120,
//     },
//   })
// );

//Headers to fix CORS Errors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

//Limiters
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, //allow 100 request from the server in one hour only
  message: 'Too many requests from this IP, please try again in an hour!'
})

app.use("/api", limiter)

 // Use this after the variable declaration

// app.use((req, res, next) => {
//   console.log(req.path, "kkkkkkkkkk");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

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

const PORT = process.env.PORT || 8080;

sequelize
  // .sync({ force: true })
  .sync()
  .then()
  .catch((err) => console.log(err));

  const corsOptions = {
    origin: 'http://127.0.0.1:8080/'
  };
  app.use(cors());

app.listen(PORT, () => {
  console.log(`server running at port ${PORT} `);
});
