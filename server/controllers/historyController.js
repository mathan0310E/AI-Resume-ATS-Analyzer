import Analysis from "../models/Analysis.js";

export const getHistory = async (req, res) => {

  try {

    const history =
      await Analysis.find()
      .sort({ createdAt: -1 });

    res.json(history);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message
    });

  }

};