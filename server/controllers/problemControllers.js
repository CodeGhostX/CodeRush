const { Submission } = require("../judge");
const { StatusCodes } = require("http-status-codes");
const { Problem } = require("../models");
const { ProblemTag } = require("../models");

const getAllProblems = async (_, res) => {
  try {
    const allProblems = await Problem.findAll();
    return res.status(StatusCodes.OK).json({
      message: "All Problems fetched Successfully",
      data: allProblems,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Some Error Occured while fetching all probelms",
      error: error.message,
    });
  }
};

// Give the Problem details
const getProblem = async (req, res) => {
  try {
    const { id: problemId } = req.params;
    const problemDetails = await Problem.findOne({
      where: {
        id: problemId,
      },
    });
    console.log(problemDetails);
    return res.status(StatusCodes.OK).json({
      message: "Problem Detail fetched Successfully",
      data: problemDetails,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Error while fetching problem details",
      error: error.message,
    });
  }
};

// Tag related to the problem
const getTags = async (req, res) => {
  try {
    const { id: problemId } = req.params;
    const tags = await ProblemTag.findAll({
      where: {
        problemId: problemId,
      },
    });
    const alltags = tags.map((item) => {
      return item.tagName;
    });
    return res.status(StatusCodes.OK).json({
      message: "Tags for the problem fetched successfully",
      data: alltags,
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Some Error Occured while getting tags for the problem",
      error: error.message,
    });
  }
};

const getDemoExamples = async (req, res) => {
  try {
    const { problemId } = req.params;
    const testCaseswithOutput = await Submission.testcaseOutputFetch(problemId);
    let numberOfTestCasesToSend = 0;
    if(testCaseswithOutput.length <= 5) numberOfTestCasesToSend = 1
    else if(testCaseswithOutput.length >= 5 && testCaseswithOutput.length <= 10) numberOfTestCasesToSend = 2
    else numberOfTestCasesToSend = 3;
    const result = [];
    for(let i=0;i<numberOfTestCasesToSend;i++){
      const temp = {
        test: testCaseswithOutput[i].test,
        output: testCaseswithOutput[i].Outputs[0].expected,
      }
      result.push(temp);
    }
    return res.status(StatusCodes.OK).json({
      message: "Test Cases fetched Successfully",
      data: result
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Some Error Occured while getting demo examples",
      error: error
    })
  }
};

// Getting the problems based on the Level

module.exports = {
  getAllProblems,
  getProblem,
  getTags,
  getDemoExamples
};
