const express = require("express");
const { JudgeControllers } = require("../controllers");
const router = express.Router();

router.post('/run', JudgeControllers.problemSubmission);

module.exports = router;