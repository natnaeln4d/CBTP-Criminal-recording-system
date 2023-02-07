const router = require("express").Router();

const superAdminController = require("../controllers/superadmin");

router.post("/addUser", superAdminController.addUser);

router.post("/criminal/:criminalId", superAdminController.searchCriminal);

// router.post("/admin", superAdminController.searchCriminal);

module.exports = router;
