const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
  collectionName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  }
});

const Project = mongoose.model('Project', projectSchema)

module.exports = Project;