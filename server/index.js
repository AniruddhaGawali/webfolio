const express = require('express');
var cors = require('cors');
// const connect = require('./config/db');

const PORT = process.env.PORT || 5500;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/intro', require('./controller/intro.controller'));
app.use('/api/project', require('./controller/project.controller'));
app.use('/api/skills', require('./controller/skills.controller'));
app.use('/api/timeline', require('./controller/timeline.controller'));
app.use('/api/contactme', require('./controller/contactme.controller'));
app.use('/api/blog', require('./controller/blog.controller'));
app.use('/api/news', require('./controller/news.controller'));

app.listen(PORT, async () => {
  // await connect();
  console.log(`Listening on the port ${PORT}`);
});

// module.exports = app;
