const express = require("express");
const router = express.Router();
const AuthRoutes = require("./authRoutes.js");
const JudgeRoutes = require("./judgeRoutes.js");
const ProblemRoutes = require("./problemRoutes.js");

router.use("/auth", AuthRoutes);
router.use("/judge", JudgeRoutes);
router.use("/problem", ProblemRoutes);

module.exports = router;
