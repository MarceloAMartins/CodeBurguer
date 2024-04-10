'use strict';

module.exports = {
  up: async  (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('products', 'category_id')
     
  },

  down: async  (queryInterface, Sequelize) => {  
    await queryInterface.createColumn('products',{
      category_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    })     
  },
}
