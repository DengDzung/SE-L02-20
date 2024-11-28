const express = require("express");
const routes = express.Router();
const Auth = require("../middlewares");
const adminControllers = require('../controllers/admin.controller')


routes.get('/:id',Auth,adminControllers.getAdminById)
routes.post('/',adminControllers.createAdmin)
module.exports = routes