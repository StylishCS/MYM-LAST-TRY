var express = require('express');
var router = express.Router();
const { getHome } = require('../controllers/homeController.js');
const {getAll, getOwner, getUI, getFrontend, getBackend, getFlutter, postEmployee, updateEmployee, deleteEmployee} = require('../controllers/employeeController.js');

const upload = require('../middleware/uploadImages');

/* GET home page. */
router.get('/', getHome);

/* GET latest picks */
router.get('/all', getAll);
router.get('/owners', getOwner);
router.get('/UI', getUI);
router.get('/Frontend', getFrontend);
router.get('/Backend', getBackend);
router.get('/Flutter', getFlutter);

/* CREATE Employee */
router.post('/upload_employee', upload.single('image'), postEmployee);

/* UPDATE Employee */
router.put('/update_employee/:id', updateEmployee); //by given object ID

/* DELETE Employee */
router.delete('/delete_employee/:id', deleteEmployee);//by given object ID


module.exports = router;