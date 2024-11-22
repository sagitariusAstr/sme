const multer = require("multer");


const myStorage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"uploads/")
    },
    filename:(req,file,cb) => {
        let name = Date.now() + "-" + file.originalname;
        cb(null,name)
    }
})

const imageFilter = (req,file,cb) => {
    let part = file.originalname.split("."); //a.jpg => ["a","jpg"]
    // let ext = part[part.length - 1] or use
    let ext = part.pop(); // to extract the extension
    if(["jpg","jpeg","png","gif","bmp","svg","webp"].includes(ext.toLowerCase())){
        cb(null,true);
    }else{
        cb({status:400,msg:"File extension not supported"},null)
    }
}


const uploader = multer({
    storage:myStorage,
    fileFilter:imageFilter,
    limits:{
        fileSize:10000000
    }
})

module.exports = uploader;