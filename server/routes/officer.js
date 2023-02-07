const router = require("express").Router();
const officerController = require("../controllers/officer");

router.get("/criminals", officerController.getCriminals);

router.get("/criminal/:criminalId", officerController.searchCriminal);

module.exports = router;
