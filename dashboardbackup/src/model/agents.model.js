const Sequelize = require('sequelize');
const sequelize = require('../../config/mariadb.config');


const AgentModel = sequelize.define('Agent',{
    id:{
        type:Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    msisdn:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    role:{
        type:Sequelize.ENUM('agents'),
        allowNull:false,
    },
    status:{
        type:Sequelize.ENUM('active','inactive'),
        defaultValue:"inactive",
    },
    distributor:{
        type:Sequelize.STRING,
        allowNull:false,
    }
},{
    timestamps: true,
    tableName:'agents'
});

module.exports = AgentModel;