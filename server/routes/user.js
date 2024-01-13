const express = require("express");
const { Register, Login, currentCustomer } = require("../controller/user");
const { verification } = require("../middlewares/verify");
const router = express.Router();

router.post("/signup", Register);
router.post("/login", Login);

router.get("/current-user", verification, currentCustomer);

module.exports = router;
