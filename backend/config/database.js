const mongoose = require("mongoose");

const connectDatabase = (MONGO_URI) => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};

module.exports = connectDatabase;
