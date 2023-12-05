const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
app.use(cors())
const registerModule = require('./module/register')
const commonModule = require('./module/commonData')
const loginModule = require('./module/login')
const PORT = process.env.PORT
app.use(express.json())

app.use('/',registerModule)
app.use('/common',commonModule)
app.use('/',loginModule)



app.listen(PORT,()=>console.log('Server is running '+PORT))