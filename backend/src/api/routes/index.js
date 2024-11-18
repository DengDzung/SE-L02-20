const express = require("express");
const routes = express.Router();

routes.use('/student',require('./student.router'))

module.exports = routes;
