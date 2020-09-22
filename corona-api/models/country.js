const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    continent: {
      type: String,
    },
    location: {
      type: String,
    },
    population: {
      type: Number,
    },
    population_density: {
      type: Number,
    },
    median_age: {
      type: Number,
    },
    aged_65_older: {
      type: Number,
    },
    aged_70_older: {
      type: Number,
    },
    gdp_per_capita: {
      type: Number,
    },
    cardiovasc_death_rate: {
      type: Number,
    },
    diabetes_prevalence: {
      type: Number,
    },
    handwashing_facilities: {
      type: Number,
    },
    hospital_beds_per_thousand: {
      type: Number,
    },
    life_expectancy: {
      type: Number,
    },
    data: {
      type: [Object],
    },
  },
  { retainKeyOrder: true }
);

const Country = mongoose.model("Country", countrySchema);

exports.Country = Country;
