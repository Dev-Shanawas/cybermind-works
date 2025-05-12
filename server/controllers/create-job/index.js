const Job = require('../../model/job');

const createJob = async (req, res) => {
    console.log(req.body);
    const { jobTitle, companyName, location, jobType, salaryRangeMin, salaryRangeMax, applicationDeadline, jobDescription } = req.body.data;

    const newJob = new Job({ jobTitle, companyName, location, jobType, salaryRangeMin, salaryRangeMax, applicationDeadline, jobDescription });
    await newJob.save();

    return res.status(200).json({
        success: true,
        message: 'Job registered successfully'
    });
};

const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find({});
        console.log(jobs)
        return res.status(200).json({
            success: true,
            data: jobs
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error fetching jobs',
            error: err.message
        });
    }
};

module.exports = { createJob, getJobs };
