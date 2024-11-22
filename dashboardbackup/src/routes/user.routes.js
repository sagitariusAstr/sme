const router = require("express").Router();
const UserController = require("../controller/user.controller");
const loginCheck = require("../middleware/auth.middleware");
const {isAdmin} = require("../middleware/rbac.middleware");
const user_ctrl = new UserController();


router.get('/supervisors',loginCheck,user_ctrl.listAllsupervisors);
router.delete('/supervisors/:id',loginCheck,isAdmin,user_ctrl.deleteSupervisor);
router.get('/agents',loginCheck,user_ctrl.listAllagents);
router.delete('/agents/:id',loginCheck,isAdmin,user_ctrl.deleteAgent);
router.get("/all-users",loginCheck,isAdmin,user_ctrl.getAllusers);
router.get('/users/:id',loginCheck,user_ctrl.getUsersbyId);


module.exports = router;