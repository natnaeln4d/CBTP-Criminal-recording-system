const Admin = require("../models/admin");
module.exports = async (req, res, next) => {
  const superAdmins = await Admin.findAll({
    where: { role: "superadmin" },
  });
  //If there is no superAdmin present on db, it will create dummy superAdmin
  if (!superAdmins) {
    const superAdmin = await Admin.create({
      name: "superadmin",
      age: 30,
      email: "superadmin@gmail.com",
      phone: 0909090909,
      role: "superadmin",
      address: "Jimma",
    });
    await superAdmin.save();
  }
  next();
};
