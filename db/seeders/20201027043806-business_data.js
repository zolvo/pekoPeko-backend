'use strict';
const faker = require("faker");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Businesses', [
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        businessZip: faker.address.zipCode(),
        businessName: faker.company.companyName(),
        businessPhone: faker.phone.phoneNumber(),
        businessAddress: faker.address.streetAddress(),
        businessEmail: faker.internet.email(),
        businessWebsite: faker.internet.url(),
        businessHours: 'everyday 08:00 am - 7.30 pm',
        createdAt: new Date(),
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('Businesses', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
