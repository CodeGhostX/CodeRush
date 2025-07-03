"use strict";
/** @type {import('sequelize-cli').Migration} */
const { ENUMS } = require("../utils");
const { ACCEPTED, RUNTIME_ERROR, COMPILER_ERROR, WRONG_OUTPUT } =
  ENUMS.COMPILER_RESULT;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Submissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      problemId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Problems",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      status: {
        type: Sequelize.ENUM(
          ACCEPTED,
          RUNTIME_ERROR,
          COMPILER_ERROR,
          WRONG_OUTPUT
        ),
        defaultValue: WRONG_OUTPUT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Submissions");
  },
};
