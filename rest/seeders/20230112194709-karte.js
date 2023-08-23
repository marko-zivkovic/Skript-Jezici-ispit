'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('karte', [{
      cena: '500',
      film_id: '1',
      korisnik_id: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      cena: '700',
      film_id: '3',
      korisnik_id: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      cena: '500',
      film_id: '1',
      korisnik_id: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      cena: '500',
      film_id: '2',
      korisnik_id: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      cena: '600',
      film_id: '5',
      korisnik_id: '6',
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
    await queryInterface.bulkDelete('karte', null, {});
  }
};
