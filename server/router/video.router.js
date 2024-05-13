const express = require('express');
const createVideo = require("../controllers/video.controllers")
const router = express.Router(); 

router.post("/", createVideo);

module.exports = router;