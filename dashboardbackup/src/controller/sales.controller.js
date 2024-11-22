const SalesService = require('../service/sales.service');
const UserService = require('../service/user.service');


class SalesController {
    constructor(){
        this.sales_svc = new SalesService();
        this.user_svc = new UserService();
    }


    RecordSales = async (req,res,next) => {
        try{
            let data = req.body
            
            data.created_by = req.auth_user.name;
            
            let user = await this.user_svc.getUserById(data.user_id);
            
            data.name = user.name;
            let result = await this.sales_svc.storeSalesReport(data);
            res.json({
                result:data,
                status:true,
                msg:'sales report stored successfully'
            })
        }catch(error){
            next({status:400,msg:error})
        }
    }

    FetchSales  = async (req,res,next) => {
        try{
            let fetchedData = await this.sales_svc.getSalesReport();
            console.log("Fetched Sales Data :",fetchedData);
            res.json({
                result:fetchedData,
                status:true,
                msg:"Sales Report Fetched"
            })
        }catch(error){
            throw error
        }
    }

    getProductsCount = async(req,res,next) => {
        try{
            let result = await this.sales_svc.getProductCount();
            res.json({
                result:result,
                status:true,
                msg:"product count Fetched"
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }
    getTotalQtySoldAgent = async(req,res,next) => {
        try{
            let result = await this.sales_svc.getTotalQtyAgent();
            res.json({
                result:result,
                status:true,
                msg:"total quantity sold Fetched"
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    getAgentProductsCount = async(req,res,next) => {
        try{
            let result = await this.sales_svc.getAgentProductCount();
            res.json({
                result:result,
                status:true,
                msg:"total quantity sold Fetched"
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    getAgentsPerformance = async(req,res,next) => {
        try{
            let result = await this.sales_svc.getAgentPerformance();
            res.json({
                result:result,
                status:true,
                msg:"Agent Perfomance Fetched Fetched"
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    getDateWiseProducts = async(req,res,next) => {
        try{
            let result = await this.sales_svc.getDateWiseProduct();
            res.json({
                result:result,
                status:true,
                msg:"Datewise Data Fetched Fetched"
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    getIdwiseTotalSales = async (req,res,next) => {
        try{
            const id = req.params.id;
            let result = await this.sales_svc.getTotalSalesById(id);
            res.json({
                result:result,
                status:true,
                msg:"total quantity sold Fetched"
            })
            

        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    getIdWisePerformanceReport = async (req,res,next) => {
        try{
            const id = req.params.id;
            let result = await this.sales_svc.getIdWisePerformance(id);
            res.json({
                result:result,
                status:true,
                msg:"Performance report fetched"
            })
            

        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    getTotalSalesForOneId = async (req,res,next) => {
        try{
            const id = req.params.id;
            let result = await this.sales_svc.getTotalSalesForOneId(id);
            res.json({
                result:result,
                status:true,
                msg:"Sales report fetched"
            })
        }catch(error){
            console.log("error :",error)
            next({status:400,msg:error})
        }
    }

    getTotalSalesData = async (req,res,next) => {
        try{
            const id = req.params.id;
            let result = await this.sales_svc.getTotalSalesData(id);
            res.json({
                result:result,
                status:true,
                msg:"Sales report fetched"
            })
        }catch(error){
            console.log("error :",error)
            next({status:400,msg:error})
        }
    }

        
}





module.exports = SalesController;