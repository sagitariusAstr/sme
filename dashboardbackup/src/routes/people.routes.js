const router = require('express').Router();
const PeopleController = require("../controller/people.controller");
const loginCheck = require('../middleware/auth.middleware');

const people_ctrl = new PeopleController();

router.get('/people',loginCheck, people_ctrl.getAllPeople)

module.exports = router;