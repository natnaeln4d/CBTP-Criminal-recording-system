const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/auth");
const bcrypt = require("bcryptjs");

exports.addUser = async (req, res, next) => {
  const { email, password, confirmPassword, role, name } = req.body;

  const user = await User.findOne({ where: { email: email } });

  if (user) {
    return res.json({
      msg: "User with this email already exists! please provide another email",
    });
  }

  const hash = await bcrypt.hash(password, 12);

  const newUser = await User.create({
    email: email,
    password: hash,
  });
  newUser.save();
};
