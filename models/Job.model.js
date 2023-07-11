const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobName:{
        type:String,
        required:true 
    },
    JobEnvironment:{
        type:String,
        default:"In Office",
        // enum:['In Office','remotly']
    },
    JobTime:{
        type:String,
        default:"Full Time",
        // enum:['Full Time','Part Time']
    },
    JobResponsability:{
        type:String,
        // enum:['Develop','Design']
    },
    techRequirments:String,
    Requirments:{
        type:String,
    },
    jobType:{
        type:String,
    },
    jobLocation:{
        type:String,
    },
    skills:String,
    
},{
    timestamps:true
})

const jobModel = mongoose.model('Job',jobSchema);
module.exports = jobModel;