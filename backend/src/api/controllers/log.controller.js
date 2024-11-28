const Log = require("../models/log.model")
const Student = require("../models/student.model")
const File = require("../models/file.model")
const Printer = require("../models/printer.model")
exports.getAllLog = (req,res)=>{
  Log.findAll()
  .then( logs =>{
    res.status(200).json({
      message:"Get all logs",
      logs: logs
    })
  })
  .catch( err =>{
    res.status(400).json({
      message:"Bad request",
      detail: err
    })
  })
}

exports.getLogsById = (req,res) => {
  const studentId = req.params.id
  Log.findAll({
    where:{
      studentId:studentId
    },
    include:[
      {
        model:Student,
        attributes: ['name'],
      },
      {
        model:File,
        attributes: ['fileName','fileUrl'],
      },
      {
        model:Printer,
        attributes: ['brand','model'],
      }
    ]
  })
  .then( logs =>{
    if(!logs){
      res.status(404).json({
        message:"Student not found !"
      })
    }
    res.status(200).json({
      message:`Get logs by ${studentId}`,
      logs:logs
    })
  })
  .catch(err => {
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}

exports.createLog = (req,res) =>{
  const totalPage = (parseInt(req.body.pageSize) == 4 ? 1 : (parseInt(req.body.pageSize) - 4) * -2) * parseInt(req.body.numCopy)
  Log.create({
    printerId:req.body.printerId,
    fileId:req.body.fileId,
    studentId:req.body.id,
    doubleSide:req.body.doubleSide,
    pageSize:req.body.pageSize,
    numCopy:req.body.numCopy,
    totalPage:totalPage
  })
  .then(log =>{
    res.status(201).json({
      message:"Create log",
      log:log
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}

exports.submitPrinted = (req,res) =>{
  const logId = req.params.id
  Log.findByPk(logId)
  .then(log =>{
    if(!log){
      res.status(404).json({
        message:"log not found !"
      })
    }
    log.status = req.body.status
    return log.save()
  })
  .then(log =>{
    res.status(200).json({
      message:"Submit printed",
      log:log
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}

exports.deleteLog = (req,res) =>{
  const logId = req.params.id
  Log.findByPk(logId)
  .then(log =>{
    if(!log){
      res.status(404).json({
        message:"log not found !"
      })
    }
    return log.destroy({
      where:{
        logId:logId
      }
    })
  })
  .then(log =>{
    res.status(200).json({
      message:"Delete log",
      log:log
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}