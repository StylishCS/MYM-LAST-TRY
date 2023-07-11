const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobName:{
        type:String,
        required:true 
    },
    JobEnvironment:{
        type:String,
        required:true, 
        default:"In Office",
        // enum:['In Office','remotly']
    },
    JobTime:{
        type:String,
        required:true, 
        default:"Full Time",
        // enum:['Full Time','Part Time']
    },
    JobResponsability:{
        type:String,
        required:true, 
        // enum:['Develop','Design']
    },
    techRequirments:String,
    Requirments:{
        type:String,
        required:true, 
    },
    jobType:{
        type:String,
        required:true, 
    },
    jobLocation:{
        type:String,
        required:true, 
    },
    skills:{
        type:String,
        required:true,
    }
    
},{
    timestamps:true
})

const jobModel = mongoose.model('Job',jobSchema);
module.exports = jobModel;