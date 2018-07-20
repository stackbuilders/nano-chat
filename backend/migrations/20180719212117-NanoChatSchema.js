'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createSchema('nanochat');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropSchema('nanochat');
  }
};
