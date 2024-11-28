const express = require("express");
const routes = express.Router();
const Auth = require("../middlewares");
const PrinterControllers = require("../controllers/printer.controller");
routes.get("/", Auth, PrinterControllers.getAllPrinter);
routes.get("/:id", Auth, PrinterControllers.getPrinterById);
routes.post("/", Auth, PrinterControllers.createPrinter);
routes.put("/:id", Auth, PrinterControllers.updatePrinter);
routes.patch("/:id",Auth, PrinterControllers.enablePrinter);
routes.delete("/:id", Auth, PrinterControllers.deletePrinter);

module.exports = routes;