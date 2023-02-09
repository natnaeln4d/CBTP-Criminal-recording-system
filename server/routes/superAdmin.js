const router = require("express").Router();

const adminController = require("../controllers/admin");
const superAdminController = require("../controllers/superadmin");
const isAuth = require("../middleware/isAuth");

router.post("/addUser", isAuth, superAdminController.addUser);

router.post(
  "/criminal/:criminalId",
  isAuth,
  superAdminController.searchCriminal
);

router.post(
  "/updateCriminal/:criminalId",
  isAuth,
  adminController.updateCriminal
);
module.exports = router;
