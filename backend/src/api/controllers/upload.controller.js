const File = require('../models/file.model')
const fs = require('fs')
const path = require('path');
exports.getAllFile = (req,res) =>{
  File.findAll()
  .then( files =>{
    res.status(200).json({
      message:"Get all files",
      files:files
    })
  })
  .catch(err => {
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}
exports.getFilesById = (req,res) =>{
  const studentId = req.params.id
  File.findAll({
    where:{
      studentId:studentId
    }
  })
  .then( files =>{
    res.status(200).json({
      message:`Get files by ${studentId}`,
      files:files
    })
  })
  .catch(err => {
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}
exports.uploadFile = (req,res) =>{
  File.create({
    studentId:req.body.id,
    fileName:req.file.originalname,
    fileUrl:`uploads/${req.file.filename}`
  })
  .then(file =>{
    res.status(201).json({
      message:"Upload file",
      result:file
    })
  })
  .catch(err=>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}

exports.deleteFile = (req,res)=>{
  const fileId = req.params.id
  File.findByPk(fileId)
  .then(file =>{
    if(!file){
      res.status(404).json({
        message:"file not found !"
      })
    }
    return file.destroy({
      where:{
        fileId:fileId
      }
    })
  })
  .then(file =>{
    const array = file.fileUrl.split('/')
    const fileName = array[array.length-1];
    const filePath = path.join(__dirname, '..', 'uploads', fileName);
    try {
      fs.rmSync(filePath)
      console.log('File deleted successfully');
    } catch (err) {
      console.error(`Error deleting file: ${err}`);
    }
    res.status(200).json({
      message:"Delete file",
      file:file
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}