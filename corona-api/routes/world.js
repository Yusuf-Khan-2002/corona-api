const { Country } = require("../models/country");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const country = await Country.find({ location: "World" });
    res.send(country);
  } catch (error) {
    console.log(error);
    res.status(404).send("World data not found");
  }
});

module.exports = router;
