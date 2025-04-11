const axios = require("axios");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

exports.generateCodeFromLLM = async (question, mode) => {
  const prompt = `You are given this coding problem:\n${question.description}\nWrite ${mode === "code" ? "a working JavaScript solution" : "a set of Mocha-style unit tests"} for it.`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an expert coding assistant." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    },
    {
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return response.data.choices[0].message.content;
};