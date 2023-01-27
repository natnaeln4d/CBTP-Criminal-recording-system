const User = require("../models/auth");
const SuperAdmin = require("../models/superAdmin");
const bcrypt = require("bcryptjs");

exports.addUser = async (req, res, next) => {
  const { email, name, age, role, phone, address, password, confirmPassword } =
    req.body;

  const user = await User.findOne({ where: { email: email } });
  if (user) {
    return res.json({
      msg: "A user with is email already exist please try again !",
    });
  }
  const hash = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    email: email,
    password: password,
    role: role,
  });
  const newAdmin = await SuperAdmin.create({
    name: name,
    email: email,
    age: age,
    role: role,
    address: address,
    phone: phone,
  });

  await newUser.save();
  await newAdmin.save();
};
