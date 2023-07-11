const InternshipModel = require('../models/Internship.model')



const createInternship = async (req,res,next)=>{
    const {InternshipName , InternshipEnvironment ,InternshipTime, InternshipResponsability,techRequirments} = req.body
    const internship = await InternshipModel.create(req.body)
    if(!internship){
        return next (new Error('creation internship failed',{cause : 500}))
    }
    return res.status(200).json({message:"Done internship" , internship})
}
////////////////////////getInter////////////////
const getAllInterns = async (req, res,next)=>{
    const Internships = await InternshipModel.find({}, "InternshipName InternshipEnvironment InternshipTime InternshipResponsability techRequirments")
    if(Internships.length){
        return res.status(200).json({message:"Done", Internships})    
    }
    return res.status(400).json({message:"No Internships currently"})
}


module.exports = {createInternship, getAllInterns};