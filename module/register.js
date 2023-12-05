const express = require('express')
const mongoose = require('mongoose')
const {mongoDB,dbNAME,dbURL} = require('../config/dbConfig')
const {registerSchema} = require('../schema/register')
const router = express.Router()
mongoose.connect(dbURL)

router.get('/',async(req,res)=>{
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

router.post('/',async(req,res)=>{
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
                resultBoolean: true,
                data: "Data already exist",
              });
        }
    } catch (error) {
        console.log(error.message)
        res.status(400).send({
            status:false,
            result:error?.message
        })
    }
})

module.exports = router