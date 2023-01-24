const router = require("express").Router();
const officerContorller = require("../controllers/officer");

router.get("/criminal", officerContorller.getCriminals);

router.get("/criminal/:criminalId", officerContorller.getCriminal);

module.exports = router;
