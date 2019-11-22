const express = require('express')
const router = require('./route')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('mongo db connected')
})

const PORT = process.env.PORT || 7777

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/books', router)

app.listen(PORT, () => console.log(`Running on ${PORT}`))