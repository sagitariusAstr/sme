import axiosInstance from "../../config/axios.config";

export const getSalesDocs = async () => {
    try{
        let response = await axiosInstance.get("/fetchsalesdata",{headers:{
            "authorization": localStorage.getItem("auth_token")
        }})
        
        return response;
    }catch(error){
        console.log(error);
    }
}


class Sales {
    getTotalSalesquantityIdwise = async (id) => {
        try{
            
            let response = await axiosInstance.get("/fetchsales/"+id,{headers:{
                "authorization": localStorage.getItem("auth_token")
            }});
            if(response.data.status){
               
                return response
            }else{
                throw {response:response}
            }
        }catch(err){
            throw err.response
        }
    }

    getTotalSales = async (id) => {
        try{
            
            let response = await axiosInstance.get("/fetchtotalsalesdata/"+id,{headers:{
                "authorization": localStorage.getItem("auth_token")
            }});
            if(response.data.status){
               
                return response
            }else{
                throw {response:response}
            }
        }catch(err){
            throw err.response
        }
    }
}

const fetchsales_svc = new Sales();

export default fetchsales_svc