const express = require("express");
const routes = express.Router();
const loginController = require("../controllers/login.controller")
routes.post("/student",loginController.studentLogin)
module.exports = routes