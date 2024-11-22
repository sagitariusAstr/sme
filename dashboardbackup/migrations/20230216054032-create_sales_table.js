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

    return await queryInterface.createTable("sales",{
      id:{
        type:Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id:{
        type:Sequelize.BIGINT,
        references:{
          model:"users",
          key:"id"
        },
        allowNull:false,
      },
      name:{
        type:Sequelize.STRING(50),
        allowNull: false
      },
      start_date:{
        type: Sequelize.DATE,
        allowNull : false
      },
      end_date:{
        type:Sequelize.DATE,
        allowNull: false
      },
      company:{
        type:Sequelize.STRING(50),
        allowNull:false
      },
      contact_person:{
        type:Sequelize.STRING(50),
        allowNull: false
      },
      contact_number:{
        type:Sequelize.STRING(50),
        allowNull: false
      },
      plans_sold:{
        type:Sequelize.STRING(50),
        allowNull: false
      },
      listof_plans_sold:{
        type:Sequelize.JSON,
        allowNull: false
      },
      Biz_199: {
        type: Sequelize.BOOLEAN,
      },
      Biz_299: {
        type: Sequelize.BOOLEAN,
      },
      Biz_499: {
        type: Sequelize.BOOLEAN,
      },
      Biz_699: {
        type: Sequelize.BOOLEAN,
      },
      Biz_909: {
        type: Sequelize.BOOLEAN,
      },
      Biz_1169: {
        type: Sequelize.BOOLEAN,
      },
      Biz_189: {
        type: Sequelize.BOOLEAN,
      },
      Biz_259: {
        type: Sequelize.BOOLEAN,
      },
      Biz_389: {
        type: Sequelize.BOOLEAN,
      },
      Biz_649: {
        type: Sequelize.BOOLEAN,
      },
      quantity:{
        type:Sequelize.STRING(150),
        allowNull: false
      },
      revenue:{
        type:Sequelize.STRING(150),
        allowNull:false
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
    queryInterface.dropTable("Sales")
  }
};
