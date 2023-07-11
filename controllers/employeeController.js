const Employee = require('../models/employees');


async function getAll(req, res, next) {
    const employee = await Employee.find();
    res.send(employee);
}
async function getOwner(req, res, next) {
    const employees = await Employee
    .find({ rule: "owner"});
    res.send(employees);
}
async function getUI(req, res, next) {
    const employees = await Employee
    .find({ rule: "ui"});
    res.send(employees);
}
async function getFrontend(req, res, next) {
    const employees = await Employee
    .find({ rule: "frontend"});
    res.send(employees);
}
async function getBackend(req, res, next) {
    const employees = await Employee
    .find({ rule: "backend"});
    res.send(employees);
}

async function getFlutter(req, res, next) {
    const employees = await Employee
    .find({ rule: "flutter"});
    res.send(employees);
}

async function postEmployee(req, res, next) {
    if(!req.file){
        return res.status(404).send('image not found');
    }
    let employees = new Employee({
        name: req.body.name,
        position: req.body.position,
        rule: req.body.rule,
        linkedin: req.body.linkedin,
        github: req.body.github,
        behance: req.body.behance,
        image: req.file.image,
        imageUrl: "http://" + req.hostname + ":3000/" + req.file.filename
    })
    employees = await employees.save();
    res.send(employees);
}

async function updateEmployee(req, res, next) {
    if(!req.file){
        let employees = await Employee.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            position: req.body.position,
            rule: req.body.rule,
            linkedin: req.body.linkedin,
            github: req.body.github,
            behance: req.body.behance,
            // image: req.file.image,
            // imageUrl: "http://" + req.hostname + ":3000/" + req.file.filename
        },
        {
            new: true
        })
        if(!employees) return res.status(404).send('The given ID is not found...');
        employees = await employees.save();
        res.send(employees);    
    }
    else{
        const employees = await Employee.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            position: req.body.position,
            rule: req.body.rule,
            linkedin: req.body.linkedin,
            github: req.body.github,
            behance: req.body.behance,
            image: req.file.image,
            imageUrl: "http://" + req.hostname + ":3000/" + req.file.filename
        },
        {
            new: true
        })
        if(!employees) return res.status(404).send('The given ID is not found...');
        res.send(employees);   
    }
}

async function deleteEmployee(req, res, next) {
    const employees = await Employee.findByIdAndRemove(req.params.id);
    if(!employees) return res.status(404).send('The ID is not found...');
    res.send(employees);
}



module.exports = {getAll, getOwner, getUI, getFrontend, getBackend, getFlutter, postEmployee, updateEmployee, deleteEmployee};