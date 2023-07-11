var express = require('express');
var router = express.Router();
const upload = require('../middleware/uploadImages');
const {applyForInternship} = require('../controllers/userController')
// import { asyncHandler } from "../../utils/errorHandling.js";
// import { validation } from "../../middleware/validation.js";
// import * as validators from './auth.validation.js'

router.post('/:internshipId',upload.single('file') ,applyForInternship)



module.exports = router 