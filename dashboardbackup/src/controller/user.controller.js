const UserService = require('../service/user.service');

class UserController {
    constructor(){
        this.user_svc = new UserService();
    }

    listAllsupervisors = async (req,res,next) => {
        try{
            let all_supervisors = await this.user_svc.getAllsupervisors();
            
            res.json({
                result:all_supervisors,
                status:true,
                msg:"Supervisors Fetched"
            })
        }catch(error){
            throw error
        }
    }

    listAllagents = async(req,res,next) => {
        try{
            let all_agents = await this.user_svc.getAllagents();
            res.json({
                result:all_agents,
                status:true,
                msg:"Agents Fetched"
            })
        }catch(error){
            throw error
        }
    }

    getAllusers = async(req,res,next) => {
        try{
            let all_users = await this.user_svc.getAllusers();
            res.json({
                result:all_users,
                status:true,
                msg:"Users Fetched"
            })
        }catch(error){
            console.log(error);
        }
    }

    deleteSupervisor = async(req,res,next) => {
        console.log("Delete operation from supervisors")
        console.log("Id:",req.params.id)
        try{
            let supervisor = await this.user_svc.deleteById(req.params.id);
            res.json({
                result:supervisor,
                status:true,
                msg:"Supervisor Deleted"
            })
        }catch(error){
            throw error
        }
    }

    deleteAgent = async(req,res,next) => {
        console.log("Agents Id:",req.params.id)
        console.log("Delete operation from agents")
        try{
            let agent = await this.user_svc.deleteById(req.params.id);
            res.json({
                result:agent,
                status:true,
                msg:"Agent Deleted"
            })
        }catch(error){
                 throw error
        }
        
    }

    getUsersbyId = async(req,res,next) => {
        console.log("I am here")
        try{
            let response = await this.user_svc.getUserById(req.params.id);
            res.json({
                result:response,
                status:true,
                msg:"User Fetched"
            })
        }catch(error){
                 throw error
        }
        
    } 
}

module.exports = UserController