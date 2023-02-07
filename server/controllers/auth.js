const Auth = require("../models/Auth");
const bcrypt = require("bcryptjs");
const SuperAdmin = require("../models/admin");
const Officer = require("../models/officer");

exports.postLogin = async (req, res, next) => {
  // console.log(req.body);
  // return;
  const { email, password } = req.body;

  const user = await Auth.findOne({ where: { email: email } });

  if (!user) {
    return res.status(401).json("Invalid email");
  }
  req.session.user = user;
  const match = bcrypt.compare(password, user.password);
  if (match) {
    let userData;
    if (user.role == "superadmin") {
      userData = await SuperAdmin.findOne({
        where: { email: user.email },
      });
    }
    if (user.role == "officer") {
      userData = await Officer.findOne({
        where: { email: user.email },
      });
    }
    return res.status(200).json({ auth: true, userData: userData });
  } else {
    return res.status(403).json({ auth: false, msg: "access denied" });
  }
};
exports.logout = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Auth.findOne({ where: { email: email } });

  if (!user) {
    return res.status(401).json("Invalid email");
  }
  req.session.user = user;
  const match = bcrypt.compare(password, user.password);
  if (match) {
    const userData = await SuperAdmin.findOne({ where: { email: user.email } });

    return res.status(200).json({ auth: true, userData: userData });
  } else {
    return res.status(403).json({ auth: false, msg: "access denied" });
  }
};
exports.logout = async (req, res, next) => {
  try {
    req.session.destroy((user) => {
      return res.status(200).json({ auth: false });
    });
  } catch (error) {
    next(error);
  }
};
