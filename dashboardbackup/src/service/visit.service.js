const { Sequelize } = require('sequelize');
const UserModel = require('../model/user.model');
const VisitModel = require('../model/visit.model');

class VisitService{
    storeReport = async (data) => {
        try{
            
            let visit = await VisitModel.create(data);
            return visit
        }catch(error){
            console.log("Error:",error)
            throw error;
        }
    }

    getAllVisitReports = async () => {
        try{
            let visitReport = await VisitModel.findAll(
                {
                include:[{
                    model:UserModel,
                    
                }]
                }
            );
            if(visitReport){
                return visitReport
            }else{
                throw "Data doesn't exist"
            }
        }catch(error){
            throw error;
        }
    }

    getAllVisitReportsOneSuperVisor = async (id) => {
        try{
            let response = await VisitModel.findAll({
                where:{
                    user_id:id
                },
            });
            return response;
        }catch(error){
            throw error;
        }
    }

    getCompanyCount = async () => {
        try{
            let response = await VisitModel.findAll({
                attributes: ["segment", [Sequelize.fn("COUNT", Sequelize.col("*")),'count']],
                group: ['segment']
            })
            return response;
        }catch(err){
            throw err
        }
    }

    getTotalVisit = async () => {
        try{
            let response = await VisitModel.findAll({
                attributes: ["name", [Sequelize.fn("COUNT", Sequelize.col("*")),'count']],
                group: ['name']
            })
            return response;
        }catch(err){
            throw err
        }
    }

    getTotalVisitById = async (id) => {
        try{
            
            let response = await VisitModel.findAll({
                attributes:["user_id",[Sequelize.fn("COUNT",Sequelize.col("user_id")),'count']],
                where:{
                    user_id:id
                },
                group:['user_id']

            })
            return response;
        }catch(err){
            throw err
        }
    }

    
}


module.exports = VisitService;