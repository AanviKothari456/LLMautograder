const express = require("express");
const router = express.Router();
const { getGeneratedCode } = require("../controllers/codeGenController");

router.post("/generate", getGeneratedCode);

module.exports = router;
