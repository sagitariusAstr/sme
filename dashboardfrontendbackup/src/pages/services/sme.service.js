import axiosInstance from "../../config/axios.config";

export const getVisitDocs = async () => {
    try{
        let response = await axiosInstance.get("/fetchvisitdata",{headers:{
            "authorization": localStorage.getItem("auth_token")
        }})
        
        
        return response;
    }catch(error){
        console.log(error);
    }
}


class FetchVisitDataService {
    getTotalVisitsIdwise = async (id) => {
        try{
            
            let response = await axiosInstance.get("/fetchsalesbyid/"+id,{headers:{
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

    getAllVisitDatas = async (id) => {
        try{
            
            let response = await axiosInstance.get("/fetchallvisitdatabyid/"+id,{headers:{
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

const fetchreport_svc = new FetchVisitDataService();

export default fetchreport_svc;