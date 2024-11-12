const mongoose = require("mongoose");

const connectDatabase = () => {
  const MONGO_URI = process.env.MONGO_URI; // Ensure you're using the environment variable correctly

  if (!MONGO_URI) {
    console.error("MongoDB URI is not defined in .env file.");
    process.exit(1); // Exit if MONGO_URI is not defined
  }

  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1); // Exit if database connection fails
  });
};

module.exports = connectDatabase;
