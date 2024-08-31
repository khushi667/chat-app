import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use("/api/auth",authRoutes);

// app.get("/", (req,res) => {
//     res.send("hello world!!");
// })

app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server is Running on port ${PORT}`)
});
