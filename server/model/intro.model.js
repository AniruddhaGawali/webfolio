const mongoose = require("mongoose");

const introSchema = new mongoose.Schema({
  intro: {
    type: String,
    required: true,
  },
  social: {
    type: Object,
    required: true,
  },
});

const introModel = mongoose.model("intro", introSchema);

module.exports = introModel;
