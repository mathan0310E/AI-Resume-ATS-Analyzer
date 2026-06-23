export const extractKeywords = (text) => {
  return text
    .toLowerCase()
    .match(/\b[a-zA-Z+#.]{2,}\b/g) || [];
};