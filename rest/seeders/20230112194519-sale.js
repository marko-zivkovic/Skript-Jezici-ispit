'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('sale', [{
      naziv: 'A1',
      kapacitet: '20',
      redovi: '4',
      bioskop_id: '1',
      opis: '3D',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      naziv: 'A2',
      kapacitet: '60',
      redovi: '6',
      bioskop_id: '3',
      opis: 'normal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      naziv: 'A3',
      kapacitet: '160',
      redovi: '10',
      bioskop_id: '1',
      opis: 'normal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      naziv: 'A4',
      kapacitet: '50',
      redovi: '5',
      bioskop_id: '3',
      opis: '3D',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      naziv: 'A5',
      kapacitet: '100',
      redovi: '4',
      bioskop_id: '2',
      opis: 'normal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      naziv: 'A6',
      kapacitet: '200',
      redovi: '10',
      bioskop_id: '4',
      opis: 'normal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      naziv: 'A7',
      kapacitet: '200',
      redovi: '10',
      bioskop_id: '5',
      opis: 'normal',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('sale', null, {});
  }
};
