const { Sequelize,Op } = require('sequelize');
const SalesModel = require('../model/sales.model');
const UserModel = require('../model/user.model');
const { response } = require('express');


class SalesService{
    storeSalesReport = async (data) => {
        try{
            let sales = await SalesModel.create(data);
            return sales
        }catch(error){
            throw error;
        }
    }

    getSalesReport = async () => {
        try{
            let salesReport = await SalesModel.findAll(
                {
                include:[{
                    model:UserModel,
                    
                }]
                }
            );
            if(salesReport){
                return salesReport
            }else{
                throw "Data doesn't exist"
            }
        }catch(error){
            throw error;
        }
    }

    getProductCount = async () => {
        try{
            let response = await SalesModel.findAll({
                attributes: ["product_name", [Sequelize.fn("COUNT", Sequelize.col("*")),'count']],
                group: ['product_name']
            })
            return response;
        }catch(err){
            throw err
        }
    }

    getTotalQtyAgent = async () => {
        try{    
            let response = await SalesModel.findAll({
                attributes:["name",[Sequelize.fn('SUM',Sequelize.col("quantity")),'sum']],
                where:{
                    role:'Agent'
                },
                group : ['name']
            })
            return response;
        }catch(err){
            throw err
        }
    }

    getAgentProductCount = async () => {
        try{
            let response = await SalesModel.findAll({
                attributes:["product_name",[Sequelize.fn("COUNT",Sequelize.col("*")),'count']],
                where:{
                    role:'Agent'
                },
                group:['product_name']
            })
            return response;
        }catch(err){
            throw err
        }
    }

    getAgentPerformance = async () => {
        try{
            const startDate1 = new Date('2023-04-22 00:00:00');
            const endDate1 = new Date(startDate1.getTime() + 30 * 24 * 60 * 60 * 1000);
            let response = await SalesModel.findAll({
                    attributes:['name',[Sequelize.fn('SUM',Sequelize.col('quantity')),'total_quantity']],
                    where:{
                        role: 'Agent',
                        start_date:{
                            [Op.between]: [startDate1, endDate1],
                        },
                    },
                    group: 'name',
            })
            return response
        }catch(err){
            throw err
        }
    }

    getDateWiseProduct = async () => {
        const startDate1 = new Date('2023-04-22 00:00:00');
        const endDate1 = new Date(startDate1.getTime() + 30 * 24 * 60 * 60 * 1000);
        try{
            let response = await SalesModel.findAll({
                attributes: [
                    [Sequelize.literal("DATE_FORMAT(start_date, '%M %e')"), 'date_formatted'],
                    [Sequelize.fn('SUM', Sequelize.col('quantity')), 'total_quantity']
                  ],
                where:{
                    role: 'Agent',
                    start_date:{
                        [Op.between]: [startDate1, endDate1],
                    },
                },
                group: 'start_date',
        })
        return response
        }catch(err){
            throw err
        }
    }

    getTotalSalesById = async (id) => {
        try{
            let response = await SalesModel.findAll({
                attributes:["product_name",[Sequelize.fn("SUM",Sequelize.col("quantity")),'total']],
                where:{
                    user_id: id
                },
                group:['product_name']
            })
            return response;
        }catch(err){
            throw err
        }
    }


    // this service is used in individual supervisor page to fit line graph
    getIdWisePerformance = async (id) => {
        try{
            
            let response = await SalesModel.findAll({
                attributes:[
                    [Sequelize.literal("DATE_FORMAT(end_date, '%M')"),'month'],
                    [Sequelize.fn('SUM',Sequelize.col('quantity')),'total_sales']
                ],
                where:{
                    user_id:id,
                    end_date:{
                        [Op.gte]: '2023-04-01 00:00:00'
                    }
                },
                group:[Sequelize.literal("DATE_FORMAT(end_date, '%M')")],
                order: [Sequelize.literal("DATE_FORMAT(end_date, '%m')")],
                raw: true,
                nest: true
          

            })
            return response;
        }catch(err){
            throw err
        }
    }

    
    getTotalSalesForOneId = async (id) => {
        try{
            let response = await SalesModel.findAll({
                attributes: ['name', [Sequelize.fn('SUM', Sequelize.col('quantity')), 'total_quantity']],
                where:{
                    user_id:id,
                },
                group:['name']
            })
            return response;
        }catch(err){
            throw err
        }
    }


    getTotalSalesData = async (id) => {
        try{
            let response = await SalesModel.findAll({
                
                where:{
                    user_id:id
                },
               
            })
            return response;
        }catch(err){
            throw err
        }
    }




    


}


module.exports = SalesService;