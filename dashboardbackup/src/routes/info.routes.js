const router = require('express').Router();
const InfoController = require('../controller/info.controller');
const uploader = require("../middleware/fileuploader.middleware");
const info_ctrl = new InfoController();

router.post("/store",uploader.single('document'),info_ctrl.FileStore);
router.get('/company',info_ctrl.getCompany);
router.get('/product',info_ctrl.getProduct);



module.exports = router;
