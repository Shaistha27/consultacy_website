const express = require('express');
const createVideo = require("../controllers/video.controllers")
const { getAllVideos } = require("../controllers/fetchVideo.controllers");
const router = express.Router(); 

router.post("/", createVideo);
router.get("/", getAllVideos);

module.exports = router;