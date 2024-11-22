const router = require('express').Router();

//import controllers
const VisitController = require('../controller/visit.controller');

//middlewares
const loginCheck = require("../middleware/auth.middleware");

//instance of controller
const visit_ctrl = new VisitController();

router.get('/fetchvisitdata',loginCheck,visit_ctrl.FetchVisit);
router.get('/fetchsalesbyid/:id',loginCheck,visit_ctrl.getTotalVisitIdWise);
router.get('/fetchallvisitdatabyid/:id',visit_ctrl.getTotalVisitDataIdwise);



module.exports = router;