const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const auth = async (req, res, next) => {
  try {
    let token = "";
    token = req.cookies.jwt;
    if (!token) {
      return res.status(400).json({ message: "no token" });
    }

    // verify token
    const data = jwt.verify(token, process.env.JWT_SECRET);

    const { id } = data;

    // get user from data base
    const user = await User.findById(id).select("-password");
    if (!user) {
      res.status(400);
      throw new Error("user not found");
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({ message: "no token" });
  }
};

// verify admin
const verifyAdmin = (req, res, next) => {
  console.log(req.user);
  try {
    if (!req.user.isAdmin) {
      res.status(401);
      throw new Error("you are not authorized");
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  auth,
  verifyAdmin,
};
