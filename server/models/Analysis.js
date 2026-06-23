import mongoose from "mongoose";

const analysisSchema =
new mongoose.Schema({

  atsScore: Number,

  jobDescription: String,

  aiAnalysis: String

},
{
  timestamps: true
});

export default mongoose.model(
  "Analysis",
  analysisSchema
);