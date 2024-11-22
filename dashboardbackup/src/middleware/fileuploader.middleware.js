const multer = require("multer");

const myStorage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"files/")
    },
    filename:(req,file,cb) => {
        let name = Date.now() + "-" +file.originalname;
        cb(null,name)
    }
})

const excelFilter = (req,file,cb) => {
    let part = file.originalname.split(".");
    let ext = part.pop();
    if(["xlsx","XLSX","xls","XLS","csv","CSV"].includes(ext.toLowerCase())){
        cb(null,true);
    }else{
        cb({status:400,msg:"File extension not supported"},null)

    }
}


const uploader = multer({
    storage:myStorage,
    fileFilter:excelFilter,
    limits:{
        fileSize: 10000000000
    }
})

module.exports = uploader;