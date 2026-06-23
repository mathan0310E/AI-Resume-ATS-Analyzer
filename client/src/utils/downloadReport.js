import jsPDF from "jspdf";

export const downloadReport = (result) => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("ATS Analysis Report", 20, 20);

  doc.setFontSize(12);
  doc.text(`ATS Score: ${result.score || 0}%`, 20, 40);

  doc.text(
    `Matched Skills: ${(result.matchedSkills || []).join(", ")}`,
    20,
    60
  );

  doc.text(
    `Missing Skills: ${(result.missingSkills || []).join(", ")}`,
    20,
    80
  );

  doc.save("ATS_Report.pdf");
};