const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  next();
});

app.use("/api/intro", require("./controller/intro.controller"));
app.use("/api/project", require("./controller/project.controller"));
app.use("/api/skills", require("./controller/skills.controller"));
app.use("/api/timeline", require("./controller/timeline.controller"));
app.use("/api/contactme", require("./controller/contactme.controller"));
app.use("/api/blog", require("./controller/blog.controller"));

module.exports = app;
