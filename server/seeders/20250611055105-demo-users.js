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
    await queryInterface.bulkInsert("Users", [
      {
        fullname: "John Doe",
        username: "john@123",
        email: "john123@gmail.com",
        password: "123456",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Alice Smith",
        username: "alice_smith",
        email: "alice.smith@example.com",
        password: "alice123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Bob Johnson",
        username: "bobjohnson",
        email: "bob.johnson@example.com",
        password: "bobpass",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Emma Watson",
        username: "emma_w",
        email: "emma.watson@example.com",
        password: "emma2024",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "David Lee",
        username: "davidlee99",
        email: "david.lee@example.com",
        password: "lee@pass",
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
    await queryInterface.bulkDelete("Users", {
      [Op.or]: [
        { username: "john@123" },
        { username: "alice_smith" },
        { username: "bobjohnson" },
        { username: "emma_w" },
        { username: "davidlee99" },
      ],
    });
  },
};
