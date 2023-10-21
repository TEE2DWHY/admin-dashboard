const User = require("../model/User");

const signup = (req, res) => {
  res.status(200).json({
    msg: "signup is successful.",
  });
};

const login = (req, res) => {
  res.status(200).json({
    msg: "login is successful.",
  });
};

module.exports = { signup, login };
