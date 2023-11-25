const mongoose = require('mongoose');
const client = require('../config/createConnection');

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const newsModel = client.model('news', newsSchema);

module.exports = newsModel;
