import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();  


app.use(express.json()); 
app.use(cookieParser);

app.use("/api/auth", authRoutes); 
app.use("/api/messages", messageRoutes); 

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is Running on port ${PORT}`);
});
