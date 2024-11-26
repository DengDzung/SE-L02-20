const express = require("express");
const routes = express.Router();

routes.use('/students',require('./student.router'))
routes.use('/printers',require('./printer.router'))
routes.use('/uploads',require('./upload.router'))
module.exports = routes;
