const router = require('express').Router();

//import controller
const FeasibiltyController = require('../controller/feasibility.controller');

//import middlewares
const loginCheck = require('../middleware/auth.middleware');

//create instance of controller
const feasibility_ctrl = new FeasibiltyController();


router.post('/feasibilty',loginCheck,feasibility_ctrl.RecordFeasibilityReport);
router.get('/fetchfeasibility',loginCheck,feasibility_ctrl.FetchFeasibiltyReport);

module.exports = router;
