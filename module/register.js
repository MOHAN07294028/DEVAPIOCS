const express = require('express')
const mongoose = require('mongoose')
const {mongoDB,dbNAME,dbURL} = require('../config/dbConfig')
const {registerSchema} = require('../schema/register')
const router = express.Router()
mongoose.connect(dbURL)

router.get('/getRegisterDetails',async(req,res)=>{
    try {
        let data = await registerSchema.find()
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

router.post('/saveRegisterData',async(req,res)=>{
    try {
        let validate = await registerSchema.findOne({Email:req.body.Email})
        if(!validate){
            let data = await registerSchema.create(req.body)
            res.status(201).send({
                status:true,
                result:'Success'
            })
        }
        else{
            res.status(400).send({
                result: false,
                result: "Data already exist",
              });
        }
    } catch (error) {
        res.status(400).send({
            status:false,
            result:error?.message
        })
    }
})

module.exports = router