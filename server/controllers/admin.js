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

exports.getCriminal = async (req, res, next) => {
  const criminalId = req.params.criminalId;
  const criminal = await Criminal.findOne({ where: { id: criminalId } });

  if (criminal == null) {
    return res.json({ status: "fail", message: "No criminal with this Id " });
  }
  return res.json({ status: "success", criminal });
};

exports.addCriminal = async (req, res, next) => {
  const { name, age, crimeType, crimeDiscription, yearOfSentence } = req.body;

  try {
    const criminal = await Criminal.create({
      name: name,
      age: age,
      crimeType: crimeType,
      crimeDiscription: crimeDiscription,
      yearOfSentence: yearOfSentence,
    });

    await criminal.save();
    res
      .status(200)
      .json({ status: "success", message: "Successful! Criminal is stored." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to store it" });
  }
};

exports.updateCriminal = async (req, res, next) => {
  const criminalId = req.params.criminalId;
  const { name, age, crimeType, crimeDescription, yearOfSentence } = req.body;

  try {
    const criminal = await Criminal.findOne({
      where: { id: criminalId },
    });
    console.log(criminal);
    if (!criminal) {
      return res.json({
        status: "fail",
        message: "Error! No user with that id",
      });
    }

    criminal.name = name;
    criminal.age = age;
    criminal.crimeType = crimeType;
    criminal.crimeDiscription = crimeDescription;
    criminal.yearOfSentence = yearOfSentence;

    await criminal.save();
    res.status(200).json({
      status: "success",
      message: "Successful! Criminal data is updated.",
      criminal,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "fail", message: "Unable to update data" });
  }
};
