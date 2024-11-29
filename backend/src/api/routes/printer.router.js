const express = require("express");
const routes = express.Router();
const Auth = require("../middlewares");
const PrinterControllers = require("../controllers/printer.controller");
routes.get("/all",  PrinterControllers.getAllPrinter);
routes.get("/:id",  PrinterControllers.getPrinterById);
routes.get("/admin/:id",PrinterControllers.getPrinterByAdminId)
routes.post("/",  PrinterControllers.createPrinter);
routes.put("/:id",  PrinterControllers.updatePrinter);
routes.patch("/:id", PrinterControllers.enablePrinter);
routes.delete("/:id",  PrinterControllers.deletePrinter);

module.exports = routes;
