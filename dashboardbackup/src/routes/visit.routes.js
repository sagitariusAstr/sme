const router = require('express').Router();
//import controller
const VisitController = require('../controller/visit.controller');
//import middlewares if needed
const loginCheck = require('../middleware/auth.middleware');
//create instance of controller
const visit_ctrl = new VisitController();


router.post('/visit',loginCheck,visit_ctrl.RecordVisit);
router.get('/visit/cmp',loginCheck,visit_ctrl.getCompaniesCount);
router.get('/visit/totalvisits',loginCheck,visit_ctrl.getTotalVisits);






module.exports = router;
