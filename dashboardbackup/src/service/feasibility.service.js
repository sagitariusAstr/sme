const { Sequelize } = require('sequelize');
const FeasibiltyModel = require('../model/feasibility_report.model');
const UserModel = require('../model/user.model');


class FeasibilityService{
    storeReport = async (data) => {
        try{
            let visit = await FeasibiltyModel.create(data)
        }catch(error){
            console.log("Error",error)
            throw error;
        }
    }

    FetchAllReport = async() => {
        try{
            let feasibilty_report = await FeasibiltyModel.findAll(
                {
                    include:[{
                        model:UserModel,
                    }]
                }
            );
            if(feasibilty_report){
                return feasibilty_report
            }else{
                throw "Data doesn't exist"
            }
        }catch(error){
            console.log("Error:",error)
            throw error
        }
    }
}

module.exports = FeasibilityService;