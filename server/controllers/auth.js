const Auth = require("../models/Auth");
const bcrypt = require("bcryptjs");
const SuperAdmin = require("../models/admin");

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Auth.findOne({ where: { email: email } });

  if (!user) {
    return res.status(401).json("Invalid email");
  }
  const match = bcrypt.compare(password, user.password);
  if (match) {
    const userData = await SuperAdmin.findOne({ where: { email: user.email } });
    return res.status(200).json({ auth: true, userData: userData });
  } else {
    return res.status(403).json({ auth: false, msg: "access denied" });
  }
};
