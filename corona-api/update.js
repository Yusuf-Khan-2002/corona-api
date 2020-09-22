const axios = require("axios");
const { Country } = require("./models/country");

require("./startup/db")();

async function update() {
  console.log("Fetching new data");
  const response = await axios.get(
    "https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.json"
  );

  console.log(" ✔  Fetched new Data");

  const testData = Object.values(response.data);

  console.log("Adding new data");

  for (const country of testData) {
    await Country.findOneAndReplace({ location: country.location }, country);
  }

  console.log(" ✔  Addded new data");
  console.log("Updated database successfully!");

  process.exit();
}

update();
