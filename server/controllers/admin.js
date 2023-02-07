const Criminal = require("../models/criminal");

//Get total criminals
exports.getCriminals = async (req, res, next) => {
  const criminals = await Criminal.findAll();
  if (!criminals) {
    const error = new Error("Unable to find criminals ");
    error.statusCode = 500;
    throw error;
  }

  res.json({ status: "success", criminals });
};

//Get specific criminal with id
exports.getCriminal = async (req, res, next) => {
  const criminalId = req.params.criminalId;
  const criminal = await Criminal.findOne({ where: { id: criminalId } });

  if (criminal == null) {
    res.json({ status: "fail", message: "No criminal with this Id " });
  }
  res.json({ status: "success", criminal });
};
