var express = require('express');
var router = express.Router();
const upload = require('../middleware/uploadImages');
const {createInternship, getAllInterns} = require('../controllers/internController');
// import { asyncHandler } from "../../utils/errorHandling.js";
// import { validation } from "../../middleware/validation.js";
// import * as validators from './internship.validation.js'


router.post('/addInternship', createInternship)
router.get('/',getAllInterns)



module.exports = router 