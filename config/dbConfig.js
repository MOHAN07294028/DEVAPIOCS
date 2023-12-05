const mongoDB = require('mongodb')
const dbNAME = process.env.DB_NAME
const dbURL =  `${process.env.DB_URL}/${dbNAME}`


module.exports ={mongoDB,dbNAME,dbURL}