"use strict";
const { Model } = require("sequelize");
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
module.exports = (sequelize, DataTypes) => {
  class ProblemTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Problem, {
        foreignKey: "problemId",
      });
    }
  }
  ProblemTag.init(
    {
      problemId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      // Here we need to make this Enum Centralized ??
      tagName: {
        type: DataTypes.ENUM(
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
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "ProblemTag",
    }
  );
  return ProblemTag;
};
