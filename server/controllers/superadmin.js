const SuperAdmin = require("../models/admin");
const Officer = require("../models/officer");
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
  if (user.role === "superAdmin") {
    const userExist = await Auth.findOne({ where: { email: email } });
    if (userExist) {
      return res.json({
        status: "fail",
        message: "A user with is email already exist please try again !",
      });
    }
    if (password != confirmPassword) {
      return res.json({
        status: "fail",
        message: " Password mismatch !",
      });
    }
    const hash = await bcrypt.hash(password, 12);
    const newUser = await Auth.create({
      email: email,
      password: hash,
      role: role,
    });

    if (role == "SuperAdmin") {
      const newAdmin = await SuperAdmin.create({
        name: name,
        email: email,
        age: age,
        role: role,
        address: address,
        phone: phone,
      });
      await newAdmin.save();
      await newUser.save();
    }
    if (role == "Admin") {
      const newAdmin = await SuperAdmin.create({
        name: name,
        email: email,
        age: age,
        role: role,
        address: address,
        phone: phone,
      });
      await newAdmin.save();
      await newUser.save();
    }
    if (role == "Officer") {
      const newOfficer = await Officer.create({
        name: name,
        email: email,
        age: age,
        role: role,
        phone: phone,
        address: address,
        address: "address",
      });
      await newOfficer.save();
      await newUser.save();
    }

    return res.status(200).json({
      status: "success",
      message: `User with ${role}role  created `,
    });
  } else {
    return res
      .status(403)
      .json({ statu: "fail", message: "Not authorized ", redirect: true });
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

exports.getUpdateCriminal = async (req, res, next) => {
  const criminalId = req.params.criminalId;

  try {
    const criminal = await Criminal.findOne({
      where: { id: criminalId },
    });
    console.log(criminal);
    if (!criminal) {
      return res.json({
        status: "fail",
        message: "Error! No criminal with that id",
      });
    }

    res.json({ status: "success", criminal });
  } catch {
    res
      .status(500)
      .json({ status: "fail", message: "Unable to do the operation" });
  }
};

//Update criminal
exports.updateCriminal = async (req, res, next) => {
  const criminalId = req.params.criminalId;

  //Datas to update
  const updatedName = req.body.name;
  const updatedAge = req.body.age;
  const updatedCrimeType = req.body.crimeType;
  const updatedCrimeDiscription = req.body.crimeDiscription;
  const updatedYearOfSentence = req.body.yearOfSentence;

  //Fetched Criminal
  const oldCriminal = await Criminal.findOne({
    where: { id: criminalId },
  });
  if (!oldCriminal) {
    res.json({ status: "fail", message: "Error! No user with that id" });
  }

  //Updating the criminal data
  oldCriminal.name = updatedName;
  oldCriminal.age = updatedAge;
  oldCriminal.crimeType = updatedCrimeType;
  oldCriminal.crimeDiscription = updatedCrimeDiscription;
  oldCriminal.yearOfSentence = updatedYearOfSentence;

  await oldCriminal.save();
  res.status(200).json({
    status: "success",
    message: "Successful! Criminal data is updated.",
    oldCriminal,
  });
};
