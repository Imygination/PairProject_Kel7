'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up (queryInterface, Sequelize) {
   return queryInterface.addColumn('Products','imageUrl',{type : DataTypes.STRING})

  },

   down (queryInterface, Sequelize) {
   return queryInterface.removeColumn('Products','imageUrl',{})


  }
};
