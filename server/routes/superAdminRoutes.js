const router = require("express").Router();
const superAdminController = require("../controllers/superAdmin");

router.post("/addUser", superAdminController.addUser);

module.exports = router;
