const Criminal = require("../models/criminal");
exports.getCriminals = async (req, res, next) => {
  const criminals = await Criminal.findAll();
  if (!criminals) {
    const error = new Error("unable to find criminals ");
    error.statusCode = 500;
    throw error;
  }

  res.json({ status: true, criminals });
};

exports.searchCriminal = async (req, res, next) => {
  const criminalId = req.params.criminalId;
  const criminal = await Criminal.findOne({ where: { id: criminalId } });

  if (criminal == null) {
    res.json({ status: "fail", message: "no criminal with this Id " });
  }
  res.json({ status: "success", criminal });
};
