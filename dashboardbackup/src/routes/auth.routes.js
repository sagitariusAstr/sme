const router = require('express').Router();
const AuthController = require("../controller/auth.controller");
const uploader = require("../middleware/uploader.middleware");
const loginCheck = require("../middleware/auth.middleware");
const {isAdmin,isSupervisor,isAdminSupervisor} = require("../middleware/rbac.middleware");

const auth_ctrl = new AuthController();


router.post("/register",loginCheck,isAdminSupervisor,uploader.single('image'),auth_ctrl.RegisterProcess);

router.post("/login",auth_ctrl.LoginProcess);

router.get("/me",loginCheck,auth_ctrl.getCurrentUser);


module.exports = router;