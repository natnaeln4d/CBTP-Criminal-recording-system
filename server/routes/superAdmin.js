const router = require("express").Router();

const superAdminController = require("../controllers/superadmin");

router.post("/addUser", superAdminController.addUser);

router.post("/criminal/:criminalId", superAdminController.searchCriminal);

router.post("/updateCriminal/:criminalId", adminController.updateCriminal);
module.exports = router;
