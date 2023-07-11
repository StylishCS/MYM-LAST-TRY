//////////////////////////GetJob////////////////////////////////////////////
const jobModel = require('../models/Job.model')


///////////////////////createJob////////////////////////////////////////
const createJob = async (req,res,next)=>{
    const {jobName , JobEnvironment ,JobTime, JobResponsability,techRequirments,Requirments,jobType,jobLocation,skills} = req.body
    const job = await jobModel.create(req.body)
    if(!job){
        return next (new Error('creation job failed',{cause : 500}))
    }
    return res.status(200).json({message:"Done job" , job})
}
//////////////////////////GetJob////////////////////////////////////////////
const getAllJobs = async (req, res,next)=>{
    const Jobs = await jobModel.find({}, "jobName JobEnvironment JobTime JobResponsability techRequirments")
   
    
    if(Jobs.length){
        return res.status(200).json({message:"Done", Jobs})    
    }
    return res.status(400).json({message:"No jobs currently"})
}
//==========================================getOneJob==================
const getOneJob = async(req,res,next)=>{
    const{jobId} = req.params
    const oneJob = await jobModel.findOne({_id:jobId}).select( 'Requirments jobType jobLocation skill' )
    if(oneJob){
        return res.status(200).json({message:"Done", oneJob})    
    }
    return res.status(400).json({message:"No jobs currently"})
}

module.exports = {createJob, getAllJobs, getOneJob};