const File = require('../models/file.model')
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
  const fileId = req.params.id
  File.findAll({
    where:{
      fileId:fileId
    }
  })
  .then( files =>{
    res.status(200).json({
      message:`Get files by ${fileId}`,
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
    fileId:req.body.id,
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