import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import Resume from "../models/Resume.js";
import pdfParse from "pdf-parse-new";

const router = express.Router();

router.post(
  "/upload",
  upload.single("resume"),
  async (req, res) => {
    try {

      if (!req.file) {
        return res.status(400).json({
          error: "No file uploaded"
        });
      }

      const pdfData = await pdfParse(
        req.file.buffer
      );

      console.log(
        "PDF TEXT:",
        pdfData.text
      );

      const resume =
        await Resume.create({
          fileName:
            req.file.originalname,
          resumeText:
            pdfData.text
        });

      res.json({
        message:
          "Resume Uploaded Successfully",
        resumeId:
          resume._id
      });

    } catch (err) {

      console.log(
        "UPLOAD ERROR:",
        err
      );

      res.status(500).json({
        error: err.message
      });

    }
  }
);

export default router;