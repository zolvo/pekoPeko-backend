'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
      {
        userZip: faker.address.zipCode(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        userEmail: faker.internet.email(),
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
        avatar: faker.image.avatar(),
      },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
