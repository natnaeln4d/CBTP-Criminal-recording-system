const router = require("express").Router();
const adminController = require("../controllers/admin");

router.post("/addCriminal", adminController.addCriminal);

module.exports = router;
