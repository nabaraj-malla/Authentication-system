const express = require("express");
const User = require("../models/user");
const { handleSignUp, handleLogin } = require("../controllers/user");
const router = express.Router();

router.post("/signup", handleSignUp);

router.post("/login", handleLogin);

module.exports = router;
