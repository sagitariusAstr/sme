import axiosInstance from "../../config/axios.config";

export const getAllDocs = async() => {
    try{
        let response = await axiosInstance.get("/supervisors",{headers:{
            "authorization": localStorage.getItem("auth_token")
        }})
        return response
        
    }catch(error){
        throw error
    }
}

export const getAgents = async() => {
    try{
        let response = await axiosInstance.get("/agents",{headers:{
            "authorization":localStorage.getItem("auth_token")
        }})
        return response
    }catch(error){
        throw error
    }
}

export const getAllUsers = async() => {
    try{
        let response = await axiosInstance.get("/all-users",{headers:{
            "authorization":localStorage.getItem("auth_token")
        }})
        return response
    }catch(error){
        throw error
    }
}


export const deleteUserById = async (id) => {
    console.log("Id of Supervisors",id)
    try{
        let response = await axiosInstance.delete("/supervisors/"+id,{headers:{
            "authorization": localStorage.getItem("auth_token")
        }})
        return response
        console.log(localStorage.getItem("auth_token"))
    }catch(error){
        throw error;
    }
}

export const deleteAgentById = async (id) => {
    console.log("Id of Agent",id)
    try{
        let response = await axiosInstance.delete("/agents/"+id,{headers:{
            "authorization": localStorage.getItem("auth_token")
        }})
        return response
        console.log(localStorage.getItem("auth_token"))
    }catch(error){
        throw error;
    }
}

export const getUsersById = async (id) => {
    
    try{
        let response = await axiosInstance.get("/users/"+id,{headers:{
            "authorization": localStorage.getItem("auth_token")
        }})
        return response
        console.log(localStorage.getItem("auth_token"))
    }catch(error){
        throw error;
    }
}