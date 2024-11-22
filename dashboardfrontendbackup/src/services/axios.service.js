import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    timeout: 30000,
})


export const httpPost = async (url, data, opts= null) => {
    try{
        let headers = {};
        let formData = new FormData();
        // data => {title: "Test", status: "status"}
        // formData => formData.append('file', data['file'], data['file']['name'])
        // formData.append('title', "Test");
        // formData.append('status', "status");
        if(opts.file) {
            headers['headers'] = {
                "content-type": "multipart/form-data"
            }
            // data => instance of FormData
            // static image or file 
            // console.log(data.document);
            formData.append('document', data.document, data.document.name)

            console.log(Object.keys(data));
            delete data.document;
            
        }

        // if user login required => headers => authorization: "Bearer "+token
        // ['title', 'status'].map((title) => { formData.append('title', data['title'])})
        Object.keys(data).map((key) => {
            formData.append(key, data[key]);
        })
        // console.log(formData.get("document"));
        

        let response = await axiosInstance.post(url, formData, {header: headers});
        if(response.status === 200) {
            console.log(response.data);
            return response.data;
            
        } else {
            throw response.data
        }
        
    } catch(error) {
        throw error;
    }
}