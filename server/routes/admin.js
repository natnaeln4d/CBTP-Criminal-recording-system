const router = require("express").Router();
const adminController = require("../controllers/admin");

router.get("/criminals", adminController.getCriminals);
router.post("/addCriminal", adminController.addCriminal);

module.exports = router;
