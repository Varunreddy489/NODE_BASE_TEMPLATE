"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Airplane", [
      {
        modelNumber: "C-17 Globe Master",
        capacity: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "Lockheed C-130",
        capacity: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Airplane", {
      [Op.or]: [
        { modelNumber: "C-17 Globe Master" },
        { modelNumber: "Lockheed C-130" },
      ],
    });
  },
};
