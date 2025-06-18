'use strict';

const { Op } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ProblemTags", [
      // Problem 1: Sum of the Array
      { problemId: 1,tagName: "ARRAY", createdAt: new Date(), updatedAt: new Date() },
      { problemId: 1,tagName: "MATH", createdAt: new Date(), updatedAt: new Date() },

      // Problem 2: Find Maximum Element
      { problemId: 2,tagName: "ARRAY", createdAt: new Date(), updatedAt: new Date() },

      // Problem 3: Palindrome Check
      { problemId: 3,tagName: "STRING", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProblemTags", {
      [Op.or]: [
        { problemId: 1,tagName: "ARRAY" },
        { problemId: 1,tagName: "MATH" },
        { problemId: 2,tagName: "ARRAY" },
        { problemId: 3,tagName: "STRING" },
      ]
    });
  }
};