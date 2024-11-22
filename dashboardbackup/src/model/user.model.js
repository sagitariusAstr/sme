const Sequelize = require("sequelize");
const sequelize = require("../../config/mariadb.config");
// const VisitModel = require("./visit.model");


    const UserModel = sequelize.define("User",{
        id:{
            type:Sequelize.BIGINT,
            primaryKey : true,
            autoIncrement: true,
        },
        name:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique:true,
        },
        msisdn:{
            type: Sequelize.STRING,
            allowNull: false,
            unique:true,
        },
        password:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        role:{
            type:Sequelize.ENUM('admin','supervisors','agents'),
            allowNull : false,
        },
        distributor:{
            type:Sequelize.STRING,
            allowNull: true,
        },
        created_by:{
            type:Sequelize.STRING,
            allowNull: true,
        },
        status:{
            type:Sequelize.ENUM('active','inactive'),
            defaultValue:"inactive"
        }
        
        


    },{
        timestamps: true,
        tableName:'users'
    });

    // UserModel.hasMany(VisitModel,{foreignKey:"user_id",sourceKey:"id"})

module.exports = UserModel;