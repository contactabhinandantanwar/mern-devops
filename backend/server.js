import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "backend",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from MERN backend",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
