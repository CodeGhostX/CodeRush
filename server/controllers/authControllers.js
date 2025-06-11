const { StatusCodes } = require("http-status-codes");
const { User } = require("../models");
const { ErrorResponse: errRes, SuccessResponse: sucRes } = require("../utils");

const ErrorResponse = errRes();
const SuccessResponse = sucRes();

  /**
  -------- To Do --------
    * Bcrypt
    * Email format
    * Username format
  */

const signUp = async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;
    if (!fullname || !username || !email || !password) {
      ErrorResponse.message = "No field must be Empty";
      return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    const oldUser = await User.findOne({
      where: {
        [Op.or]: {
          username: username,
          email: email,
        },
      },
    });
    if (oldUser) {
      ErrorResponse.message = "User already exist!";
      return res.status(StatusCodes.CONFLICT).json(ErrorResponse);
    }
    const newUser = await User.create({ fullname, username, email, password });
    SuccessResponse.message = "User created successfully";
    SuccessResponse.data = newUser;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
  }
};

module.exports = {
  signUp
}
