import OpenAI from "openai";

export const analyzeWithAI = async (
  resumeSkills,
  missingSkills
) => {

  try {

    console.log(
      "GROQ KEY:",
      process.env.GROQ_API_KEY
    );

    const client = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1"
    });

    const completion =
      await client.chat.completions.create({

        model: "llama-3.1-8b-instant",

        messages: [
          {
            role: "user",
            content: `
Resume Skills:
${resumeSkills.join(", ")}

Missing Skills:
${missingSkills.join(", ")}

Give exactly 5 resume improvement suggestions.

Return ONLY a JSON array.
`
          }
        ],

        temperature: 0.2,
        max_tokens: 200

      });

    const text =
      completion.choices[0]
      .message.content;

    console.log(
      "GROQ RESPONSE:",
      text
    );

    try {

      return JSON.parse(text);

    } catch {

      return [
        "Add relevant projects",
        "Add certifications",
        "Improve resume formatting",
        "Add internships",
        "Add missing skills"
      ];

    }

  } catch (err) {

    console.log(
      "GROQ ERROR:",
      err.message
    );

    return [
      "Add relevant projects",
      "Add certifications",
      "Improve resume formatting",
      "Add internships",
      "Add missing skills"
    ];

  }

};