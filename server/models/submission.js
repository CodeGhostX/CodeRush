"use strict";
const { Model } = require("sequelize");
const { ENUMS } = require("../utils");
const { ACCEPTED, RUNTIME_ERROR, COMPILER_ERROR, WRONG_OUTPUT } =
  ENUMS.COMPILER_RESULT;
module.exports = (sequelize, DataTypes) => {
  class Submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId"
      })
      this.belongsTo(models.Problem, {
        foreignKey: "problemId"
      })
    }
  }
  Submission.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      problemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      status: {
        type: DataTypes.ENUM(
          ACCEPTED,
          RUNTIME_ERROR,
          COMPILER_ERROR,
          WRONG_OUTPUT
        ),
        defaultValue: "WRONG_OUTPUT",
      },
    },
    {
      sequelize,
      modelName: "Submission",
    }
  );
  return Submission;
};
