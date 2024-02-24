'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('people', {
      id: {
        type: Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      birth_date: {
        type: Sequelize.DATE,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('people');
  }
};