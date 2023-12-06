const express = require('express')
const mongoose = require('mongoose')
const {dbURL} = require('../config/dbConfig')
mongoose.connect(dbURL)
const {genderModel,RoleModel,pagePathModel} = require ('../schema/commonData')
const router = express.Router()

router.get('/GetGenders',async(req,res)=>{
    try {
        let data = await genderModel.find();
        res.status(200).send({
            status:true,
            result:data
        })
    } catch (error) {
        res.status(404).send({
            status:false,
            result:error?.message
        })
    }
})

router.get('/GetRoles',async(req,res)=>{
    try {
        let data = await RoleModel.find();
        res.status(200).send({
            status:true,
            result:data
        })
    } catch (error) {
        res.status(404).send({
            status:false,
            result:error?.message
        })
    }
})

router.get('/pagePaths',async(req,res)=>{
    try {
        let data = await pagePathModel.find();
        res.status(200).send({
            status:true,
            result:data
        })
    } catch (error) {
        res.status(404).send({
            status:false,
            result:error?.message
        })
    }
})


module.exports = router





