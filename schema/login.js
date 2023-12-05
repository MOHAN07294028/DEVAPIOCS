const mongoose = require('mongoose')
  
  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    return re.test(str);
  }

const LoginModel = mongoose.Schema({
    EmployeeId:{type:String,rquired:true},
    Password:{type:String,rquired:true, validate: { validator: checkPassword, message: "Invalid Password" }},
},{collection:'ocsLogin', versionKey: false})

let loginSchema = mongoose.model('ocsLogin',LoginModel)

module.exports ={loginSchema}

