const express = require("express");
const { checkAuth, restricTo } = require("../middlewares/auth");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/home", checkAuth, (req, res) => {
  res.render("home");
});

router.get("/admin", checkAuth, restricTo(["ADMIN"]), (req, res) => {
  res.render("admin");
});

module.exports = router;
