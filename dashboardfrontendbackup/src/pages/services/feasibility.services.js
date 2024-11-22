import axiosInstance from "../../config/axios.config";

class FeasibilityService{
    feasibility = async (information) => {
        try{
            let response = await axiosInstance.post("/feasibilty",information,{headers:{
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

    fetchFeasibilityReport = async () => {
        try{
            let response = await axiosInstance.get("/fetchfeasibility",{headers:{
                "authorization":localStorage.getItem("auth_token")
            }})
            
            return response
        }catch(error){
            throw error
        }
    }
}

const feasibility_svc = new FeasibilityService();

export default feasibility_svc;