const mongoose = require("mongoose");
const scehma = mongoose.scehma;



const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  age: {
    type: Number,
    required: true,
    min : 18,
  },
  position: {
    type: String,
    required: true,
    minlength: 3,
  },
  salary: {
    type: Number,
    required: true
  },
  linkedin: {
    type: String,
    required: true,
    match: /^https?:\/\/[^\s/$.?#].[^\s]*$/i
  },
  github: {
    type: String,
    required: true,
    match: /^https?:\/\/[^\s/$.?#].[^\s]*$/i
  },
    image:{
        data: Buffer,
        contentType: String
      }
    });


const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;