const Sequelize = require("sequelize")
const db  = require("../../config/database");

const Printer = db.define('Printer',{
  printerId:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  model:{
    type:Sequelize.STRING
  },
  brand:{
    type:Sequelize.STRING
  },
  description:{
    type:Sequelize.STRING
  },
  enable:{
    type:Sequelize.BOOLEAN,
    defaultValue:true
  },
  campusName:{
    type:Sequelize.STRING
  },
  buildingName:{
    type:Sequelize.STRING
  },
  roomNumber:{
    type:Sequelize.INTEGER
  }
})

module.exports = Printer