const express = require("express");
const { ProblemControllers } = require("../controllers");
const router = express.Router();

router.get('/all-problems', ProblemControllers.getAllProblems);
router.get('/:id', ProblemControllers.getProblem);
router.get('/problem-tag/:id', ProblemControllers.getTags);

module.exports = router;