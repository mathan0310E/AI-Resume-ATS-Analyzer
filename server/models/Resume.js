import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({

  fileName: {
    type: String,
    required: true
  },

  resumeText: {
    type: String,
    required: true
  },

  uploadedAt: {
    type: Date,
    default: Date.now
  }

});

const Resume = mongoose.model(
  "Resume",
  resumeSchema
);

export default Resume;