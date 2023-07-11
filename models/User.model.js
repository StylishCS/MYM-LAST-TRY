import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
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
        type:String,
    },
    EducationalLevel:[String],
    Grade:[String],
    AdditionalInfo:{
        type:String,
        required:false,
    },
    file:{
        path:{
            type:String,
        },
        public_id:{
            type:String,
        },
    },
    DOB:String,
    internshipId:{
        type:Schema.Types.ObjectId,
        ref:"Internship",
        required:true // TODO : converted to true after first cycle
    },
},{
    timestamps:true
})


const userModel = mongoose.models.User||model('User',userSchema)
export default userModel