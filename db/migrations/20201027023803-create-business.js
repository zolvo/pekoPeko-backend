'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessZip: {
        allowNull: false,
        type: Sequelize.STRING
      },
      businessName: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      businessPhone: {
        allowNull: false,
        type: Sequelize.STRING
      },
      businessAddress: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      businessEmail: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      businessWebsite: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      businessHours: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      delivery: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      categories: {
        allowNull: false,
        type: Sequelize.STRING(150)
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
    return queryInterface.dropTable('Businesses');
  }
};
