const Sequelize = require("sequelize");
const sequelize = require("../../config/mariadb.config");
const UserModel = require("./user.model");



    const VisitModel = sequelize.define("Visit",{
        id:{
            type:Sequelize.BIGINT,
            primaryKey : true,
            autoIncrement:true,
        },
        user_id:{
            type:Sequelize.BIGINT,
            references:{
              model:"User",
              key:"id"
            },
            allowNull:true,
          },
        name:{
            type:Sequelize.STRING,
            allowNull : true,
        },
        role:{
            type:Sequelize.STRING,
            allowNull : true,
        },
        latitude:{
            type:Sequelize.STRING,
            allowNull: true
        },
        longitude:{
            type:Sequelize.STRING,
            allowNull: true
        },
        date:{
            type:Sequelize.DATE,
            allowNull: false,
        },
        company:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        opportunity:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        account_type:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        contact_person:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        phone_number:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        segment:{
            type:Sequelize.STRING,
            allowNull:false,
        },
        remarks:{
            type:Sequelize.STRING,
            allowNull:false
        },
        created_by:{
            type:Sequelize.STRING,
            allowNull:false
        }


    },{
        timestamps: true,
        tableName:'visits'
    })

    VisitModel.belongsTo(UserModel,{foreignKey:"user_id"})


    module.exports = VisitModel;
