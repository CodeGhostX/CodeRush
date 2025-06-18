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
    await queryInterface.bulkInsert("Testcases", [
      {
        test: `5
4 5 7 9 1`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        test: `6
-10 23 45 -67 89 0`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        test: `1
-100`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        test: `7
abkdefg`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        test: `10
hellotherez`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        test: `3
cat`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        test: `4
12 0 -56 43`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        test: `8
something`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      "Testcases",
      {
        test: {
          [Sequelize.Op.in]: [
            `5\n4 5 7 9 1`,
            `6\n-10 23 45 -67 89 0`,
            `1\n-100`,
            `7\nabkdefg`,
            `10\nhellotherez`,
            `3\ncat`,
            `4\n12 0 -56 43`,
            `8\nsomething`,
          ],
        },
      },
      {}
    );
  },
};
