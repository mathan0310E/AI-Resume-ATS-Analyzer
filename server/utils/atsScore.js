export const calculateATSScore = (
  resumeKeywords,
  jobKeywords
) => {

  const uniqueJD =
    [...new Set(jobKeywords)];

  const matched =
    uniqueJD.filter(skill =>
      resumeKeywords.includes(skill)
    );

  return {
    score: Math.round(
      (matched.length /
       uniqueJD.length) * 100
    ),
    matchedSkills: matched,
    missingSkills:
      uniqueJD.filter(
        skill =>
        !resumeKeywords.includes(skill)
      )
  };
};