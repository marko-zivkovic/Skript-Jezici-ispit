'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sale', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      naziv: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },
      kapacitet: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      redovi: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: false,
      },
      bioskop_id: {
        type: Sequelize.INTEGER
      },
      opis: {
        type: Sequelize.STRING,
        allowNull: false,
       unique: false,
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
    await queryInterface.dropTable('sale');
  }
};