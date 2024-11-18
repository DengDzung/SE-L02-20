const express = require("express");
const routes = express.Router();
const Auth = require('../middlewares')
const StudentControllers = require('../controllers/student.controler')
routes.get('/',Auth,StudentControllers.get_all_students)

module.exports = routes