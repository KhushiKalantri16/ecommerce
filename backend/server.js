require("dotenv").config();
console.log("MONGO_URI in server.js:", process.env.MONGO_URI); // Debugging line

const app = require("./app");
const connectDatabase = require("./config/database"); // Ensure this is correct

// Directly define the MongoDB URI here
const MONGO_URI = 'mongodb+srv://kalantrikhushi16:Khushi16@cluster0.njm24.mongodb.net/test?retryWrites=true&w=majority'; // Replace with your actual MongoDB URI

// Update the connectDatabase function to accept the Mongo URI if needed
connectDatabase(MONGO_URI); // Pass the Mongo URI to the function

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
