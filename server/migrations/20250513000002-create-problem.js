'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Problems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      explanation: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      constraints: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Problems');
  }
};