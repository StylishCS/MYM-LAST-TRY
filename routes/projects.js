var express = require('express');
var router = express.Router();
const { getHome } = require('../controllers/homeController.js');
const { getAll, getMarketing, getBusiness, getDevelopment, getArt, postProject, updateProject, deleteProject } = require('../controllers/projectsController.js');

const upload = require('../middleware/uploadImages');

/* GET home page. */
router.get('/', getHome);

/* GET latest picks */
router.get('/all', getAll);
router.get('/markting', getMarketing);
router.get('/business', getBusiness);
router.get('/development', getDevelopment);
router.get('/art', getArt);

/* CREATE latest picks */
router.post('/upload_project', upload.single('image'), postProject);

/* UPDATE latest picks */
router.put('/projects/:id', updateProject); //by given object ID

/* DELETE latest picks */
router.delete('/projects/:id', deleteProject);//by given object ID


module.exports = router;