const express = require("express");
const router = express.Router();

const ContactMe = require("../model/contactme.model");

router.get("/", async (req, res) => {
  let contactme = await ContactMe.find({});
  return res.status(200).json(contactme);
});

router.post("/new", async (req, res) => {
  try {
    let contactme = await ContactMe.create(req.body);
    return res.status(201).json({ contactme });
  } catch (error) {
    console.log(error);
    if (error._message === "contactme validation failed") {
      return res.status(400).json({ error: error.message });
    }
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
