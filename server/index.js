import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/posts.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// const URI =
// "mongodb+srv://admin:AgtRolOZZkTb7hIT@cluster0.yozx7ee.mongodb.net/?retryWrites=true&w=majority";

const URI = process.env.DATABASE_URL;
app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

// admin
// o68htZXUyu7ir1Qe

app.use("/posts", posts);

// Kết nối đến mongodb
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });

// http://localhost:5000
