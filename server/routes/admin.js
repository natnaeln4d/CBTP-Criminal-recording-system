const router = require("express").Router();
const adminController = require("../controllers/admin");
const isAuth = require("../middleware/isAuth");

router.get("/criminals", adminController.getCriminals);
router.get("/criminal/:criminalId", adminController.getCriminal);
router.post("/addCriminal", adminController.addCriminal);

router.get("/updateCriminal/:criminalId", adminController.getUpdateCriminal);
router.post("/updateCriminal/:criminalId", adminController.updateCriminal);

module.exports = router;
