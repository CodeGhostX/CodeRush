'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Problem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Submission, {
        foreignKey: "problemId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
      this.hasMany(models.Output, {
        foreignKey: "problemId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
      this.hasMany(models.ProblemTag, {
        foreignKey: "problemId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Problem.init({
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    explanation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    constraints: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Problem',
  });
  return Problem;
};