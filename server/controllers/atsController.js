import Analysis from "../models/Analysis.js";
import Resume from "../models/Resume.js";
import { analyzeWithAI } from "../utils/aiAnalyzer.js";

const extractSkills = (text) => {

const skills = [
"python",
"java",
"javascript",
"react",
"nodejs",
"node",
"express",
"mongodb",
"mysql",
"sql",
"docker",
"git",
"github",
"machine learning",
"data science",
"artificial intelligence",
"html",
"css",
"bootstrap",
"aws"
];

return skills.filter(skill =>
text.toLowerCase().includes(
skill.toLowerCase()
)
);

};

export const analyzeResume =
async (req, res) => {

try {

const latestResume =
  await Resume.findOne()
  .sort({ _id: -1 });

if (!latestResume) {

  return res.status(400).json({
    error:
      "Please upload a resume first"
  });

}

const resumeText =
  latestResume.resumeText;

const jobDescription =
  req.body.jobDescription;

console.log(
  "RESUME:",
  resumeText
);

console.log(
  "JOB:",
  jobDescription
);

const resumeSkills =
  extractSkills(resumeText);

const jobSkills =
  extractSkills(jobDescription);

const matchedSkills =
  jobSkills.filter(skill =>
    resumeSkills.includes(skill)
  );

const missingSkills =
  jobSkills.filter(skill =>
    !resumeSkills.includes(skill)
  );

const score =
  jobSkills.length > 0
    ? Math.round(
        (
          matchedSkills.length /
          jobSkills.length
        ) * 100
      )
    : 0;

const aiAnalysis =
  await analyzeWithAI(
    resumeSkills,
    missingSkills
  );

const atsResult = {

  score,

  matchedSkills,

  missingSkills,

  suggestions:
    aiAnalysis

};

await Analysis.create({

  atsScore: score,

  jobDescription,

  aiAnalysis:
    JSON.stringify(
      atsResult
    )

});

res.json({
  atsResult
});


} catch (err) {


console.log(
  "ATS ERROR:",
  err
);

res.status(500).json({
  error:
    err.message
});


}

};
