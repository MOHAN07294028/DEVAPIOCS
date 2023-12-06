const mongoose = require('mongoose')

const genderSchema = mongoose.Schema({
    label:{type:String}
},{collection:'optionsGender'})

const RoleSchema = mongoose.Schema({
    label:{type:String}
},{collection:'optionsRole'})

const pagePathSchema = mongoose.Schema({
    label:{type:String}
},{collection:'pagePaths'})

const genderModel = mongoose.model('optionsGender',genderSchema)
const RoleModel = mongoose.model('optionsRole',RoleSchema)
const pagePathModel = mongoose.model('pagePaths',pagePathSchema)

module.exports = {genderModel,RoleModel,pagePathModel}