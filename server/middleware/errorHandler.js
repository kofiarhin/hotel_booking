const errorHandler = (error, req, res, next) => {
  console.log("error handler");
  const statusCode = res.status.statusCode ? res.status.statusCode : 500;
  return res.status(statusCode).json({ message: error.message });
};

module.exports = {
  errorHandler,
};
