// const xlsx = require("xlsx");
const Company = require("../model/company.model");
const Product = require("../model/product.model");


class InfoController{
    
    FileStore = async (req,res,next) => {
    //    let graphData = {};
    //    const results = [];
    //    let filename = req.file.filename;
    //    const filePath = './filesU/' + filename;
    //    const workbook = xlsx.readFile(FilePath);
    //    const sheetnames = workbook.SheetNames;
       
    //    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetnames[0]])
        
       


        
    }

    getCompany = (req,res,next) => {
        Company.find(function(err,foundList){
            if(!err){
                res.send(foundList);
            }else{
                res.send(err);
            }
        })
    }

    getProduct = async(req,res,next) =>{
        Product.find(function(err,foundList){
            if(!err){
                res.send(foundList);
            }else{
                res.send(err);
            }
        })
    }

    
}



module.exports = InfoController