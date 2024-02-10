const ValidationError = require("../utills/ValidationError");

const errorHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    const errors = error.getErrors();

    return res.status(400).json({ message: "validation Error", errors });
  }
  const statusCode = res.status.statusCode ? res.status.statusCode : 500;
  return res.status(statusCode).json({ message: error.message });
};

module.exports = {
  errorHandler,
};
