const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.github.com/users/AniruddhaGawali/repos'
    );
    
    const data = response.data;
   
    let result = data
      .filter((element) => {
        if (element.topics.includes('showcase')) {
          return true; // Exclude elements that meet the condition
        } else {
          return false; // Include elements that do not meet the condition
        }
      })
      .map(
        ({
          id,
          name,
          description,
          html_url: url,
          language,
          stargazers_count: stars,
          forks_count: forks,
          watchers_count: watchers,
          topics,
        }) => {
          return {
            id,
            name,
            description,
            url,
            language,
            stars,
            forks,
            watchers,
            topics,
          };
        }
      );

    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
