require("dotenv").config();
console.log("MONGO_URI in server.js:", process.env.MONGO_URI); // Debugging line

const app = require("./app");
const connectDatabase = require("./config/database");
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;  // This is how you access the environment variable

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });


// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
=======
>>>>>>> Stashed changes


// Debug environment variable loading
console.log("MongoDB URI:", process.env.MONGODB_URI);
console.log("Port:", process.env.PORT);
console.log("Cloudinary Config:", {
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

>>>>>>> a3aba55bda39df86008e10c4f30762803fa72869
// Connecting to database
connectDatabase();

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

// Handling Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
node 