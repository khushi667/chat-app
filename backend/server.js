import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON

app.use("/api/auth", authRoutes); // Routes mounted at /api/auth

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is Running on port ${PORT}`);
});
