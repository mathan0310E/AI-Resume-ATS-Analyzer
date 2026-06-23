import jsPDF from "jspdf";

export const downloadReport = (result) => {

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(
    "AI Resume ATS Report",
    20,
    20
  );

  doc.setFontSize(14);

  doc.text(
    `ATS Score: ${result.score}%`,
    20,
    40
  );

  doc.text(
    "Matched Skills:",
    20,
    60
  );

  let y = 70;

  result.matchedSkills?.forEach(
    (skill) => {

      doc.text(
        `• ${skill}`,
        25,
        y
      );

      y += 10;

    }
  );

  y += 10;

  doc.text(
    "Missing Skills:",
    20,
    y
  );

  y += 10;

  result.missingSkills?.forEach(
    (skill) => {

      doc.text(
        `• ${skill}`,
        25,
        y
      );

      y += 10;

    }
  );

  y += 10;

  doc.text(
    "Suggestions:",
    20,
    y
  );

  y += 10;

  result.suggestions?.forEach(
    (item) => {

      const text =
        typeof item === "string"
          ? item
          : item?.suggestion;

      doc.text(
        `• ${text}`,
        25,
        y
      );

      y += 10;

    }
  );

  doc.save(
    "ATS_Report.pdf"
  );

};