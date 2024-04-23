const jwt = require("jsonwebtoken");
const secretKey = "Auth@auth";

function getToken(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
    },
    secretKey
  );
}

function getUser(token) {
  if (!token) {
    return null;
  }
  return jwt.verify(token, secretKey);
}

module.exports = { getToken, getUser };
