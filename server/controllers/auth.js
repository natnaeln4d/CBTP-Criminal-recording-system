const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/authUser");
const bcrypt = require("bcryptjs");

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    return res.status(401).json("Invalid email");
  }
  const match = bcrypt.compare(password, user.password);
  if (match) {
    return res.status(200).json({ auth: true, role: user.role });
  } else {
    return res.status(403).json({ auth: false, msg: "access denied" });
  }
};

// this is for super admin to add new users to the system
exports.addUser = (req, res, next) => {};
