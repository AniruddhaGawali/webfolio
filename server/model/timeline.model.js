const mongoose = require('mongoose');
const client = require('../config/createConnection');

const TimeLIneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date },
  logo: { type: String },
  rank: { type: Number, default: 0, required: true },
});

module.exports = client.model('timeline', TimeLIneSchema);
