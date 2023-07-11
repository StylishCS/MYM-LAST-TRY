var express = require('express');
var router = express.Router();
const upload = require('../middleware/uploadImages');
const {createJob, getAllJobs, getOneJob} = require('../controllers/jobsController')
// import { asyncHandler } from "../../utils/errorHandling.js";
// import { validation } from "../../middleware/validation.js";
// import * as validators from './job.validation.js'


router.post('/createJob',createJob)
router.get('/',getAllJobs)
router.get('/:jobId',getOneJob)




module.exports = router 