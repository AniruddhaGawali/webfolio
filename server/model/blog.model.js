const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image_url: { type: String, required: true },
    blog: { type: String, required: true },
  },
  { timestamps: true }
);

const BlogModel = mongoose.model("blog", BlogSchema);
module.exports = BlogModel;
