// backend/controllers/testGenController.js
const { generateCodeFromLLM } = require("../services/llmService");

exports.getGeneratedTests = async (req, res) => {
  const { question } = req.body;
  try {
    const tests = await generateCodeFromLLM(question, "tests");
    res.json({ tests });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate tests" });
  }
};