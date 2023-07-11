const InternshipModel = require('../models/Internship.model')
const userModel = require('../models/User.model')


//=============================applyFInternship==============================
const applyForInternship = async (req,res,next)=>{
    const {internshipId} = req.params
   // const internship = await InternshipModel.findById(req.params.id) 
    const internship = await InternshipModel.findById(internshipId)
    console.log(internship);
    if(!internship){
        return next(new Error ('in-valid internship',{cause:400}))
    }
    const{FullName,email,Address,Phone,EducationalLevel,Grade,AdditionalInfo}= req.body
    /*req.body.file={
        path: secure_url,
        public_id
    }*/
    const Applicant = await userModel.create({
        FullName,
        email,
        Address,
        Phone,
        EducationalLevel,
        Grade,
        AdditionalInfo,
        fileUrl: "http://" + req.hostname + ":3000/" + req.file.filename,
        internshipId
    })
    if(!Applicant){
        return next (new Error ('Apply failed' ,{cause : 500}))
    }
    return res.status(200).json({message:"Done"})
}


module.exports = {applyForInternship};