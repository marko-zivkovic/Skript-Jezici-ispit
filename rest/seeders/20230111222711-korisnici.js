'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('korisnici', [{
      name: 'Marko Zivkovic',
      email: 'markoz@gmail.com',
      password: 'marko555',
      uloga_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Milos Stojanovic',
      email: 'miloss@gmail.com',
      password: 'milos555',
      uloga_id: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Boris Gomirsek',
      email: 'borisg@gmail.com',
      password: 'boris555',
      uloga_id: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Marija Miletic',
      email: 'marijam@gmail.com',
      password: 'marija555',
      uloga_id: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Luka Gomirsek',
      email: 'lukag@gmail.com',
      password: 'luka555',
      uloga_id: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Filip Velickovic',
      email: 'filipv@gmail.com',
      password: 'filip555',
      uloga_id: '3',
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
    await queryInterface.bulkDelete('korisnici', null, {});
  }
};
