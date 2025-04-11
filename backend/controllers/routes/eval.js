const express = require("express");
const router = express.Router();
const { evaluateSolution } = require("../controllers/evalController");

router.post("/run", evaluateSolution);

module.exports = router;