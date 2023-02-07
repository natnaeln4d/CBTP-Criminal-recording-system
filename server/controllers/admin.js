const Criminal = require("../models/criminal");
const criminal = require("../models/criminal");

//

//Get total criminals
exports.getCriminals = async (req, res, next) => {
  const criminals = await Criminal.findAll();
  if (!criminals) {
    const error = new Error("unable to find criminals ");
    error.statusCode = 500;
    throw error;
  }

  res.json({ status: "success", criminals });
};
