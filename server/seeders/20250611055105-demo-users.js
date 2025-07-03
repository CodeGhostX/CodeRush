"use strict";
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;

    const users = [
      {
        fullname: "John Doe",
        username: "john_123",
        email: "john123@gmail.com",
        password: await bcrypt.hash("123456", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Alice Smith",
        username: "alice_smith",
        email: "alice.smith@example.com",
        password: await bcrypt.hash("alice123", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Bob Johnson",
        username: "bobjohnson",
        email: "bob.johnson@example.com",
        password: await bcrypt.hash("bobpass", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "Emma Watson",
        username: "emma_w",
        email: "emma.watson@example.com",
        password: await bcrypt.hash("emma2024", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        fullname: "David Lee",
        username: "davidlee99",
        email: "david.lee@example.com",
        password: await bcrypt.hash("lee@pass", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert("Users", users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", {
      [Op.or]: [
        { username: "john_123" },
        { username: "alice_smith" },
        { username: "bobjohnson" },
        { username: "emma_w" },
        { username: "davidlee99" },
      ],
    });
  },
};
