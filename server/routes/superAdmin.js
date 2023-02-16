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

router.get(
  "/updateCriminal/:criminalId",
  superAdminController.getUpdateCriminal
);

router.post(
  "/updateCriminal/:criminalId",
  isAuth,
  adminController.updateCriminal
);

router.get("/users", superAdminController.getUsers);

router.get("/user/:userId", superAdminController.deleteUser);

module.exports = router;
