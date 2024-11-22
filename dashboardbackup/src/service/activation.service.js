const { Sequelize } = require('sequelize');
const ActivationModel = require('../model/activation.model');


class ActivationService{
    storeReport = async (data) => {
        try{
            let activationreport = await ActivationModel.create(data);
            return visit
        }catch(error){
            console.log("Error:",error)
            throw error;
        }
    }
}



module.exports = ActivationService;