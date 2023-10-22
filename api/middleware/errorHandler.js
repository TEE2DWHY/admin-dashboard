const { StatusCodes } = require("http-status-codes");

const errorHandler = (res, req, err) => {
  // validation error
  if (err.name === "ValidationError") {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      msg: err.message,
    });
  }
  //   duplicate key error
  if (err.code === 11000) {
    return res.status(StatusCodes).json({
      msg: `${Object.keys(err.keyValue)} is taken already.`,
    });
  }
  //   cast error
  if (err.name === "castError") {
    return res.status(StatusCodes.BAD_REQUEST).json({
      msg: `${err.value} is not found in database.`,
    });
  }
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    msg: err.message,
  });
};

module.exports = errorHandler;
