const express = require('express');
const router = express.Router();

const BlogModel = require('../model/blog.model');
const { ObjectId } = require('bson');

router.get('/', async (req, res) => {
  try {
    let blog = await BlogModel.find({});
    return res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

router.post('/new', async (req, res) => {
  try {
    let blog = await BlogModel.create(req.body);
    return res.status(201).json({ blog });
  } catch (error) {
    console.log(error);
    if (error._message === 'blog validation failed') {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
});

router.patch('/update/:id', async (req, res) => {
  try {
    let updateBlog = await BlogModel.findOneAndUpdate(
      new ObjectId(req.params.id),
      req.body
    );
    if (!updateBlog) {
      return res.status(404).json({ message: 'Not Found' });
    }
    return res.status(202).json({ updateBlog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
