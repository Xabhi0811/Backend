const express = require('express')
const mongoose = require('mongoose')
const ConnectedDB = require('./db/db') 
const router = require('./Routes/routes')
const bodyParser = require('body-parser')
const User = require('./modules/module')


const dotenv = require('dotenv')
dotenv.config() 
const cors = require('cors')   

const app = express()
ConnectedDB() 

app.use(cors())

app.use(express.json())
app.get('/',(req, res)=>{
    res.end('API is running...')
})

app.post('/abhi', (req, res)=>{
    res.send('Post request received')
})

app.use('/user', router)

module.exports = app
