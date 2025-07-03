const { Submission, CodeExec } = require("../judge");
const { ENUMS } = require("../utils");
const { ACCEPTED, RUNTIME_ERROR, COMPILER_ERROR, WRONG_OUTPUT } =
  ENUMS.COMPILER_RESULT;
const { StatusCodes } = require("http-status-codes");
const { Submission: SubmissionTable } = require("../models");

const problemSubmission = async (req, res) => {
  try {
    // Get User Data
    const { userId, problemId, code, extension, type } = req.body;
    // Get the Testcase and Output
    const testCaseswithOutput = await Submission.testcaseOutputFetch(problemId);
    let allTestCasesMatched = true,
      furtherResponse = true,
      codeStatus = null;
    // Match the Testcases
    async function run() {
      for (let i = 0; i < testCaseswithOutput.length; i++) {
        const item = testCaseswithOutput[i];
        const expectedOutput = item.Outputs[0].expected;
        const { success, output } = await CodeExec.codeRunner(
          code,
          item.test,
          extension
        );
        if (!success) {
          furtherResponse = false;
          codeStatus = RUNTIME_ERROR;
          return res.status(StatusCodes.OK).json({
            message: "Your code contains runtime or compile time error",
            test: item.test,
            expectedOutput: expectedOutput.trim(),
            error: output,
          });
        }
        if (output.trim() != expectedOutput.trim()) {
          allTestCasesMatched = false;
          furtherResponse = false;
          codeStatus = WRONG_OUTPUT;
          return res.status(StatusCodes.OK).json({
            message: "Your code does not pass all the test cases",
            test: item.test,
            expectedOutput: expectedOutput.trim(),
            yourOutput: output.trim(),
          });
        }
      }
    }
    await run();
    // Add it in Submission table
    if (type == "submit") {
      codeStatus = ACCEPTED;
      await SubmissionTable.create({ userId, problemId, status: codeStatus });
    }
    // Send the success response
    if (furtherResponse && allTestCasesMatched) {
      responseMessage =
        type == "run"
          ? "All demo test cases matched Successfully ✅"
          : "Problem Submitted Successfully ✅";
      return res.status(StatusCodes.OK).json({
        message: responseMessage,
      });
    }
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: error.message,
    });
  }
};

module.exports = {
  problemSubmission,
};
