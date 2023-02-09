const router = require("express").Router();
const authController = require("../controllers/auth");
const isFound = require("../middleware/isFound");

//If superadmin doesn't exist, create summy superadmin.
//Else, redirect to login

router.post("/login", isFound, authController.postLogin);

router.post("/logout", authController.logout);

module.exports = router;
