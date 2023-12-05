const express = require('express')
const mongoose = require('mongoose')
const {mongoDB,dbNAME,dbURL} = require('../config/dbConfig')
const {registerSchema} = require('../schema/register')
const router = express.Router()
mongoose.connect(dbURL)


router.post('/loginData', async (req, res) => {
    try {
      const employee = await registerSchema.findOne({ Username: req.body.EmployeeId });
      if (!employee) {
        return res.status(400).send({
          status: false,
          result: "Employee not found",
        });
      }
  
      const isValidPassword = await employee.comparePassword(req.body.password);
      if (!isValidPassword) {
        return res.status(400).send({
          status: false,
          result: "Invalid password",
        });
      }
  
      res.status(200).send({
        status: true,
        result: employee
      });
    } catch (error) {
      res.status(400).send({
        status: false,
        result: error?.message || "An error occurred",
      });
    }
  });
  

module.exports = router