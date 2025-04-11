const questions = require("../data/leetcode_questions.json");

exports.getRandomQuestion = (req, res) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const question = questions[randomIndex];
  res.json(question);
};