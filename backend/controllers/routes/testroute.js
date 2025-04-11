const express = require("express");
const router = express.Router();
const { getGeneratedTests } = require("../controllers/testGenController");

router.post("/generate", getGeneratedTests);

module.exports = router;