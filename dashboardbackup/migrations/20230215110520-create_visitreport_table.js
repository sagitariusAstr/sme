'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     * Define table
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return await queryInterface.createTable("visits",{
      id:{
        type : Sequelize.BIGINT,
        primaryKey : true,
        autoIncrement: true,
      },
      user_id:{
        type:Sequelize.BIGINT,
        references:{
          model:"users",
          key:"id"
        },
        allowNull:true,
      },
      name:{
        type:Sequelize.STRING(50),
        allowNull: true,
      },
      date:{
        type:Sequelize.DATE,
        allowNull: false,
      },
      company:{
        type:Sequelize.STRING(50),
        allowNull: false,
      },
      segment:{
        type:Sequelize.STRING(50),
        allowNull:false,
      },
      remarks:{
        type:Sequelize.STRING(150),
        allowNull:false,
      },
      createdAt:{
        type:Sequelize.DATE,
        
      },
      updatedAt:{
        type:Sequelize.DATE,
        
      }


    },{
      timestamps : true
    })

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     * Drop Tabble
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable("Visits")
  }
  
};
