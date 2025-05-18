require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const createJob = require("./routes/create-job/index.js")
const getJobs = require('./routes/create-job/index.js')
const app = express()

PORT  = process.env.PORT || 5002
const MONGO_URI = process.env.MONGOOSE_URI ;

app.use(cors({
    origin: "https://cybermind-works-smoky.vercel.app/",
    methods: ["GET" ,"POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type" , "Authorization"]
}))

mongoose
    .connect(MONGO_URI)
    .then(()=> console.log("MongoDB Connection created successfully"))
    .catch((e)=> console.log(e))
app.use(express.json())

app.use('/api', createJob )
app.use('/api' , getJobs)

app.listen(PORT,()  => {
    console.log(`App is running on the port ${PORT} `)
})