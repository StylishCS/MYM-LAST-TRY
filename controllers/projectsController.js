const Project = require('../models/latest_picksSchema');


async function getAll(req, res, next) {
    const project = await Project.find();
    res.send(project);
}
async function getMarketing(req, res, next) {
    const projects = await Project
    .find({ collectionName: "marketing"});
    res.send(projects);
}
async function getBusiness(req, res, next) {
    const projects = await Project
    .find({ collectionName: "business"});
    res.send(projects);
}
async function getDevelopment(req, res, next) {
    const projects = await Project
    .find({ collectionName: "development"});
    res.send(projects);
}
async function getArt(req, res, next) {
    const projects = await Project
    .find({ collectionName: "art"});
    res.send(projects);
}

async function postProject(req, res, next) {
    if(!req.file){
        return res.status(404).send('image not found');
    }
    let project = new Project({
        collectionName: req.body.collectionName,
        image: req.file.image
        ,imageUrl: "http://" + req.hostname + ":3000/" + req.file.filename
    })
    project = await project.save();
    res.send(project);
}

async function updateProject(req, res, next) {
    const project = await Project.findByIdAndUpdate(req.params.id, {
        image: req.file.image,
        collectionName: req.body.collectionName
    },
    {
        new: true
    })
    if(!project) return res.status(404).send('The given ID is not found...');
    res.send(project);
}

async function deleteProject(req, res, next) {
    const project = await Project.findByIdAndRemove(req.params.id);
    if(!project) return res.status(404).send('The ID is not found...');
    res.send(project);
}



module.exports = {getAll, getMarketing, getBusiness, getDevelopment, getArt, postProject, updateProject, deleteProject};