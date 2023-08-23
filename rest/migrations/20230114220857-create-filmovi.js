'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('filmovi', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      reziser: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      datum: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        unique: false,
      },
      trajanje: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      kategorija_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('filmovi');
  }
};