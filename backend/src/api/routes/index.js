const express = require("express");
const routes = express.Router();

routes.use('/students',require('./student.router'))
routes.use('/printers',require('./printer.router'))
routes.use('/uploads',require('./upload.router'))
<<<<<<< HEAD
=======
routes.use('/logs',require('./log.router'))
routes.use('/admins',require('./admin.router'))
routes.use('/login',require('./login.router'))
>>>>>>> dev
module.exports = routes;
