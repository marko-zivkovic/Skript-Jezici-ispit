'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('kategorije', [{
      name: 'horror',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'avantura',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'romantika',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'komedija',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'fantastika',
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
    await queryInterface.bulkDelete('kategorije', null, {});
  }
};
