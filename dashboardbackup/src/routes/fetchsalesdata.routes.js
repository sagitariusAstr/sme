const router = require('express').Router();

const SalesController = require('../controller/sales.controller');
//import controllers

//middlewares
const loginCheck = require("../middleware/auth.middleware");


//instance of controller
const sales_ctrl = new SalesController();

router.get('/fetchsalesdata',loginCheck,sales_ctrl.FetchSales);
router.get('/fetchsales/:id',loginCheck,sales_ctrl.getTotalSalesForOneId);
router.get('/fetchtotalsalesdata/:id',sales_ctrl.getTotalSalesData);


module.exports = router;