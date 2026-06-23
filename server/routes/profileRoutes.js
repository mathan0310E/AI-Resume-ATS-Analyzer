import express from "express";

const router = express.Router();

router.get(
  "/",
  async (req, res) => {

    res.json({

      name: "Mathan Kumar",

      email:
        "mathankumar3041@gmail.com",

      totalAnalyses: 12,

      bestScore: 85

    });

  }
);

export default router;