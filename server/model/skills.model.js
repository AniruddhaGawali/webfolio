const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const client = mongoose.createConnection(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
