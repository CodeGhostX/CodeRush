'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Submission, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  User.init({
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notEmpty: true,
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    role: {
      type: DataTypes.ENUM("USER", "ADMIN"),
      defaultValue: "USER"
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};