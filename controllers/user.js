const User = require("../models/user");
const { getToken } = require("../service/auth");

async function handleSignUp(req, res) {
  const { username, email, password, role } = req.body;
  await User.create({ username, email, password, role });
  //   return res.redirect("/static/home");
  return res.send("new user created");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.redirect("/user/login");
  }

  const token = getToken(user);
  console.log(token);
  res.cookie("Token", token);
  return res.redirect("/static/home");
}

module.exports = { handleSignUp, handleLogin };
