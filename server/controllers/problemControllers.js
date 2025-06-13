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
    console.log(problemDetails)
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
        id: problemId
      }
    });
    return res.status(StatusCodes.OK).json({
      message: "Tags for the problem fetched successfully",
      data: tags
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Some Error Occured while getting tags for the problem",
      error: error.message,
    });
  }
};

module.exports = {
  getAllProblems,
  getProblem,
  getTags
};
