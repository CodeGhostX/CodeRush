const express = require("express");
const { AuthControllers } = require("../controllers");
const router = express.Router();

router.post('/sign-up', AuthControllers.signUp);

module.exports = router;