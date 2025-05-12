const express = require('express')
const router = express.Router()
const {createJob , getJobs} = require('../../controllers/create-job/index.js')

router.post("/create-job", createJob);
router.post("/get-job", getJobs);

module.exports = router