const mongoose = require('mongoose')

const genderSchema = mongoose.Schema({
    label:{type:String}
},{collection:'optionsGender'})

const RoleSchema = mongoose.Schema({
    label:{type:String}
},{collection:'optionsRole'})

const genderModel = mongoose.model('optionsGender',genderSchema)
const RoleModel = mongoose.model('optionsRole',RoleSchema)

module.exports = {genderModel,RoleModel}