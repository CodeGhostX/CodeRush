"use strict";
/** @type {import('sequelize-cli').Migration} */
const { ENUMS } = require("../utils");
const {
  ARRAY,
  STRING,
  LINKED_LIST,
  STACK,
  QUEUE,
  TREE,
  GRAPH,
  HASH_TABLE,
  HEAP,
  SORTING,
  SEARCHING,
  DYNAMIC_PROGRAMMING,
  RECURSION,
  BACKTRACKING,
  GREEDY,
  MATH,
} = ENUMS.PROBLEM_TAGS;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProblemTags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      tagName: {
        type: Sequelize.ENUM(
          ARRAY,
          STRING,
          LINKED_LIST,
          STACK,
          QUEUE,
          TREE,
          GRAPH,
          HASH_TABLE,
          HEAP,
          SORTING,
          SEARCHING,
          DYNAMIC_PROGRAMMING,
          RECURSION,
          BACKTRACKING,
          GREEDY,
          MATH
        ),
        allowNull: false,
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
    await queryInterface.dropTable("ProblemTags");
  },
};
