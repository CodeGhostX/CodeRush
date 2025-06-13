const express = require("express");
const { AuthControllers } = require("../controllers");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.post(
  "/sign-up",
  [body("email").isEmail().withMessage("Email format is incorrect")],
  AuthControllers.signUp
);

router.post("/sign-in", AuthControllers.signIn);

module.exports = router;
