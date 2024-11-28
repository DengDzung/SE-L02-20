const express = require("express");
const routes = express.Router();
const Auth = require("../middlewares");
const LogControllers = require("../controllers/log.controller");
routes.get("/", Auth, LogControllers.getAllLog);
routes.get("/:id", Auth, LogControllers.getLogsById);
routes.post("/", Auth, LogControllers.createLog);
routes.patch("/:id", Auth, LogControllers.submitPrinted);
routes.delete("/:id", Auth, LogControllers.deleteLog);
module.exports = routes;
