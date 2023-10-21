const { StatusCodes } = require("http-status-codes");
const User = require("../model/User");

const signup = async (req, res) => {
  const { password, confirmPassword } = req.body;
  if (!confirmPassword) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Please input confirm password.",
    });
  }
  if (confirmPassword !== password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: "Password and confirm password does not match.",
    });
  }
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(StatusCodes.CREATED).json({
      msg: `user with account name ${user.firstName} is created. Proceed to login`,
    });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      msg: err.message,
    });
  }
};

const login = (req, res) => {
  res.status(200).json({
    msg: "login is successful.",
  });
};

module.exports = { signup, login };
