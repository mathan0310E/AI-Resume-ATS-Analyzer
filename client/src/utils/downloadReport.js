import jsPDF from "jspdf";

export const downloadReport = (result) => {
  const doc = new jsPDF();

  doc.text("ATS Analysis Report", 20, 20);
  doc.text(`ATS Score: ${result?.score || 0}%`, 20, 40);

  doc.save("ATS_Report.pdf");
};
