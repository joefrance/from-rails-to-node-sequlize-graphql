'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn("customers", "fax", {
          type: Sequelize.STRING
        }),
        queryInterface.addColumn("customers", "mobile", {
          type: Sequelize.STRING
        })
      ])  
  })

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.transaction((t) => {
          return Promise.all([
              queryInterface.removeColumn('customers', 'fax', { transaction: t }),
              queryInterface.removeColumn('customers', 'mobile', { transaction: t })
          ])
      })
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
