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

//Add criminal
exports.addCriminal = async (req, res, next) => {
  const criminalName = req.body.criminalName;
  const criminalAge = req.body.criminalAge;
  const crimeType = req.body.crimeType;
  const crimeDiscription = req.body.crimeDiscription;
  const yearOfSentence = req.body.yearOfSentence;

  try {
    //Add criminal to the database
    const criminal = await Criminal.create({
      name: criminalName,
      age: criminalAge,
      crimeType: crimeType,
      crimeDiscription: crimeDiscription,
      yearOfSentence: yearOfSentence,
    });

    await criminal.save();
    res.status(200).json({
      message: "Successful! Criminal is stored.",
    });
  } catch {
    res.status(500).json({ message: "Unable to store it" });
  }
};
