"use strict";
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Problems", [
      {
        title: "Sum of the Array",
        description: "Given an array of integers a of size n, return the sum of all the element.",
        level: 1,
        explanation: "",
        constraints: " -100 <= aᵢ <= 100 || 1 <= n <= 30 ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Find Maximum Element",
        description: "Given an array of integers a of size n, find and return the maximum value in the given array of integers.",
        level: 1,
        explanation: "",
        constraints: " -100 <= aᵢ <= 100 || 1 <= n <= 30 ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Palindrome Check",
        description: "Check if the given string (str) of length n, is a palindrome or not.",
        level: 1,
        explanation: "",
        constraints: " str characters are of lowercase || 1 <= n <= 20 ",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);    
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Problems", {
      [Op.or]: [
        { title: "Sum of the Array" },
        { title: "Find Maximum Element" },
        { title: "Palindrome Check" }
      ],
    });
  },
};
