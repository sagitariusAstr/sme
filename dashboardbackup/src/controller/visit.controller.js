const VisitService = require('../service/visit.service');
const UserService = require('../service/user.service');
class VisitController{
    constructor(){
        this.visit_svc = new VisitService();
        this.user_svc = new UserService();
    }

    //Remember auth_user the logged in user's data, not the one stored along with the form.
    RecordVisit = async(req,res,next) => {
        try{
            let data = req.body
           
             data.created_by = req.auth_user.name;
             
             
             let user = await this.user_svc.getUserById(data.user_id);
             
             data.name = user.name;
             console.log("data created by",data.created_by);
            let result = await this.visit_svc.storeReport(data);
            res.json({
                result: data,
                status: true,
                msg:'visit report stored successfully'
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    FetchVisit = async(req,res,next) => {
        try{
            let fetchedData = await this.visit_svc.getAllVisitReports();
            console.log("Fetched Visit Data :",fetchedData);
            res.json({
                result:fetchedData,
                status:true,
                msg:"Visit Reports Fetched"
            })
        }catch(error){
            throw error
        }
    }

    getCompaniesCount = async(req,res,next) => {
        try{
            let result = await this.visit_svc.getCompanyCount()
            res.json({
                result:result,
                status:true,
                msg:"company count Fetched"
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    getTotalVisits = async(req,res,next) => {
        try{
            let result = await this.visit_svc.getTotalVisit()
            res.json({
                result:result,
                status:true,
                msg:"Total visit count Fetched"
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    getTotalVisitIdWise = async (req,res,next) => {
        try{
          
            let result = await this.visit_svc.getTotalVisitById(req.params.id);
             console.log("From visit controller",result);
            res.json({
                result:result,
                status:true,
                msg:"Total visits by Id fetched"

            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }


    getTotalVisitDataIdwise = async (req,res,next) => {
        try{
            let result = await this.visit_svc.getAllVisitReportsOneSuperVisor(req.params.id);
            
            res.json({
                result:result,
                status:true,
                msg:"Total visits by Id fetched"

            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }







    

    
}

module.exports = VisitController;