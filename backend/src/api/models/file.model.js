const Sequelize = require("sequelize")
const db  = require("../../config/database");
const Student = require("../models/student.model")
const File = db.define('File',{
  fileId:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  studentId:{
    type:Sequelize.STRING,
    references:{
      model:Student,
      key:'studentId'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  fileName:{
    type:Sequelize.STRING,
    allowNull:false
  },
  fileUrl:{
    type:Sequelize.TEXT('long')
  }
})
Student.hasMany(File, { foreignKey: 'studentId' });
File.belongsTo(Student, { foreignKey: 'studentId' });
module.exports = File