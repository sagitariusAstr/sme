const router = require('express').Router();
const ActivationController = require("../controller/activation.controller");
//import middleware
const uploader = require("../middleware/fileuploader.middleware")
const loginCheck = require("../middleware/auth.middleware");
const {isAdmin,isSupervisor,isAdminSupervisor} = require("../middleware/rbac.middleware");

const activation_ctrl = new ActivationController();

router.post("/activation",uploader.single("file"),activation_ctrl.postActivationReport);


module.exports = router;



