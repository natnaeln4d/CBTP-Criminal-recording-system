const router = require("express").Router();
const officerController = require("../controllers/officer");
const isAuth = require("../middleware/isAuth");

router.get("/criminals", officerController.getCriminals);

router.get("/criminal/:criminalId", officerController.searchCriminal);

module.exports = router;
