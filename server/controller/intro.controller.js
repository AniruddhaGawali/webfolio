const express = require('express');
const router = express.Router();

const IntroModel = require('../model/intro.model');
const { ObjectId } = require('bson');

router.get('/', async (req, res) => {
  const intro = await IntroModel.find({});
  return res.status(200).json(intro[0]);
});

router.post('/new', async (req, res) => {
  try {
    let intro = await IntroModel.create(req.body);
    return res.status(201).json({ intro });
  } catch (error) {
    console.log(error);
    if (error._message === 'intro validation failed') {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
});

router.patch('/update/:id', async (req, res) => {
  try {
    console.log(req.body);
    let updateIntro = await IntroModel.findOneAndUpdate(
      new ObjectId(req.params.id),
      req.body
    );
    if (!updateIntro) {
      return res.status(404).json({ message: 'Not Found' });
    }
    return res.status(202).json({ updateIntro, message: 'Updated' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
