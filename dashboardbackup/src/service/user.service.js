const UserModel = require("../model/user.model");
const Joi = require('joi');

class UserService  {

    validateData = (data) => {
        try{
            let validateSchema = Joi.object({
                name: Joi.string()
                    .min(3)
                    .max(30)
                    .required(),
                password: Joi.string().required().min(8),
                    //.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
                email: Joi.string()
                    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
                role: Joi.string()
                    .valid("admin","supervisors","customers"),
                status: Joi.string()
                    .valid("active","inactive"),
                image: Joi.string(),
                msisdn:Joi.string()
                    
            })
            let validation = validateSchema.validate(data);
            // console.log(validation);
            return validation;
        }catch(error){
            console.log("Validation: ", error);
            throw error;
        }
    }

    storeUser = async (data) => {
        try{
               console.log("Data:",data)
               const user = await UserModel.create(data)
                return user;
                
        }catch(error){
           
            throw error;
        }

    }

    getUserByemail = async (email) =>{
        try{
            let user = await UserModel.findOne({email:email})
            if(user){
                return user
            }else{
                throw "user doesnt exist"
            }
        }catch(error){
            throw error
        }
    }

    getUserById = async (id) => {
        try{
            console.log("I am here")
            let user = await UserModel.findOne(
                {
                    where : {id:id}
                }
            )
            // let user = await UserModel.findByPk(id);
            console.log(user);
            if(user){
                return user
            }else{
                throw "user doesn't exist"
            }
        }catch(error){
            throw error
        }
    }

    getUserBymsisdn = async (msisdn) => {
        try{
            let user = await UserModel.findOne({
                where:{
                    msisdn : msisdn
                }
            })
            if(user){
                return user
            }else{
                throw "user does not exist"
            }
        }catch(error){
            throw error
        }
    }

    getAllsupervisors = async () => {
        try{
            let user = await UserModel.findAll({
                where:{
                    role:'supervisors'
                }
            });
            if(user){
                
                return user
            }else{
                throw "user doesn't exist"
            }
        }catch(error){
            throw error
        }
    }

    getAllagents = async () => {
        try{
            let user = await UserModel.findAll({
                where:{
                    role:'agents'
                }
            });
            if(user){
                return user
            }else{
                throw "user doesn't exist"
            }
        }catch(error){
            throw error
        }
    }

    getAllusers = async () => {
        try{
            let user = await UserModel.findAll();
            if(user){
                return user
            }else{
                throw "user doesn't exist"
            }
        }catch(error){
            throw error
        }
    }

    deleteById = async (id) => {
        
        try{
           await UserModel.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
           let user = await UserModel.destroy({
            where:{
                id : id
            }
           });
           if(user){
            return user;
           }
           await UserModel.sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
        }catch(error){
            throw error
        }
        
        // try {
        //     // Disable foreign key checks temporarily
        //     await User.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
        
        //     // Delete the user by id
        //     await User.destroy({ where: { id: id } });
        
        //     // Re-enable foreign key checks
        //     await User.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
        
        //     console.log(`User with id ${id} has been deleted.`);
        //   } catch (error) {
        //     console.error(`Failed to delete user with id ${id}: ${error}`);
        //   }
        
        

    }
}

module.exports = UserService;