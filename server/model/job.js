
const moongoose = require('mongoose')

const JobSchemas = new moongoose.Schema({
    jobTitle : String ,
    companyName : String,
    location : String,
    jobType: String,
    salaryRangeMin: String,
    salaryRangeMax: String , 
    applicationDeadline: String,
    jobDescription: String
})

module.exports =  moongoose.model('Job' , JobSchemas)