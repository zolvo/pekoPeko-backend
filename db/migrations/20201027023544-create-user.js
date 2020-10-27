'use strict';
const faker = require('faker');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userZip: {
        allowNull: false,
        type: Sequelize.STRING
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      userEmail: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      hashedPassword: {
        allowNull: false,
        type: Sequelize.STRING.BINARY
      },
      avatar: {
        type: Sequelize.STRING(255),
        defaultValue: faker.internet.avatar()
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
