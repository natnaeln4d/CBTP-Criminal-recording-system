const Admin = require("../models/admin");
const Auth = require("../models/auth");
const bcrypt = require("bcryptjs");
module.exports = async (req, res, next) => {
  const superAdmins = await Admin.findAll({
    where: { role: "superadmin" },
  });
  console.log(superAdmins);
  //If there is no superAdmin present on db, it will create dummy superAdmin
  if (!superAdmins || superAdmins.length == 0) {
    const email = "superadmin@gmail.com";
    const password = "123";
    const role = "superadmin";

    const newSuperAdmin = await Admin.create({
      name: "superadmin",
      age: 30,
      email: email,
      phone: 0909090909,
      role: role,
      address: "Jimma",
    });

    await newSuperAdmin.save();
    const validSuperAdmin = await Auth.create({
      email: email,
      password: await bcrypt.hash(password, 12),
      role: role,
    });
    await validSuperAdmin.save();
  }
  next();
};
