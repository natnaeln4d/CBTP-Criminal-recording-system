const router = require("express").Router();
const adminController = require("../controllers/admin");
const isAuth = require("../middleware/isAuth");

router.get("/criminals", isAuth, adminController.getCriminals);
router.get("/criminal/:criminalId", isAuth, adminController.getCriminal);
router.post("/addCriminal", isAuth, adminController.addCriminal);

router.post(
  "/updateCriminal/:criminalId",
  isAuth,
  adminController.updateCriminal
);

module.exports = router;
