const SuperAdmin = require("../models/admin");
const Officer = require("../models/officer");
const bcrypt = require("bcryptjs");
const Auth = require("../models/auth");
const Criminal = require("../models/criminal");
const { QueryTypes } = require("sequelize");
const sequelize = require("../configs/dbConfig");

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
        id: newUser.id,
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
        id: newUser.id,
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
        id: newUser.id,
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
exports.getUsers = async (req, res, next) => {
  const admins = await SuperAdmin.findAll();
  const officers = await Officer.findAll();

  const users = admins.concat(officers);
  if (!users) {
    const error = new Error("Unable to find admins ");
    error.statusCode = 500;
    throw error;
  }

  res.json({ status: "success", users });
};
exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  const UserToDelete = await Auth.findOne({ where: { id: userId } });
  console.log(UserToDelete);
  if (!UserToDelete) return;
  if (UserToDelete.role == "Officer") {
    const row1 = await sequelize.query(
      `delete from authentications where id=${userId} `,
      {
        type: QueryTypes.SELECT,
      }
    );

    const row2 = await sequelize.query(
      `delete from officers where id=${userId} `,
      {
        type: QueryTypes.SELECT,
      }
    );
  } else {
    const row1 = await sequelize.query(
      `delete from authentications where id=${userId} `,
      {
        type: QueryTypes.SELECT,
      }
    );

    const row2 = await sequelize.query(
      `delete from admins where id=${userId} `,
      {
        type: QueryTypes.SELECT,
      }
    );
  }

  console.log(row1);

  return;

  if (!UserToDelete) {
    console.log("no user found with this id ");
    return;
  }
  if (UserToDelete.role == "Officer") {
    const officer = await Officer.findOne();
    await officer.destory();
    await UserToDelete.destory();
  } else {
    await SuperAdmin.destory();
    await UserToDelete.destory();
  }
  const admins = await SuperAdmin.findAll();
  const officers = await Officer.findAll();

  const users = admins.concat(officers);
  if (!users) {
    const error = new Error("Unable to find admins ");
    error.statusCode = 500;
    throw error;
  }

  res.json({ status: "success", users });
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
