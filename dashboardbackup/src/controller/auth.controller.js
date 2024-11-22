// const bcrypt = require('bcrypt');
var bcrypt = require('password-hash');
const UserService = require('../service/user.service');
const jwt = require("jsonwebtoken");
const Config = require("../../config/constants");

class AuthController{

    constructor(){
        this.user_svc = new UserService();
    }

    LoginProcess = async (req,res,next) => {
        try{
            let data = req.body
            let user = await this.user_svc.getUserBymsisdn(data.msisdn);
            //if(!bcrypt.compareSync(data.password,user.password)){
            if(!bcrypt.verify(data.password,user.password)){
                throw "Credentials do not match"
            }else{
                let token = jwt.sign({id: user.id, name: user.name},Config.JWT_SECRET);
                res.json({
                    result : {
                        user:{
                            id : user.id,
                            name: user.name,
                            image: user.image,
                            role: user.role,
                            status: user.status
                        },
                        auth_token : token
                    },
                    status : true,
                    msg: "User Logged In"
                })
            }
        }catch(error){
                    next({status:400,msg:error})
            }
    }

    RegisterProcess =async (req,res,next) => {
            try{
                let data = req.body;
                if(req.file){
                    data.image = req.file.filename;
                }
                let validation = this.user_svc.validateData(data);
			    // data.password = bcrypt.hashSync(data.password,10);
                data.password = bcrypt.generate(data.password);
                data.created_by = req.auth_user.name;
                let result = await this.user_svc.storeUser(data);
                res.json({
                    result: data,
                    status:true,
                    msg:'user registered successfully'
                })
                
            }catch(error){
                
                next({status:400,msg:error})

            }
    }

    getCurrentUser = async (req,res, next) => {
		try{
			res.json({
				result: req.auth_user,
				status: true,
				msg: " User logged in"
			})

		}catch(error){
			next({status:400, msg: error})
		}
	}


}

module.exports = AuthController