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
        description: "Given an array of integers, return the sum of all the elements.",
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Find Maximum Element",
        description: "Find and return the maximum value in the given array of integers.",
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Palindrome Check",
        description: "Check if the given string is a palindrome. Ignore cases and spaces.",
        level: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Two Sum",
        description: "Given an array and a target, return indices of two numbers such that they add up to the target.",
        level: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Valid Parentheses",
        description: "Given a string of brackets, determine if the input is valid. An input is valid if open brackets are closed in the correct order.",
        level: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Longest Substring Without Repeating Characters",
        description: "Given a string, find the length of the longest substring without repeating characters.",
        level: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Binary Search",
        description: "Implement binary search to find the position of a target element in a sorted array.",
        level: 2,
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
        { title: "Palindrome Check" },
        { title: "Two Sum" },
        { title: "Valid Parentheses" },
        { title: "Longest Substring Without Repeating Characters" },
        { title: "Binary Search" },
      ],
    });
  },
};
