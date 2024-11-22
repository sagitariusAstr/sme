const Sequelize = require("sequelize");
const UserModel = require("./user.model");
const sequelize = require("../../config/mariadb.config");


    const SalesModel = sequelize.define("Sale",{
        id:{
            type:Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id:{
            type:Sequelize.BIGINT,
            references:{
                model:"User",
                key:"id"
            }
        },
        name:{
            type:Sequelize.STRING,
            allowNull: true,
        },
        role:{
            type:Sequelize.STRING,
            allowNull:true
        },
        latitude:{
            type:Sequelize.STRING,
            allowNull: true
        },
        longitude:{
            type:Sequelize.STRING,
            allowNull: true
        },
        start_date:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        end_date:{
            type:Sequelize.DATE,
            allowNull: false
        },
        company:{
            type:Sequelize.STRING,
           allowNull: false
        },
        contact_person:{
            type:Sequelize.STRING,
            allowNull: false
        },
        contact_number:{
            type:Sequelize.STRING,
            allowNull: false
        },
        product_name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        quantity:{
            type:Sequelize.INTEGER,
            allowNull:true
        },
        revenue:{
            type:Sequelize.INTEGER,
            allowNull:true
        }
        

        



    },{
        timestamps: true,
        tableName:'sales',

})

SalesModel.belongsTo(UserModel,{foreignKey:"user_id"})

module.exports = SalesModel;