require("dotenv").config();
console.log("MONGO_URI in server.js:", process.env.MONGO_URI); // Debugging line

const app = require("./app");
const connectDatabase = require("./config/database"); // Ensure this is correct

// Connect to MongoDB
connectDatabase(); // This will now correctly call the function defined in database.js

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Handling Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
