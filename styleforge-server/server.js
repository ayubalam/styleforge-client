import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();


// Middleware
app.use(express.json());

app.use(cors());


// Test Route
app.get("/", (req, res) => {

  res.json({
    message: "STYLEFORGE API Running",
  });
});


// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});