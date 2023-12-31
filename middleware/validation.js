const joi = require('joi');
const mongoose = require('mongoose');
const validateObjectId = (value , helper)=>{
    console.log({
        value,
        helper
    });
    return mongoose.Types.ObjectId.isValid(value) ? true : helper.message('please enter valid _id')
}
const generalFields = {
    email: joi.string().email({
        minDomainSegments: 2,
        maxDomainSegments: 4,
        tlds: { allow: ['com', 'net','org'] }
    }).required(),
    password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)).required(),
    cPassword: joi.string().valid(joi.ref('password')).required(),
    id: joi.string().custom(validateObjectId).required(),
    file: joi.object({
        size: joi.number().positive().required(),
        path: joi.string().required(),
        filename: joi.string().required(),
        destination: joi.string().required(),
        mimetype: joi.string().required(),
        encoding: joi.string().required(),
        originalname: joi.string().required(),
        fieldname: joi.string().required()
    })
}

const validation =(schema , isHeadersSent = false)=>{
    return(req,res,next)=>{
        let requestData={
            ...req.body,
            ...req.query,
            //...req.headers
            ...req.params
        }
        if(req.file || req.files) requestData.file= req.file || req.files
        if(req.headers?.authorization && isHeadersSent) requestData = {authorization : req.headers.authorization}
        const validationResult = schema.validate(requestData, { abortEarly: false })
        if(validationResult?.error){
            return res.status(400).json({message:"validation Error", Errors:validationResult.error.details})
        }
        next()
    }
}

module.exports = {generalFields, validation};