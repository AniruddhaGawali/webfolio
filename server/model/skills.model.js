const mongoose = require("mongoose");

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

const SkillsModel = mongoose.model("skill", skillsSchema);
module.exports = SkillsModel;
