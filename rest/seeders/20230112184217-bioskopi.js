'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('bioskopi', [{
      name: 'DeltaCinema',
      grad: 'Beograd',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Cinemaplex',
      grad: 'Beograd',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Filmovizija',
      grad: 'Smederevo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Cinemaplex',
      grad: 'Smederevo',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Sinemanija',
      grad: 'Nis',
      createdAt: new Date(),
      updatedAt: new Date()
    },]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
    */
    await queryInterface.bulkDelete('bioskopi', null, {});
  }
};
