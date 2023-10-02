const mongoose = require('mongoose');
const client = require('../config/createConnection');

const ContactMeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = client.model('contactme', ContactMeSchema);
