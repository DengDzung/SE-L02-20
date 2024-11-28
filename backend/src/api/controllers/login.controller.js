const Student = require("../models/student.model")
const crypto = require("crypto")
const {base64url} = require("../helpers")
exports.studentLogin = (req,res) =>{
  Student.findOne({
    where:{
      email:req.body.email,
      passwd:req.body.passwd
    }
  })
  .then(student =>{
    console.log(process.env.SECRETE_KEY)
    if(!student){
       res.status(401).json({
        message:"Unathorized"
      })
    }
    const header = {
      "alg": "HS256",
      "typ": "JWT"
    }
    const payload = {
      studentId:student.studentId,
      exp:Date.now() + 3600000
    }
    const encodedHeader = base64url(JSON.stringify(header))
    const encodedPayload = base64url(JSON.stringify(payload))
    const tokenData = `${encodedHeader}.${encodedPayload}`
    const hmac = crypto.createHmac("sha256",process.env.SECRETE_KEY)
    const signature = hmac.update(tokenData).digest('base64url')
     res.status(200).json({
      message:"Login sucessfully",
      token:`${tokenData}.${signature}`
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}