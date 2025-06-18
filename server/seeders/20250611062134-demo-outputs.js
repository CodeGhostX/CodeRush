"use strict";

const { Op } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Outputs", [
      // Problem 1: Sum of Array
      {
        problemId: 1,
        testcaseId: 1,
        expected: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        problemId: 1,
        testcaseId: 2,
        expected: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        problemId: 1,
        testcaseId: 3,
        expected: -100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        problemId: 1,
        testcaseId: 7,
        expected: -1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Problem 2: Max Element
      {
        problemId: 2,
        testcaseId: 1,
        expected: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        problemId: 2,
        testcaseId: 2,
        expected: 89,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        problemId: 2,
        testcaseId: 3,
        expected: -100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        problemId: 2,
        testcaseId: 7,
        expected: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Problem 3: Palindrome Check
      {
        problemId: 3,
        testcaseId: 4,
        expected: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        problemId: 3,
        testcaseId: 5,
        expected: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        problemId: 3,
        testcaseId: 6,
        expected: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        problemId: 3,
        testcaseId: 8,
        expected: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Outputs", {
      [Op.or]: [
        // Problem 1
        { problemId: 1, testcaseId: 1 },
        { problemId: 1, testcaseId: 2 },
        { problemId: 1, testcaseId: 3 },
        { problemId: 1, testcaseId: 7 },

        // Problem 2
        { problemId: 2, testcaseId: 1 },
        { problemId: 2, testcaseId: 2 },
        { problemId: 2, testcaseId: 3 },
        { problemId: 2, testcaseId: 7 },

        // Problem 3
        { problemId: 3, testcaseId: 4 },
        { problemId: 3, testcaseId: 5 },
        { problemId: 3, testcaseId: 6 },
        { problemId: 3, testcaseId: 8 },
      ],
    });
  },
};
