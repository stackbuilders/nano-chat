'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();

    return queryInterface.bulkInsert('user', [
      {
        name: 'Jose Luis Leon',
        createdAt: now,
        updatedAt: now
      },
      {
        name: 'John Doe',
        createdAt: now,
        updatedAt: now
      }
    ], {
      schema: 'nanochat',
      timestamps: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {schema: 'nanochat'});
  }
};
