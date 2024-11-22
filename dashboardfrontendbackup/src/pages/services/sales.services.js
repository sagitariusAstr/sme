import axiosInstance from "../../config/axios.config";

class SalesService {
    sales = async (information) => {
        try{
            let response = await axiosInstance.post("/sales",information,{headers:{
                "authorization": localStorage.getItem("auth_token")
            }});
           
            if(response.data.status){
                return response
            }else{
                throw {response:response}
            }
            // console.log(information);
        }catch(error){
            throw error
        }
    }

    getProductCount = async () => {
        try{
            let response = await axiosInstance.get("/sales/prd",{headers:{
                "authorization":localStorage.getItem("auth_token")
            }})
            
            return response
        }catch(error){
            throw error
        }
    }

    getTotalQty = async () => {
        try{
            let response = await axiosInstance.get("/sales/totalqty",{headers:{
                "authorization":localStorage.getItem("auth_token")
            }})
            
            return response
        }catch(error){
            throw error
        }
    }

    getAgentProductCount = async () => {
        try{
            let response = await axiosInstance.get("/sales/agentprd",{headers:{
                "authorization":localStorage.getItem("auth_token")
            }})
            
            return response
        }catch(error){
            throw error
        }
    }
    getDateWiseData = async () => {
        try{
            let response = await axiosInstance.get("/sales/datewisedata",{headers:{
                "authorization":localStorage.getItem("auth_token")
            }})
            
            return response
        }catch(error){
            throw error
        }
    }

    getIdwiseData = async (id) => {
        try{
            let response = await axiosInstance.get(`/sales/idwisedata/${id}`,{headers:{
                "authorization":localStorage.getItem("auth_token")
            }})
            return response
        }catch(error){
            throw error
        }
    }

    getIdwisePerformanceData = async (id) => {
        try{
            let response = await axiosInstance.get(`/sales/idwiseperformace/${id}`,{headers:{
                "authorization":localStorage.getItem("auth_token")
            }})
            return response
        }catch(error){
            throw error
        }
    }

    




}


const sales_svc = new SalesService();


export default sales_svc;