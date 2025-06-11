'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testcase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Output, {
        foreignKey: "testcaseId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Testcase.init({
    test: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Testcase',
  });
  return Testcase;
};