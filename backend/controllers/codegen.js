// backend/controllers/codeGenController.js
const { generateCodeFromLLM } = require("../services/llmService");

exports.getGeneratedCode = async (req, res) => {
  const { question } = req.body;
  try {
    const code = await generateCodeFromLLM(question, "code");
    res.json({ code });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate code" });
  }
};