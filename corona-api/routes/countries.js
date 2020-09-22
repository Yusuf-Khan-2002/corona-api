const { Country } = require("../models/country");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const countryName = await Country.find({}).select({ data: { $slice: -1 } });
    res.send(countryName);
  } catch (error) {
    console.log(error);
    res.status(404).send("Countries not found");
  }
});

router.get("/:country", async (req, res) => {
  try {
    const countryName = req.params.country.split("").join("\\s*");
    const countryData = await Country.find({
      location: { $regex: new RegExp("^" + countryName + "$", "i") },
    });
    res.send(countryData);
  } catch (error) {
    console.log(error);
    res.status(404).send("Country not found");
  }
});

module.exports = router;
