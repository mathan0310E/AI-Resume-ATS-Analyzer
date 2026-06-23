import Analysis from "../models/Analysis.js";

export const getDashboardStats =
async (req, res) => {

  try {

    const analyses =
      await Analysis.find();

    const totalAnalyses =
      analyses.length;

    const bestScore =
      analyses.length > 0
        ? Math.max(
            ...analyses.map(
              a => a.atsScore
            )
          )
        : 0;

    const averageScore =
      analyses.length > 0
        ? Math.round(
            analyses.reduce(
              (sum, item) =>
                sum + item.atsScore,
              0
            ) / analyses.length
          )
        : 0;

    res.json({
      totalAnalyses,
      bestScore,
      averageScore
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

};