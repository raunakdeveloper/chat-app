import express from "express";
import dotenv from "dotenv";

dotenv.config();

import authRoutes from "./routes/auth-route.js";
import { connectDB } from "./lib/db.js";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Auth routes
app.use("/api/auth", authRoutes);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server and connect to the database
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
