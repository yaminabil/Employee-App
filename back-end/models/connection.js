require("dotenv").config();
const mongoose = require("mongoose");

// connection data base

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// establish conection

mongoose.connect(MONGO_URI, CONFIG);

// open events

mongoose.connection
  .on("open", () => console.log("you're inside the bulding "))
  .on("close", () => console.log("you're outside the building"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
