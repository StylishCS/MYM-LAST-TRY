const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
    InternshipName:{
        type:String,
        required:true 
    },
    InternshipEnvironment:{
        type:String,
        default:"In Office",
        // enum:['In Office','remotly']
    },
    InternshipTime:{
        type:String,
        default:"Full Time",
        // enum:['Full Time','Part Time']
    },
    InternshipResponsability:{
        type:String,
        // enum:['Develop','Design']
    },
    techRequirments:String,
    ApplayedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
},{
    timestamps:true
})

const InternshipModel = mongoose.model('Internship',internSchema);
module.exports = InternshipModel;