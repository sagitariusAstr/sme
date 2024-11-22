const Sequelize = require("sequelize");
const sequelize = require("../../config/mariadb.config");


const ActivationModel = sequelize.define("Activation",{
    id:{
        type:Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    Distributors:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    Dealer_Name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Outlet_Name:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    Region:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    District:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Activation_SIM:{
        type:Sequelize.STRING,
        allowNull:false
    },
    date:{
        type:Sequelize.DATE,
        allowNull: false,
    },
    Tariff_Plan:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Amount:{
        type:Sequelize.STRING,
        allowNull:false
    }

},{
    timestamps:true,
    tableName:'activations'
});

module.exports = ActivationModel;