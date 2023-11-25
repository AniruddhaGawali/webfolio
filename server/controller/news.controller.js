const express = require('express');
const router = express.Router();

const apikey = process.env.GNEWS_API_KEY;

const newsModel = require('../model/news.model');

function isToday(givenDate) {
  const currentDate = new Date();
  return (
    givenDate.getDate() === currentDate.getDate() &&
    givenDate.getMonth() === currentDate.getMonth() &&
    givenDate.getFullYear() === currentDate.getFullYear()
  );
}

router.get('/', async (req, res) => {
  try {
    const url =
      'https://gnews.io/api/v4/top-headlines?q=github OR coding OR (ai AND openai) OR crypto&category=technology&lang=en&max=10&apikey=' +
      apikey;

    var news = await newsModel.find();

    if (news.length === 0 || !isToday(news[0].createdAt)) {
      const response = await fetch(url);
      const data = await response.json();

      await newsModel.deleteMany({});

      await newsModel.insertMany(data.articles);
      news = await newsModel.find();
    }

    res.json(news);
  } catch (err) {
    console.log(err);
    res.json({ message: err });
  }
});

module.exports = router;
