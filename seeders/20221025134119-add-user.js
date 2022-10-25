'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    

   await queryInterface.bulkInsert('users', [{
     name: 'Johan Garzon',
     email: 'Johan@gmail.com',
     password: '1234'
   },
  {
    name: 'Lionel Messi',
    email: 'Messi@gmail.com',
    password: '2234'
  }
  ], {});
  
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
