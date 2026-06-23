import dotenv from "dotenv";
dotenv.config();

export const GROQ_API_KEY =
  process.env.GROQ_API_KEY;

console.log(
  "GROQ KEY:",
  GROQ_API_KEY
);