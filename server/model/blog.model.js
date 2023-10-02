const mongoose = require('mongoose');
const client = require('../config/createConnection');

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    blog: { type: String, required: true },
  },
  { timestamps: true }
);

const BlogModel = client.model('blog', BlogSchema);
module.exports = BlogModel;
