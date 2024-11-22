const ActivationService = require("../service/activation.service");
const Config = require("../../config/constants");
const xlsx = require('xlsx');

const multer = require('multer');
const fs = require('fs');

const upload = multer({ dest: 'uploads/' }); // Define upload directory

class ActivationController {
  constructor() {
    this.activation_svc = new ActivationService();
  }

  

  postActivationReport = async (req, res, next) => {
    try {
      // Call the file upload handler using multer
      
      try {
        const filePath = req.file.path;
        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
        res.json({data: sheetData});
      } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Failed to parse the file'});
      }
        


      
    } catch (error) {
      next({ status: 400, msg: error });
    }
  };
}

module.exports = ActivationController;
