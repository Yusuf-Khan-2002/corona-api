const { Country } = require("../models/country");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/:continent", async (req, res) => {
  try {
    const continentName = req.params.continent.split("").join("\\s*");
    const continentData = await Country.find({
      continent: { $regex: new RegExp("^" + continentName + "$", "i") },
    }).select({ data: { $slice: -1 } });
    res.send(continentData);
  } catch (error) {
    console.log(error);
    res.status(404).send("Continent not found");
  }
});

module.exports = router;
