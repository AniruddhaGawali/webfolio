const mongoose = require('mongoose');

const TimeLIneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date },
  logo: { type: String },
  rank: { type: Number, default: 0, required: true },
});

module.exports = mongoose.model('timeline', TimeLIneSchema);
