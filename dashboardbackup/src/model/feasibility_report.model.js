const Sequelize = require("sequelize");
const sequelize = require("../../config/mariadb.config");
const UserModel = require("./user.model");


const FeasibiltyModel = sequelize.define("Feasibility_report",{
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
      feasibility_sent_date:{
        type:Sequelize.DATE,
        allowNull: false,
      },
      customer_name:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      address:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      district:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      service_type:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      bandwidth_primary:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      latitude:{
        type:Sequelize.STRING,
        allowNull: true,
      },
      longitude:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      site_id:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      site_latitude:{
        type:Sequelize.STRING,
        allowNull: true,
      },
      site_longitude:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      distance:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      l1_status:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      l1_reason:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      l1_completion_date:{
        type:Sequelize.DATE,
        allowNull:true,
      },
      port_info:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      l2_remarks:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      l2_reason:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      customer_contact_name:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      contact_number:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      mail:{
        type:Sequelize.STRING,
        allowNull:true,
      },
      sam:{
        type:Sequelize.STRING,
        allowNull:true,
      }
      

      




},{
    timestamps: true
})


FeasibiltyModel.belongsTo(UserModel,{foreignKey:"user_id"})

module.exports = FeasibiltyModel;