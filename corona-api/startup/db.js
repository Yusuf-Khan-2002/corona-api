const mongoose = require("mongoose");
const config = require("config");

module.exports = async function () {
  mongoose.set("useUnifiedTopology", true);
  const db = config.get("db");
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    return console.log(`Connected to database`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
