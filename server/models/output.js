'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Output extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Problem, {
        foreignKey: "problemId"
      })
      this.belongsTo(models.Testcase, {
        foreignKey: "testcaseId"
      })
    }
  }
  Output.init({
    problemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    testcaseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    expected:{
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Output',
  });
  return Output;
};