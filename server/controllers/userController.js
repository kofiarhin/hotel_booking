const Joi = require("joi");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const ValidationError = require("../utills/ValidationError");
const { generateToken } = require("../utills/helper");

const getUsers = async (req, res, next) => {
  return res.json({ message: "get users" });
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error, value } = userSchema.validate(
      { name, email, password },
      { abortEarly: false }
    );

    if (error) {
      console.log("????", error.details);
      res.status(400);
      throw new ValidationError("validtaion Error", error.details);
    }

    //  create user

    // check if user exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      // redesisgn the error message

      console.log("????", userExist);
      res.status(400);
      throw new Error("user already exist");
    }
    // hashpassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

// login user
const loginUser = async (req, res, next) => {
  try {
    const userSchema = Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    });

    const { error, value } = userSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      throw new ValidationError("validation error", error.details);
    }

    const { email, password } = req.body;

    // get user
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      throw new Error("user not found");
    }

    // check if password match

    const isAuth = await bcrypt.compare(password, user.password);

    if (!isAuth) {
      res.status(400);
      throw new Error("check details and try again");
    }

    // generate token
    const token = generateToken(user._id);

    res.cookie("jwt", token);
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  res.cookie("jwt", "", { expiresIn: "1" });

  return res.json({ message: "you have been logged out" });
};
module.exports = {
  getUsers,
  createUser,
  loginUser,
  logoutUser,
};
