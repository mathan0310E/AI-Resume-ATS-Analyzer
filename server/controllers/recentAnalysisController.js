import Analysis from "../models/Analysis.js";

export const getRecentAnalyses = async (req, res) => {

  try {

    const analyses =
      await Analysis.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.json(analyses);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

};