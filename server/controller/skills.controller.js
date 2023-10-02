const express = require('express');
const router = express.Router();

const SkillModel = require('../model/skills.model');
const { ObjectId } = require('bson');

router.get('/', async (req, res) => {
  try {
    let skills = await SkillModel.find({});
    return res.status(200).json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/new', async (req, res) => {
  try {
    let skills = await SkillModel.create(req.body);
    return res.status(201).json({ skills });
  } catch (error) {
    console.log(error);
    if (error._message === 'skills validation failed') {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
});

router.patch('/update/:id', async (req, res) => {
  try {
    let updateSkill = await SkillModel.findOneAndUpdate(
      new ObjectId(req.params.id),
      req.body
    );
    if (!updateSkill) {
      return res.status(404).json({ message: 'Not Found' });
    }
    return res.status(202).json({ updateSkill });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    let deleteSkill = await SkillModel.findOneAndDelete(
      new ObjectId(req.params.id)
    );
    if (!deleteSkill) {
      return res.status(404).json({ message: 'Not Found' });
    }
    return res.status(202).json({ deleteSkill });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
