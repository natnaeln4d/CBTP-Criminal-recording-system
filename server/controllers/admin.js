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

//Add criminal data
exports.addCriminal = async (req, res, next) => {
  console.log("aaaaaaaaaaaaddddddddddddddd");
  const criminalName = req.body.name;
  const criminalAge = req.body.age;
  const crimeType = req.body.crimeType;
  const crimeDiscription = req.body.crimeDescription;
  const yearOfSentence = req.body.yearOfSentence;
  const dateOfSentence = req.body.dateOfSentence;

  try {
    //Add criminal to the database
    const criminal = await Criminal.create({
      name: criminalName,
      age: criminalAge,
      crimeType,
      crimeDiscription,
      yearOfSentence,
      dateOfSentence,
    });

    await criminal.save();
    res
      .status(200)
      .json({ status: "success", message: "Successful! Criminal is stored." });
  } catch {
    res.json({ status: "fail", message: "Unable to store it" });
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
  const updatedDateOfSentence = req.body.dateOfSentence;

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
  oldCriminal.dateOfSentence = updatedDateOfSentence;

  await oldCriminal.save();
  res.status(200).json({
    status: "success",
    message: "Successful! Criminal data is updated.",
    oldCriminal,
  });
};
