const { Output, Testcase } = require("../models");

const testcaseOutputFetch = async (problemId) => {
  try {
    const result = await Testcase.findAll({
      attributes: ["test"],
      include: {
        model: Output,
        attributes: ["expected"],
        where: {
          problemId: problemId,
        },
      },
    });
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  testcaseOutputFetch,
};
