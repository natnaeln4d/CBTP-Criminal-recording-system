const SuperAdmin = require("../models/admin");
const bcrypt = require("bcryptjs");
const Auth = require("../models/auth");
const Criminal = require("../models/criminal");

exports.addUser = async (req, res, next) => {
  const {
    email,
    name,
    age,
    role,
    phone,
    address,
    password,
    confirmPassword,
    user,
  } = req.body;

  if (user === "superAdmin") {
    const userExist = await Auth.findOne({ where: { email: email } });
    if (userExist) {
      return res.json({
        msg: "A user with is email already exist please try again !",
      });
    }
    const hash = await bcrypt.hash(password, 12);
    const newUser = await Auth.create({
      email: email,
      password: hash,
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

    return res.status(200).json({ msg: "user created" });
  } else {
    return res.status(403).json({ msg: "Not authorized ", redirect: true });
  }
};

exports.searchCriminal = async (req, res, next) => {
  const criminalId = req.params.criminalId;
  const criminal = await Criminal.findOne({ where: { id: criminalId } });

  if (criminal == null) {
    res.json({ status: "fail", message: "no criminal with this Id " });
  }
  res.json({ status: "success", criminal });
};

exports.searchAdmins = async (req, res, next) => {
  const adminId = req.params.adminId;
  const admin = await SuperAdmin.findOne({ where: { id: adminId } });

  if (admin == null) {
    res.json({ status: "fail", message: "no admin with this id" });
    res.json({ status: "success", admin });
  }
};
