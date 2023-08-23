'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('filmovi', [{
      name: 'Tarzan u Šumi',
      reziser: 'Toma Kruzer',
      datum: '2020-1-1',
      trajanje: '1:20',
      kategorija_id: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'King Kong',
      reziser: 'Peter Jackson',
      datum: '2020-1-4',
      trajanje: '2:30',
      kategorija_id: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Gaser u Čizmama',
      reziser: 'Zaki Kavale',
      datum: '2020-1-3',
      trajanje: '1:30',
      kategorija_id: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Anakonda',
      reziser: 'Michail Jackson',
      datum: '2020-1-12',
      trajanje: '1:45',
      kategorija_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Mladi Majmun',
      reziser: 'Ivica Peric',
      datum: '2020-1-11',
      trajanje: '1:40',
      kategorija_id: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Na obali reke Tise',
      reziser: 'Biljana Ratkovic',
      datum: '2020-1-6',
      trajanje: '1:00',
      kategorija_id: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Ukleta rupa',
      reziser: 'Jack Luison',
      datum: '2020-2-5',
      trajanje: '2:25',
      kategorija_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Star Wars 5',
      reziser: 'J.J Abrams',
      datum: '2020-1-25',
      trajanje: '2:00',
      kategorija_id: '5',
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
    await queryInterface.bulkDelete('filmovi', null, {});
  }
};
