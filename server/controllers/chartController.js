import Analysis from "../models/Analysis.js";

export const getChartData = async (req, res) => {

  try {

    const analyses =
      await Analysis.find()
      .sort({ createdAt: 1 });

    const chartData =
      analyses.map(item => ({

        date:
          new Date(
            item.createdAt
          ).toLocaleDateString(),

        score:
          item.atsScore

      }));

    res.json(chartData);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

};