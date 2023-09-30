const express = require('express');
const router = express.Router();

const TimelineModel = require('../model/timeline.model');
const { ObjectId } = require('bson');

router.get('/', async (req, res) => {
  let timeline = await TimelineModel.find({});
  return res.status(200).json(timeline);
});

router.post('/new', async (req, res) => {
  try {
    let timeline = await TimelineModel.create(req.body);
    return res.status(201).json({ timeline });
  } catch (error) {
    console.log(error);
    if (error._message === 'timeline validation failed') {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
});

router.patch('/update/:id', async (req, res) => {
  try {
    let updatetimeline = await TimelineModel.findOneAndUpdate(
      new ObjectId(req.params.id),
      req.body
    );
    if (!updatetimeline) {
      return res.status(404).json({ message: 'Not Found' });
    }
    return res.status(202).json({ updatetimeline });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    let deletetimeline = await TimelineModel.findOneAndDelete(
      new ObjectId(req.params.id)
    );
    if (!deletetimeline) {
      return res.status(404).json({ message: 'Not Found' });
    }
    return res.status(202).json({ deletetimeline });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
