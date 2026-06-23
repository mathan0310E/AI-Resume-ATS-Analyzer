import express from "express";

import { analyzeResume }
from "../controllers/atsController.js";

import { getHistory }
from "../controllers/historyController.js";

const router = express.Router();

router.post(
  "/analyze",
  analyzeResume
);

router.get(
  "/analysis/history",
  getHistory
);

export default router;