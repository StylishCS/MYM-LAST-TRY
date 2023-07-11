const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FullName:{
        type:String,
        required:true ,
        min:[2, 'minimum length 2 char'],
        max:[20, 'max length 2 char']
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Address:{
        type:String,
        required:true
    },
    Phone:{
        type:Number,
    },
    EducationalLevel:[String],
    Grade:[String],
    AdditionalInfo:{
        type:String,
        required:false,
    },
    file:{
        data: Buffer,
        contentType: String,
        },
    DOB:Date,
    internshipId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Internship",
        required:true // TODO : converted to true after first cycle
    },
    fileUrl: {
        type: String
    }
},{
    timestamps:true
})


const userModel = mongoose.model('User',userSchema)
module.exports = userModel;