import express from "express";

import {
  getRecentAnalyses
}
from "../controllers/recentAnalysisController.js";

const router =
  express.Router();

router.get(
  "/",
  getRecentAnalyses
);

export default router;