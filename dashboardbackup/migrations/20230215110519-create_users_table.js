'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return await queryInterface.createTable("users",{
      id:{
        type: Sequelize.BIGINT,
        primaryKey:true,
        autoIncrement: true
      },
      name:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email:{
        type: Sequelize.STRING(50),
        allowNull: false,
        unique:true
      },
      msisdn:{
        type:Sequelize.STRING(50),
        allowNull : false,
        uniquw: true
      },
      password:{
        type:Sequelize.STRING(150),
        allowNull: false
      },
      role:{
        type: Sequelize.ENUM('admin','supervisors','agents'),
        allowNull : false
      },
      status:{
        type:Sequelize.ENUM('active','inactive'),
        defaultValue:"inactive"
      },
      createdAt:{
        type:Sequelize.DATE,
        
      },
      updatedAt:{
        type:Sequelize.DATE,
        
      }


    },{
      timestamps: true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.dropTable("users")
  }
};
