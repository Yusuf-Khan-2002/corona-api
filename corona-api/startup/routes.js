const express = require("express");
const world = require("../routes/world");
const countries = require("../routes/countries");
const continents = require("../routes/continents");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/world", world);
  app.use("/api/countries", countries);
  app.use("/api/continents", continents);
};
