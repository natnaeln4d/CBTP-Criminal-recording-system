const Auth = require("../models/Auth");
const bcrypt = require("bcryptjs");

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Auth.findOne({ where: { email: email } });

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
