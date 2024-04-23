const { getUser } = require("../service/auth");

function checkAuth(req, res, next) {
  const tokenCookie = req.cookies?.Token;
  if (!tokenCookie) {
    console.log("tokenCookie not found");
    return res.redirect("/static/login");
  }
  const user = getUser(tokenCookie);
  if (!user) {
    console.log("user not found");
  }
  console.log(user);
  req.user = user;
  next();
}

function restricTo(roles) {
  return function (req, res, next) {
    const user = req.user;
    console.log(user);
    if (!user) {
      return res.redirect("/static/login");
    }
    if (!roles.includes(user.role)) {
      return res.end("unauthorized");
    }
    next();
  };
}

module.exports = { checkAuth, restricTo };
