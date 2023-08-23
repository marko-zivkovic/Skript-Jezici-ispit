'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('repertoari', [{
      name: 'Repertoar 1',
      pocetak: '2020-1-1',
      kraj: '2020-1-20',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Repertoar 2',
      pocetak: '2020-1-1',
      kraj: '2020-1-25',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Repertoar 3',
      pocetak: '2020-1-1',
      kraj: '2020-1-10',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Repertoar 4',
      pocetak: '2020-1-1',
      kraj: '2020-2-2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Repertoar 5',
      pocetak: '2020-1-1',
      kraj: '2020-1-5',
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
    await queryInterface.bulkDelete('repertoari', null, {});
  }
};
