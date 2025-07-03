const { StatusCodes } = require("http-status-codes");
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const usernameFormatChecker = (username) => {
  const len = username.length;
  for (let i = 0; i < len; i++) {
    let idx = username.charCodeAt(i);
    if (
      (idx >= 65 && idx <= 90) ||
      idx == 95 ||
      (idx >= 97 && idx <= 122) ||
      (idx >= 48 && idx <= 57)
    )
      continue;
    else return false;
  }
  return true;
};

const signUp = async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;
    if (!fullname || !username || !email || !password) {
      ErrorResponse.message = "No field must be Empty";
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Some Error Occured while Sign Up",
        error: errors.array(),
      });
    }
    if (!usernameFormatChecker(username)) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        error: "username format is incorrect",
        message: "Only roman characters, digits & underscore is allowed",
      });
    }
    const oldUser = await User.findOne({
      where: {
        [Op.or]: [{ username: username || "" }, { email: email || "" }],
      },
    });
    if (oldUser) {
      return res.status(StatusCodes.CONFLICT).json({
        message: "Try with some different username or email",
        error: "User already Exist!!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullname,
      username,
      email,
      password: hashedPassword,
    });
    return res.status(StatusCodes.CREATED).json({
      message: "User Created Successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Some error occured while Sign Up",
      error: error.message,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const oldUser = await User.findOne({
      where: {
        [Op.or]: [{ username: username || "" }, { email: email || "" }],
      },
    });
    if (!oldUser) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "User not found!!",
      });
    }
    const isPasswordMatched = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordMatched) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "User not found!!",
      });
    }
    const token = await jwt.sign({ username: username }, JWT_SECRET);
    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
      })
      .status(StatusCodes.OK)
      .json({
        message: "Sign In Successful",
      });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Some Error Occured While Sign In",
      error: error.message,
    });
  }
};

module.exports = {
  signUp,
  signIn,
  usernameFormatChecker,
};
