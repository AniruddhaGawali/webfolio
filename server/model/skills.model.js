const mongoose = require('mongoose');
const client = require('../config/createConnection');

const skillsSchema = new mongoose.Schema({
  skill: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
});

const SkillsModel = client.model('skill', skillsSchema);
module.exports = SkillsModel;
