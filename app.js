const express = require('express')

const dotenv = require('dotenv')
dotenv.config() 
const cors = require('cors')   
const app = express()

app.use(cors())

app.use(express.json())
app.get('/',(req, res)=>{
    res.end('API is running...')
})

app.post('/abhi', (req, res)=>{
    res.send('Post request received')
})


module.exports = app
