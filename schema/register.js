const mongoose = require('mongoose')

function validateEmail(elementValue) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  }
  
  function checkPassword(str) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    return re.test(str);
  }

const phoneRegex = /^\d{10}$/;
function validatePhoneNumber(phoneNumber) {
    return phoneRegex.test(phoneNumber);
}

const registerModel = mongoose.Schema({
    Username:{type:String,rquired:true},
    Email:{type:String,rquired:true,validate:{validator:validateEmail,message:"Invalida Email"}},
    Password:{type:String,rquired:true, validate: { validator: checkPassword, message: "Invalid Password" }},
    FullName:{type:String,rquired:true},
    DateofBirth:{type:Date,rquired:true},
    Address:{type:String,rquired:true},
    PhoneNumber:{type:String,rquired:true, validate: { validator: validatePhoneNumber, message: "Invalid PhoneNumber" }},
    Gender:{type:String,rquired:true},
    createdAt:{type:Date,default:Date.now}
},{collection:'ocsRegister', versionKey: false})

let registerSchema = mongoose.model('ocsRegister',registerModel)

module.exports ={registerSchema}

