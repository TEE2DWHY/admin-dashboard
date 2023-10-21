const { StatusCodes } = require("http-status-codes");

const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg: err.message,
      });
    }
  };
};

module.exports = asyncWrapper;
