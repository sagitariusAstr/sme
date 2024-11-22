const FeasibilityService = require('../service/feasibility.service');
const UserService = require('../service/user.service');

class FeasibiltyController{
    constructor(){
        this.feasibility_svc = new FeasibilityService();
        this.user_svc = new UserService();
    }

    RecordFeasibilityReport = async(req,res,next) => {
        try{
            let data = req.body

            data.created_by = req.auth_user.name;

            let user = await this.user_svc.getUserById(data.user_id);

            data.name = user.name;

            let result = await this.feasibility_svc.storeReport(data);
            res.json({
                result: data,
                status: true,
                msg:'feasibiltiy report stored successfully'
            })
        }catch(error){
            console.log("Error:",error)
            next({status:400,msg:error})
        }
    }

    FetchFeasibiltyReport = async(req,res,next) => {
        try{
            let feasibilityData = await this.feasibility_svc.FetchAllReport();
            console.log("Fetched Feasibility Data:",feasibilityData);
            res.json({
                result:feasibilityData,
                status:true,
                msg:"Feasibilty Report Fetched"
            })
        }catch(error){
            throw error
        }
    }





}

module.exports = FeasibiltyController;