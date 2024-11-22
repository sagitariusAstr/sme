const router = require('express').Router();
//import controller
const SalesController = require('../controller/sales.controller');
//import middlewares if needed
const loginCheck = require('../middleware/auth.middleware');

//create instance of controller
const sales_ctrl = new SalesController();


router.post('/sales',loginCheck,sales_ctrl.RecordSales);
router.get('/sales/prd',loginCheck,sales_ctrl.getProductsCount);
router.get('/sales/totalqty',loginCheck,sales_ctrl.getTotalQtySoldAgent);
router.get('/sales/agentprd',loginCheck,sales_ctrl.getAgentProductsCount);
router.get('/sales/agentperformance',sales_ctrl.getAgentsPerformance);
router.get('/sales/datewisedata',loginCheck,sales_ctrl.getDateWiseProducts);
router.get('/sales/idwisedata/:id',loginCheck,sales_ctrl.getIdwiseTotalSales);
router.get('/sales/idwiseperformace/:id',loginCheck,sales_ctrl.getIdWisePerformanceReport);




module.exports = router;

