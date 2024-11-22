import axiosInstance from "../../../config/axios.config";



export const getCompanyCount = async () => {
    try{
        let response = await axiosInstance.get("/visit/cmp",{headers:{
            "authorization": localStorage.getItem("auth_token")
        }})
        return response
    }catch(error){
        throw error
    }
}

export const getTotalVisits = async () => {
    try{
        let response = await axiosInstance.get("/visit/totalvisits",{headers:{
            "authorization": localStorage.getItem("auth_token")
        }})
        return response
    }catch(error){
        throw error
    }
}


class VisitService {
    visit = async (information) => {
        try{
            //api trigger
            
            let response = await axiosInstance.post("/visit",information,{headers:{
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

const visit_svc = new VisitService();

export default visit_svc;
