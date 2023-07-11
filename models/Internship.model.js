import mongoose, { Schema, model } from "mongoose";

const internSchema = new Schema({
    InternshipName:{
        type:String,
        required:true 
    },
    InternshipEnvironment:{
        type:String,
        default:"In Office",
        enum:['In Office','remotly']
    },
    InternshipTime:{
        type:String,
        default:"Full Time",
        enum:['Full Time','Part Time']
    },
    InternshipResponsability:{
        type:String,
        enum:['Develop','Design']
    },
    techRequirments:String,
    ApplayedBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
},{
    timestamps:true
})

const InternshipModel = mongoose.models.Internships||model('Internship',internSchema)
export default InternshipModel