'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('lokacije', [{
      adresa: 'Bulevar 13',
      bioskop_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      adresa: 'Kralja Lazara 3',
      bioskop_id:'2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      adresa: 'Trtica Lekic 7',
      bioskop_id: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      adresa: 'Pirotska 33',
      bioskop_id:'4',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      adresa: 'Pica Kojama 44',
      bioskop_id:'5',
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
    await queryInterface.bulkDelete('lokacije', null, {});
  }
};
