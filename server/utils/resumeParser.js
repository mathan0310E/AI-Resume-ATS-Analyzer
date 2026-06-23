import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

export const parseResume = async (buffer) => {
  const pdf = await pdfjsLib.getDocument({
    data: new Uint8Array(buffer),
  }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);

    const content = await page.getTextContent();

    text += content.items
      .map((item) => item.str)
      .join(" ");
  }

  return text;
};