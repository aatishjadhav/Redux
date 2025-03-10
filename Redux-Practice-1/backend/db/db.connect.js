const mongoose = require("mongoose");
require("dotenv").config();

const MongoUri = process.env.MONGODB;

const initializeDb = async () => {
  await mongoose
    .connect(MongoUri)
    .then(() => {
      console.log("Connected to MongoDB successfully.");
    })
    .catch((error) => {
      console.log("Error whhile connecting to database.");
    });
};

module.exports = { initializeDb };
