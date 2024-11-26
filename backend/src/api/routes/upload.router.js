const express = require("express");
const routes = express.Router();
const Auth = require("../middlewares");
const middlewareUpload = require("../middlewares/upload.middleware")
const uploadController = require("../controllers/upload.controller")

routes.get("/",Auth,uploadController.getAllFile)
routes.get("/:id",Auth,uploadController.getFilesById)
routes.post("/",Auth,middlewareUpload,uploadController.uploadFile)
routes.delete("/:id",Auth,uploadController.deleteFile)
module.exports = routes