import axiosInstance from "../../../config/axios.config";


class AuthService {
    login = async (credential) => {
        try{
            //api trigger
            let response = await axiosInstance.post("/login",credential);
            if(response.data.status){
                return response

            }else{
                throw {response:response}
            }
            
           
           
        }catch(err){
            throw err.response
        }
    }

    register = async (data) =>{
        try{
            let formData = new FormData();
            if(data.image){
                formData.append('image',data.image,data.filename)
                delete data.image
            }
            Object.keys(data).map((field) => {
                formData.append(field,data[field])
            })
            let response = await axiosInstance.post("/register",formData,{
                headers:{
                    "content-type":"multipart/form-data",
                    "authorization":"Bearer "+localStorage.getItem("auth_token")
                }
            });
            
        }catch(err){
            console.log(err)
        }
    }

    // httpPost = async (data,opts= null) => {
    //     try{
    //         let headers ={}
    //         let formData = new FormData();
    //         if(opts.file){
    //             headers['headers']={
    //                 "content-type": "multipart/form-data"
    //             }
    //             formData.append('document',data.document,data.document.name)
    //             delete data.document
    //         }
    //         Object.keys(data).map((key) => {
    //             formData.append(key, data[key]);
    //         })
    //         let response = await axiosInstance.post("/store",formData,{header:headers});
    //         if(response.status === 200){
    //             console.log(response.data);
    //             return response.data;
    //         }else{
    //             throw response.data
    //         }

            
            
            


    //     }catch(err){
    //         throw err;
    //     }
    // }
}

const auth_svc = new AuthService();

export default auth_svc;