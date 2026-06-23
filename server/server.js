import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import atsRoutes from "./routes/atsRoutes.js";
import historyRoutes from "./routes/historyRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import chartRoutes from "./routes/chartRoutes.js";
import recentAnalysisRoutes from "./routes/recentAnalysisRoutes.js";
import profileRoutes
from "./routes/profileRoutes.js";



const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/resume", resumeRoutes);
app.use("/ats", atsRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});
app.use(
  "/dashboard",
  dashboardRoutes
);
app.use(
  "/chart",
  chartRoutes
);
app.use(
  "/recent-analyses",
  recentAnalysisRoutes
);
app.use(
  "/profile",
  profileRoutes
);
console.log(
  "TEST KEY:",
  process.env.GROQ_API_KEY
);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running on Port ${PORT}`
  );
  app.use(
  "/history",
  historyRoutes
);
});