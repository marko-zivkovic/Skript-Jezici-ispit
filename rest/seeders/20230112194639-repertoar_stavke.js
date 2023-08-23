'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('repertoar_stavke', [{
      repertoar_id: '1',
      film_id: '3',
      sala_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      repertoar_id: '2',
      film_id: '1',
      sala_id: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      repertoar_id: '3',
      film_id: '4',
      sala_id: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      repertoar_id: '4',
      film_id: '2',
      sala_id: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      repertoar_id: '5',
      film_id: '5',
      sala_id: '4',
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
    await queryInterface.bulkDelete('repertoar_stavke', null, {});
  }
};
