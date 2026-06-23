import { parseResume } from "../utils/resumeParser.js";


export const uploadResume = async (req, res) => {

 const sampleResume = `
 Mathan Kumar
 React
 NodeJS
 MongoDB
 Python
 `;

 res.json({
   success:true,
   resumeText:sampleResume
 });

};