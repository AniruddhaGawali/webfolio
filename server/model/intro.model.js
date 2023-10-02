const mongoose = require('mongoose');
const client = require('../config/createConnection');

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

const introModel = client.model('intro', introSchema);

module.exports = introModel;
