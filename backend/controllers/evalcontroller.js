const { runTestsOnCode } = require("../services/testRunnerService");

exports.evaluateSolution = async (req, res) => {
  const { code, tests } = req.body;
  try {
    const result = await runTestsOnCode(code, tests);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: "Failed to evaluate solution" });
  }
};