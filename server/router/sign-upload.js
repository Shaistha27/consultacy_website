const express = require('express');
const generateSignature = require("../controllers/signUpload")

const router = express.Router();

router.post("/videoSign", generateSignature);

module.exports = router;